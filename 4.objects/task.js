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
    this.marks.push(mark);
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
