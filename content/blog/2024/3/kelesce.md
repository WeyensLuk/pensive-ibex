+++
title = 'Keleşce'
date = 2024-03-25
tags = ['puzzle']
+++

![The first ten words of Kelesce](/img/blog/2024/3/kelesce/kelesce.jpg#center "The first ten words of Kelesce")

Last week I was tipped off to a puzzle hosted by [Alperen Keles](https://www.alperenkeles.com/). I opened the link and was immediately intrigued. Any puzzle with visual elements where you aren't given any information except for the simple task of deciphering what you see is a delight. 

If you want to give it a go for yourself, [the puzzle](https://puzzle.alperenkeles.com/) is still up and accepting answers. In this post I'll be explaining my solving process for the puzzle, so stop reading here if you want to avoid any spoilers.

The obvious thing to see is that any given square consists of one or more lines. None of the squares had an obvious repeating pattern, so that ruled out that the space character was encoded. Some squares are fairly simple (2 and 4 in the image above), others are quite complex (squares 9 and 10). That led me to believe that every square had to represent a single word.

Given that a square is a word, then focussing on the squares with only 1 line is the next logical step. The English language only knows two single-letter words, being **a** and **I**. This seemed to make sense, I then started looking for squares consisting of three lines, that looked similar. I was searching for **the**. A couple of matches sprung out to me, and confirmed I was on the right path. 

However, I couldn't find a complete match. There seemed to always be slight variations. At this point I was really invested in solving the mystery. I had no idea how many people the puzzle might attract and really wanted to be the first to solve it. Since the first two clues were up and available to anyone, it seemed only fair to also look at the information. I think future puzzles could benefit from opting out from hints and thus increasing the challenge, if this also could be reflected in the submissions. I think the puzzle could also be solved without the first hint, but it greatly sped up the decryption process.

So I now had a [plain text and the Keleşce equivalent](https://puzzle.alperenkeles.com/clue1). This immediately confirmed my earlier suspicions, a word is encoded to a single square, and every letter is encoded to a line within that square. The next things of note, is the pattern. Keleşce always starts it first letter going from North to East, followed by East to South, South to West and finally West to North. If a word is longer than 5 letters, the pattern just repeats. 

So next I focused on the first two words in the clue. *"It is"*. The letter *i* was encoded differently in both squares. That annoyed me. At first I thought Keleşce might be case sensitive. That uppercase I and lowercase i had two different encodings (much like different entries in the ASCII table). However, when I double-checked this assumption with another word, the letter *i* had yet another different line paired with it.

So, clearly the start and end position of a line had no relation to the letter being encoded. What was left? The area of the rectangle! I downloaded the image, opened my favourite image processor (paint.NET represent!) and traced the rectangle. But the letters *i* didn't match. Well, there goes that idea.

I took another look at the letter *a* standing all by itself in its square. This wasn't just a rectangle. This was a square! Sure enough, every time the letter a was encoded in Keleşce the resulting line formed a square. Sizes varied, but was always a square. That's when it hit me, its based on ratios. 

A has a ratio of 1, the length of both lines is exactly the same. Once I had checked my assumption by running the theory against several different occurrences of the same letter, it was just a matter of mapping every different ratio and then solving the original text.

Although the Alperen seemed to be under the assumption that the puzzle could only be solved by programmers (and even though I am programmer) I didn't write a single line of code, just using an image processing tool to calculate the different line lengths. I'm sure I could have written a tool for it, but I would have spent more time figuring out how to implement the interpretation of the different lines, then solving the first few words manually and hoping the text would be excerpt I could google.

And lo and behold, the text was indeed the first 4 sentences of the book ["The Ones Who Walk Away from Omelas"](https://app.thestorygraph.com/books/8607788e-b40e-4db5-8ba1-5e7f0691f3ea). I entered my answer in the submission box and pressed send. 

**The answer is incorrect.**

I was dumbstruck. How? I was so sure. Everything had been explained, there were no loose threads. I pushed it again, expecting a different result.

**The answer is incorrect.**

I cleaned up my text by deleting any punctuation.

**The answer is incorrect.**

Of course! Keleşce does not do capitals, I lowercased the whole text.

**The answer is incorrect.**

I wasn't going to leave it at that, I got into contact with Alperen, gave my answer and asked if I was missing anything in the puzzle. Turned out that either my submission or Alperen's submission checker had an error that some spaces were left out of the submission. He fixed my entry, and there you go. First, and at the time of writing, only solver of Keleşce.

I had a lot of fun solving this one. As I mentioned previously I think it could have been more long-lasting by opting out of the hints. I'm sure it could have been solved then as well. I asked Alperen if Keleşce was idempotent, ie. would the same input result in the exact same output? He confirmed my suspicions that this wasn't the case. The lengths of every line are chosen randomly, the only constant that had to be present was the ratio. 

That's okay, it didn't get in the way of solving the puzzle, but I wonder if it could be improved by implementing idempotency. For example, giving every letter a certain base length for one side (and applying the ratio for the other), then whenever the letter repeats in the plaintext, its base length is incremented as well.

But these are really just minor remarks on an otherwise well thought-out puzzle. Great work, Alperen and thanks for the fun!