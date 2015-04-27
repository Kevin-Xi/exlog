---
title: Programming Log 80: First Try of Python Scientific
date: '2013-5-10'
categories: Learning
tags: [Learning, python]
---

I don't know why but it should be wrote like this:

	return my_quicksort(less)+[pivot]+my_quicksort(greater)

instead of

	return my_quicksort(less).append(pivot).extend(greater)

the first concatenate of the later one return *NoneType*. **?**

The section of *Standard Library* in book *Python Scientific lecture notes* has a lot.

In the end, I try a lot but can't make it with:

	ValueError: x and y must have same first dimension

To sum up, I spent **2 hours** on programming today, and totally **221 hours**.