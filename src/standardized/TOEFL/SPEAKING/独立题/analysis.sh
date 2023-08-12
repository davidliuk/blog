#!/bin/sh

# 使用grep找到所有行开头为"- "的行
grep "^- " *.md |
# 使用awk提取行中的内容，并用逗号分隔
awk -F "- " '{print $2}' |
# 使用tr命令将换行符替换为逗号
tr -d "'" |
tr -d "‘" |
tr '，' '\n' | 
tr '、' '\n' | 
grep -v '^$' | sort | uniq -c |
sort -rn
