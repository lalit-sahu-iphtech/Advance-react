
function StudentProfile({student}){


if(!student){

return <h3>
Select Student
</h3>

}


return(

<div>

<h2>
Student Profile
</h2>


<h3>
Name:
{student.name}
</h3>


<p>
Email:
{student.email}
</p>


<p>
Course:
{student.course}
</p>


</div>

)

}


export default StudentProfile;