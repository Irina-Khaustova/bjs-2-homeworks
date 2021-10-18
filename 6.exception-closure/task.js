function parseCount (value) {
  const parsValue = parseInt(value,10);
	if (isNaN(parsValue)) {
    throw new Error("Невалидное значение")
  }
    return parsValue;
}

function validateCount (value) {
  try {
    return parseCount (value);
  }
  catch (error) {
    return error;
  }
};

class Triangle {
	constructor (a, b, c) {
    if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
   throw new Error("Треугольник с такими сторонами не существует")
 };
  	this.a = a;
    this.b = b;
    this.c = c;
  };

 getPerimeter() {
    return (this.a + this.b + this.c);
  };

 getArea () {
   let halfPerimeter = this.getPerimeter()/2;
   return +Math.sqrt(halfPerimeter * (halfPerimeter - this.a) *(halfPerimeter - this.b) * (halfPerimeter - this.c)).toFixed(3);
  }
};

function getTriangle (a, b, c){
  try {
    return new Triangle (a, b, c);
  }
  catch (Error) {
    return {
      getArea() {
        return 'Ошибка! Треугольник не существует'
        },
      getPerimeter() {return 'Ошибка! Треугольник не существует'}
    };
  }
}