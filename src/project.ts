import { makeProject } from '@motion-canvas/core';
import first_good_example from './scenes/first_good_example?scene';
import second_good_example from './scenes/second_good_example?scene'
import { Code, LezerHighlighter } from '@motion-canvas/2d';
import { parser } from '@lezer/java'

Code.defaultHighlighter = new LezerHighlighter(parser);

export default makeProject({
  scenes: [first_good_example, second_good_example]
});
