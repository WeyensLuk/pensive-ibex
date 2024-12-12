+++
title = 'The Dark Eye on Steam Deck'
date = 2024-04-08
tags = ['gaming', 'retro']
+++

So I joined the [Adventure Game Club](https://dosgame.club/@adventure) last month and decided to join in for the month of April. The game of the month? [The Dark Eye](https://www.mobygames.com/game/1782/the-dark-eye/). It's a game which I hadn't heard of and would never have played if it weren't for this club of enthusiastic gamers with an immense knowledge of the scene. Which is exactly what I was looking for, those gems of the genre that didn't get the credit they deserved at the time of release.

I also recently purchased a Steam Deck, so I wanted to play the games on my Steam Deck. And that's exactly where things started to get a little more difficult. At first I thought things wouldn't be that hard, the game was abandonware, so it was freely available for download. I googled it and immediately found a link on [MyAbandonware](https://www.myabandonware.com/game/the-dark-eye-3ij). But just unpacking the ISO file and loading this in ScummVM didn't give me a recognized game. 

Okay, sure thing, I can fix this. After some googling I found the [ScummVM Wiki page for The Dark Eye](https://wiki.scummvm.org/index.php?title=The_Dark_Eye). This has some Install Notes which are quite important:

>The Dark Eye has key files stored in an installer archive. You will need to run "SETUP/DKYINSTL.EXE" in a Windows VM, then copy the full contents of the CD into the folder that gets created (usually "C:\DARKEYE"). ScummVM should then recognise the game.

Not only that, but a little further down the following message is added:

>As of this writing, testing has been done with the Expert Software release of this game. Other releases, such as ones marked as version 1.0.3 have not been fully tested.

The initial download I found was, of course, version 1.0.3 and not the version I needed. I them remembered that [archive.org](archive.org) has turned into so much more than just a website archiver, any books that have come into public domain, any abandoned software or basically anything that is worth saving is hosted on it. I searched for The Dark Eye and found [a version that is compatible](https://archive.org/details/the-dark-eye_202110) with ScummVM (though this was only visible after downloading the file and not mentioned on the page itself). 

Success! Now I just needed to run the installer on my Windows laptop and get the necessary extra files. 

!["Blue error message from Windows telling me the app can't be run on my PC"](this-app-cant-run-on-your-pc.png "Figures it wouldn't work")

Okay, sure... I just need a Win95 VM to install the files and I'm good to go. Again, [archive.org to the rescue](https://archive.org/details/windows_95_vdi)! You'll need [VirtualBox](https://www.virtualbox.org/) for this to work. You can add a new VM with the following steps:
1. New
2. Name your VM (if you name it **Win95** Virtual Box will autodetect the OS version you're trying to install)
3. Next
4. Make sure you give the device no more than **480MB** of memory. I used 256MB.
5. Keep the default of 1 CPU.
6. Next
7. Use an Existing VHD file
8. Browse to the location of the VDI file you downloaded from archive.org
9. Finish

After starting the VM, I was presented with another error message:

```
While Initializing device IOS: Windows Protection Error. 
You need to restart your computer.
```

Modern CPU's are too fast for poor old Windows 95 (any CPU that's faster than 350MHz, really) . So a fix is needed to patch the CPU firmware. This can also be downloaded form [archive.org](https://archive.org/details/fix-95-cpu-v3-final). Just follow these steps to patch your VM:
1. Settings -> Storage
2. Select your CD drive
3. Click the CD icon on the right hand side
4. Select the ISO file you downloaded from archive.org
5. Boot the VM
6. You'll get some red on black text. This is the installer, complete the process.
7. Power off your machine
8. Remove the ISO file from your CD Drive

Just one more step if you want to reuse your VM without any additional installed software at this point. If you don't care about this, then go ahead and skip to the next paragraph.
1. Click the context menu next to your VM, and select Snapshots
2. Take a new Snapshot, this is your clean install bootable Win95 machine

Good to go! Alright, so now Win95 finally boots up. Now we just need to install The Dark Eye and we can finally get on with the good stuff. So, go ahead and load the ISO file for The Dark Eye in your VM's CD drive. Boot up the machine, and use explorer to install the game (you don't need Quicktime, we're only interested in the extra files). After installation they can be found in `C:\DARKEYE`.

The only issue that remains is how to get these from the VM to your host machine? Win95 doesn't provide an easy way to copy paste files from the VM to your host. Luckily, there's a neat little workaround. Go ahead and power down your machine.
1. Click the context menu next to your VM, and select Snapshots
2. Select the Current state row
3. Clone the machine (the little sheep icon on top)
4. You don't need to change any of the default settings (should they ever change, the important was is that you create a full clone and not a linked clone)

Now navigate to the folder of your newly cloned VM. Locate the VDI file and open it with 7zip. There you go, this is the C: drive of your machine and you can extract the DARKEYE folder from it, add it to the contents of The Dark Eye ISO and send this to your Steam Deck. Add the game through ScummVM like you would any other game and you're set. 

You don't need the cloned VM anymore after this point. The main reason for doing it this way, is that the VDI is saved as the initial state of a VM, any changes you make after initial creation are stored in a different VDI file which is patched on top of the main VDI file. But these are not stored as browsable files and folders, they're some kind of scratch file containing changes I didn't bother to dig into.

A little more effort than I bargained for, but I'm looking forward to starting it. And hey, I have a Win95 VM ready to go in case I ever need it.