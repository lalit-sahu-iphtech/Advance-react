import {useState} from "react";


function StudentForm({addStudent,selectedStudent,updateStudent}){


const [student,setStudent]=useState(
{
name:"",
email:"",
course:""
}
);



function handleChange(e){

setStudent({

...student,

[e.target.name]:e.target.value

})

}



function submitHandler(e){

e.preventDefault();


if(selectedStudent){

updateStudent(
selectedStudent.id,
student
)

}
else{

addStudent(student)

}


setStudent({

name:"",
email:"",
course:""

})

}



return(

<form onSubmit={submitHandler}>


<input

name="name"

placeholder="Name"

value={student.name}

onChange={handleChange}

/>


<input

name="email"

placeholder="Email"

value={student.email}

onChange={handleChange}

/>


<input

name="course"

placeholder="Course"

value={student.course}

onChange={handleChange}

/>


<button>

{
selectedStudent
?
"Update Student"
:
"Add Student"
}

</button>


</form>

)

}


export default StudentForm;