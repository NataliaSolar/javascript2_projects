//Natalia Solar Lab 7

class Student{

    studentId;
    studentName;
    classes;
    constructor(id, name){
        this.studentId = id;
        this.studentName = name;
        this.classes = new Array();
    }

    addClass(newClass){
        this.classes.push(newClass);
    }
}

class Course{
    courseSessionId;
    courseName;

    constructor(courseId, name){
        this.courseSessionId = courseId;
        this.courseName = name;
    }

}


class Teacher{
    name;
    courseSessionId;

    constructor(name, id){
        this.name = name;
        this.courseSessionId = id;
    }
}


/*Create several courses
Create several students and add a few courses to each student
Create several teachers and assign the course to teachers
Find the association students and teacher through the courseSessionId */


let math301 = new Course(11, "Math");
let eng101 = new Course(12, "Composition");
let phys101 = new Course(13,"Physics");
let csd122 = new Course(14, "QA Mathodologies");
let csd143 = new Course(15, "Java I");

let student1 = new Student(1, "Bob Jensen");
let student2 = new Student(2, "Jane Filips");
let student3 = new Student(3, "Daren Willow");
let student4 = new Student(4, "Mia Gonzales");

student1.addClass(math301);
student1.addClass(eng101);
student1.addClass(phys101);

student2.addClass(csd122);
student2.addClass(eng101);
student2.addClass(phys101);

student3.addClass(csd122);
student3.addClass(csd143);
student3.addClass(math301);

student4.addClass(math301);
student4.addClass(eng101);
student4.addClass(csd143);

let teacher1 = new Teacher("Proffessor Abbot", 11);
let teacher2 = new Teacher("Proffessor Middlenton", 12);
let teacher3 = new Teacher("Proffessor Harris", 13);
let teacher4 = new Teacher("Proffessor Anderson", 14);
let teacher5 = new Teacher("Proffessor Ferrington", 15);

/*Find how many students in a teacher class?
List each student and a list of teacher associating to that student */

let group1 = new Array();
group1.push(student1);
group1.push(student2);
group1.push(student3);
group1.push(student4);

let faculty = new Array();
faculty.push(teacher1);
faculty.push(teacher2);
faculty.push(teacher3);
faculty.push(teacher4);
faculty.push(teacher5);


function getTeachers(student){
    console.log("\nStudent: " + student.studentName + "\n" + "Teachers:");
    for(let i = 0; i< student.classes.length; i++){        
        for(let j = 0; j < faculty.length; j++){
            if(student.classes[i].courseSessionId === faculty[j].courseSessionId) console.log(faculty[j].name);
        }
    }
}

function getStudentsInTeacherClass(teacher){
    console.log("\nTeacher: " + teacher.name + "\n" + "Students:");
    for(let i = 0; i < group1.length; i++){        
        for(let j = 0; j < group1[i].classes.length; j++){
            if(group1[i].classes[j].courseSessionId === teacher.courseSessionId) console.log(group1[i].studentName);
        }  
    }
}


getTeachers(student1);
getTeachers(student2);
getTeachers(student3);
getTeachers(student4);


getStudentsInTeacherClass(teacher1);
getStudentsInTeacherClass(teacher2);
getStudentsInTeacherClass(teacher3);
getStudentsInTeacherClass(teacher4);
getStudentsInTeacherClass(teacher5);



