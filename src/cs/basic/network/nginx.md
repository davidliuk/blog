# nginx

反向代理

配置文件放在：`/etc/nginx/conf.d`

配置文件命名规则：`xxx.conf`，否则不会被 nginx 解析

修改完以后

```sh
nginx -t
nginx -s reload
```
