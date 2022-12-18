class Person {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    login() {
      console.log(`${this.username} has logged in.`);
    }
  
    logout() {
      console.log(`${this.username} has logged out.`);
    }
  }
  
  class Administration extends Person {
    constructor(username, password) {
      super(username, password);
    }
  
    manageSubscription() {
      console.log(`${this.username} is managing subscriptions.`);
    }
  
    manageCourses() {
      console.log(`${this.username} is managing courses.`);
    }
  
    manageTeachers() {
      console.log(`${this.username} is managing teachers.`);
    }
  
    manageCourseGifting() {
      console.log(`${this.username} is managing course gifting.`);
    }
  }
  
  class Student extends Person {
    constructor(studentId, username, password) {
      super(username, password);
      this.studentId = studentId;
    }
  
    viewCourses() {
      console.log(`${this.username} is viewing their courses.`);
    }
  
    enroll(course) {
      if (course.students.includes(this)) {
        console.log(`${this.username} is already enrolled in the course ${course.name}.`);
        return;
      }
      course.enroll(this);
    }
  
    accessMaterials(course) {
      if (!course.students.includes(this)) {
        console.log(`${this.username} is not enrolled in the course ${course.name} and cannot access materials.`);
        return;
      }
      console.log(`${this.username} is accessing course materials for ${course.name}.`);
    }
  
    accessAssignment(course) {
      if (!course.students.includes(this)) {
        console.log(`${this.username} is not enrolled in the course ${course.name} and cannot access assignments.`);
        return;
      }
      console.log(`${this.username} is accessing their assignments for ${course.name}.`);
    }
  }
  
  class Subscription {
    constructor(type, duration) {
      this.type = type;
      this.duration = duration;
    }
  
    renew() {
      console.log(`The ${this.type} subscription has been renewed for ${this.duration} months.`);
    }
  
    cancel() {
      console.log(`The ${this.type} subscription has been canceled.`);
    }
  }
  
  class CourseGifting {
    constructor(id, sender, recipient, course, status) {
      this.id = id;
      this.sender = sender;
      this.recipient = recipient;
      this.course = course;
      this.status = status;
    }
  
    send() {
  
  
      console.log(`${this.sender.username} has sent a gift of the course ${this.course.name} to ${this.recipient.username}.`);
    }
  
    accept() {
      this.status = 'accepted';
      console.log(`${this.recipient.username} has accepted the gift of the course ${this.course.name} from ${this.sender.username}.`);
    }
  
    decline() {
      this.status = 'declined';
      console.log(`${this.recipient.username} has declined the gift of the course ${this.course.name} from ${this.sender.username}.`);
    }
  
  
  
  class courses {
    constructor(id, name, materials, teacher, students) {
      this.id = id;
      this.name = name;
      this.materials = materials;
      this.teacher = teacher;
      this.students = students;
    }
  
    viewMaterials() {
      // implementation details
    }
  
    enroll(student) {
  this.students.push(student);
  console.log(`${student.username} has enrolled in the course ${this.name}.`);
  }
  unenroll(student) {
  this.students = this.students.filter(s => s !== student);
  console.log(`${student.username} has  unenrolled from the course ${this.name}.`);
  }
  
    viewRoster() {
     console.log(`The students enrolled in the course ${this.name} are: ${this.students.map(s => s.username).join(', ')}`);
    }
  }
  
  class CourseMaterials {
    constructor(id, name, type, size) {
      this.id = id;
      this.name = name;
      this.type = type;
      this.size = size;
    }
  
    download() {
     console.log(`The material ${this.name} is being downloaded.`);
    }
  
    view() {
     console.log(`The material ${this.name} is being downloaded.`);
    }
  }
  
  class Assignments {
    constructor(name, dueDate, submission) {
      this.name = name;
      this.dueDate = dueDate;
      this.submission = submission;
    }
  
    submit() {
      console.log(`The assignment ${this.name} has been submitted.`);
    }
  
    viewSubmission() {
      console.log(`The submission for the assignment ${this.name} is: ${this.submission}`);
    }
  
    grade() {
      console.log(`The assignment ${this.name} has been graded.`);
    }
  }
  
  class Teachers extends Administration {
    constructor(username, password) {
      super(username, password);
    }
  
    login() {
    console.log(`Teacher ${this.username} has logged in.`);
    }
  
    logout(){
      console.log(`Teacher ${this.username} has logged out.`);
    }
  
  createCourse(){
  
  console.log(`Course ${course.name} has been created.`)};
  
  uploadMaterials() {
  console.log(`The course ${course.name} has been uploaded`)};}