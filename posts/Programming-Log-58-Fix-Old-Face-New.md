---
title: Programming Log 58: Fix Old, Face New
date: '2013-4-16'
categories: Learning
tags: [Learning, django, git]
---

Today morning I want to solve the *is_valid* problem. I have encountered big problems here:

+ Where to judge validation, in *forms* or in *views*?
+ How to get values from *Form*?

Tonight I finally solve this: 

+ [Validation](https://docs.djangoproject.com/en/1.5/ref/forms/validation/) (I didn't try this for now) by read the doc.
+ [*"Forms only get a cleaned_data attribute when is_valid() has been called"*](http://stackoverflow.com/questions/4308527/django-model-form-object-has-no-attribute-cleaned-data) by google the error message.

As usual, new problems come out:

+ [master be37751](https://github.com/Kevin-Xi/qiubangmang/commit/be37751ed17d85c00e185dbaa0d96fef5bf975cb) should not be even occured, it's a bad design. So how other people do this?
+ How to save task's **rich-text** content? By XML or by embedding FCKeditor-like stuff?

TODO:

+ Self-design model of *accounts* to allow utf-8 username, bonus, etc.
+ Sell abilities module (is there any appropriate name to match "task"?)

And I solve the *.gitignore* problem too by read *man* given by git itself, it said "Files already tracked by git are not affected" by adding item to *.gitignore*, so I use

	git rm \*.pyc

to delete all *.pyc* file recursionly and then modify the *.gitignore*. But isn't it difficult to realize all things to be ignored at the start point of a project?

To sum up, I spent **3 hours** on programming today, and totally **174 hours**.