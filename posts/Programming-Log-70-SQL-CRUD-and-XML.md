---
title: Programming Log 70: SQL CRUD and XML 
date: '2013-4-29'
categories: Learning
tags: [Learning, sql, python, xml]
---

CRUD is nothing big to say.

After dinner I quickly read two books about XML, that are *XML Handbook* and *Hack XML*, both are interesting in style. The first one talk a lot about examples and not until very later chapter. The second one is seems like a collection of some people's blog articals.

By reading them, I find the of XML is genius and the history is intriguing! Before then I reckoned XML is nothing beyond a computer data-represent language but now I realized how wide it could be applied. This stuff desired to study, the design has a sparkle of philosophy.

I finished reading *kgp.py*, almost could be understanded but still have some questions:

+ Why this :

		The default source will be one of the <ref>s that is not cross−referenced. This sounds complicated but it's not.

should be default?


+ What is *xref*?
+ For the following:

		xrefs = {}
		for xref in self.grammar.getElementsByTagName("xref"):
			xrefs[xref.attributes["id"].value] = 1
		xrefs = xrefs.keys()
		standaloneXrefs = [e for e in self.refs.keys() if e not in xrefs]

Why border? Can't *xrefs* get *keys* directly?


+ The position to define *pieces*?

To sum up, I spent **3 hours** on programming today, and totally **197 hours**.