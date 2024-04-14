class Animal {
  public String roar() {
    return null;
  }
}

class Lion extends Animal {
  @Override
  public String roar() throws RuntimeException {
    return "Roar!";
  }
}

class Cat extends Animal {
  @Override
  public String roar() throws Exception { // a compiler error is thrown due to a violation of the LSP!
    throw new Exception();
  }
}
