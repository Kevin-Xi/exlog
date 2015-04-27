---
title: Programming Log 187: Linux Fork and Kernel Modules
date: '2013-11-16'
categories: Learning
tags: [Learning, OS]
---

Questions:

+ Zombie process: the doc of class is not accurate. I had it modified. But why a father is forced to stop cause `init` cannot take care of the orphan**?**

+ what should I do if I want to use NULL as arg in `execl`?

+ donnot understand why cannot read 5 times. **?** (in 2nd practice course, part 3, ex2) key: the use of `offset`
answer: The value of off (offset within a file) greater than zero means that invocation of the fourtune_read function is not the first. In that case there is nothing to write to the user as there was a data at the first time call. [http://stackoverflow.com/questions/9286303/unable-to-understand-working-of-read-proc-in-linux-kernel-module](http://stackoverflow.com/questions/9286303/unable-to-understand-working-of-read-proc-in-linux-kernel-module)

+ if I am a module programmer, should I treat `/proc` as file which the designer pretend it to be or expose it as buffer which it really be**?**
Answer: I think near the kernel you would better consider more about effiency and less abstraction. So I choose the second one.

To sum up, I spent **9 hours** on programming today, and totally **626 hours**.