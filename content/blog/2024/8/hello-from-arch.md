+++
title = 'Hello from Arch Linux'
date = 2024-08-10
tags = ['linux', 'sustainability', 'diy']
+++

My [Framework 16](https://frame.work/be/en/products/laptop16-diy-amd-7040) laptop arrived earlier this week and I finally had the time to put it together! I bought the DIY edition, and to be honest, I expected more DIY. The installation process was extremely smooth. I've setup desktop towers before and installing a PC like that took me way longer than it did for this laptop. Some things do come preinstalled. For example, the motherboard and CPU are already fit snuggly in place. The graphics module was already attached to the laptop. The only thing I had to do, was lift the mid-cover, install RAM and storage, put it all back and cover the whole thing with the mouse trackpad and keyboard. Then turn it over and install the extension ports. Oh yeah, I also had to attach the bezel. 

![Expansion ports](/img/blog/2024/8/hello-from-arch/framework16-expansion-ports.png)
![Expansion ports zoomed in](/img/blog/2024/8/hello-from-arch/framework16-expansion-ports-zoomed.png)

All of the connectors are magnetic, so it just fits in place easily, no fiddling with connectors or screws. The overall process was laughably easy. I'm not sure why anyone would want to be the prebuilt edition. I bought my own set of storage and RAM, because I found the framework options to be too expensive. For storage you can't really go wrong, so I went with the tried and true [WD Black SN850X 2TB M.2 SSD](https://www.tomshardware.com/reviews/wd-black-sn850x-ssd-review-back-in-black). Memory is another beast, you can't just plug in any old memory module and expect it to work. Framework has [a list](https://knowledgebase.frame.work/en_us/what-dram-memory-is-supported-by-framework-laptop-16-ryS2Xr3ch) with all the tested memory modules, I cross-referenced this list with user experiences on Tweakers (a Dutch techies forum) and ended up with Kingston DDR5 FURY Impact 2x16GB 5600. 

![Trackpad in my hands](/img/blog/2024/8/hello-from-arch/framework16-mousetrackpad.png)

After putting it all together, it booted up flawlessly first time. Excellent! Next step? Install Arch Linux. I had to borrow a USB stick from a friend, because I'm still temporarily living in my girlfriend's appartment and all my stuff is stored in a big container somewhere. Luckily, he came through. I did have some issues getting to boot from the USB stick, but it turned out this didn't have anything to do with the stick itself, but with the Secure Boot option in the BIOS. Arch Linux did mention this on their wiki, I just glanced over it (didn't even know I had Secure Boot). 

The installation process was fairly easy if you have some commandline and/or Linux experience. The last time I had a Linux boot on my personal machines was back in 2006-2009 when I had a Ubuntu dual boot. This marked the first time that I actually choose all the different components for setting up my Linux boot. I followed all the steps from the installation guide dilligently, didn't get any unexpected errors and was able to boot to the default bash shell of Arch Linux. When I wanted to install some more packages, I did come to the uneasy conclusion that I didn't install a network manager, so I couldn't configure an internet connection... D'oh! Cursing to myself, I was ready to retry the whole installation from scratch. Luckily, the second thought that came to mind was booting from the live USB, mounting the Arch Linux system and installing the network manager from the live USB. It worked and I was up and running.

Shortly after that I downloaded [Wayland](https://wayland.freedesktop.org/) and [KDE](https://kde.org/). I know my way around a terminal, but having a desktop environment is a bit more user friendly for my needs. Every free moment I have is spent browsing through settings and configuring my environment to my likings. I'm still discovering new nooks and crannies and like it a lot. I'm probably not all there yet, but I'm getting there. This blog post is written from Arch Linux!