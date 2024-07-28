+++
title = 'Discovery Tests'
date = 2024-07-28
tags = ['coding']
+++

I recently started a new job and found myself in the Go ecosystem. To be honest, it has been a bit of a shock. I've written .NET code for the past 15 years and know its ins and outs pretty well. As a language, I don't mind writing Go code. About the only thing that still bothers me is the `if err != nil { return err }` boilerplate code ad nauseam. But that's a topic for a whole different blog post (maybe in the future if I find the time?).

What I wanted to discuss is Go's ecosystem. The libraries that are (being) built for it, and their uses. The Go ecosystem is moving fast, with [many available libraries](https://github.com/avelino/awesome-go?tab=readme-ov-file). Some are actively maintained, some run behind the current Go version but are still in use in various projects. This might not be a problem at the time, but dependencies might break. Implementations may change over time.

Let's go back a few years. In a previous project we used [NHibernate](https://github.com/nhibernate/nhibernate-core) as our ORM of choice. But instead of just using NHibernate, previous engineers made subtle changes to the source code of NHibernate in order to "better support" the underlying legacy database schema. This wouldn't have been much of a problem if the changes were documented. However... Those same engineers copied the source code **with their changes** over to a local git repo, and in the process removing all historic information about which changes were made and why they were made.

At some point during my time at the company, we identified NHibernate as a point of frustration for developers, since the version we were using (v3.x if I remember correctly) was missing a lot of new features that would make are future lives easier. Obviously we didn't want to make the same mistakes of the past and did our best to _fork_ the existing NHibernate Github repo and only make changes to the source code if no other option was available.

The result was an effort of three to four months, of painstakingly identifying bugs and going through the source code, comparing it with the undocumented fork we had in our repo and making adjustments and tweaks along the way, until we had an implementation that had feature parity with the previous version.[^1]

Along the way, for every bug I discovered I wrote a **discovery test** in the source code of our application.[^2] The purpose for this was mainly to make further upgrades easier. Pull the main branch of the official Github repo into our fork, pull that into the existing application, run the tests and if everything remains green you're good to go.

These discovery tests serve many needs:

- Document the **expected behaviour** of the external library for your application
- Learning the possibilities of the external library in a sandboxed environment
- Sharing your knowledge with other developers in the team

This takes me back to the Go ecosystem and my current project. Incidentally, the library we wrote discovery tests for is also an ORM, namely [GORM](https://github.com/go-gorm/gorm). We were struggling with saving our associations. Let's say you have a Person, who speaks several Languages. And you have a PUT API call that wants to _delete_ the existing languages and instead _insert_ the new languages. Pretty straightforward right?

Well... By default GORM will only _add_ associations in the database. Take the following code for example

```go
person := &Person {
    Name: "Spock",
    Languages := []&Language{
        {Name: "Vulcan"},
        {Name: "English"},
    },
}
db.Save(&person)
// Result: 1 person Spock, with 2 spoken languages (Vulcan and English) in the database
```

If we were to make a change to Spock and wanted to add Klingon as a language, we could do something like this

```go
languages := []&Language{
        {Name: "Vulcan"},
        {Name: "English"},
        {Name: "Klingon"},
    }

var person Person
db.Where("name = ?", "Spock").First(&person)
person.Languages = languages
db.Save(&person)
// Result: 1 person Spock, with 5 spoken languages (2x Vulcan, 2x English and Klingon) in the database
```

Not exactly what we wanted right?

Luckily, GORM does provide an API for replacing Associations, aptly called `.Replace()`. So we changed our code to use that

```go
db.Model(&person).Association("Languages").Replace(languages)
// Result: 1 person Spock, with 3 spoken Languages (Vulcan, English and Klingon) in the database
```

Awesome! That's what we wanted. Except... There are still two floating Language records in the database. Their link with the Person Spock (through a PersonID column) has just been emptied. Not exactly what we wanted to achieve in our case. Okay, so then, what's next? GORM supports deletes through the use of the `.Unscoped()` method. Not exactly a meaningful name, but hey we'll settle with what we have.

This Unscoped method can be called on the `db` instance as well as the `Assocations` instance. So we have four different variations of use and dependning on what we want with our application code, one of these might be the implementation we're looking for.

```go
db.Model(&person).Association("Languages").Replace(languages)
// No deletes of languages, just remove the link between the language and the person

db.Unscoped().Model(&person).Association("Languages").Replace(languages)
// No deletes of languages, just remove the link between the language and the person

db.Model(&person).Association("Languages").Unscoped().Replace(languages)
// Does not remove the link between language and person, but performs soft delete

db.Unscoped().Model(&person).Association("Languages").Unscoped().Replace(languages)
// Performs hard delete of the languages
```

We documented these cases in our code as **discovery tests**, because their usage is so obscure and because we depend on an expected behaviour of one of these implementations. Should the maintainers behind GORM ever want to change the implementation or behaviour behind one of these calls, we have a simple unit test that will immediately pinpoint the issue after an upgrade. Which might save valuable debugging time in the future.

And any other developer in the team can check these examples and know exactly what the end result of the call will be.

[^1]: You can still find my changes [here](https://github.com/pratoservices/nhibernate-core), although I don't encourage making the same changes. It was a necessary evil that couldn't be avoided.
[^2]: Unfortunately I can't link to these, as said application is closed source.
