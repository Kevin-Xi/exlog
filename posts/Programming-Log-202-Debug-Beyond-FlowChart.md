---
title: Programming Log 202: Debug Beyond FlowChart
date: '2013-12-21'
categories: Learning
tags: [Learning, Compiler]
---

Although I have the flowchart, the program is not determinded. I didn't consider the position of `lex()`. It become buggy.

So I make the rule: the token readed before subroutines process. So every `else` pairing with an `if` which make terminal compare will take `lex()` first.

The syntax of that c0 is not familiar, so I takes time to write test example I expect.

To sum up, I spent **5 hours** on programming today, and totally **705 hours**.