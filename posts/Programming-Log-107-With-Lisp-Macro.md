---
title: Programming Log 107: With Lisp Macro
date: '2013-6-24'
categories: Learning
tags: [Learning, lisp]
---

Why should I be called "xueba"

what difference between you see movie all day because you like it and I code all day because I like it? I use my beloved vim to write some little lisp macro, it there any difference between this and you go out with your girlfriend? Is there any difference between the beauty I see in lisp macro and you see in your girlfriend? We are all just dedicate our life to what we love, and that's the source of our power, our intuation of life as I think.

I am a little sensetive, which I admite, and I shouldn't take this too serious. But do not judge what you don't understand, isn't that not a common sence?

The macro of loop: `dotime`, `dolist`, `do`, `loop`, they are too flexible to master easily.

+ The differnece between `if` and `when` ?

single statement and mutli (when use macro to include `progn`)

+ Don't understand the footnote of `loop` on p77 **?**
+ My version of `add` macro can work now, but did it follow the propose of macro that generate appropriate code?
+ What is "Principle of Least Astonishment" and what the relationship between it and what it say**?** p85

Rules of macro, p88 useful:

+ Unless having special reason, put the sub-forms of macro-call and the sub-forms of expand expr the same order.
+ Unless having special reason, make sure the sub-form only be evaled once.
+ Use `gensym`to create varname in expand expr.
+ p90, too challange!
+ What is this**?** `"~:[FAIL~;pass~]" (= (+ 1 2) 3)`
+ I can't run the "test-+.lisp" but I can run it by directly typing it. Why?

Because the macro definition must write at the head of the file. :( Why**?**

+ There is a ``` in `check` macro before its body. Why it needed**?** Can't call macro inside macro?

Two mistakes are found on p88 and p95

To sum up, I spent **9 hours** on programming today, and totally **319 hours**. 