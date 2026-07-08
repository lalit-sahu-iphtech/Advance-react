import { useForm } from "react-hook-form"
export default function ProfileForm(){
    const{
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState:{errors}
    } = useForm();

    const submit = (data)=>{
        
       console.log(data);
    }
    return(
        <>
         <h2>Profile</h2>
        <form onSubmit={handleSubmit(submit)}>

            <input type="text"placeholder="Enter Full Name"
             {...register("name",{
                required:"Name Required"
                })}
             />
          <p style={{color:"red"}}>{errors.name?.message}</p>
            <input type="number"placeholder="Phone No."
              {...register("phone",{
                required:"Phone number Required"
                })}
             />
            <p style={{color:"red"}}>{errors.phone?.message}</p>

            <input type="text"placeholder="Enter Address"
              {...register("address",{
                required:"Address Required"
                })}
             />
             <p style={{color:"red"}}>{errors.address?.message}</p>
             <h3>Name preview : {watch("name")}</h3>

             <button onClick={()=>setValue("name","Lalit")}>set name</button>

             <button>Save Profile</button>

             <button onClick={()=>reset()}>Reset</button>

           
        </form>
        </>
    )
}