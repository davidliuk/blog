# Git

## 配置信息

git config 命令的–global 参数，用了这个参数，表示你这台机器上所有的 Git 仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和 Email 地址。

### 查看 git 配置信息

`$ git config --list`

### 查看 git 用户名、密码、邮箱的配置

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
