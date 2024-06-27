# Monitor

Interviewer: Design Datadog (Monitor System)

如何限制访问次数？比如 1 小时之类不能重置 >5 次密码

• Rate limiter
 • 网站必用工具

• 比如一分钟来自同一个邮箱的密码输入错误不能超过5次，一天不超过10次

• 一些Open source的资源

 • Ruby: https://github.com/ejfinneran/ratelimit
 • Django: https://github.com/jsocol/django-ratelimit
 • 建议:有空读一读源码

• Rate Limiter 已经是一个小型的系统设计问题
 • 我们同样可以用 4S 分析法进行分析!