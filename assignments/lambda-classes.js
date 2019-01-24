// CODE here for your Lambda Classes

//BASE CLASS
class Person {
  constructor(props) {
    this.name = props.name;
    this.age = props.age;
    this.location = props.location;
    this.gender = props.gender;
  }

  speak() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

// INSTRUCTOR CHILD CLASS OF PERSON/BASE
class Instructor extends Person {
  constructor(teachProps) {
    super(teachProps);
    this.specialty = teachProps.specialty;
    this.favLanguage = teachProps.favLanguage;
    this.catchPrase = teachProps.catchPrase;
  }

  demo(subStr) {
    console.log(`Today we are learning about ${subStr}!`);
  }

  grade(stdOb, subStr) {
    console.log(`${stdOb.name} receives a perfect score on ${subStr}.`);
  }
}

// STUDENT CHILD CLASS OF PERSON/BASE
class Student extends Person {
  constructor(studProps) {
    super(studProps);
    this.previousBackground = studProps.previousBackground;
    this.className = studProps.className;
    this.favSubjects = studProps.favSubjects;
  }

  listsSubjects() {
    console.log(student.favSubjects.length);
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}.`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }
}
