---
home: true
portfolio: true
content: portfolio
cover: /og.jpg
head:
  - - link
    - rel: preload
      as: image
      href: /avatar.webp
      fetchpriority: high
sitemap:
  changefreq: weekly
  priority: 1
---

<HomePageNav />

<section class="home-mission" aria-labelledby="home-mission-title">
  <div class="home-mission__copy">
    <p class="home-mission__eyebrow">The research philosophy</p>
    <h2 id="home-mission-title">Built for the hard cases.</h2>
    <p class="home-mission__lede">Most agents look capable when everything goes right. I care about the harder cases: thousands of available skills, long-running tool use, partial failures, and tight context or latency budgets. My work connects <strong>dependency-aware retrieval</strong>, <strong>execution validation</strong>, and <strong>failure recovery</strong>, then turns those ideas into open systems others can inspect, test, and extend.</p>
    <div class="home-mission__signals-group" role="group" aria-labelledby="home-signals-label">
      <span id="home-signals-label" class="sr-only">Research signals</span>
      <dl class="home-mission__signals">
        <div>
          <dt>56.7%</dt>
          <dd>fewer tokens with Graph-of-Skills</dd>
        </div>
        <div>
          <dt>5</dt>
          <dd>papers in 2026, two at EMNLP</dd>
        </div>
        <div>
          <dt>1,100+</dt>
          <dd>stars on Dr. Claw, where I am a core contributor</dd>
        </div>
      </dl>
    </div>
  </div>
  <aside class="home-mission__loop" aria-labelledby="home-loop-label">
    <p id="home-loop-label" class="home-mission__loop-label">My research loop</p>
    <ol>
      <li>
        <span class="home-mission__step">01</span>
        <div><strong>Retrieve</strong><p>Find a small, complete set of capabilities, dependencies included.</p></div>
      </li>
      <li>
        <span class="home-mission__step">02</span>
        <div><strong>Execute</strong><p>Make tool use observable, bounded, and verifiable as work unfolds.</p></div>
      </li>
      <li>
        <span class="home-mission__step">03</span>
        <div><strong>Recover<svg class="home-mission__return" viewBox="0 0 16 16" aria-hidden="true"><path d="M13 8a5 5 0 1 1-1.5-3.6M13 2v3h-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></strong><p>Turn errors and feedback into repairs and reusable experience, then retrieve again.</p></div>
      </li>
    </ol>
  </aside>
</section>

## About

<PortfolioAbout />

## Updates

<PortfolioUpdates />

## Research

<p class="home-section-intro">Three threads, one loop: retrieve the right capabilities, execute them with checks in place, and recover from what goes wrong. Each thread has a paper and a working system behind it.</p>

<div class="home-highlight-grid">
  <section class="home-highlight-card">
    <p class="home-highlight-kicker"><span class="home-index">01</span>Retrieve</p>
    <h3>Load less context without losing the dependencies that make a skill usable.</h3>
    <p><strong>Graph-of-Skills</strong> (EMNLP 2026 Main Conference) makes skill retrieval dependency-aware rather than purely semantic: it builds an executable skill graph offline and, at inference time, retrieves a bounded bundle with its prerequisites included. On SkillsBench its strongest setting improved reward by <strong>25.6%</strong> while cutting total tokens by <strong>56.7%</strong>.</p>
    <a class="home-highlight-card__link" href="#paper-graph-of-skills">Read the paper card</a>
  </section>

  <section class="home-highlight-card">
    <p class="home-highlight-kicker"><span class="home-index">02</span>Execute &amp; recover</p>
    <h3>Give agents structure for acting, checking their work, and repairing failures.</h3>
    <p><strong>COMFYCLAW</strong> (ECCV 2026 Workshop MUCG) combines typed workflow editing, stage-aware tools, rollback, visual verification, and skill evolution to make executable image-generation workflows more reliable.</p>
    <a class="home-highlight-card__link" href="#paper-comfyclaw">Read the paper card</a>
  </section>

  <section class="home-highlight-card">
    <p class="home-highlight-kicker"><span class="home-index">03</span>Build in the open</p>
    <h3>Turn agent research into workspaces that researchers can use every day.</h3>
    <p>As a core contributor to <strong>Dr. Claw</strong> (EMNLP 2026 System Demonstrations), I shipped the Gemini and Codex providers, multi-session and isolated-project workflows, CLI and desktop access, reliability fixes, and cross-platform releases.</p>
    <a class="home-highlight-card__link" href="#paper-dr-claw">Read the paper card</a>
  </section>
