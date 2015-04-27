---
title: Programming Log 141: Restart and Debug
date: '2013-8-10'
categories: Learning
tags: [Learning, algorithm]
---

I find after insert every into *set* of C++, it become ordered and deduplicated. So with tricky idea I finally finish it without hash.

I consider a hash function for program problem part 1 of week 6 maybe: because only same higher bit two numbers(such as 12345678 and -12348765) has posiblity to have a -10000 to 10000 ranged sum, the function may map them to same bucket.

The part 2, during coding that, I find a bug in my previous heap. (Kind of "off-1 bug", it's amazing that not cause error before and it make me horror: if this time the problem didn't need it, it will cover inside the snow.) Because I simply copy the min-root-heap file to implement the max-root-file, I make that bug two. Copy code is really bad not only because doubling bugs, it also cause subtle problem such as I copy the header guard `#ifndef ...` direct to new header, that makes two header have same guard name so the second heap header is ignored while linking. And for the various, it's important to maintain the name according its semantics, otherwise it will cause bugs insensibly.

And the last week course is heavy than before. Do review it.

And I don't have a handy language to use now. That's kind of serious!

To sum up, I spent **6 hours** on programming today, and totally **428 hours**. 