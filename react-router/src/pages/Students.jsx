import { Link } from "react-router-dom";
export default function Students(){
    const students=[
        {id:1, name: "Rahul"},
        {id:2, name: "sonu"},
        {id:3, name: "nitin"},

    ];
    return(
        <>
        <h2>Student</h2>
        {students.map((student)=>(
            <p key={student.id}>
            <Link to={`/students/${student.id}`}>
            {student.name}
          </Link>
            </p>
        ))}
        </>

    )
}