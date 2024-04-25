+++
title = "Installing a new PC"
date = 2024-04-25
tags = ['efficiency']
+++

I received a new laptop at work the other day. So begins the cycle again of having to tweak every little thing to the way I like it. I'm a tinkerer and I love to play around in settings and customization screens. Heck, I'll even hop in regedit willingly to get the specific behaviour I want.

But I never properly document all the steps I take to get there. I do a lot of tweaking in my IDE's and I thank all heavens that in recent years these settings can be saved to your account, so that I don't have to painstakingly redo every little thing.

Installing programs is easier. I always fall back to [Ninite](https://ninite.com/) to install the stuff I need. But lately, I have a lot more tools than Ninite provides. Sure, it's still a great tool, and it provides an easy and quick way to get you up and started. But what about [Brave](https://brave.com/), my browser of choice? It's not even an option. What about [Lightshot](https://app.prntscr.com/en/index.html), [Ditto](https://github.com/sabrogden/Ditto), [Obsidian](https://obsidian.md/) or any of the other custom tools? 

So this time around, I tried installing everything with [Chocolatey](https://community.chocolatey.org/)[^1]. It's a public repository, with packages provided by the community, which has its own risks, but on the whole community-driven tools haven't led me astray so far (you can tell I wasn't hit by the XZ backdoor). 

I found everything I needed and installed everything through Chocolatey. So now when I need to set up a new PC, I just have to run this handy little command:

```powershell
choco list -lo -r -y | % { "choco install $($_.SubString(0, $_.IndexOf("|"))) -y" }
```

And I get a list of install commands to run on my new machine. Finally free of all the manual hassle! 

Cool, now I just want to get rid of all the Windows bloatware crap. I used the [Win Debloat Tools](https://github.com/LeDragoX/Win-Debloat-Tools) by Plínio Larrubia. Highly effective, highly recommend. With just one click of a button all the useless crap like Weather apps and MSN News are gone. Just barebones OS, thank you. 

There's a couple of things I still had to do manually, like installing the [Jetbrains Mono](https://www.jetbrains.com/lp/mono/) font, setting up Ditto, Lightshot and Cmder with the settings I like. 

Overall I think this experience is still better than what I did before. I'm curious to hearing how any of you tackle this problem. Get in touch!

[^1]: I could have also tried [Winget](https://github.com/microsoft/winget-cli) but decided to go for Chocolatey which has been around for a while longer, hoping all tools I use can be found there.