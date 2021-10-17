function parseCount (value) {
	if (isNaN(parseInt(value,10))) {
    throw new Error("Невалидное значение")
  }
  else return parseInt(value,10);
}

function validateCount (value) {
  try {
    return parseCount (value);
  }
  catch (Error) {
 return Error;
  }
};

class Triangle {
	constructor (a, b, c) {
    if (((a + b) < c) || ((b + c) < a) || ((a + c) < b)) {
   throw new Error("Треугольник с такими сторонами не существует")
 }
	  else {
  	this.a = a;
    this.b = b;
    this.c = c;
 }
  }
	getPerimeter() {
    this.perimeter = (this.a + this.b + this.c);
    return +this.perimeter;
  }
  getArea () {
    this.halfPerimeter = (this.a + this.b + this.c)/2;
    this.squear = Math.sqrt(this.halfPerimeter * (this.halfPerimeter - this.a) *(this.halfPerimeter - this.b) * (this.halfPerimeter - this.c)).toFixed(3);
    return +this.squear;
  }
};

function getTriangle (a, b, c){
  try {
    return new Triangle(a, b, c);
  }
  catch (Error) {
    return {
      getAria() {
        return 'Ошибка! Треугольник не существует'
        },
      getPerimeter () {return 'Ошибка! Треугольник не существует'}
    };
  }
}