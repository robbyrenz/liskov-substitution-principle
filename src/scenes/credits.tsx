import { Txt, makeScene2D } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction } from '@motion-canvas/core';
import { BACKGROUND_COLOR_LIGHT_MODE } from '../palettes';

export default makeScene2D(function*(view) {
  // set the default color of the background
  view.fill(BACKGROUND_COLOR_LIGHT_MODE);

  // set the transtion to swipe from the right into this new slide
  yield* slideTransition(Direction.Right, 2)

  // create the title and show it on the screen
  yield* beginSlide('Create the title and show it on the screen');
  const credits = createRef<Txt>()
  view.add(
    <Txt
      ref={credits}
      fontSize={60}
      x={2000}
    />
  )
  credits().text('* Core Design Principles for Software Developers\nby Venkat Subramanium\n* Motion Canvas\n* Clean Architecture by Robert C. Martin')
  yield* credits().position.x(-100, 1)

  // The End!
})

