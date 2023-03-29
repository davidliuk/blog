# 签到

## BitMap 用法

必要性：签到如果存在数据库表中，耗费内存，数据库压力大

每一个 bit 位对应当月的每一天，形成映射变细。用 0 和 1 标示业务状态。这种思路就称为位图（BitMap），这样一个月只需要 31 位，2 个字节

布隆过滤器底层是 BitMap

Redis 中 String 底层就是 BitMap，因此最大上限是 512M，2^32 个 bit 位

默认就是 0，故只有要设为 1 的才需要 set

- `SETBIT`

- `GETBIT`

- `BITCOUNT`

- `BITFIELD`

后面的不太常用了

- `BITFIELD_RO`

- `BITOP`

- `BITPOS`

Spring 里面，封装在 ValueOperations 里面了，和 string 封装在了一起
