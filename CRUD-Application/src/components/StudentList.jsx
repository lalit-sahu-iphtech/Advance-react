
function StudentList({
students,
deleteStudent,
editStudent,
viewProfile
}){


return(

<div>


<h2>
Student List
</h2>


{
students.map(student=>(


<div key={student.id}>


<h3>
{student.name}
</h3>


<p>
{student.course}
</p>


<button
onClick={()=>editStudent(student)}
>
Edit
</button>


<button
onClick={()=>deleteStudent(student.id)}
>
Delete
</button>


<button
onClick={()=>viewProfile(student)}
>
Profile
</button>


</div>


))

}


</div>

)

}


export default StudentList;