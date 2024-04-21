package java_examples;

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

class PricingService {
  public int getCost(Engine engine) {
    return engine.cost();
  }
}

class Action {
  Engine engine = new Engine();
  int costOfEngine = new PricingService().getCost(engine);

  PistonEngine pistonEngine = new PistonEngine();
  int costOfPistonEngine = new PricingService().getCost(pistonEngine);

  TurboEngine turboEngine = new TurboEngine();
  int costOfTurboEngine = new PricingService().getCost(turboEngine);
}
