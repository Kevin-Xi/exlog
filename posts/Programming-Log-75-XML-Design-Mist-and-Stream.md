---
title: Programming Log 75: XML Design Mist and Stream
date: '2013-5-4'
categories: Learning
tags: [Learning, xml, python]
---

Two questions about XML when I try to design the gua.dtd:

+ do_p? why kgp pick one from two `<p>`?

+ [How to design XML?](http://www.ibm.com/developerworks/library/x-eleatt/index.html)

For now, I do it like this:

	<yao id="yin">- -</yao>
	<yao id="yang">---</yao>
	<sanhuagua id="shg.qian">
		<xref id="yang" />
		<xref id="yang" />	
		<xref id="yang" />
	</sanhuagua>
	...
	<liuhuagua id="lhg.qian">
		<xref id="shg.qian" />
		<xref id="shg.qian" />
	</liuhuagua>
	...

I began reading chapter 10. The StringIO can turn string into file-like object. The chainned command make program flexible.

To sum up, I spent **3 hours** on programming today, and totally **210 hours**.