+++
title = 'Test code smells'
date = 2024-11-28
tags = ['coding']
+++

{{< quote quote="It's just test code." author="Anonymous" >}}

Have you ever heard this phrase? I can't wrap my head around the reason why test code should be treated with any less respect and care as production code. Our test code ensures production code keeps working as expected, thus it's our duty to maintain the test code as meticulously as the production code it guards.

Here are the 5 most common test code smells I've seen you might want to look out for in your own projects. 

## 1. Unstructured tests

Tests should follow a neat structure of Arrange-Act-Assert, first mentioned by [Bill Wake](https://xp123.com/3a-arrange-act-assert/) in 2001 and popularized by Kent Beck in [Test Driven Development: By Example](https://www.oreilly.com/library/view/test-driven-development/0321146530/). Do check out the excellent post by Bill Wake on the reasoning for this. 

I'll briefly summarize it here, you want to group your test code in three blocks. Arrange, where you set up the state for the part of the application that you are testing. Act, where you call production code. Assert, where you check the results of the code that is being tested.

A personal preference of mine is to leave a blank line between the Arrange, Act and Assert blocks. No need to annotate those blocks with comments, a simple blank line suffices in most cases. In more complex cases you might want to refactor the Arrange blocks to their own function(s).

Typically if you can't describe a test in the Arrange-Act-Assert pattern, you might want to create multiple tests for the different states you're trying to write a test for.

### BAD

```csharp
[Test]
public void Period_ExtendsAndShortensPeriodIfProvidedDatesAreLargerOrShorterThanCurrentEndDateRespectively() 
{
    var period = new Period(new DateTime(2024, 10, 1), new DateTime(2024, 10, 31));
    var extendDate = new DateTime(2024, 11, 15);
    
    period.ExtendTo(extendDate);
    
    Assert.That(period.End, Is.EqualTo(extendDate));
    
    //another arrange
    var shortenDate = new DateTime(2024, 11, 10);
    
    //another act
    period.ShortenTo(shortenDate);
    
    //another assert
    Assert.That(period.End, Is.EqualTo(shortenDate));
}
```

### GOOD

```csharp
[Test]
public void Period_ExtendTo_ExtendsPeriodToTheNewDateIfNewDateIsLargerThanCurrentEndDate() 
{
    var period = new Period(new DateTime(2024, 10, 1), new DateTime(2024, 10, 31));
    var extendDate = new DateTime(2024, 11, 15);
    
    period.ExtendTo(extendDate);
    
    Assert.That(period.End, Is.EqualTo(extendDate));
}

[Test]
public void Period_Shorten_ShortensPeriodToTheNewDateIfNewDateIsSmallerThanCurrentEndDate()
{
    var period = new Period(new DateTime(2024, 10, 1), new DateTime(2024, 10, 31));
    var shortenDate = new DateTime(2024, 11, 10);

    period.ShortenTo(shortenDate);
    
    Assert.That(period.End, Is.EqualTo(shortenDate));
}

```
## 2. General Names

As with production code, the most important thing to think about is clear communication of what you're doing. As we are writing code, the best way to do that is for us to write meaningful method and variable names. 

It doesn't suffice mentioning in a test name that an error is expected. You have to be more specific. Under which circumstances? What kind of error? Being specific creates for robust tests with clear boundaries. It adds to the living documentation of your application, clearly documenting the possibilities of the API which can be found by searching for all references of the method in any modern IDE.

If a `CausesFailure` test fails on my local branch or CI, I'll have a hard time trying to figure out why it failed, and why it shouldn't fail. By giving tests a clear and specific name, you're giving future developers a leg up in being able to maintain the tests you have written to ensure the application keeps running smoothly.

### BAD

```go
//Test name unclear, why does it fail?
func TestPeriodExtendToFailure(t *testing.T) {
    period := period.New(time.Date(2024, 10, 1, 0, 0, 0, 0, time.UTC), time.Date(2024, 10, 31, 0, 0, 0, 0, time.UTC))
    
    err := period.ExtendTo(time.Date(2024, 10, 15, 0, 0, 0, 0, time.UTC))
    
    require.ErrorIs(t, err, ErrDateIsBeforeCurrentEndDate)
}
```

### GOOD

```go
func TestPeriodExtendToFailsIfProvidedDateIsBeforeCurrentEndDate(t *testing.T) {
    period := period.New(time.Date(2024, 10, 1, 0, 0, 0, 0, time.UTC), time.Date(2024, 10, 31, 0, 0, 0, 0, time.UTC))
    
    err := period.ExtendTo(time.Date(2024, 10, 15, 0, 0, 0, 0, time.UTC))
    
    require.ErrorIs(t, err, ErrDateIsBeforeCurrentEndDate)
}
```

## 3. Assert all the things

Your test should only contain assertions that are related to the condition that you are testing. The point of a test is to have a clear boundary of what you are testing, if code fails in this engineered very specific case, I know exactly what the cause is and where I should look.

If a test contains more than one assert, it might be unclear why test fails. I've seen this happen, mostly when a test is created by copy pasting an already existing test. The assertions aren't removed but instead are added to. 

I have also seen this at times, as sanity assertions. Where developers have added extra assertions in code to make sure a certain state is guaranteed within this test, even though these conditions are covered in other tests. Not only is this unnecessary clutter in the test when reading and understanding the test, it also causes the test to fail for reasons unrelated to the test condition.

### BAD

```javascript
describe('Period tests', () => {
    it('should initialize the class correctly', () => {
        const begin = new Date("2024-10-01");
        const end = new Date("2024-10-31");
        
        const period = new Period(begin, end);

        expect(period.Start).toEqual(begin);
        expect(period.End).toEqual(end);
    })

    it('should return the correct number of days in the given period', () => {
        const begin = new Date("2024-10-01");
        const end = new Date("2024-10-31");
        const period = new Period(begin, end);

        //Unnecessary assertions copied from the test above it
        expect(period.Start).toEqual(begin);
        expect(period.End).toEqual(end);
        expect(period.Days()).toEqual(31);
    });
});
```

### GOOD

```javascript
describe('Period tests', () => {
    it('should initialize the class correctly', () => {
        const begin = new Date("2024-10-01");
        const end = new Date("2024-10-31");
        
        const period = new Period(begin, end);

        expect(period.Start).toEqual(begin);
        expect(period.End).toEqual(end);
    })

    it('should return the correct number of days in the given period', () => {
        const begin = new Date("2024-10-01");
        const end = new Date("2024-10-31");
        const period = new Period(begin, end);

        expect(period.Days()).toEqual(31);
    });
});
```

## 4. Arrange noise

I'm a big fan of using the `Builder` pattern for creating setup data in tests. By default, the builder contains a valid object definition that you can just `.Build()` out of the box, but you can pass in multiple overrule statements, to mold the data to your needs. 

The drawback of this approach is the human nature of copy pasting, and not cleaning up the parts they don't need for the test they're writing. When the test does fail at some point, this leaves the reader needing more mental capacity to understand what is being set up in the Arrange block of the test. 

As mentioned previously, in order to maintain the clear boundaries of the test, you want to cut the fluff. Get rid of all the parts that aren't strictly needed to write your test.

### BAD

```csharp
[Test]
public void IsAvailable_ReturnsTrueIfBookIsInStock()
{
    //Title and author don't matter for this test, they can be omitted for their default values
    var book = BookBuilder.NewBook()
                            .WithTitle("The Martian")
                            .WithAuthor("Andy Weir")
                            .WithISBN("9780804139021")
                            .Build();
    Db.Insert(book);

    Assert.That(service.IsAvailable(book.ISBN), Is.True);
}
```

### GOOD

```csharp
[Test]
public void IsAvailable_ReturnsTrueIfBookIsInStock()
{
    var book = BookBuilder.NewBook()
                            .WithISBN("9780804139021")
                            .Build();
    Db.Insert(book);

    Assert.That(service.IsAvailable(book.ISBN), Is.True);
}
```

## 5. Test God class

Production code isn't the only place where you might come into contact with the God Class smell. I've seen test files where a clean and simple setup method has been written, which has seen several additions as new test code is added to the same class. And at some point, a developer comes along and asks himself, I don't really need all the setup code provided by this class for my test. In fact, it even interferes with what I'm trying to test. I'll just clear the database in my test (or parts of it) and write my own little setup to keep my test self-contained.

It's a good reflex, but wrong execution. It might be better to leverage this code in its own file, which probably should have been done with the other test cases in the God class as well, and might otherwise be an indication that the class that is under test might be a God class itself.

### BAD

```go
func (suite *BookServiceTestSuite) SetupTest() {
    suite.user = UserBuilder.New().Build()
    suite.db.Create(&user)

    book1 := BookBuilder.New().
        WithTitle("The Martian").
        WithAuthor("Andy Weir").
        WithISBN("9780804139021").
        WithStatusCheckedOut(time.Now(), suite.user).
        Build()
    book2 := BookBuilder.New().
        WithTitle("The Theory of Everything Else").
        WithAuthor("Dan Schreiber").
        WithISBN("9780063259195").
        Build()
    suite.db.Create(&book1, &book2)
}

func (suite *BookServiceTestSuite) TestReturnBookWithLateFeesShouldSubtractFeesFromUserBalance() {
    //Clear all previous setup and create our own
    suite.db.Delete(&Book{})
    book := BookBuilder.New().
        WithTitle("Flowers for Algernon").
        WithAuthor("Daniel Keyes").
        WithISBN("9780575116740").
        WithStatusCheckedOut(time.Now().Add(0, 0, -60), suite.user).
        Build()
    suite.db.Create(&book)
    user.balance = Book.LATE_FEE

    suite.service.Return(book)

    assert.Equal(t, 0, user.balance)
}
```

### GOOD

```go
func (suite *BookServiceTestSuite) SetupTest() {
    suite.user = UserBuilder.New().WithBalance(book.LATE_FEE).Build()
    suite.db.Create(&user)

    book := BookBuilder.New().
        WithTitle("Flowers for Algernon").
        WithAuthor("Daniel Keyes").
        WithISBN("9780575116740").
        WithStatusCheckedOut(time.Now().Add(0, 0, -60), suite.user).
        Build()
    suite.db.Create(&book)
}

func (suite *BookServiceTestSuite) TestReturnBookWithLateFeesShouldSubtractFeesFromUserBalance() {
    suite.service.Return(book)

    assert.Equal(t, 0, user.balance)
}
```