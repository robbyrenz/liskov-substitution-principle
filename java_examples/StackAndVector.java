package java_examples;

import java.util.Stack;
import java.util.Vector;

public class StackAndVector {
  Stack stack = new Stack();
  Vector vector = new Vector();

  public void fn(Vector vector) {
    if (vector instanceof Stack) {
      throw new IllegalArgumentException();
    } else {
      // do something
    }
  }

  public void foo() {
    this.fn(stack);
  }
}