</div>

## Publications

<p class="home-section-intro">Ordered by closeness to my current focus, not by date; the first three form the retrieve–execute–recover loop above. Each card carries a one-click BibTeX entry.</p>
<p class="home-publication-legend"><strong>*</strong> Equal contribution (co-first author). <strong>&dagger;</strong> Core contributor, as designated in the cited paper.</p>

<PublicationList class="publications-selected">
  <PublicationCard
    id="paper-graph-of-skills"
    title="Graph-of-Skills: Dependency-Aware Structural Retrieval for Massive Agent Skills"
    :authors="['Dawei Liu†','Zongxia Li†','Hongyang Du','Xiyang Wu','Shihang Gui','Yongbei Kuang','Lichao Sun']"
    image="/publication/gos.webp"
    :imageWidth="800"
    :imageHeight="384"
    venue="EMNLP 2026 Main Conference"
    also="ACM CAIS 2026 Workshop AgentSkills"
    date="Apr 2026"
    abstract="Modern LLM agents increasingly rely on reusable skills, and as they interact with personal applications, web browsers, and other interfaces, skill libraries can scale to thousands of skills. Scaling to larger skill sets introduces two key challenges. First, loading the full skill set saturates the context window, driving up token costs, hallucination, and latency. Second, semantic retrieval surfaces topically relevant skills but misses their prerequisite chain of upstream and downstream skills, creating a prerequisite gap that leaves the retrieved bundle execution-incomplete. In this paper, we present Graph-of-Skills (GoS), an inference-time structural retrieval layer for large skill libraries. GoS constructs an executable skill graph offline from skill packages, then at inference time retrieves a bounded, dependency-aware skill bundle through hybrid semantic-lexical seeding, reverse-aware Personalized PageRank, and context-budgeted hydration. On SkillsBench and ALFWorld, GoS consistently delivers substantial reward improvements and token savings across three model families (Claude Sonnet 4.5, MiniMax M2.7, and GPT-5.2 Codex). On SkillsBench with GPT-5.2 Codex, GoS raises average reward by 7.0 absolute points over full skill loading, a 25.6% relative gain, while cutting total tokens by 56.7%. Ablations confirm this pattern across skill libraries from 200 to 2,000 skills."
    paper="https://arxiv.org/abs/2604.05333"
    github="https://github.com/davidliuk/graph-of-skills"
    bibtex="@inproceedings{liu2026graphofskills,
  title     = {Graph-of-Skills: Dependency-Aware Structural Retrieval for Massive Agent Skills},
  author    = {Liu, Dawei and Li, Zongxia and Du, Hongyang and Wu, Xiyang and Gui, Shihang and Kuang, Yongbei and Sun, Lichao},
  booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing (EMNLP)},
  year      = {2026},
  note      = {arXiv:2604.05333}
}"
  />

  <PublicationCard
    id="paper-comfyclaw"
    title="COMFYCLAW: Self-Evolving Skill Harnesses for Image Generation Workflows"
    :authors="['Zongxia Li*','Dawei Liu*','Fuxiao Liu','Yuhang Zhou','Xiyang Wu','Jingxi Chen','Jing Xie','Xiaomin Wu','Lichao Sun']"
    image="/publication/comfyclaw.webp"
    :imageWidth="800"
    :imageHeight="508"
    venue="ECCV 2026 Workshop MUCG"
    date="Jul 2026"
    paper="https://arxiv.org/abs/2607.01709"
    github="https://github.com/Moms-Organic-Agent-Lab/comfyclaw"
    abstract="Agents are increasingly used to control executable workflows rather than only answer questions. This makes reliability depend on both execution-time scaffolding and the ability to reuse experience from past runs. We study this problem in workflow-based image generation and introduce COMFYCLAW, an agentic harness that controls an unmodified ComfyUI runtime. COMFYCLAW represents workflow construction as typed graph editing, gates tools by construction stage, rolls back invalid edits, and uses a region-level vision-language model (VLM) verifier to turn visual failures into repair suggestions. It also evolves a progressively disclosed skill library, where trajectories, execution errors, and verifier feedback are distilled into reusable Agent Skills after held-out validation. Across four benchmark splits, three agent models, and two image backbones, COMFYCLAW achieves the best average score in all six agent–backbone settings, improving the strongest setting from 61.09 to 76.34 over a verifier-only baseline without skill evolution. Human annotations further show that annotators prefer COMFYCLAW over variants without skill evolution."
    bibtex="@inproceedings{li2026comfyclaw,
  title     = {{COMFYCLAW}: Self-Evolving Skill Harnesses for Image Generation Workflows},
  author    = {Li, Zongxia and Liu, Dawei and Liu, Fuxiao and Zhou, Yuhang and Wu, Xiyang and Chen, Jingxi and Xie, Jing and Wu, Xiaomin and Sun, Lichao},
  booktitle = {ECCV 2026 Workshop MUCG},
  year      = {2026},
  note      = {arXiv:2607.01709}
}"
  />

  <PublicationCard
    id="paper-dr-claw"
    title="Dr. Claw: An AI Scientist Workspace for Vibe Research"
    :authors="['Dingjie Song','Hanrong Zhang','Dawei Liu','Yixin Liu','Zongxia Li','Zhengqing Yuan','Siqi Zhang','Henry Peng Zou','Zhiling Yan','Yuxuan Zhang','Yanfang Ye','Philip S. Yu','Lichao Sun']"
    image="/publication/drclaw.webp"
    :imageWidth="800"
    :imageHeight="388"
    venue="EMNLP 2026 System Demonstrations"
    date="Sep 2026"
    paper="https://arxiv.org/abs/2609.00365"
    github="https://github.com/OpenLAIR/dr-claw"
    abstract="Command-line coding agents (e.g., Claude Code, Gemini CLI) can already read and write files and sustain long sessions, yet end-to-end research still fragments across chat tools, IDEs, terminals, and writing environments, and the decisions that make it auditable are rarely preserved. We present Dr. Claw, an open-source workspace that wraps existing coding-agent executors in a controllable and auditable human-in-the-loop workflow rather than introducing another autonomous agent. Persistent state objects, a reusable skill library, and multi-executor coordination link human decisions to AI execution, turning planning, execution, and writing into one traceable, recoverable loop. We demonstrate Dr. Claw through an interactive three-view scenario and a failure-recovery walkthrough, and evaluate it against a bare command-line agent sharing the same backend executor, so the comparison contrasts the whole orchestration layer (task graph, state objects, and skill library) with the agent it wraps. Holding the executor fixed, Dr. Claw scores higher on research completeness while persisting an auditable, recoverable process trail. Demo access: repository https://github.com/OpenLAIR/dr-claw, released under AGPL-3.0 with GPL-3.0 upstream components."
    bibtex="@inproceedings{song2026drclaw,
  title     = {Dr. Claw: An {AI} Scientist Workspace for Vibe Research},
  author    = {Song, Dingjie and Zhang, Hanrong and Liu, Dawei and Liu, Yixin and Li, Zongxia and Yuan, Zhengqing and Zhang, Siqi and Zou, Henry Peng and Yan, Zhiling and Zhang, Yuxuan and Ye, Yanfang and Yu, Philip S. and Sun, Lichao},
  booktitle = {Proceedings of the 2026 Conference on Empirical Methods in Natural Language Processing: System Demonstrations},
  year      = {2026},
  note      = {arXiv:2609.00365}
}"
  />

  <PublicationCard
    id="paper-3d-cookbook"
    title="A Cookbook of 3D Vision: Data, Learning Paradigms, and Application"
    :authors="['Hongyang Du*','Zongxia Li*','Dawei Liu*','Runhao Li*','Haoyuan Song','Qingyu Zhang','Yubo Wang','Jingcheng Ni','Shihang Gui','Congchao Dong','Tao Hu']"
    image="/publication/3dv.webp"
    :imageWidth="800"
    :imageHeight="450"
    venue="CVPR 2026 Workshop OpenSUN3D · pp. 8376–8390"
    date="Mar 2026"
    paper="https://openaccess.thecvf.com/content/CVPR2026W/OpenSUN3D/html/Du_A_Cookbook_of_3D_Vision_Data_Learning_Paradigms_and_Application_CVPRW_2026_paper.html"
    abstract="3D vision has rapidly evolved, driven by increasingly diverse data representations, learning paradigms, and modeling strategies. Yet the field remains fragmented across representations and benchmarks, making it difficult to develop unified perspectives on efficiency, fidelity, and scalability. This work provides a data-centric taxonomy of 3D vision that connects geometric representations, datasets, learning frameworks, and applications within a single conceptual map. We survey principal structural representations of 3D data, then examine how dataset design, benchmark construction, and supervision regimes shape recent advances spanning 2D-supervised 3D learning, implicit neural representations, and 4D world modeling."
    github="https://github.com/Hongyang-Du/awesome-3d-datasets"
    bibtex="@inproceedings{du2026cookbook,
  title     = {A Cookbook of {3D} Vision: Data, Learning Paradigms, and Application},
  author    = {Du, Hongyang and Li, Zongxia and Liu, Dawei and Li, Runhao and Song, Haoyuan and Zhang, Qingyu and Wang, Yubo and Ni, Jingcheng and Gui, Shihang and Dong, Congchao and Hu, Tao},
  booktitle = {CVPR 2026 Workshop OpenSUN3D},
  pages     = {8376--8390},
  year      = {2026}
}"
  />

  <PublicationCard
    id="paper-multimodal-video"
    title="Multimodal Video Generation Models with Audio: Present and Future"
    :authors="['Dawei Liu','Hongyang Du','Zongxia Li','Xiyang Wu','Lantao Yu','Jingxi Chen','Fuxiao Liu','Xiaomin Wu','Jing Xie','Chengsong Huang','Yicheng He','Guangyao Shi']"
    image="/publication/vgm.webp"
    :imageWidth="800"
    :imageHeight="395"
    venue="ACM MM 2026 Workshop JAV-CG"
    date="Mar 2026"
    abstract="Video generation has advanced rapidly, yet visual content alone is insufficient for many realistic and engaging media experiences: sound is central to immersion, semantic coherence, and perceived causality. Growing demand for synchronized dialogue, effects, music, and ambience has therefore accelerated research on multimodal video generation, which coordinates video and audio generation or uses one modality to control the other instead of treating sound as a separate post-production stage. Recent proprietary and open-weight systems, including Veo 3.1, Gemini Omni Flash, Sora 2, Seedance 2.0, Seedance 2.5, Kling 3.0, MiniMax M2.6, Vidu Q3, Wan 2.6, OVI, and LTX-2, illustrate the shift toward native audiovisual capabilities. This paper surveys the foundations and recent advances of multimodal video generation. We organize the literature around four themes: architectural components and cross-modal fusion; post-training and evaluation methods; applications and active research areas; and persistent challenges in synchronization, efficiency, data, safety, and long-horizon consistency. We identify multi-timescale alignment, from local event timing to global narrative and acoustic continuity, as a unifying challenge across current systems. This perspective connects progress in media creation with emerging uses in world modeling, interactive simulation, embodied intelligence, and human–AI communication."
    paper="https://openreview.net/forum?id=9rqYE94d0c"
    github="https://github.com/zli12321/Multimodal-VIdeo-Generation-Collections-Video-and-Audio"
    bibtex="@inproceedings{liu2026multimodal,
  title     = {Multimodal Video Generation Models with Audio: Present and Future},
  author    = {Liu, Dawei and Du, Hongyang and Li, Zongxia and Wu, Xiyang and Yu, Lantao and Chen, Jingxi and Liu, Fuxiao and Wu, Xiaomin and Xie, Jing and Huang, Chengsong and He, Yicheng and Shi, Guangyao},
  booktitle = {ACM MM 2026 Workshop JAV-CG},
  year      = {2026},
  url       = {https://openreview.net/forum?id=9rqYE94d0c}
}"
  />

  <PublicationCard
    id="paper-timedb"
    title="TIMEDB: tumor immune micro-environment cell composition database with automatic analysis and interactive visualization"
    :authors="['Xueying Wang*','Lingxi Chen*','Wei Liu*','Yuanzheng Zhang','Dawei Liu','Chenxin Zhou','Shuai Shi','Jiajie Dong','Zhengtao Lai','Bingran Zhao','Wenjingyu Zhang','Haoyue Cheng','Shuaicheng Li']"
    image="/publication/timedb.webp"
    :imageWidth="800"
    :imageHeight="427"
    venue="Nucleic Acids Research · 51(D1): D1417–D1424"
    date="Jan 2023"
    note="My role: built the visualization framework and several of the interactive analyses."
    abstract="TIMEDB is an online database for analyzing human tumor immune microenvironment cell-type composition from bulk expression profiles. It curates expression and composition profiles with clinical information for 39,706 samples from 546 datasets across 43 cancer types, and provides automatic analysis with interactive visualization."
    paper="https://doi.org/10.1093/nar/gkac1006"
    website="https://timedb.deepomics.org"
    github="https://github.com/deepomicslab/TIMEDB"
    bibtex="@article{wang2023timedb,
  title   = {{TIMEDB}: tumor immune micro-environment cell composition database with automatic analysis and interactive visualization},
  author  = {Wang, Xueying and Chen, Lingxi and Liu, Wei and Zhang, Yuanzheng and Liu, Dawei and Zhou, Chenxin and Shi, Shuai and Dong, Jiajie and Lai, Zhengtao and Zhao, Bingran and Zhang, Wenjingyu and Cheng, Haoyue and Li, Shuaicheng},
  journal = {Nucleic Acids Research},
  volume  = {51},
  number  = {D1},
  pages   = {D1417--D1424},
  year    = {2023},
  doi     = {10.1093/nar/gkac1006}
}"
  />
