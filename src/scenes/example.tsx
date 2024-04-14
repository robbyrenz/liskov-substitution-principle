import { Code, Img, lines, makeScene2D } from '@motion-canvas/2d';
import { createRef, beginSlide, slideTransition, Direction, DEFAULT, all, waitFor } from '@motion-canvas/core';
import fry from '../../images/fry.png'

export default makeScene2D(function*(view) {
  view.fill('#1d3557');
  yield* slideTransition(Direction.Right, 2)

  const code = createRef<Code>()

  view.add(
    <Code
      ref={code}
      fontSize={38}
      offsetX={-1}
      x={-900}
    />
  )

  yield* beginSlide('The one that shows the code!');

  yield* code().code.append(`\
class Engine {
  protected int cost() {
    return 50;
  }
}`, 1);

  yield* beginSlide('first')

  yield* code().code.append(`\n
class PistonEngine extends Engine {
  @Override
  public int cost() {
    return 100;
  }
}`, 0.6)

  yield* beginSlide('selecting code')
  yield* all(
    code().selection(lines(1, 3), 0.6),
    code().selection(lines(8, 10), 0.6)
  )

  yield* beginSlide('selecting the access modifiers')
  yield* code().selection(code().findAllRanges(/protected|public/gi), 0.6)

  yield* beginSlide('clearing the selections and showing the third snippet')
  yield* code().selection(DEFAULT, 0.6)
  yield* code().code.append(`\n
class TurboEngine extends Engine {
  @Override
  private int cost() {
    return 150;
  }
}`, 0.6)

  yield* beginSlide('selecting another set of access modifiers')
  yield* code().selection(code().findAllRanges(/protected|private/gi), 0.6)
  yield* beginSlide('clear the selections')
  yield* code().selection(DEFAULT, 0.6)


  yield* beginSlide('add in the compiler error as a comment!')
  yield* code().code.insert([15, 24], '// a compiler error is thrown due to a violation of the LSP!\n', 0.6)

  // image stuff
  yield* beginSlide('Insert the Fry meme')
  const suspiciousFryMeme = createRef<Img>();
  view.add(<Img ref={suspiciousFryMeme} src={fry} scale={2} />);
  yield* waitFor(1.5)
  yield* suspiciousFryMeme().scale(2.5, 1.5).to(2, 1.5)
  yield* all(
    suspiciousFryMeme().scale(1, 2),
    suspiciousFryMeme().position.x(500, 1.5),
    suspiciousFryMeme().position.y(-200, 1.5)
  )
  // suspiciousFryMeme().absoluteRotation(90, 1.5).to(0, 1.5)
})
