# 签到



## BitMap用法

必要性：签到如果存在数据库表中，耗费内存，数据库压力大

每一个bit位对应当月的每一天，形成映射变细。用0和1标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要31位，2个字节

布隆过滤器底层是BitMap

Redis中String底层就是BitMap，因此最大上限是512M，2^32个bit位



默认就是0，故只有要设为1的才需要set

SETBIT

GETBIT

BITCOUNT

BITFIELD

后面的不太常用了

BITFIELD_RO

BITOP

BITPOS





Spring里面，封装在ValueOperations里面了，和string封装在了一起