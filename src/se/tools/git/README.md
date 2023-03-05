# Git







## 配置信息

git config命令的–global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。


### 查看git配置信息

`$ git config --list`

### 查看git用户名、密码、邮箱的配置

```sh
$ git config user.name
$ git config user.password
$ git config user.email
```

### 设置用户名密码
```sh
$ git config --global user.name <用户名>
$ git config --global user.password <密码>
$ git config --global user.password <邮箱>
```

