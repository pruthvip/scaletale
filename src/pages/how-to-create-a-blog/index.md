---
title: How to create and host a blog for free (almost)
date: "2018-12-11T22:40:32.169Z"
---

I always wanted to write and host a blog. Took almost 2 years to do so. This post is about how you can start and host a simple blog in the cheapest way possible.

##3 important ingredients to start/host a blog
The following 3 ingredients are the basic stuffs which you will need to get started with any blog.

* Content and the easiest way to write it.
* A place on the internet to keep your content.
* An easy human readable address to the above place.

###Content and the easiest way to write it.
I have used [gatsby](https://www.gatsbyjs.org/) to write this blog. It's a static site generator. Super easy to use. Just choose any of the [gatsby starters](https://www.gatsbyjs.org/starters/?v=2) you like and install and start writing.

I have used a basic gatsby [template](https://www.gatsbyjs.org/starters/gatsby-starter-blog/). All I had to do is

    npm i -g gatsby // install gatsby globally
    gatsby new scale-tale https://github.com/gatsbyjs/gatsby-starter-blog   // get the gatsby starter code
    cd scale-tale && npm i && npm run dev   // install node dependencies and run the code

![Image](install-gatsby.png "Gatsby installation")

###A place on the internet to keep your content.
Since you cant keep your laptop always on and connected to the internet. Its good if you put your content to some hosting service, so your content is always available. Some examples of the hosting services are AWS, GCP, Digital Ocean, Hostgator etc etc.

If you just want to host static content (html css and some js), github and netlify provides free hosting. Since gatsby converts the blog into static contents. This was my best option, because it was totally free. I tried both github pages and netlify. Found netlify is much more easier to use and way too cooler. And it has inbuilt support for gatsby and it recognizes if your blog is written in gatsby.
