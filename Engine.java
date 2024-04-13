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
  private int cost() { // a compiler error is thrown due to a violation of the LSP!
    return 150;
  }
}
