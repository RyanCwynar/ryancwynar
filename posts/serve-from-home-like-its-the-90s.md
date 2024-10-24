---
title: Serve From Home Like it's the 90s
date: 2024-10-24
description: Fiber makes it practical to server your sites from home
---
A few months ago, I started tinkering with my home server setup. It all began when I looked at my cloud hosting bill and realized I was handing over about $100 a month to AWS to run a couple of **t2.medium** instances along with a few other small services. When I dug deeper into what I was getting for that price, I couldn't help but wonder: _why am I paying so much for such minimal computing power?_

That's when I had a eureka moment. 

## Why Self-Host From Home?

In the age of fiber-optic internet, the power of the servers in your house is often greater than the low-tier instances you're paying for in the cloud. I've got fiber that pushes **500 Gbps up**, and I realized I have **far more powerful machines** sitting idle in my house. These aren’t just average machines either — even my desktop can run circles around AWS’s low-tier offerings.

So, why not use that power? Especially since I’m still in the early stages of a few projects and not yet dealing with a heavy user load or massive revenue. 

It felt like a no-brainer. I decided to take a step back into the 90s, when running your own server at home was the norm, but with all the modern conveniences and efficiencies that we have today.

## The Benefits of Running Your Own Home Server

Self-hosting, it turns out, has a lot more perks than just saving money on cloud costs. Let’s break down some of the key benefits I've experienced:

### 1. **Cost Savings**

This is the obvious one. By using my own hardware, I no longer have to worry about those AWS bills or pay for third-party hosting. I have full control over my infrastructure with zero monthly server costs (other than electricity).

### 2. **Replacing Expensive SaaS with Open Source Tools**

Running your own server means you can replace paid services with **open-source** alternatives that often work just as well — if not better. Here's what I've switched to:

- **Automatisch**: This is my alternative to **Zapier**. It automates workflows, saving me from monthly SaaS fees.
- **Umami**: I now handle my analytics with **Umami**, a clean and efficient alternative to **Google Analytics** and **Vercel Analytics**.
- **PM2** and **Docker**: These two tools ensure all my apps are running smoothly and can be restarted effortlessly if anything crashes. They're the backbone of keeping my self-hosted services up and humming.

### 3. **Cloudflare Tunnel for Easy Traffic Management**

One challenge of running a server from home is dealing with IP exposure and managing your connection to the internet. In the 90s, you'd have to rely on a static IP and probably expose your machine to the entire web, but thankfully, **Cloudflare Tunnel** eliminates the need for that.

Cloudflare Tunnel routes traffic from the internet to my server without me having to worry about paying for a static IP or exposing my home IP. It's like having a protective shield over my home network, allowing me to serve sites and services securely.

### 4. **Working 'In Production' Feels Faster**

When you're self-hosting, you're effectively working on the same machine that’s also serving the web. There's no lag between pushing a change and seeing it live because your development environment _is_ your production environment.

As a result, I can make updates, test them immediately, and iterate much faster. It's hard to describe how much this boosts productivity until you experience it.

## Why This Works Now (And Why It Didn't Before)

The ability to run your own servers from home is nothing new. In fact, it's a throwback to the early days of the web, when self-hosting was the only way to get a site online. So why is this approach suddenly practical again?

The answer is **fiber internet**. Back in the 90s and 2000s, internet connections were just too slow to make self-hosting feasible for most people. But now, with the advent of gigabit and fiber-optic connections, the game has changed. Upload speeds are fast enough to serve modern websites and applications without the latency issues that plagued earlier generations.

Combine that with the fact that modern home computers are more powerful than ever, and suddenly self-hosting is not only possible — it’s actually a great option for anyone looking to save money and gain control over their infrastructure.

## Final Thoughts

Self-hosting from home isn’t for everyone. It requires some technical know-how, a bit of upfront setup, and the willingness to troubleshoot things yourself. But for me, it’s been an eye-opening experience in terms of cost savings, control, and speed.

The cloud is great for scaling once you have the traffic and revenue to support it, but for the early stages of a project — or if you’re a small business or solo developer — the tools are now in place to run your own server from home just like it’s the 90s. Only now, the internet is faster, the software is smarter, and the possibilities are endless.

So if you’re tired of paying for underpowered cloud machines, why not look into hosting from home? You might be surprised at what your setup can handle.

---

I hope that inspires people to rethink their hosting setups. What do you think about self-hosting? Are you already running a server at home, or is it something you’d like to try?