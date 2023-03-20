# 用户系统

用户系统特点：

读非常多，写非常少，一个读多写少的系统，一定要使用 Cache 进行优化



- Authentication Service 负责登录注册
- User Service 负责用户信息存储与查询
- Friendship Service 负责好友关系存储