</PublicationList>

<p class="home-section-outro">Six selected here. The complete, continuously updated record lives on <a href="https://scholar.google.com/citations?user=RzdCL4AAAAAJ&amp;hl=en" target="_blank" rel="me noopener noreferrer">Google Scholar</a> and <a href="https://dblp.org/pid/57/1575-5.html" target="_blank" rel="me noopener noreferrer">DBLP</a>.</p>

## Open Source

<p class="home-section-intro">Research that leaves behind something people can run. Three projects built with the LAIR community; star counts refresh with each deploy.</p>

<PortfolioOpenSource />

## Education

<PortfolioEducation />

## Experience

<p class="home-section-intro">Four engineering roles where ranking, observability, platform engineering, and backend reliability met real constraints.</p>

<PortfolioExperience />

## Projects

<p class="home-section-intro">Competition projects where I led the build, from spatial interaction on Apple platforms to recommendation-driven web products.</p>

<div class="project-grid">
  <ProjectCard
    name="Aura Chef"
    role="Solo Developer"
    award="Winner · Apple Swift Student Challenge 2026"
    time="2026"
    summary="A touchless cooking assistant for iPad that removes the “digital friction” of swiping recipes with messy hands, using on-device computer vision so the device fades into the background."
    :highlights="[
      'Tracked 21 hand joints with the Vision framework and a custom low-pass filter to separate intentional gestures from sensor noise.',
      'Designed a Dual Confirmation Ring and large-scale palm gestures for accessibility, with voice control and text-to-speech as fallback modalities.',
      'Built an AI Visibility Bar that monitors lighting and distance in real time, plus a hand-skeleton PIP so users can see how the model reads their intent.'
    ]"
    :tech="['SwiftUI','Vision','Combine','Speech','AVFoundation']"
  />

  <ProjectCard
    name="Trace Note"
    role="Team Lead · Sole Developer"
    award="National Final 2nd Prize · China Collegiate Computing Contest 2022"
    time="2022"
    summary="An AR social app for the Mobile Application Innovation track (co-hosted by Apple and Zhejiang University) that lets users anchor and share geo-tagged notes in physical space and earn tokens through daily check-ins."
    :highlights="[
      'Also won the Northeast Division Innovation Track First Prize; I led the team and wrote all of the software.',
      'Optimized spatial trace retrieval with Redis Geo for real-time nearby queries and distance-based ranking.',
      'Used Lua scripts for atomic inventory pre-checks, preventing overselling and enforcing a one-order-per-user policy.',
      'Handled async order creation and timeout-based cancellation via RabbitMQ delayed message exchange.'
    ]"
    :tech="['Swift','ARKit','Redis Geo','RabbitMQ','Lua']"
  />

  <ProjectCard
    name="Juejin Clone"
    role="Team Leader"
    award="1st Prize · ByteDance Youth Camp 2022"
    time="2022"
    summary="A rebuilt developer community web app with a personalized “For You” feed, post interactions, and responsive design."
    :highlights="[
      'Built the personalized feed with TrustSVD plus timeline signals to address cold start in recommendation.',
      'Automated daily data refresh and model retraining with Spring Scheduler to keep recommendations fresh.',
      'Implemented JWT and RBAC with Sa-Token for fine-grained access control and session management.'
    ]"
    :tech="['React','Spring','TrustSVD','Sa-Token']"
  />
