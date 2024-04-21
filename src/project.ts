import { makeProject } from '@motion-canvas/core';
import first_good_example from './scenes/first_good_example?scene';
import introduction from './scenes/introduction?scene';
import first_good_example_again from './scenes/first_good_example_again?scene';
import second_good_example from './scenes/second_good_example?scene'
import { Code, LezerHighlighter } from '@motion-canvas/2d';
import { parser } from '@lezer/java'

Code.defaultHighlighter = new LezerHighlighter(parser);

export default makeProject({
  scenes: [first_good_example, introduction, first_good_example_again, second_good_example]
});
