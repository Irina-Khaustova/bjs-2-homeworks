class PrintEditionItem {
   constructor (name, releaseDate, pagesCount) {
     this.name = name;
	 this.releaseDate = releaseDate;
	 this.pagesCount = pagesCount;
	 this.state = 100;
	 this.type = null;
  };

	fix () {
	  return this.state = this.state * 1.5;  
	};

	set state (state) {    
      if (state < 0) {
        this._state = 0;
      }
      else if (state > 100) {
      	this._state = 100;
      }
      else {
        this._state = state;
      }
    }
    
    get state () {
      return this._state;
    };
};

class Magazine extends PrintEditionItem {
  constructor (name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount); 
	this.type = "magazine";
  };
};

class Book extends PrintEditionItem {
  constructor (author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount); 
    this.author = author;
	this.type = "book";
  };
};

class NovelBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount); 
	this.type = "novel";
  };
};

class FantasticBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount); 
	this.type = "fantastic";
  };
};

class DetectiveBook extends Book {
  constructor (author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount); 
	this.type = "detective";
  };
};

class Library {
  constructor (name) {
	this.name = name;
	this.books = [];
  };
    
  addBook (book) {
	if (book.state > 30) {
	  this.books.push(book);
      return this.books;
	};
};

  findBookBy (type, value) {
    let findBook = this.books.find(item => item[type] === value);
	  return findBook || null;
  };

  giveBookByName (bookName) {
    let givBook = this.books.find(item => item.name === bookName); 
      this.books.splice(this.books.indexOf(givBook), 1);
      return givBook || null;
  };
};

function Student(name, gender, age) {
    this.name = name;
   	this.gender = gender;
   	this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){ 
    this.marks = new Array();
    this.marks.push(mark);// добавить первую оценку 
  } else {
    this.marks.push(mark)// добавить вторую и последующие оценки в массив
  } 
}
Student.prototype.addMarks = function(...markss) {
    for (let mark of markss) {
    if(this.marks === undefined){ 
    this.marks = new Array();
}
    this.marks.push(+mark);
}
}
Student.prototype.getAverage = function() {
  const previousValue = 0;
  return (this.marks.reduce((previousValue, currentValue, index) => (previousValue + currentValue)))/this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}