
export default function Students(){
    const students = [
        {
            id : 1,
            name:"lalit"
        },
        {
            id : 2,
            name:"Harshit"
        },
        {
            id : 3,
            name:"raj"
        }
    ];

    return(
        <div>
            <h2>Students Module</h2>
            {
                students.map((student)=>(
                    <p key={student.id}>{student.id} - {student.name}</p>
                ))
            }
        </div>
    )
}