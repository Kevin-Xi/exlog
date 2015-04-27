---
title: Programming Log 200: Recurrsive Descent Parse
date: '2013-12-19'
categories: Learning
tags: [Learning, Compiler]
---

The key is the form of the rules.

Issue 0:
should I abstract the optional part and have a epsilon in it or just process in upper layer directly?

ex. 
`A -> [B]C
B -> b`
or
`A -> BC
B -> b | epsilon`
**?**

I think if in many rules B is optional, use the second way.

The book using the second way. Me too.

Issue 1: close

When `lex()` should happened? At very beginning or very bottom layer?

I do it in the most bottom layer for small up layer (that is, no read/write detail, just compare).

Now no. It happened when require a terminal symbol.

Issue 2:

Maybe `return 0` as success and `return r` as error code.

Issue 3: close

Terminal symbol in optinal no need  error

Issue 4: close

Merge `posNeg` as optional

Issue 5: merge to tomorrow's log

[Maybe] Merge `constDecl` and `varDecl` as optional. (Change rules and add multi-layer) or (Don't change rules, add judge in the subprocess like `constDecl`) **?**

I feel good.

To sum up, I spent **7 hours** on programming today, and totally **688 hours**.