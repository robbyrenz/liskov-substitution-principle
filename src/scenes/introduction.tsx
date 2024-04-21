import { Img, Txt, makeScene2D } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, all, waitFor } from '@motion-canvas/core';
import { BACKGROUND_COLOR_LIGHT_MODE } from '../palettes';
import babara_liskov from '../../images/barbara_liskov.jpg'

export default makeScene2D(function*(view) {
  // set the default color of the background
  view.fill(BACKGROUND_COLOR_LIGHT_MODE);

  // set the transtion to swipe from the right into this new slide
  yield* slideTransition(Direction.Right, 2)

  // create the title and show it on the screen
  const title = createRef<Txt>()
  view.add(
    <Txt
      ref={title}
      fontSize={100}
      x={2000}
    />
  )
  title().text('Liskov Substitution Principle')
  yield* title().position.x(0, 1)

  // instiantiate the picture of Babara Liskov
  const babaraLiskov = createRef<Img>();
  view.add(
    <Img
      ref={babaraLiskov}
      src={babara_liskov}
      y={-3000}
    />
  )

  // bring the picture into view
  yield* beginSlide('Show a picture of Babara Liskov');
  yield* babaraLiskov().position.y(0, 1)
  yield* title().position.y(2000, 0.5) // yield* title().remove() was giving a compiler error (even though it compiles?), so I had to do this hacky way of removing the text from the screen
  yield* all(
    babaraLiskov().position.y(0, 1),
    babaraLiskov().scale(0.35, 1.5)
  )
  yield* waitFor(1)

  // create the 'Babara Liskov' text and show it on the screen
  const name = createRef<Txt>()
  view.add(
    <Txt
      ref={name}
      fontSize={80}
      x={2000}
      y={-300}
    />
  )
  name().text('Babara Liskov')

  // move the picture to the slid
  // and display some notes on the right side
  yield* all(
    name().position.x(200, 1),
    babaraLiskov().position.x(-550, 0.6),
    babaraLiskov().position.y(0, 0.6),
    babaraLiskov().scale(0.40, 0.6)
  )

  // create the definition of the 'Liskov Substitution Principle' and show it on the screen
  const definition = createRef<Txt>()
  view.add(
    <Txt
      ref={definition}
      fontSize={60}
      x={2000}
      y={100}
    />
  )
  definition().text('A client using a base class\nmust be able to use its\nsubclass without ever\nknowing the difference')
  yield* beginSlide('Show the definition of LSP')
  yield* definition().position.x(300, 0.6) // zips into view from the right of the screen

  // TODO: add another text that emphasizes that we should only subclass for pure substitutability?

  // wait until I press the space bar in order to head to the next slide and transition
  yield* beginSlide('Head to the next slide and transition')
})

