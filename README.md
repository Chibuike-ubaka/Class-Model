# Class-Model
This code defines a set of classes that represent different entities in an online learning platform.

The Person class represents a person who has a username and password. It has two methods: login and logout, which log when the person logs in and out of the platform.

The Administration class represents an administrator who is a type of person and has additional methods to manage subscriptions, courses, teachers, and course gifting. It extends the Person class and calls the super constructor to initialize the username and password properties inherited from the Person class.

The Student class represents a student who is also a type of person and has additional properties and methods specific to students. It also extends the Person class and has a studentId property in addition to the username and password properties inherited from the Person class. It has methods to view courses, enroll in a course, access course materials, and access assignments.

The Subscription class represents a subscription to the platform, with a type and duration. It has methods to renew and cancel the subscription.

The CourseGifting class represents a course that has been gifted from one person to another, with an id, sender, recipient, course, and status. It has methods to send, accept, and decline the gift.

The Courses class represents a course on the platform, with an id, name, materials, teacher, and a list of students enrolled in the course. It has methods to view materials, enroll a student, unenroll a student, and view a list of enrolled students.
