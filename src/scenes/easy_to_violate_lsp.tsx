import { Code, Img, makeScene2D, word } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, all } from '@motion-canvas/core';
import { BACKGROUND_COLOR } from '../palettes';
import haroldMeme from '../../images/harold_two.png'
import fry from '../../images/fry.png'

export default makeScene2D(function*(view) {
  // set the default color of the background
  view.fill(BACKGROUND_COLOR);

  // set the transtion to swipe from the right into this new slide
  yield* slideTransition(Direction.Right, 2)

  // create some code
  const code = createRef<Code>()
  view.add(
    <Code
      ref={code}
      fontSize={42}
      offsetX={-1}
      x={-900}
    />
  )

  // show the Foo class
  yield* beginSlide('Show the Foo class');
  yield* code().code.append(`\
public class Foo {
}\n\n`, 1)

  // insert the methods of the Foo class
  yield* beginSlide('Insert the methods of the Foo class')
  yield* code().code.insert([1, 0], "  public int getAge() {\n    return 25;\n  }\n", 0.6);
  yield* code().code.insert([4, 0], "\n  public String getCountry() {\n    return \"Canada\";\n  }\n", 0.6);

  // show the Bar class
  yield* beginSlide('Show the Bar class')
  yield* code().code.append(`public class Bar {\n}`, 0.6)

  // insert the 'extends' keyword
  yield* beginSlide('Insert the "extends" keyword to the Bar class')
  yield* code().code.insert([10, 17], 'extends Foo ', 0.6)

  // show Harold from the side
  yield* beginSlide('Show Harold from the side')
  const harold = createRef<Img>();
  view.add(
    <Img
      ref={harold}
      src={haroldMeme}
      scale={0.9}
      x={2500}
    />
  );
  yield* harold().position.x(600, 1.5)

  // move Harold out of view
  yield* beginSlide('Move Harold out of view')
  yield* all(
    harold().size([100, 100], 1.2),
    harold().position.x(-200, 1),
    harold().position.y(2000, 1.5),
  )

  // remove the 'extends' keyword and user composition instead of inheritance
  yield* beginSlide('Remove the "extends" keyword and use composition instead of inheritance')
  yield* all(
    code().code.replace(word(10, 17, 12), '', 0.6),
    code().code.insert([11, 0], "  private final Foo foo = new Foo();\n\n  public int getAge() {\n    return foo.getAge();\n  }\n\n  public String getCountry() {\n    return foo.getCountry();\n  }\n", 0.6),
  )

  // insert the "suspicious Fry" meme out of view, again, coming back into full circle :)
  yield* beginSlide('Insert the Fry meme, again!')
  const suspiciousFryMeme = createRef<Img>();
  view.add(
    <Img
      ref={suspiciousFryMeme}
      src={fry}
      scale={2}
      x={-2000}
    />
  );
  yield* suspiciousFryMeme().position.x(0, 1) // move Fry to the center of the screen

  // move Fry to the side so that we won't block the code snippets
  yield* beginSlide('Move Fry to the side')
  yield* suspiciousFryMeme().scale(2.5, 1.5) // fancy scaling work just to be dramatic
  yield* all(
    suspiciousFryMeme().scale(1, 2),
    suspiciousFryMeme().position.x(500, 1.5),
    suspiciousFryMeme().position.y(-200, 1.5)
  )

  // wait until I press the space bar in order to head to the next slide and transition
  yield* beginSlide('Head to the next slide and transition')
})

