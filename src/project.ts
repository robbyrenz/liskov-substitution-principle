import { makeProject } from '@motion-canvas/core';
import { Code, LezerHighlighter } from '@motion-canvas/2d';
import { parser } from '@lezer/java'
import first_good_example from './scenes/first_good_example?scene';
import introduction from './scenes/introduction?scene';
import first_good_example_again from './scenes/first_good_example_again?scene';
import second_good_example from './scenes/second_good_example?scene'
import stack_and_vector from './scenes/stack_and_vector?scene';
import easy_to_violate_lsp from './scenes/easy_to_violate_lsp?scene';
import credits from './scenes/credits?scene';

Code.defaultHighlighter = new LezerHighlighter(parser);

export default makeProject({
  scenes: [first_good_example, introduction, first_good_example_again, second_good_example, stack_and_vector, easy_to_violate_lsp, credits]
});