</div>

## Knowledge Base

<p class="home-section-intro">A long-running technical knowledge base kept alongside my research and engineering work. The goal is not to collect definitions but to connect first principles, problem-solving methods, and production tradeoffs.</p>

<div class="knowledge-atlas-grid">
  <a class="knowledge-atlas-card knowledge-atlas-card--algo" href="/algo/">
    <div class="knowledge-atlas-card__head"><span class="knowledge-atlas-card__index">01</span><p class="knowledge-atlas-card__eyebrow">Model · Explore · Optimize · Verify</p></div>
    <h3>Algorithms</h3>
    <p>Data structures, search, dynamic programming, optimization, correctness, and interview problem solving.</p>
    <span class="knowledge-atlas-card__link">Open the algorithm map →</span>
  </a>
  <a class="knowledge-atlas-card knowledge-atlas-card--ai" href="/ai/">
    <div class="knowledge-atlas-card__head"><span class="knowledge-atlas-card__index">02</span><p class="knowledge-atlas-card__eyebrow">Foundation · Model · System · Product</p></div>
    <h3>AI Systems</h3>
    <p>Deep learning, language models, inference, agents, recommendation, search, and evaluation.</p>
    <span class="knowledge-atlas-card__link">Open the AI map →</span>
  </a>
  <a class="knowledge-atlas-card knowledge-atlas-card--cs" href="/cs/">
    <div class="knowledge-atlas-card__head"><span class="knowledge-atlas-card__index">03</span><p class="knowledge-atlas-card__eyebrow">Runtime · Network · Design · Distributed</p></div>
    <h3>CS Foundations</h3>
    <p>Operating systems, computer networks, OOD, design patterns, and scalable system design.</p>
    <span class="knowledge-atlas-card__link">Open the CS map →</span>
  </a>
  <a class="knowledge-atlas-card knowledge-atlas-card--se" href="/se/">
    <div class="knowledge-atlas-card__head"><span class="knowledge-atlas-card__index">04</span><p class="knowledge-atlas-card__eyebrow">Build · Store · Integrate · Operate</p></div>
    <h3>Software Engineering</h3>
    <p>Languages, data systems, middleware, delivery, observability, testing, and production practice.</p>
    <span class="knowledge-atlas-card__link">Open the engineering map →</span>
  </a>
