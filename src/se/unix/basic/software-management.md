# 12. 软件管理



## 分发软件的格式

- .tar.gz
- .rpm (Red Hat, Fedora, SUSE, ..) yum
- .deb 



## 包管理器

### RPM

Redhat Package management

rpm xxx，缺的依赖还得一个一个自己下，非常不方便



### yum

RHEL的

yum + 安装包名，

自动下载缺的依赖

安装的软件，会分到很多地方都有，usr/bin, etc, ...好多

```shell
yum list
```



dnf

brew



### apt

Debian的

Advanced package tool

apt-get现在比yum好

深度学习、机器学习用Ubuntu更好，apt-get维护的更好一些



### configuration

安装

更多的时候给源码，需要Makefile





