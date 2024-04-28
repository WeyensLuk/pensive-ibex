+++
title = 'Birthday gift gone wrong'
date = 2024-04-28
tags = ['coding']
+++

A friend of mine was celebrating his birthday the other day. And in preparation for it, I designed this little puzzle challenge. Basically, it's just a closed box with a numeric lock holding its contents hidden. On the bottom of the box I printed a QR code, leading to a [website](https://janisjarighoera.be/) where I edited the logos of boardgames (in his collection) to just show the first letter. Behind every logo sits another image, giving the final clue to opening the box. 

Anyway, I arrived at the party, gave the little treasure chest. He visited the site and immediately recognized one of the boardgames. He entered the name of the game, but nothing happened. To my utter dread, I just stood there. I had tested this. Locally, after deployment, desktop mode, mobile mode. Why didn't it work?

The day after the party I woke up early to try and debug what might have happened. I opened the website on my laptop, entered one of the correct answers, and as I expected, it just worked. I then opened the site on my mobile device, entered the same answer, but no dice. It just didn't do anything.

I started furiously scouring Google, hungry for answers. What might happen that Javascript worked on mobile but not on desktop? I did find some things about mobile browsers not always supporting the latest EcmaScript standards, so I transpiled my code to ES5 in the hopes that that might be the case. It seemed plausible, whenever I worked with javascript in production environments (or even for this blog) there's always a [Babel](https://babeljs.io/) step transpiling my code.

Click, deploy. No luck.

Hold on. My device is probably showing a cached version of the webpage. I just have to open an incognito window and try again. **Still no luck**. I tried some other things that didn't seem to make any sense to me, but I might as well try just in case. But nothing worked.

At this point I became desperate. I was doubting if my Javascript code even loaded. But instead of just putting a simple `alert` message to assuage any doubts, I decided to find a way to debug my code. Turns out this just isn't that easy on a mobile device. You have to enable Developer Options and then [enable Remote Debugging with Chrome Dev Tools](https://developer.chrome.com/docs/devtools/remote-debugging) on Android. 

Now this might just have been my lucky ticket, were it not for my extremely finicky USB-C port on my phone. It's horrible. There's only one cable in existence that still provides power to my phone (it's been chewed up by my dog and somehow is the only one that still fits). So whenever I plug my phone in, I fiddle, jiggle and twiddle for about 5 minutes before I hear the tune of a phone charging and thank all heavens that it survives another charge cycle.

But now when I had to plug it into my PC, it just didn't recognize it, and I couldn't enable USB debugging. So I had to go and find another option. And here's the interesting part, at least for me it was, I learned of [Eruda](https://eruda.liriliri.io/). A project to provide Dev Tools built into your webpage. It's awesome and mindblowing. You get a full-blown Console window, with all Error and console logging (and lots of other features as well, go check it out). I added the following script tags to my webpage and hit deploy:

```html
<script src="https://cdn.jsdelivr.net/npm/eruda"></script>
<script>eruda.init();</script>
```

Nothing happened. There's no gear icon in the lower right corner. It took me a while, but that's when I found my first stupid mistake. I added all `script` tags in the `head` of the HTML document. After I placed them just before closing the `html` tag (which is a best practice anyway and I'm not sure why I didn't do this from the start), it did work! Finally, I had a console window. I could start debugging and I was *sure* that my Javascript code loaded in correctly.

I entered one of the correct answers and got a console error. Guess what? Mobile keyboards auto-capitalize. Whenever an answer is exactly correct, I do an `#id` search over the HTML document with the user input. Of course that didn't return any results for the wrong capitalization and of course my code couldn't handle an `undefined` error.

It was a horribly stupid mistake, and if I had taken the time to write tests I would have definitely found the bug and fixed it. But I just wanted to box something together quickly and didn't think I needed tests to get the puzzle to work properly. 

**For all code, be they big or small, write test cases for every method call!**