</div>

<div class="knowledge-atlas-note">
  <strong>How I write these notes</strong>
  <div>
    <p>Directory pages build the map. Topic pages explain one complete idea. Case studies connect concepts under realistic constraints. When the same subject appears in multiple areas, I prefer cross-links over duplicated definitions.</p>
    <p class="knowledge-atlas-note__links"><a href="/education/">Course archive →</a><a href="/hobby/">Personal notes →</a><a href="/test/">TOEFL &amp; GRE study system →</a><a href="/article/">All notes →</a></p>
  </div>
</div>

## Tech Stack

<p class="home-section-intro">Four working layers, from research prototypes to production services. Deeper notes live in the <a href="/ai/">AI</a>, <a href="/cs/">CS</a>, and <a href="/se/">software engineering</a> maps.</p>

<TechGrid>
  <TechCard
    index="01"
    eyebrow="Models &amp; agents"
    title="AI &amp; Agent Systems"
    description="Model, retrieve, evaluate, and operate tool-using systems under real context and latency constraints."
    :items="['PyTorch','Transformers','Agent harnesses','Skill retrieval','RAG / GraphRAG','Multimodal evaluation','Recommendation & ranking']" />
  <TechCard
    index="02"
    eyebrow="Services"
    title="Backend &amp; Distributed Systems"
    description="Build typed services, ranking paths, streaming jobs, and the interfaces that keep them evolvable."
    :items="['Java','Python','Go','SQL','Spring','Thrift / Protobuf','Kafka / Flink','OpenTelemetry']" />
  <TechCard
    index="03"
    eyebrow="Data &amp; infrastructure"
    title="Data &amp; Infrastructure"
    description="Design storage and delivery foundations with explicit tradeoffs around scale, failure, and observability."
    :items="['MySQL','Redis','Elasticsearch','Linux','Docker','Kubernetes','Helm','CI/CD','AWS','Grafana']" />
  <TechCard
    index="04"
    eyebrow="Product &amp; interfaces"
    title="Product &amp; Interfaces"
    description="Turn systems into usable research workspaces, web products, visual tools, and spatial experiences."
    :items="['TypeScript','React','Vue / Vite','Swift / SwiftUI','ARKit','ECharts','C/C++ / OpenGL']" />
