import { Code, Img, makeScene2D } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, DEFAULT, spring, PlopSpring } from '@motion-canvas/core';
import green_checkmark from '../../images/green_checkmark.png'

export default makeScene2D(function*(view) {
  // set the default color of the background
  view.fill('#1d3557');

  // set the transtion to swipe from the right into this new slide
  yield* slideTransition(Direction.Right, 2)

  // create some code
  const code = createRef<Code>()
  view.add(
    <Code
      ref={code}
      fontSize={38}
      offsetX={-1}
      x={-900}
    />
  )

  // show the first code snippet
  yield* beginSlide('Show the Animal base class');
  yield* code().code.append(`\
class Animal {
  public String roar() {
    return null;
  }
}`, 1)

  // show the second code snippet
  yield* beginSlide('Show the Lion subclass')
  yield* code().code.append(`\n
class Lion extends Animal {
  @Override
  public String roar() {
    return "Roar!";
  }
}`, 0.6)

  // have the Lion subclass throw an unchecked exception
  yield* beginSlide('Throw the unchecked exception')
  yield* code().code.insert([8, 23], 'throws RuntimeException ', 1)
  // then ask the audience if the code would compile or not

  // instiantiates a green checkmark out of the viewport
  // yield* beginSlide('Show the green checkmark!')
  const greenCheckmark = createRef<Img>();
  view.add(
    <Img
      ref={greenCheckmark}
      src={green_checkmark}
      scale={0.75}
      x={-1500}
      y={100}
    />
  )

  // once they answer, spring the checkmark into view!
  yield* beginSlide('Spring the green checkmark into view!')
  yield* spring(PlopSpring, -1500, 350, 1, value => {
    greenCheckmark().position.x(value)
  })

  // move the checkmark out of view!
  yield* beginSlide('Remove the green checkmark')
  yield* greenCheckmark().position.x(3000, 1);

  // show the third code snippet
  yield* beginSlide('Show the Cat subclass')
  yield* code().code.append(`\n
class Cat extends Animal {
  @Override
  public String roar() throws Exception {
    throw new Exception();
  }
}`, 0.6)

  // highlight the checked exception being thrown
  yield* beginSlide('Selecting the checked exception that is being thrown in the Cat class')
  yield* code().selection(code().findAllRanges(/throws Exception|throw new Exception\(\)\;/gi), 0.6)

  // clear the highlights
  yield* beginSlide('Clear the above selection')
  yield* code().selection(DEFAULT, 0.6)

  yield* beginSlide('add in the compiler error as a comment!')
  yield* code().code.insert([15, 42], '// compiler error!\n', 0.6)
})

