---
title: Programming Log 154: Try Asp.net MVC
date: '2013-9-6'
categories: Learning
tags: [Learning, asp.net mvc]
---

I create an example site refer the [w3schools](http://w3schools.com/aspnet/mvc_database.asp) and use `<add name="MovieDBContext" providerName="System.Data.SqlServerCe.4.0" connectionString="Data Source=|DataDirectory|\Movies.sdf" />` as *connectionStrings*. But it can't create. I search the Stack Overflow, and change it to `<add name="MovieDBContext" providerName="System.Data.SqlClient" connectionString="Data Source=|DataDirectory|\Movies.sdf" />`, the data model established successfully. But when I call the Movie controller, it give me "provider: SQL Network Interfaces, error: 26". At this time I change back to "SqlServerCe.4.0" is back online. Hehe M$...
The primary key should set as identifier to increase automatically.

To sum up, I spent **6 hours** on programming today, and totally **473 hours**. 