</TechGrid>

## Résumé

<div class="home-resume">
  <a class="home-resume__spread no-external-link-icon" href="/resume/david-liu-resume.pdf" target="_blank" rel="noopener" aria-label="Open the full résumé PDF (two pages)">
    <picture>
      <source type="image/webp" srcset="/resume/david-liu-resume-p1.webp" />
      <img src="/resume/david-liu-resume-p1.jpg" alt="Page 1 of David Liu's research résumé: education, research and open-source experience, professional experience" width="600" height="777" loading="lazy" decoding="async" />
    </picture>
    <picture>
      <source type="image/webp" srcset="/resume/david-liu-resume-p2.webp" />
      <img src="/resume/david-liu-resume-p2.jpg" alt="Page 2 of David Liu's research résumé: selected publications, honors, research impact and service" width="600" height="777" loading="lazy" decoding="async" />
    </picture>
  </a>
  <div class="home-resume__body">
    <p class="home-card-eyebrow">Two pages</p>
    <h3 class="home-card-title">The same story, in the form people ask for it.</h3>
    <p class="home-card-copy">Education, research and open-source work, and the engineering roles behind them on the first page; publications, honors, and research impact on the second. Typeset from source and regenerated with each update rather than edited by hand.</p>
    <div class="home-resume__actions">
      <a class="home-action home-action--primary" href="/resume/david-liu-resume.pdf" target="_blank" rel="noopener">Open résumé</a>
      <a class="home-action no-external-link-icon" href="/resume/david-liu-resume.pdf" download>Download PDF</a>
    </div>
    <p class="home-resume__note">PDF · 2 pages · Updated Sep 2026</p>
  </div>
</div>

## Contact

<PortfolioContact />
