# AOF



Append Only File (追加文件）。



会给

复制时机

![截屏2023-02-16 20.40.43](https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/3978/%E6%88%AA%E5%B1%8F2023-02-16%2020.40.43.png)







有冗余记录，文件占用体积比RDB大得多。

解决方案：bgrewriteaof命令，可以让aof重写，只需要最少的内容即可达到一样的效果

触发时机设置

```conf
auto-aof-rewrite-percentage
```



