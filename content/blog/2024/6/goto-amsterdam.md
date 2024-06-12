+++
title = 'goto Amsterdam'
date = 2024-06-12
tags = ['coding']
+++

I like the goto conference. Talks are more on an architectural level, and less about the new silver bullet out there. Companies also come talk about the pitfalls and talk about the mistakes they made along the way. Above all, I love Amsterdam. It's a city that shouldn't be able to exist. When you look around, many of the houses are just barely holding on. Floors of buildings just zigzag there way up and somehow that's okay. 

## Day 1

### Is It Time To Version Observability? (Signs Point To Yes)
#### Charity Majors

The first session of the day was a keynote session by [Charity Majors](https://charity.wtf) on Observability. She made the case that we should evolve towards a new version of Observability. Think more in terms of [wide events](https://isburmistrov.substack.com/p/all-you-need-is-wide-events-not-metrics) and [OpenTelemetry](https://opentelemetry.io/) and less about just throwing logs into a system and hoping you'll find what you need when you need it most. One way to implement these wide events, might be by using [canonical logs](https://stripe.com/blog/canonical-log-lines), as discussed by [Brandur Leach](https://brandur.org/) (back when he was still employed by Stripe).

In Belgium, we have this saying **"meten is weten"**, it's a very simple idiom which translates to "measuring is knowing". It's mostly used in construction (by physically measuring distances in order to be sure you don't cut anything too short), but I think it holds for software development too. I'm a big believer in observability and creating a comprehensive trace of what your application did. A good observability stack creates so much value when you finally get to the hard part, when greenfield is done and you release your product into the wild.

Some other random thoughts I picked up on during this talk:
* **Testing in production**, Charity believes that your job is a Software Engineer is only done when you have verified that your changes work in production. I agree. In a world of **true** Continuous Deployment, I would urge every developer to do this. In my current setting, we still have fixed releases and a feature might not hit production for a month or more. 
* **The smallest unit of software delivery and ownership is a team**, this resonates very well with my own beliefs. No single individual should be responsible for a piece of software. A sense of shared responsibility should be prevalent, and it's a tech leader's job to facilitate and encourage the feeling of shared responsibility among all members of the team.
* **It's a tech leaders job to build and monitor feedback loops**, I think this statement was meant to make a case for Continuous Deployment. But I feel it also holds for creating feedback loops with people. A tech leader should know what's going on in their team. They should build a rapport with other members of the team, in order to know where frustrations, troubles and pitfalls lie.

### The C4 model - misconceptions, misuses and mistakes
#### Simon Brown

[Simon Brown](https://simonbrown.je/) talked about his [C4 model](https://c4model.com/). He started off by explaining what his C4 model is and why he conceptualized it, all of that can be read on the C4 model website, his slides were basically the images on the website. It's followed by the comments and remarks Simon has read or heard about his C4 model, and why they're false. The key takeaways are listed below:

* Difference between a **container** and **component** is whether or not it is a deployable unit. If so, then it's a **container**!
* Event Driven Architecture can be represented by the C4 model, just don't put your Message Broker in the middle for a hub and spoke diagram. Instead, use topics to describe how (micro)services communicate with one another.
* C4 is notation independent and visualisation is open for interpretation. You might want to use [D3.js](https://d3js.org/) or [Ilograph](https://www.ilograph.com/)
* Micro frontends can be mapped with C4, usual mistakes come from not understanding how to use micro frontends. [This article by Cam Jackson](https://martinfowler.com/articles/micro-frontends.html) does a great job of explaining how to implement them.

### Bottom-up Architecture - Bridging the Architecture Code Gap
#### Oliver Drotbohm

The talk started off with a couple of book recommendations, some of them that have already been recommended to me by friends, so I'll have to bump them up my to-read list.

* [The Programmer's Brain](https://app.thestorygraph.com/books/84f82468-5179-4ebe-88ee-7d4c608ce5db), by Felienne Hermans
* [Sustainable Software Architecture](https://app.thestorygraph.com/books/8faf387b-090e-4f36-a36b-f39b15999c3d), by Carola Lilienthal 
* [Just Enough Software Architecture](https://app.thestorygraph.com/books/dc21c3c0-5c73-4ec1-b008-adb9af3e6924), by George Fairbanks

The whole point of this talk was to introduce ways for your code to enforce DDD rules. The typical example that was given, was that an Aggregate Root is not allowed to directly reference another Aggregate Root, except by Id. Oliver has a heavy java background, so some of the tools he mentioned are leaning towards Java, but alternatives will be available in other languages.

Tools exist to enforce this behaviour, like [jQAssistant](https://github.com/jqassistant) and [ArchUnit](https://www.archunit.org/). But these check the code after the fact. Instead, Oliver devised xMolecules (supporting Java, dotnet and php, although support for the last two aren't on par with Java) which uses the type system to enforce DDD rules at compile time. 

### A break that took longer than expected

At this point we visited a partner booth by [Navara](https://navara.nl/), we didn't really talk a lot about what they do, but they had me hooked when they asked if I liked puzzling. We were presented with [a puzzle box](https://www.idventure-shop.de/Cluebox-Escape-Room-in-a-Box-The-Trial-of-Camelot) that needs to be solved and my colleagues and I immediately went to work. We got two parts open pretty quickly, only to struggle for a while on the next step. Once we get it rolling again, the final puzzle showed itself. We took a break from the puzzle at this point, to attend the next talk on OpenTelemetry.

### What is this OpenTelemetry thing?
#### Martin Thwaites

There's not much to be said here. It was an introduction into what OpenTelemetry is, where it started and where it stands now. A quick collection of my notes:

* Logs are for people, traces are for machines
* Structure your logs
* Auto-instrumentation seems neat, but won't fit your needs in the long run
* The OpenTelemetry Collector is a centralized tool that allows you to config what gets sent to who
* [Baggage](https://github.com/w3c/baggage) is a w3c specification that is implemented by OpenTelemetry, but is not part of the open standard of OpenTelemetry

### Another short break and trip to Waterstones

Back to the puzzle box and the break we took did us well, less than 10 minutes after arriving at the stand the final puzzle was solved. We even put the whole thing back, fun little puzzle that saved me from spending €40 to get my own copy, ha!

Now, I like reading books preferably in English, we don't have a lot of choice when it comes to English books in my home town or nearest city. So whenever I go to Amsterdam I would be remiss not to visit Waterstones. The selection is immense and I always find something of note to take home with me. No big surprises this time, just some books that have been on my radar for a while.

* [From Hell](https://app.thestorygraph.com/books/d7ccd765-59e1-4b64-84e6-c1c4ddf67f56), a graphic novel by Alan Moore, drawn by Eddie Campbell
* [The Bullet That Missed](https://app.thestorygraph.com/books/e4cedf44-5cff-4ddf-816c-00ef488fc58b), by Richard Osman
* [The Last Devil To Die](https://app.thestorygraph.com/books/ec858c60-cbc3-493c-8efd-d4e1374881f1), by Richard Osman
* [Humble Pi](https://app.thestorygraph.com/books/14bf9567-51dc-42e1-8b52-bab0faa62585), by Matt Parker
* [Soldiers: Great Stories of War and Peace](https://app.thestorygraph.com/books/5b8b1886-79e2-4904-bc87-34f902e9570b), by Max Hastings

I've read a couple of graphic novels by Alan Moore already but From Hell was still missing from my collection. I've heard some great things about it, so I hope it will be just as good as I've heard. The topic of the book and the mystery of Jack the Ripper is a personal fascination of mine. Even though the events itself are horrendous and gruesome, there's this thing about a mystery that just attracts my attention (much like the afore mentioned puzzle box).

Picking up the last books I haven't yet read from the Thursday Murder Club by Richard Osman, and finding out The Last Devil To Die is a Waterstones edition book with bonus content. Which is fun for me, because more content, but unsettling in its own right.

Humble Pi is a collection of stories where humanity made math errors and what happened because of them. One of the most well known stories is the [1999 Mars Climate Observer mission error](https://everydayastronaut.com/mars-climate-orbiter/) where the probe sent measurements in Newton seconds, but the ground station was reading these numbers as pound seconds. I'm stoked to read more of these and learning about maths along the way.

Soldiers is a gamble, it was a deal book, but the blurb sounded interesting and military tactics are something I wanted to read more about.

### There's no AI in human: Navigating The Intersection of Technology and Humanity
#### Imran Rashid

I didn't make a lot of notes during this talk. But it was a great eye-opening talk about the use of mental space by using phones, but especially apps by big corporations like Instagram, TikTok, Facebook, etc... His point came across well, he used Daniel Kahneman's framework of Thinking Fast and Slow (System 1 and 2) to to explain the 0.4s initial emotional response to an input, and the 1s thought response if the initial emotional response didn't yield the desired result.

The talk then continued about the effects of this behaviour on children and how clear statistical evidence is available that since the introduction of smartphones in our everyday life, signs of mental health and suicides in children have increased. He ended the talk with a killer line that really resonated with me:

>Algorithms are raising children more than us.

## Day 2

### Lessons From The Pitlane
#### Marc Priestly

Marc told us his story of how he started as a pit crew member with McLaren. The extraordinary circumstances in which he worked, and the drive for improvement facilitated by Ron Dennis, then owner and CEO of McLaren. It was a very entertaining story that I won't recount in full here, but the key takeaway elements were that you deliver a certain product (in his case a F1 car) and behind the scenes hundreds if not thousands of people are making that happen. Excellence comes from trusting each and every person around you as experts in their field, and together driving the process forward. Innovating, questioning and continuously driving forward.

### The best programmer I know
#### Dan North

Wow. This talk just had it all, each and every point Dan North pointed out is exactly how I feel what a programmer should be doing. It even highlights several points I'm trying to change at my current employer. You should really watch the full talk once it's uploaded to goto's channel.

**Just start**. Stop procrastinating. If you know that you don't know what you're doing (yet), then just start with what you know and iterate on the results. Try, fail, learn, repeat.

**Build a product**. Code is just the means to deliver the product. If you could deliver the product without code, then that would be preferable. Study the domain, learn how it works and represent it in the code. Watch your users, what frustrates them? Like. Literally watch your users. Go sit next to them, wait for that sigh of frustration and ask about it. These internalized behaviours of users will never make it to a feature list, and yet they lose hours of time on a monthly or yearly basis by doing things the way they are used to.

**Solve for now**. This isn't a universal truth. Solving for now, works better in business applications where you iterate and deliver fast. For designing programming languages this won't work. The time to delivery is too high and you have to put in more thought about how you build the solutions that your users are going to use. 
Learn to see what is really there. Solve the problem that you really have to solve, not what you think is the problem. Strive for simplicity. Be mindful when bringing in a library into your code, you open yourself up to a potentially wider security risk. If you bring in a full-featured library that you will be using in two or three places, then you might question whether you really need a library for it, can you solve it yourself? Or better yet, is there a whole different approach that might be more suited to the few cases you have?

**Choosing the right tool** for the *product*, not the *team*. Don't just default your solutions based on what the team members know and can implement quickly. Think about what the product needs to do and which tools are best suited for the task at hand. Programming languages are learnable. Teams can learn and will evolve around the choices that have been made. Do the simplest thing, not the easiest, as presented in a [great talk by Rich Hickey](https://www.youtube.com/watch?v=SxdOUGdseq4). System 1 tells us what the easiest things are, System 2 helps us picking out the right things. The right tool might change over time. **Make the change easy, then make the easy change**

**Make the change easy**. Minimise the blast radius. Self-contained parts, this might be a microservices architecture, but more options exist. Dan talked about Replaceable Component Architecture, where your applications have a hard shell and a soft center. The hard shell is the API or the outward facing aspects of the application and the soft shell is the internal business logic. Use spikes when implementing features. Spike an idea and stabilize over time. When do you stabilize? When you revisit that code. Dan has a work ethic where he writes **TODO** statements in his spiked code, clearly explaining why certain shortcuts are used and how it should be written. Don't overinvest, do what's necessary for now. If the spike is no longer used or needed, then just delete it and leave it behind, since you haven't overinvested the time lost is minimal. Reduce, reuse, recycle. If you have big things, turn into smaller pieces. If you have several small pieces and tomorrow brings a better way to solve a certain issue, just delete the old code and write the new code. When talking about architectural choices, also think about the **reversible cost**. If change is easy, iteration is easy.

**Be a polyglot**. Explore different languages, tools, paradigms. Your mileage may vary but the [Advent of Code](https://adventofcode.com/) is a great time to learn a new language! Be **full-stack**. Even if you're only coding backend calls at the moment, think about the frontend. Think about how you would implement the frontend. If you're stuck writing backend code, you're not a backend dev, you're a full-stack dev who just happens to be writing frontend code. Don't stop at software, be interested in the hardware as well. 

**Care about the team**. Find joy in helping others. Send the team home at the end of the day. Be kind. Assume everyone is doing their best. Build psychological safety. In a psychologically safe zone the following mean:
* I need help = COLLABORATION
* I have a question = I WANT TO LEARN
* I disagree = I WANT TO IMPROVE THINGS

**Staying current**. Join communities, don't be afraid of joining communities that think differently to yourself, you might learn from it! Try new things (but remain sceptical). Practise, practise, practise. Try new things and know that you will be rubbish when you start.

**Care about yourself**. Have interests outside of programming. Go home on time. Be kind to yourself.

### Developer productivity
#### James Lewis, Dan North, Michaela Greiler, Birgitta Böckeler, Charity Majors

Three topics were touched upon by the panel. 
1. Why do we care about developer productivity and how do we measure it?
_We don't know how to measure productivity effectively._ Management needs to know why they have to pour money towards a certain tool. In order to know that a certain tool is delivering, productivity needs to be measured. Are the costs worth the benefits?

Productivity is a bogus statistic for employee evaluation. Some team members' sole job might be lifting up other team members. Without that employee the whole team might crash and burn, no hard statistic or point of data will point to this person filling that particular role.

Technical debt can be easily identified by asking the question "How confident are you making a change in this code?" or any other variation on this question. If there is no confidence making a change effectively, this is a smell for tech debt.


2. Will AI make programmers' jobs obsolete?
_We don't know how AI will shape the feature._ If you compare AI to calculators, it's just a tool that makes life easier and keeps you from making mistakes. It's an addition to your tool belt and not a replacement for your abilities.

3. Is it harder to onboard junior devs in a remote environment?
Physical environments are key for junior devs to pick up on cues on how other programmers are pair programming, overhear discussions, etc... In a fully remote world onboarding is still possible, but might be harder or take a longer time.

### You keep using that word
#### Sam Newman

Basically Sam talked about trying to define the term **asynchronous**. In the end no clear definition could be given, because more than one definition might be right, depending on context. Words and language are ambiguous, be mindful of asking what someone means when they use certain words. Your understanding might not match with their meaning.

### A Field Guide to Reliability Engineering at Zalando
#### Heinrich Hartmann

Heinrich talked about several processes they put in place to monitor incidents and measure on-call health (the number of times an individual or team was on-call for a production issue). Monitoring your systems by implementing Traces and spans throughout your system allows yourself to reduce the Time to Detect issues. Metrics should be viewed through the lens of the User. User Experience is key, if your servers are buckling, but User Experience isn't impacted, then you have an issue, but it isn't as important. 

An automatic incident alert should be as explicit as possible. Zalando uses the following template: `<feature>_<platform>_<error rate over benchmark rechead>_in the past <timeframe>`. For example: `Checkout_Mobile_Error rate >0.82% in the past 6 hours`.

When certain teams or individuals have higher incident rates than others accountability is demanded by managers and propagated upwards. 

Use distributed traces to have a full view of how your microservice environment is performing. Break through the "My service is healthy, it must be another team that's causing the issue" shrug-off mentality.

When incidents occur, use the Google template to perform post-mortems and log them formally. They should be searchable, readable and have action items that are SMART and can be verified by anyone that they have been put into action.