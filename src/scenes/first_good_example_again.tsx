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

  // TODO: remove the below, redundant code!



  // insert the "suspicious Fry" meme out of view :)
  yield* beginSlide('Insert the Fry meme')
  const suspiciousFryMeme = createRef<Img>();
  view.add(
    <Img
      ref={suspiciousFryMeme}
      src={fry}
      scale={2}
      x={-2000}
    />
  );
  yield* suspiciousFryMeme().position.x(0, 1) // and then move Fry to the center of the screen

  // move Fry to the side so that we won't block the code snippets
  yield* beginSlide('Move Fry to the side')
  yield* suspiciousFryMeme().scale(2.5, 1.5) // fancy scaling work just to be dramatic
  yield* all(
    suspiciousFryMeme().scale(1, 2),
    suspiciousFryMeme().position.x(500, 1.5),
    suspiciousFryMeme().position.y(-200, 1.5)
  )

  // appending the compiler error as a comment to the code
  yield* beginSlide('add in the compiler error as a comment!')
  yield* firstCodeSnippet().code.insert([15, 24], '// a compiler error is thrown due to a violation of the LSP!\n', 0.6)

  // wait until I press the space bar in order to head to the next slide and transition
  yield* beginSlide('Head to the next slide and transition')
})

