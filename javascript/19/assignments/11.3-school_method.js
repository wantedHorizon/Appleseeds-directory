const school = {
    teachers: [{
            name: 'Or a',
            subjects: ['Math', 'Physics'],
            students: [1, 2, 3, 4],

            capacity: 25
        },
        {
            name: 'Maria d',
            subjects: ['English', 'Physics'],
            students: [1, 2, 3, 4],
            capacity: 25
        },
        {
            name: 'name3',
            subjects: ['Sports'],
            students: [1, 2, 3, 4],
            capacity: 0
        },
    ],
    students: [{
            id: 1,
            name: 'Or Cohen',
            age: 12
        },
        {
            id: 2,
            name: 'Moshe itzhak',
            age: 13
        },
        {
            id: 3,
            name: 'Jhon Doe',
            age: 11
        },
        {
            id: 4,
            name: 'Raz cohen',
            age: 10
        },
    ]
};
const assignStudent = (school, student, subject) => {
    let isAssigned = false;

    const relevantTeacher = school.teachers
        .find(teacher => teacher.capacity && teacher.subjects.includes(subject))



    if (!relevantTeacher) {
        console.log("Sorry, no available teachers left");
        return false;
    }
    //adding new student
    relevantTeacher.students.push(student.id);

    //checks if students includes the new student
    if (school.students.findIndex(s => s.id === student.id) < 0) {
        school.students.push(student);
    }
    return true;


}
console.log(
    assignStudent(
        school, {
            id: 5,
            name: 'name student',
            age: 12
        },
        "Physics"
    )
);// true => successful

console.log(
    assignStudent(
        school, {
            id: 5,
            name: 'name student',
            age: 12
        },
        "Sports"
    )
);//no space

console.log("students", school.students);