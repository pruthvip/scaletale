---
path: react-native-web-and-learnings
date: 2020-09-05T15:53:09.162Z
title: React native web and learnings
description: >-
  Idea behind this article to share my thoughts and learnings of building a
  product using react native web and pointers which will help others who are
  thinking of using it.
---
*So a little background before I start. We were a small team of 4 developers, and we wanted to build a booking flow product, and the idea was to get the app working on all 3 platforms i.e web, android, ios.*

After reading and going through the internet for the various choices we had, we settled down for react-native-web(RNW), main reasons being

1. It was very easy to use.
2. Twitter had just used it on their desktop.
3. Even if support for RNW is dropped in future, since the code is written in react-native, our apps will always work.
4. And since we were a small team, this suited us well.

The idea with RNW is simple, you have to write the code in react-native, the RNW will replace the react native components (View, Text etc) to the respective web components (div, input etc).

There are many tutorials on RNW, and [RNW github page](https://github.com/necolas/react-native-web) is the best place to start.

*Below are some learnings which I want to share, which I learnt during building this product. These are not just for RNW and but for general coding also. Hope it helps anyone who is starting with RNW to some extent.*

1. **Get strong machines** - Since you will develop for all three platforms, you better go for strong machines (Min 16 GB ram and 512 SSD Mac). Having a lower ram and ssd space, will slow you down because android studio and xcode take quite some space, and soon you will reach a stage where you will start deleting other files etc to update or run you applications.
2. **Spend more time on the initial setup** - Don't start working out with the product. Better to work on the dev setup initially itself, instead of doing it later. Some basic things which you should add are

   1. Add eslint. (Will help catching some errors too) 
   2. Use typescript.
   3. Hot-reloader for web. (Better development experience)
   4. Add Multi language support (Its slightly difficult to handle later, if your strings at different places).
   5. Add support for code push. (This will save you loads of time in future)
   6. Automated build checks on your CI. (Build android and ios apps on your CI, because while releasing a feature for web, devs tend to overlook the apps, because it takes more time to build.  Hence it is always better to have a CI check, because later it becomes very difficult to pin point why your app is breaking)
   7. Use monorepo, if you find it useful.
3. **Build Mobile first**  - Web hardly throws any error, but the same cant be said about the native apps. Hence always develop and check your android/ios builds first and then check the web. One of the mistakes we did was that, we tried to release the web first, and we never checked if the app builds are working, thinking it will work out of the box. But when we actually wanted to release the apps, we found it very difficult to debug the build issues. Hence always go mobiles first.
4. \--- Work In Progress --