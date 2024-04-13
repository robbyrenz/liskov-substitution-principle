# Liskov Substituition Principle

This repo holds the source code for my presentation about the Liskov
substitution principle, one of the SOLID principles.
It was created with the help of the amazing
Motion Canvas library ❤️

## The Script

* First show 2 code examples
  * the first shows a class extending another class, overriding one of its
  methods by using a weaker access modifier: `protected` to `public`
  * the second one shows the same thing, except that the class overrides the
  method by using a stronger access modifier: `protected` to `private`
  * the `Engine.java` file showcases this example
* Then ask which one would compile and which one would not
  * would both compile?
  * would none of them compile?
  * would one of them compile?
  * show the "suspicious fry meme" in the background
* Then ask why not? Why is the Java compiler throwing an error?
* Then give the answer
  * the one that is trying to assign weaker access privileges
  (`protected` to `private`) would not compile
  * due to the Liskov Substituition Principle!
* Explain what the Liskov Substituition Principle means
  * and who coined the term
* Then state that the first example that you have shown is a good example of a
violation of the LSP
  * because you are basically violating the contract! 💥
* Then show the second good example of the LSP
  * a derived method cannot throw any new checked exception not thrown by the
  base class (unless the new exception extends the old one)
  * the `Animal.java` file illustrates this good example!
* Then move on the bad example of LSP: a `stack` vs a `vector`
  * first explain what a `stack` is, and its practical uses in real life
  * then explain what a `vector` is, and its use-cases in real life
  * show that the `stack` extends the `vector`
  * and then state the consequences of that! 😱
* Now comes the good part: *why*?
  * Why is it so bad to violate the LSP?
  * After all, there are ways around violating the LSP
  * like using the `instanceOf` keyword
  * But then show the consequences of getting around violating the LSP
    * you will violate the `Open-Closed Principle (OCP)`!
* Show why most developers violate the LSP
  * 'cause its so easy, just add in the `extends` keyword, and then you get
  those methods for free!
* Then show what can we use instead of inheritance
  * Delegation! 🙌
* Questions for the audience
  * What are the disadvantages of using delegation over inheritance
  * A follow-up to the previous question: what would you rather violate?
  The LSP or both OCP and DRY?
* In the end, show the credits and give your thanks to Venkat Subramaniam
and to the amazing Motion Canvas library!
* The end! 🤗

## Credits

* [Core Design Principles for Software Developers by Venkat Subramaniam](https://www.youtube.com/watch?v=llGgO74uXMI&t=6214s)
* [Motion Canvas](https://motioncanvas.io/)
* [Liskov Substitution Principle](https://en.wikipedia.org/wiki/Liskov_substitution_principle)
