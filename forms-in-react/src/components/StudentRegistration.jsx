
import {useState} from "react"
export default function StudentRegistrationForm(){
    const[student, setStudent] = useState({
        name:"",
        course:"",
        marks:""
    })

    const changeHandler=(e)=>{
        setStudent({...student, [e.target.name]: e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(student);
        setStudent({
            name:"",
            course:"",
            marks:""
        })
    }

    return(
        <div>
            <h2>Student Registration</h2>
           <form onSubmit={submit}>
           <input type="text"
            name="name"
            value={student.name}
            onChange={changeHandler} 
            placeholder="enter name"/>
            <br/>
            <input type="text"
            name="course"
            value={student.course}
            onChange={changeHandler} 
            placeholder="enter course"/>
            
            <br/>

            <input type="text"
            name="marks"
            value={student.marks}
            onChange={changeHandler} 
            placeholder="enter marks"/>
            
            <br/>
            <button>save student</button>
           </form>

        </div>
    )
}