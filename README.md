# JavaScript class inheritance performance tests

Accurate tests of JavaScript class inheritance models, which model real-world application behaviour 
with aim to providing better accuracy.

Only the fastest class systems are tested. For example: speed of Prototype.js classes is about 1% of native,
so there is no reason to include it. The same applies to MooTools. Ext.JS is not included, cause it affects results of
other tests (from the words of DotNetWise author).

##Where to see the results?

- Overridden method calls: http://jsperf.com/js-inheritance-method-calls/2
- Object construction: http://jsperf.com/js-inheritance-object-construction

##Comparison to other test suites

Creating micro-benchmarks is an art, which requires deep understanding of browser internals and some human adequateness.

For example: test that mixes class generation and method calls is incorrect (inadequate), cause class generation
usually happens once, when page is loaded, and it takes much more time than a method call. Some systems, like
TypeScript, CoffeeScript and Lava.ClassManager are able to generate classes on server - 
so it's absolutely incorrect to mix them with browser-only solutions, like John Resig's Class.
Authors of such tests can manipulate your opinion by adjusting loop counter numbers.
Such bad examples include tests of Fiber.js from LinkedIn and DotNetWise - they do just that.

What else to watch for:
- open the page with tests in a new window (important!) and run all tests twice in a row. 
If the second time some test runs slower, and result is stable - then it's wrong.
- if result changes depending on order, in which you run tests - they are wrong,
cause they affect each other.
- benchmark shows deviation from normal result. If this number is too high, like "+/- 27.98%" -
this may also be a sign, that the test is wrong. 

Notes: 
- although the "Native" example from this test suite has high deviation in Chrome, it's considered right by the author.
- these tests construct a pair of objects before each loop with method calls.
This introduces a small error into the test results (less than 1%), which can be neglected.

##Another bad example: how not to write tests

Let's test speed of counter increment. Preparation code:

```
// declare a counter in window root:
var counter = 0;
var method = function() { counter++; }
```

Now the test itself. Nothing more than a loop:

```
for (var i = 0; i < 10000; i++) {
    method();
}
```

This test is wrong in many ways:
- first, `method` most likely will be inlined. In micro-benchmarks it may lead to incorrect results, 
especially when you compare it to other methods, which were not inlined.
- next, at some moment `counter` will overflow. When this happens, it's internal type will be changed from integer to double.
Doubles are boxed like objects, so they are much slower than integers. 
- promotion to double will also make `method` a little heavier (if it wasn't inlined).

To create the right tests you should also understand how your benchmark suite works, 
what is polymorphism in property accessors, scope internals and many other things.
If you want to learn more, then I recommend you this site for reference: [mrale.ph](http://mrale.ph/) 
(it's not mine, but currently it's one of the best sources about JavaScript engine internals).

<i>I do not claim absolute correctness of these tests, they are just more relevant than average.</i> 

##Techniques used

These tests try to provide most accurate results, although it's not guaranteed that they are 100% correct.
For example: browser vendors can implement different kinds of optimizations, which will lead to wrong results.
If I find any mistakes or room for improvement - I will do my best to maintain their quality.

To ensure accuracy, these tests use the following techniques:

- Tested method's body should be large enough, so that it's not inlined. This is accomplished by the following code:
```
if (prevent_inline) {
	// lots of dummy code, which will never be executed
}
```

- `counter` must not overflow. This is accomplished by cycling it in a small range:
```
if (this.counter > 99) this.counter = this.counter / 2;
```
When `counter` hits 100, it's set to 50.

- Tested method's body should be complex enough, so that result is not predicted by optimizer.
This is not guaranteed :)

- Cache busting: all methods must have unique source code, so they are not reused by V8.
This is accomplished by appending unique variable declaration to the beginning of each method in the test suite
(like `var cache_buster_0012;`).

- Create polymorphism: each individual test creates instances of <i>two different</i> child classes, that call same 
<i>overridden</i> parent's method. This shows issues with parent's method becoming polymorphic.

##P.S.

To learn more about ClassManager, please visit it's official repository:
https://github.com/kogarashisan/ClassManager