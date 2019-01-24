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

// PROJECT MANAGER CLASS EXTENDS INSTRUCTOR CLASS
class ProjectManager extends Instructor {
  constructor(pmProps) {
    super(pmProps);
    this.gradClassName = pmProps.gradClassName;
    this.favInstructor = pmProps.favInstructor;
  }

  standUp(slackChnl) {
    console.log(
      `${this.name} announces to ${slackChnl}, @channel standy times!`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on {subject}.`);
  }
}

const billy = new Instructor({
  name: "Billy Joe",
  age: 36,
  location: "Boston MA",
  gender: "Male",
  specialty: "Back-end",
  favLanguage: "Ruby",
  catchPrase: "Work smarter; not harder!"
});

const betty = new Instructor({
  name: "Betty Sue",
  age: 46,
  location: "San Francisco CA",
  gender: "Female",
  specialty: "Front-end",
  favLanguage: "JavaScript",
  catchPrase: "JS really don't care about the type."
});

const jon = new Student({
  name: "Jon Palacio",
  age: 30,
  location: "Charlotte NC",
  gender: "Male",
  previousBackground: "Locksmith and Business Managment",
  className: "Web17",
  favSubjects: ["JS", "HTML5", "CSS3"]
});

const liz = new Student({
  name: "Liz Taylor",
  age: 39,
  location: "Atlanta GA",
  gender: "Female",
  previousBackground: "Communcation and Logistics",
  className: "IOS2",
  favSubjects: ["Swift", "CSS"]
});

const megan = new ProjectManager({
  name: "Megan Short",
  age: 25,
  location: "Seattle WA",
  gender: "Female",
  gradClassName: "CS2",
  favInstructor: "Sean"
});

const murph = new ProjectManager({
  name: "Murph Murphy",
  age: 35,
  location: "Orlando FL",
  gender: "Male",
  gradClassName: "CS6",
  favInstructor: "Josh"
});
