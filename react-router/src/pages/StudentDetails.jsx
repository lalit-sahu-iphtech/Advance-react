import { useParams } from "react-router-dom";

function StudentDetails() {

  const { id } = useParams();

  return (
    <>
      <h1>Student Details</h1>

      <h2>Student ID : {id}</h2>
    </>
  );
}

export default StudentDetails;