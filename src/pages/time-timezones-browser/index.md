---
title: Time and TimeZones And how to tackle them in our browsers
date: "2018-12-30T22:40:32.169Z"
---

Time - Its one of the most trickiest thing to handle for a frontend developer. Each browser has its own interpretations/implementations of date functions, thus it becomes very difficult to get it right at the first go. Till now, I was lucky because, I hadn't dealt with dates and timezones very deeply, and all our products were used inside the India, which has only one timezone. 

But in my current work, date time timezones are crucial. A small mistake with time , might result in the passenger arriving at his destination  5 hours 30 mins late (+5.30 is the timezone of India) and it can make blunders.

## So why do we have timezones

Because of the sperical nature of earth, different part of the enter and exit daylight at different times. So if we *Morning 5 AM* will actually be morning for everyone on the earth. Hence we have different timezones.

Hence around 18th century, people came up with notion of timezones. Since earth takes 24 hours to rotate on its axis. 1 hour would account to 15 degrees of rotation (15 * 24 = 360deg).

The prime merdian or the Greenwich Meridian was decided as the starting point and the time at this point is known as Greenwich Mean Time (GMT) or Universal Time.

Hence places to the east of this line will have a positive offset. Since India is at the east of the line, Hence timezone of India is (+5.30). And countries on the west of the prime merdian have a negative timezone. Greenland has -3.


## So how computes manage time

*Unix time* - So all unix based systems follow a unix time, which is nothing but the number iof seconds elapsed since 00:00:00 Thursday, 1 January 1970 Coordinated Universal Time (UTC). 

###Content and the easiest way to write it.
There are many softwares/platforms which help you write content. For e.g wordpress, django, gatsby and you can even write from scratch using vanila html css.

I have used [gatsby](https://www.gatsbyjs.org/) to write this blog. It's a static site generator. Super easy to use. Just choose any of the [gatsby starters](https://www.gatsbyjs.org/starters/?v=2) you like and install and start writing.

I have used a basic gatsby [template](https://www.gatsbyjs.org/starters/gatsby-starter-blog/). All I had to do is

    npm i -g gatsby // install gatsby globally
    gatsby new scale-tale https://github.com/gatsbyjs/gatsby-starter-blog   // get the gatsby starter code
    cd scale-tale && npm i && npm run dev   // install node dependencies and run the code

![Image](install-gatsby.png "Gatsby installation")

###A place on the internet to keep your content.
Now your content is sorted. Now you need a place to store it. Since you cant keep your laptop always on and connected to the internet. Its good if you put your content to some hosting service, so your content is always available. Some examples of the hosting services are AWS, GCP, Digital Ocean, Hostgator etc.

If you just want to host static content (html css and some js), [github](https://github.com/) and [netlify](https://netlify.com/) provides free hosting. Since gatsby converts the blog into static contents. This was my best option, because it was totally free. I tried both github pages and netlify. Found netlify to be more easier to use and way too cooler. And it has inbuilt support for gatsby and it recognizes if your blog is written in gatsby.

Just upload your code to github. And integrate it on netlify.

![Image](netlify-config.png "Netlify Configuration")



###An easy human readable address to the above place.
https://frosty-hodgkin-35337a6.netlify.com => Netlify usually provides an address to your hosting place is this format. Not very human friendly.
Hence you need a simpler address. This is where Domain Name providers come into picture.

Domain Name providers like godaddy, hostgator, bigrock are companies where you can choose a good name/address for your site, for e.g www.scaletale.com. And whenever anyone in the world types that address in his/her browser, domain name providers give back the real address (DNS resolution) of the place where your content is stored.

For this you have map the netlify server's address in your domain name providers portal. Just google <strong>how to add cname and a records in godaddy|hostagtor|</strong>.

Netlify have documented all the steps in a very nice way. It will hardly take you more than 30 minutes configure it. It usaully to takes some time (24 hours) for the DNS change to reflect.(To check quickly, you can be on some VPN (other country location), and you can check your site. When you are other country vpn, you won't get cached DNS)

![Image](dns-resolution.png "DNS Resolution")

<strong>In the whole setup for this blog, I only had to pay for the domain name, which came around 700 INR for a year.</strong>


A simple Blog is a powerful way to share knowledge. I am hoping, that I will write a few knowledgable ones in 2019.

##Wish you all a very happy new year !!
