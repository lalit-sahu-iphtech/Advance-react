import { useForm } from "react-hook-form";

function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const submit = (data) => {
    console.log(data);

    console.log(getValues());
  };

  return (
    <div>
      <h2>Student Registration Form</h2>

      <form onSubmit={handleSubmit(submit)}>
        <input
          placeholder="Student Name"
          {...register("studentName", {
            required: "Student Name Required",
          })}
        />
        <p style={{color:"red"}}>{errors.studentName?.message}</p>


        <input placeholder="Age" type="number" {...register("age")} />
        <p style={{color:"red"}}>{errors.age?.message}</p>

        <select {...register("course")}>
          <option>React</option>

          <option>Node</option>

          <option>Java</option>
        </select>

        <input placeholder="Mobile Number" {...register("mobile")} />
        <p style={{color:"red"}}>{errors.mobile?.message}</p>

        <button>Register</button>
      </form>
    </div>
  );
}

export default StudentForm;
