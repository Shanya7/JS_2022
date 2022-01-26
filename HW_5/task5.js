class GeometricFigure {
    getArea() {}
    toString() {}
  }
  class Triangle extends GeometricFigure {
    constructor(a, h) {
      super();
      this.a = a;
      this.h = h;
    }
    getArea() {
        return (1/2)*this.a*this.h;
    }
    toString(){
        return "Geometric figure: Triangle - area: "
    }
  }
  class Square extends GeometricFigure {
    constructor(a) {
      super();
      this.a = a;
    }
    getArea() {
        return this.a*this.a;
    }
    toString(){
        return "Geometric figure: Square - area: "
    }
  }
  class Circle extends GeometricFigure {
    constructor(r) {
      super();
      this.r = r;
    }
    getArea() {
        return 3.14*this.r*this.r;
    }
    toString(){
      return "Geometric figure: Circle - area: "
  }
  }
  function handleFigures(figures) {
      let total=0; 
      for(figure of figures){
          
         if(figure instanceof GeometricFigure){
          console.log(figure.toString() + " " + figure.getArea())
          total+= figure.getArea();
          console.log(total)
      }  
      }
  
  }
  
  const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
  console.log(handleFigures(figures));
  