---
title: Programming Log 60: .Net Framework Overview, Add Homepage Method, SQL Exercise
date: '2013-4-18'
categories: Learning
tags: [Learning, .NET, django, SQL]
---

After read books and asked classmates, I finally get the idea of what is *ASP.NET*, *WPF*, and how to implement a website by *ASP.NET Framework*. In the exercise class afternoon, I wrote a form using *WPF* which is same as that implemented by *WinForm* last week. The idea of *XAML* is unfamiliar and interesting.

During writing the website, I found two things:

+ Using *render_to_response* will not change the pretty url pattern.
+ The command 

		{% request.user.is_authenciated %}

in template is used when it needed to show two content in one page(such as *index.html*), if a page didn't need to show different contents to authenciated or unauthenciated user, it needn't have this and the judge logic should be implemented in *views.py* which call it. (This is my idea of design, I'm not sure if it's right.)

I done some SQL query exercise tonight. I found sometime this is all about simplify and seek the essential of the query request.

To sum up, I spent **4 hours** on programming today, and totally **179 hours**.