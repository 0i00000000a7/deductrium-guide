---
title: 高亮测试
---

# 语法高亮测试

## 基础推理规则

```deduct
mp 1 0
a1 $0 $1
a2 $0 $1 $2
a3 $0 $1
si $0
st $0 $1
hyp $0 $1
```

## 元前缀

```deduct
>tmp1 0 1
>>smp $0 $1
>>sm $0 $1
>>ccsmp $0 $1 $2 $3
va1 $2 $0 $1
cst $0 $1
ccmp $0 $1
<d<>1 $0 $1
<<a5 $0 $1
```

## Dot 内置宏

```deduct
.i ($0>$1)>$0
.dne $0
.prop
<.i $0
.<>1 1
```

## 组合元定理 (逗号和#)

```deduct
::#,<a1:a1,ccmp
<<::va2,<a5,c<a5
:::csni:>>sm,cst:sni,st,<a3
```

## 综合

```deduct
csm2 1 2
sm&1 $0 $1
d| $0 $1
d& $0 $1
s>TF 0 3
s<>1 0 1
bc.d 1
p<a 1
```

## 运算符和变量

```deduct
$0 > $1
~$0
$0 -> $1
$0 <> $1
($0 & $1)
($0 | $1)
```

## 数字

```deduct
mp 0 1
a1 2 3
```
