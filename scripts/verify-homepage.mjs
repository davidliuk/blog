// Run against a built preview or dev server:
// AGENT_BROWSER_BIN=/path/to/agent-browser node scripts/verify-homepage.mjs http://127.0.0.1:4173
// Uses an isolated browser session; does not change the site or visit external links.
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

const origin = process.argv[2] || 'http://127.0.0.1:4173';
const binary = process.env.AGENT_BROWSER_BIN || 'agent-browser';
const session = `homepage-qa-${process.pid}`;

function browser(...args) {
  const result = spawnSync(binary, ['--session', session, '--json', ...args], {
    encoding: 'utf8',
    timeout: 30000,
    maxBuffer: 2 * 1024 * 1024,
  });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, result.stderr || result.stdout);
  const response = JSON.parse(result.stdout);
  assert.equal(response.success, true, response.error);
  return response.data;
}

function evaluate(expression) {
  return browser('eval', expression).result;
}

function check(condition, message) {
  assert.ok(condition, message);
  console.log(`PASS ${message}`);
}

try {
  const html = await fetch(origin).then((response) => {
    assert.equal(response.status, 200);
    return response.text();
  });
  check(html.includes('Reliable AI agents.') && html.includes('portfolio-intro__role'), 'Introduction is server-rendered');

  browser('open', origin);
  browser('set', 'media', 'light', 'reduced-motion');
  browser('wait', '.portfolio-intro');
  check(evaluate('document.querySelectorAll("h1").length === 1'), 'One primary page heading');
  check(evaluate('!document.querySelector("vite-error-overlay")'), 'No framework error overlay');
  check(evaluate(`Array.from(document.querySelectorAll('a[href^="#"]')).every(a =>
    document.getElementById(decodeURIComponent(a.hash.slice(1))))`), 'Every local anchor resolves');

  for (const width of [320, 390, 768, 1024, 1440]) {
    browser('set', 'viewport', String(width), '1000');
    check(evaluate('document.documentElement.scrollWidth <= innerWidth'), `No horizontal page overflow at ${width}px`);
    check(evaluate(`Array.from(document.querySelectorAll('.portfolio-intro__button')).every(a => {
      const box = a.getBoundingClientRect();
      return box.left >= 0 && box.right <= innerWidth && box.height >= 44;
    })`), `Primary actions remain visible and touch-sized at ${width}px`);
    check(evaluate(`getComputedStyle(document.querySelector('.publications-open-source')).gridTemplateColumns.split(' ').length === ${width > 1099 ? 3 : 1}`), `Open-source grid has the intended columns at ${width}px`);
  }

  browser('click', '.portfolio-intro__button--primary');
  browser('wait', '--fn', 'location.hash === "#publications"');
  check(evaluate(`document.querySelector('#publications').getBoundingClientRect().top >=
    document.querySelector('.home-page-nav').getBoundingClientRect().bottom`), 'Research CTA clears the sticky navigation');

  browser('click', '#paper-graph-of-skills .abs-action');
  check(evaluate(`document.querySelector('#paper-graph-of-skills .abs-action').getAttribute('aria-expanded') === 'true'`), 'Paper abstract expands');
  browser('click', '#paper-graph-of-skills .abs-action');
  check(evaluate(`document.querySelector('#paper-graph-of-skills .abs-action').getAttribute('aria-expanded') === 'false'`), 'Paper abstract collapses');
  browser('click', '#paper-graph-of-skills .copy-button');
  check(evaluate(`document.querySelector('#paper-graph-of-skills .copy-button').textContent.includes('BibTeX copied')`), 'Citation copy reports success');

  browser('click', '.home-page-nav a[href="#updates"]');
  browser('click', '.news-timeline button');
  check(evaluate(`document.querySelector('.news-timeline button').getAttribute('aria-expanded') === 'true'`), 'Older updates expand');

  browser('set', 'media', 'dark', 'reduced-motion');
  check(evaluate(`document.documentElement.dataset.theme === 'dark'`), 'Dark theme follows system preference');
  check(evaluate(`getComputedStyle(document.querySelector('.vp-portfolio-home')).getPropertyValue('--dl-canvas').trim() === '#141c19'`), 'Homepage dark palette is applied');
  check(evaluate(`matchMedia('(prefers-reduced-motion: reduce)').matches`), 'Reduced-motion mode is active');

  browser('set', 'viewport', '390', '844');
  // Exercise keyboard navigation explicitly. A pointer automation driver may
  // auto-scroll the entire document while exposing an offscreen rail item.
  browser('focus', '.home-page-nav a[href="#contact"]');
  browser('press', 'Enter');
  browser('wait', '--fn', 'document.activeElement.id === "contact"');
  check(evaluate(`document.activeElement.id === 'contact'`), 'Section navigation moves keyboard focus');
  browser('wait', '--fn', `document.querySelector('.home-page-nav a[href="#contact"]').getAttribute('aria-current') === 'location'`);
  check(evaluate(`(() => {
    const nav = document.querySelector('.home-page-nav');
    const link = nav.querySelector('a[href="#contact"]');
    const n = nav.getBoundingClientRect();
    const l = link.getBoundingClientRect();
    return l.left >= n.left && l.right <= n.right + 1;
  })()`), 'Active mobile navigation item scrolls into view');
  browser('set', 'viewport', '400', '844');
  browser('focus', '.home-page-nav a[href="#research"]');
  browser('press', 'Enter');
  browser('wait', '--fn', `document.querySelector('.home-page-nav a[href="#research"]').getAttribute('aria-current') === 'location'`);
  check(evaluate(`document.activeElement.id === 'research'`), 'Upward navigation stays correct after resizing with a hidden navbar');

  const pdf = await fetch(`${origin}/resume/david-liu-resume.pdf`);
  check(pdf.ok && pdf.headers.get('content-type')?.includes('pdf'), 'Résumé PDF is available');
  // Consume the response before spawning more synchronous browser commands.
  // Leaving a PDF stream paused can trip Node 22's HTTP parser at shutdown.
  await pdf.arrayBuffer();

  browser('open', `${origin}/ai/`);
  browser('wait', 'h1');
  check(evaluate(`!document.querySelector('.portfolio-intro') && document.querySelector('h1').textContent.length > 0`), 'Knowledge pages retain their own layout');
  check(evaluate(`getComputedStyle(document.querySelector('.theme-container')).getPropertyValue('--dl-canvas').trim() !== '#141c19'`), 'Homepage palette does not leak to knowledge pages');
  const errors = browser('errors');
  check(!errors.errors?.length, 'No browser runtime errors');
} finally {
  browser('close');
}
