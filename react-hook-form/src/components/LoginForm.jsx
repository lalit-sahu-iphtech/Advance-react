import {useForm} from "react-hook-form"
export default function LoginForm(){
    // useForm
    const {
        register,
        reset,
        handleSubmit,
        formState :{errors}
    } = useForm();

    //handleSubmit
    const login = (data)=>{
        alert("Log in success");
        console.log(data);
        reset();
    }

    return(
        <>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(login)}>
            <input type="text"placeholder="enter email"
            {...register("email",{required:"email required"})}
             />
             <p style={{color:"red"}}>{errors.email?.message}</p>

             <input type="text"placeholder="enter password"
             {...register("password",{required:"password required"})}
              />
              <p style={{color:"red"}}>{errors.password?.message}</p>

              <button>Login</button>

        </form>
        </>
    )
}