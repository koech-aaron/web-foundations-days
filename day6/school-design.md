
# School Database Design

## Tables

### Students

The students table stores information about each student. It contains a student_id as the primary key, a name, and an email address. The name and email are required, and each email must be unique.

### Courses

The courses table stores the courses offered by the school. It contains a course_id as the primary key, a course_name, and a unique course_code. The course name and code are required.

### Enrolments

The enrolments table records which students are enrolled in which courses. It contains an enrolment_id as the primary key, student_id and course_id as foreign keys, and a grade for the student's performance. The combination of student_id and course_id is unique so that a student cannot enrol in the same course twice.

## Relationships

There is a one-to-many relationship between students and enrolments because one student can have several enrolment records, but each enrolment belongs to one student. There is also a one-to-many relationship between courses and enrolments because one course can have many enrolment records, but each enrolment belongs to one course.

Students and courses have a many-to-many relationship because one student can take several courses and one course can have several students. The enrolments table is needed as a join table to connect students and courses. It also stores additional information about each enrolment, such as the student's grade.

## Index

I would add an index on enrolments(course_id) to help queries that find all students enrolled in a particular course. This can improve lookup performance as the number of enrolments increases. SQLite already creates indexes for primary keys and UNIQUE constraints, but an index on course_id is useful because it is not the leading column of the existing composite uniqueness constraint.

## SQL or NoSQL?

I would choose a relational SQL database for this school system. The data has clear relationships between students, courses, and enrolments, and the system needs to enforce rules such as unique student emails, valid foreign keys, and preventing duplicate enrolments. SQL supports these constraints and makes it easy to retrieve related information using JOIN and GROUP BY queries. A NoSQL database could be useful for some flexible or unstructured data, but a relational database is a better fit for this structured school enrolment system.
