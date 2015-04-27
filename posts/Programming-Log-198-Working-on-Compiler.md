---
title: Programming Log 198: Working on Compiler
date: '2013-12-16'
categories: Learning
tags: [Learning, Compiler]
---

Still using flex & bison. Issues:

+ capital chars recogn as string not 
+ \" can't reco
+ 10+10 recognized as two integer.

First two solved.

After 2 hours work, I gave up using flex & bison. My bison code do nothing but output "syntax error". I try to plug fb1-5.l to fb.y, it worked, but no lucky when plug fb.l to fb.y. I don't know how to debug flex&bison, my lexer and parser are buggy. I feel bad, want a restart.

Try lisp to make a lexer!

No. And not python. Just C. Sign...I do nothing today...

To sum up, I spent **4 hours** on programming today, and totally **678 hours**.