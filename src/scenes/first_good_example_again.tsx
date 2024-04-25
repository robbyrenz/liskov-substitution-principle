import { Code, Img, makeScene2D } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, DEFAULT, all } from '@motion-canvas/core';
import { BACKGROUND_COLOR } from '../palettes';
import fry from '../../images/fry.png'

export default makeScene2D(function*(view) {
  // set the default color of the background
  view.fill(BACKGROUND_COLOR);

  // set the transtion to swipe from the right into this new slide
  yield* slideTransition(Direction.Right, 2)

  // create the first code snippet
  const firstCodeSnippet = createRef<Code>()
  view.add(
    <Code
      ref={firstCodeSnippet}
      fontSize={38}
      offsetX={-1}
      x={-900}
    />
  )

  // show the entire Engine class and its 2 subclasses from the first code example
  yield* beginSlide('Show the Engine base class as well as its two subclasses');
  yield* firstCodeSnippet().code.append(`\
class Engine {
  protected int cost() {
    return 50;
  }
}

class PistonEngine extends Engine {
  @Override
  public int cost() {
    return 100;
  }
}

class TurboEngine extends Engine {
  @Override
  private int cost() {
    return 150;
  }
}`, 1);

  // highlight the protected, public and private access modifiers
  yield* beginSlide('Highlight all the access modifiers')
  yield* firstCodeSnippet().selection(firstCodeSnippet().findAllRanges(/protected|public|private/gi), 0.6)

  // clear the highlights
  yield* beginSlide('Clear the highlights for the access modifiers')
  yield* firstCodeSnippet().selection(DEFAULT, 0.6)

  // create the second code snippet
  const secondCodeSnippet = createRef<Code>()
  view.add(
    <Code
      ref={secondCodeSnippet}
      fontSize={38}
      offsetX={-1}
      x={50}
    />
  )

  // show the entire Engine class and its 2 subclasses from the first code example
  yield* beginSlide('Show the PricingService client class');
  yield* secondCodeSnippet().code.append(`\
class PricingService {
  public int getCost(Engine engine) {
    return engine.cost();
  }
}`, 1);

  // highlight Engine arugment in the second code snippet
  yield* beginSlide('Highlight Engine arugment in the second code snippet')
  yield* secondCodeSnippet().selection(secondCodeSnippet().findAllRanges(/Engine engine|return engine.cost\(\)\;/gi), 0.6)

  // clear the highlights
  yield* beginSlide('Clear the highlights for Engine arugment in the second code snippet')
  yield* secondCodeSnippet().selection(DEFAULT, 0.6)

  // wait until I press the space bar in order to head to the next slide and transition
  yield* beginSlide('Head to the next slide and transition')
})

