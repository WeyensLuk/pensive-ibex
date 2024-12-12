+++
title = 'Risks of GenAI'
date = 2024-03-31
tags = ['coding', 'artificial intelligence']
+++

I've been using [Github Copilot](https://github.com/features/copilot) for a couple of months now. It was an experiment in our company to test its use and see what benefits it might provide to developers. I have to say I was blown away when I saw what it could do. I was happily writing some tests in our code base, calling Builder objects to create the necessary setup data. Out of nowhere I get this suggestion of Copilot for the rest of the code for the Builder call. Sure it wasn't exactly what I needed, I still had to make a few changes and tweaks, but it blew my socks off. At one press of a button I get several lines of code which approximately is what I need at that time. Oh, did I also mention that our codebase is written in **Dutch**? 

![Unlimited power](unlimited-power.jpg "Unlimited power")

I was washed over by this feeling of unbelief, of bewilderment and amazement. What would this allow me to do? What else could it do? Could I just get it to write any code for me and be done with it? 

Maybe, kinda? Every time I wrote a new method, Copilot would come up with its suggestion of what the method should do. It was never a case of just accepting its suggestion and moving on. It was more along the lines of, review the suggestion, make necessary changes, accept and move on.

So suddenly I was **reviewing** code, while I actually should be writing code. This isn't bad in itself, but I do find both tasks require a slightly different mindset. You could argue that this isn't any different from copy pasting code from Stack Overflow, or any other part of the codebase, and you're right. It isn't. The difference is that the suggestions are given regularly and profusely. Copy pasting code was a deliberate act when you got stuck on solving a certain issue. Now, you just get suggestions flung at your face and you can either choose to implement them or ignore them.

However, what's even worse is that Copilot will suggest a certain implementation. If its suggestion is good enough for your needs (just needing a couple of tweaks), you'll accept it and move on. We've just created a new function that does what we need. We haven't checked if there's another function that could meet our needs and reuse it. 

GitClear have studied the trend of GenAI in the past 18 months and published a [whitepaper](https://www.gitclear.com/coding_on_copilot_data_shows_ais_downward_pressure_on_code_quality) on the subject[^1]. They've identified a couple of different metrics they tracked across several years. The ones that sprung out to me are the "Moved" and "Churn" categories. 

### Moved code

>A line of code that is cut and pasted to a new file, or a new function within the same file. By definition, the content of a "Moved" operation doesn't change within a commit, except for (potentially) the white space that precedes the content.

The amount of moved code since GenAI has come into our lives, has dropped by 5 to an estimated 10% over the past two years[^2]. This fits with my own experience, if you're given a gift-wrapped piece of code, why check if you could have reused something else?

### Churned code

>For a line to qualify as "churned," it must have been authored, pushed to the git repo, and then reverted or substantially revised within the subsequent two weeks. Churn is best understood as "changes that were either incomplete or erroneous when the author initially wrote, committed, and pushed them to the company’s git repo."

Within two weeks of committing certain lines of code, they have been **reverted or revised** completely. That's a worrying thought if I ever read one. And yet, since GenAI this has gone up, by 1.5% in 2023 to an estimated 3% in 2024.

As developers, it's in our nature to be lazy. This used to be described as a good thing. Why should I write code if I can reuse an existing one with minor changes? Since the emergence of GenAI, this inherent laziness is suddenly turned into a flaw. Why should I write code if GenAI can write it for me?

I think it's this trait that is at the root of the code churn increase. As with any tool, mastery comes with knowing how to use it. In my opinion, GenAI (at the time of writing) is really good in solving two problems.

The first is getting rid of **blank page syndrome**. Many devs don't know where to start if asked to write a certain feature from scratch. Many even admit to not knowing how to setup a new solution or project. Preferring to start from an existing project and adapting along the way. Both approaches have their merits, but if you want that flying start, GenAI can provide that.

The second is helping with **menial tasks**. Calling a Factory with a lot of parameters, calling a Builder class to get the object you want and any other boring tasks that GenAI could write for you with the press of a button. This just helps you do other stuff faster and keeps you in a flow state.

I'm still planning on using Copilot, mainly for helping with menial tasks. I'll also be looking to turn off automatic suggestions by Copilot, instead opting for suggestions when **I** ask for them.

[^1]: You have to provide a mail address and name, if you want to protect your privacy there are plenty of [tools](https://temp-mail.org/) to help you do that.
[^2]: Raw data is available in the Whitepaper. The only caveat is that for every year of the analysis more repos have been analysed than the previous year, which is way percentages is the only thing that makes sense to talk about. But I wonder if the population size is large enough to make certain conclusions (2020 has less than half the amount of repos analysed in comparison to 2023)