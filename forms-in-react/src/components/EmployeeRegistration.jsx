
import {useState} from "react"
export default function EmployeeRegistrationForm(){
    const[employee, setEmployee] = useState({
        name:"",
        role:"",
        address:{
            city:"",
            pincode:""
        }
    })

    const changeHandler=(e)=>{
        setEmployee({...employee, [e.target.name]: e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault();
        console.log(employee);
    }

    return(
        <div>
           <form action="">
           <h2>Employee Registration</h2>
           
           <input type="text"
            name="name"
            value={employee.name}
            onChange={changeHandler} 
            placeholder="enter name"/>
            <br/>
            <input type="text"
            name="role"
            value={employee.role}
            onChange={changeHandler} 
            placeholder="enter course"/>
            
            <br/>

            <input type="text"
            name="city"
            onChange={changeHandler} 
            placeholder="enter city"/>
            
            <br/>
            <button>submit</button>
           </form>
        

        </div>
    )
}