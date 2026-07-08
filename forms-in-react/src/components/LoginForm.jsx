import {useState} from "react"
export default function LoginForm(){
    const[form, setForm] = useState({
        name:"",
        password:""
    })

    const handleChange=(e)=>{
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        setForm({
            name:"",
            password:""
        })
    }

    return(
        <div>
            <h2>Login</h2>
           <form onSubmit={handleSubmit}>
           <input type="text"
            name="name"
            value={form.name}
            onChange={handleChange} 
            placeholder="enter name"/>
            <br/>
            <input type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="enter password" />
            <br/>
            <button>Login</button>
           </form>

        </div>
    )
}