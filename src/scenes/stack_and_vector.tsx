import { Circle, Code, makeScene2D, word } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, chain, waitFor, all } from '@motion-canvas/core';
import { BACKGROUND_COLOR } from '../palettes';

export default makeScene2D(function*(view) {
  // set the default color of the background
  view.fill(BACKGROUND_COLOR);

  // set the transtion to swipe from the right into this new slide
  yield* slideTransition(Direction.Right, 2)

  // create a couple of references to some circles
  const circleOne = createRef<Circle>();
  const cirlceTwo = createRef<Circle>();
  const circleThree = createRef<Circle>();
  const circleFour = createRef<Circle>();
  const circleFive = createRef<Circle>();

  // instantiate them off screen
  view.add(
    <Circle
      ref={circleOne}
      y={-1100}
      width={140}
      height={140}
      fill="#e63946"
    />,
  );

  view.add(
    <Circle
      ref={cirlceTwo}
      y={-1100}
      width={140}
      height={140}
      fill="#e63946"
    />,
  );

  view.add(
    <Circle
      ref={circleThree}
      y={-1100}
      width={140}
      height={140}
      fill="#e63946"
    />,
  );

  view.add(
    <Circle
      ref={circleFour}
      y={-1100}
      width={140}
      height={140}
      fill="#e63946"
    />,
  );

  view.add(
    <Circle
      ref={circleFive}
      y={-1100}
      width={140}
      height={140}
      fill="#e63946"
    />,
  );

  // show the animation for how a stack works underneath
  yield* beginSlide('Show the animation for how a stack works underneath');
  yield* chain( // put them into view from top to bottom
    circleOne().position.y(465, 1.5),
    cirlceTwo().position.y(325, 1.5),
    circleThree().position.y(185, 1.5),
    circleFour().position.y(45, 1.5),
    circleFive().position.y(-95, 1.5),
    waitFor(1),
    circleFive().position.y(-1000, 2),
    circleFive().position.y(-95, 1.5),
  );

  // remove the balls
  yield* beginSlide('Remove the balls');
  yield* all(
    circleOne().position.x(-1500, 1.5),
    cirlceTwo().position.x(1500, 1),
    circleThree().position.x(-1500, 2),
    circleFour().position.x(1500, 1.5),
    circleFive().position.x(-1500, 1),
  )

  // create a method that takes in a Vector argument
  yield* beginSlide('Create a method that takes in a Vector argument');
  const vector = createRef<Code>()
  view.add(
    <Code
      ref={vector}
      fontSize={42}
      offsetX={-1}
      x={-900}
    />
  )

  yield* vector().code.append(`\
public void fn(Vector vector) {
  // do something
}`, 1)


  // insert the 'instanceOf' keyword and format the code appropriately
  yield* beginSlide('Insert the "instanceOf" keyword')
  yield* vector().code.insert([1, 0], "\
  if (vector instanceOf Stack) {\n\
    throw new IllegalArgumentException();\n\
  } else {\n", 0.6);
  yield* vector().code.insert([5, 0], "  }\n", 0.6)
  yield* vector().code.replace(word(4, 2), '  // do something\n', 0.6)

  // wait until I press the space bar in order to head to the next slide and transition
  yield* beginSlide('Head to the next slide and transition')
})

