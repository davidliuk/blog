import{_ as i,V as l,W as e,Z as a}from"./framework-e5d7a6b2.js";const r={},h=a('<h2 id="自我介绍" tabindex="-1"><a class="header-anchor" href="#自我介绍" aria-hidden="true">#</a> 自我介绍</h2><p>面试官您好，我是刘大维，来自东北大学软件工程专业大三年级。我将从三个方面来介绍我自己：</p><p>首先，我热爱技术研发，学习能力良好。我在大学期间成绩优异，平均学分绩点为92.5，荣获国家奖学金。我具有良好的java基础以及扎实的开发能力，我主导开发的两个项目获得了国家二等奖、字节跳动青训营一等奖的优异成绩。</p><p>其次，我具有良好的沟通能力和强烈的责任心，无论是在平时的课程项目中，还是在科创竞赛中，我都经常担任团队组长，在项目管理过程中会提前梳理工作量，结合每个人的优势特长分配工作。</p><p>最后一个方面是，我勤奋好学、善于总结思考。我认为细致、踏实才能真正掌握知识点，在学习新技术的过程中，我往往会反复实践。我在过往的学习中，养成了写总结笔记的习惯，并且放在了我的个人博客上。</p><blockquote><p>（收尾）我仔细研究过JD, 我过往的经历都很符合这个职位的要求，这也是为什么我想申请这个职位的原因。如果刚才说到对岗位理解有误的地方还请您纠正补充， 我也想听您多介绍一下这个岗位的工作内容。-</p></blockquote><h1 id="trace-note" tabindex="-1"><a class="header-anchor" href="#trace-note" aria-hidden="true">#</a> Trace Note</h1><h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h2><h3 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h3><p>雁过留痕 Trace Note 是一款基于地点的社交 app。用户可以在一个地点开启一个 Trace AR 场景，并在场景中放置 Note 虚拟留言板，不同用户见可以在同一个 Trace 中相互交互评论。Note 留言板提供字体、材质等个性化装饰选项。用户可以通过每日签到打卡获取代币，用来抢购个性化装扮，以提高个性化程度，并作为激励机制提高用户每日的活跃度。</p><h3 id="人员分工" tabindex="-1"><a class="header-anchor" href="#人员分工" aria-hidden="true">#</a> 人员分工</h3><ul><li>3个同学，1人全职文案和海报，2位开发同学客户端和后端共同负责</li><li>2人客户端、SwiftUI主要界面、ARKit场景交互页面</li><li>2人后端、</li></ul><h3 id="个人工作" tabindex="-1"><a class="header-anchor" href="#个人工作" aria-hidden="true">#</a> 个人工作</h3><blockquote><p>你这个项目是因为什么写的呀？为什么写的呀？</p></blockquote><p>这个项目是去年我参加中国高校计算机大赛移动应用创新赛的时候设计开发的项目，这是一款基于AR的社交APP，产品定位方面主要是为了填补AR浅社交破冰这方面的市场空白，同时也是希望挑战自己并将所学知识付诸实践。</p><blockquote><p>是一门儿课的作业呀还是怎么回事儿啊？</p></blockquote><blockquote><p>然后你在这个项目里面扮演什么角色呀，诸如此类的。</p></blockquote><p>在项目中，我主要扮演的是项目组长和负责后端开发的工作。</p><p>在团队管理方面，我根据团队成员的兴趣和特长对他们的工作进行了划分、使用Trello看板来进行项目进度管理、定期开研讨会分析项目存在的问题并探讨解决方案。</p><p>在后端开发方面，我个人进行了整个后端系统的设计与开发，同时利用Redis来提高系统的性能和解决一些LBS问题的痛点。</p><h2 id="项目开发" tabindex="-1"><a class="header-anchor" href="#项目开发" aria-hidden="true">#</a> 项目开发</h2><h3 id="技术选型" tabindex="-1"><a class="header-anchor" href="#技术选型" aria-hidden="true">#</a> 技术选型</h3><p>后端：</p><ul><li>Spring Boot 2.8, Spring AOP</li><li>MySQL, Redis, Redisson</li><li>hutool</li><li>RabbitMQ, Spring AMQP</li><li>文档：knife4j</li></ul><p>客户端：</p><ul><li>SwiftUI做的界面</li><li>ARKit做的AR交互</li></ul><h3 id="系统业务" tabindex="-1"><a class="header-anchor" href="#系统业务" aria-hidden="true">#</a> 系统业务</h3><h3 id="项目亮点" tabindex="-1"><a class="header-anchor" href="#项目亮点" aria-hidden="true">#</a> 项目亮点</h3><ol><li>利用 AOP 实现注解校验用户登陆状态及用户权限。使用 Redis 实现分布式 Session，解决集群间登录态同步问题；</li><li>使用 MD5 + 随机加盐 算法保证用户密码不被泄漏，提高系统的安全性。</li><li>使用 Redis 对高频访问 Trace 进行缓存，降低 DB 压力同时提升 90% 的数据查询性能。</li><li>使用模版模式实现了通用缓存访问静态方法，并解决了缓存雪崩、缓存穿透和缓存击穿的问题。</li><li>使用 Redis 的 Geo 数据结构存储附近 Trace，并使用 Geo Search 命令实现高性能 Trace 查询及按距离排序。</li><li>使用 Redis ZSet 数据结构存储用户点赞信息，保证用户只能点赞一次，并可以展示记录点赞的先后排序。</li><li>使用 Redis Set 数据结构实现用户关注、共同关注功能，并使用 Redis AOF 持久化防止关注数据丢失。</li><li>使用 Redis BitMap 实现用户连续签到统计功能，提高存储的效率并减少内存的占用。</li><li>基于推模式实现关注 Feed 流，保证了新 Note 消息的及时可达，并减少用户访问的等待时间。</li><li>使用 Lua 脚本实现库存预检解决了超卖问题、实现一人一单。通过 RabbitMQ 实现异步订单创建、超时取消订单。</li></ol><p>密码存储：加盐 MD5</p><p>由于传统的MD5加密，黑客可以通过查散列值字典（例如彩虹表），得到某用户的密码。因此目前可以用MD5加密配合上随机盐值，可极大的防止密码被破解。</p><p>用户系统</p><ul><li><p>密码存储：使用 MD5 + 随机加盐 算法保证用户密码不被泄漏，提高系统的安全性。</p><p>和 MD5 摘要值一样</p><p>为什么加盐，随机生成一个 20 位字符串，防止非法用户用字典攻击的方式暴力破解。</p></li><li><p>AOF鉴权：</p><ul><li>哪些权限 <ul><li>用户</li><li>管理员</li><li>超级管理员</li><li>封号 ban</li></ul></li><li>什么模型，什么表：RBAC，五张表</li><li>AOF实现与Filter的区别 <ul><li>Filter基于servlet</li><li>AOF实现更加灵活可以加注解和参数</li></ul></li></ul></li><li><p>用户关注</p><ul><li>使用 Redis Set 数据结构实现用户关注、共同关注功能，只需要集合求交集即可很快的得到两个用户的共同关注。</li><li>并使用 Redis AOF 持久化防止关注数据丢失。</li></ul></li><li><p>用户签到</p><p>使用Redis BitMap结构进行存储，每个月</p></li></ul><h1 id="掘金" tabindex="-1"><a class="header-anchor" href="#掘金" aria-hidden="true">#</a> 掘金</h1><h2 id="项目背景-1" tabindex="-1"><a class="header-anchor" href="#项目背景-1" aria-hidden="true">#</a> 项目背景</h2><h3 id="项目介绍-1" tabindex="-1"><a class="header-anchor" href="#项目介绍-1" aria-hidden="true">#</a> 项目介绍</h3><p>这是一款类掘金的知识分享平台。用户可以发布和收藏文章、评论互动、互相关注，以及获得个性化推荐的文章。我们还利用 TrustSVD 社交推荐算法，实现针对用户的个性化社交推荐。</p><h3 id="人员分工-1" tabindex="-1"><a class="header-anchor" href="#人员分工-1" aria-hidden="true">#</a> 人员分工</h3><ul><li>4个同学，2位同学开发前端，2位同学开发后端。</li><li>2人前端，SwiftUI 主要界面、ARKit 场景交互页面</li><li>2人后端，</li></ul><h3 id="个人工作-1" tabindex="-1"><a class="header-anchor" href="#个人工作-1" aria-hidden="true">#</a> 个人工作</h3><blockquote><p>你这个项目是因为什么写的呀？为什么写的呀？</p></blockquote><p>这个项目是我参加字节跳动第四届青训营的时候设计开发的项目，这是一款基于AR的社交APP，产品定位方面主要是为了填补AR浅社交破冰这方面的市场空白，同时也是希望挑战自己并将所学知识付诸实践。</p><blockquote><p>是一门儿课的作业呀还是怎么回事儿啊？</p></blockquote><blockquote><p>然后你在这个项目里面扮演什么角色呀，诸如此类的。</p></blockquote><p>在项目中，我主要扮演的是项目组长和负责后端开发的工作。</p><p>在团队管理方面，我根据团队成员的兴趣和特长对他们的工作进行了划分、使用Trello看板来进行项目进度管理、定期开研讨会分析项目存在的问题并探讨解决方案。</p><p>在后端开发方面，我个人进行了整个后端系统的设计与开发，同时利用Redis来提高系统的性能和解决一些LBS问题的痛点。</p><h2 id="项目开发-1" tabindex="-1"><a class="header-anchor" href="#项目开发-1" aria-hidden="true">#</a> 项目开发</h2><h3 id="技术选型-1" tabindex="-1"><a class="header-anchor" href="#技术选型-1" aria-hidden="true">#</a> 技术选型</h3><p>后端</p><ul><li>Spring Boot 2.8, Spring Cloud Gateway, open feign</li><li>sa-token</li><li>MySQL, Redis, Redisson</li><li>mapstruct, hutool</li><li>knife4j</li><li>腾讯云cos</li></ul><h3 id="系统业务-1" tabindex="-1"><a class="header-anchor" href="#系统业务-1" aria-hidden="true">#</a> 系统业务</h3><p>发帖、关注、评分（隐式）</p><p>用户注册、登录、注销</p><p>关注用户</p><p>用户点赞、收藏、点踩文章</p><h3 id="人员分工-2" tabindex="-1"><a class="header-anchor" href="#人员分工-2" aria-hidden="true">#</a> 人员分工</h3><ul><li>前端两个同学</li><li>后端两个同学</li></ul><h3 id="项目亮点-1" tabindex="-1"><a class="header-anchor" href="#项目亮点-1" aria-hidden="true">#</a> 项目亮点</h3><p>一款类掘金的知识分享平台。利用 TrustSVD 社交推荐算法，实现个性化推荐。</p><ol><li>使用 Spring Cloud 基于Spring Cloud + Nacos 实现项目的微服务化，根据业务划分为用户、文章、文件和推送四个服务，提高项目的可拓展性和容错性。</li><li>使用 TrustSVD 社交推荐算法，实现智能推荐 + Timeline 的 Feed 流，实现个性化推荐的同时又避免信息茧房，同时一定程度上解决了推荐系统的冷启动问题。</li><li>基于 Spring Scheduler 实现每日 TrustSVD 推荐数据重新计算，保证推荐的准确性，提升用户的访问体验，并通过 Redisson 分布式锁保证集群中同一时刻的定时任务只执行一次。</li><li>使用腾讯云 COS 存储来集中存管用户图片，并通过限制大小、校验后缀等方式预防文件上传漏洞，增强安全性。</li><li>定义统一的数据返回类和全局异常处理逻辑，规范了数据的传输以及异常的处理。</li><li>对于项目中的推荐系统的配置对象，采用 双检锁单例模式 进行管理，从而复用对象，避免了重复创建对象的开销，便于集中维护管理。</li><li>使用 MD5 + 随机加盐 算法保证用户密码不被泄漏，提高系统的安全性。</li><li>使用 MapStruct 进行 JavaBean 映射的管理，提升性能和代码的精简性。</li></ol><p>由于传统的MD5加密，黑客可以通过查散列值字典（例如彩虹表），得到某用户的密码。因此目前可以用MD5加密配合上随机盐值，可极大的防止密码被破解。</p><p>用户系统</p><ul><li><p>密码存储：使用 MD5 + 随机加盐 算法保证用户密码不被泄漏，提高系统的安全性。</p><p>和 MD5 摘要值一样</p><p>为什么加盐，随机生成一个 20 位字符串，防止非法用户用字典攻击的方式暴力破解。</p></li><li><p>AOF鉴权：</p><ul><li>哪些权限 <ul><li>用户</li><li>管理员</li><li>超级管理员</li><li>封号 ban</li></ul></li><li>AOF实现与Filter的区别 <ul><li>Filter基于servlet</li><li>AOF实现更加灵活可以加注解和参数</li></ul></li></ul></li><li><p>社交推荐</p><p>信息茧房（Echo Chamber）是指用户在社交网络中只接触到与自己观点相同的信息，而忽略了其他观点的现象。为了避免信息茧房，可以采取以下措施：</p><ol><li>推荐算法的多样性：推荐算法应该考虑到用户的多样性，不仅推荐与用户兴趣相似的内容，还应该推荐与用户兴趣不同的内容，以扩展用户的视野和兴趣范围。</li></ol><p>解决推荐系统的冷启动问题可以采取以下措施：</p><ol><li><p>基于社交的推荐：对于新用户，还没有对物品进行过评分，可以采用基于内容的推荐算法，根据物品的属性和特征来进行推荐，避免依赖用户的历史行为数据。</p></li><li><p>协同过滤算法的改进：可以对协同过滤算法进行改进，例如引入社交网络信息、时间信息、地理位置信息等，以增强算法的准确性和可靠性。</p></li><li><p>混合推荐算法：可以采用多种推荐算法的混合推荐方式，综合考虑不同算法的优缺点，以提高推荐系统的性能和效果。</p></li></ol><p>需要注意的是，推荐系统的设计和实现需要综合考虑多个因素，例如用户兴趣、物品属性、推荐算法、数据质量等。在进行推荐系统的设计和优化时，需要根据具体情况采取不同的措施和算法，以达到最优的推荐效果。</p></li></ul>',64),d=[h];function p(t,o){return l(),e("div",null,d)}const c=i(r,[["render",p],["__file","自我.html.vue"]]);export{c as default};
