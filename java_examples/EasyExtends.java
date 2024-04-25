package java_examples;

public class EasyExtends {

  public class Foo {
    public int getAge() {
      return 25;
    }

    public String getCountry() {
      return "Canada";
    }
  }

  public class Bar extends Foo {

  }

  public class Bar {
    private final Foo foo = new Foo();

    public int getAge() {
      return foo.getAge();
    }

    public String getCountry() {
      return foo.getCountry();
    }
  }
}
