import { useState } from "react";

import StudentForm from "./components/StudentForm";

import StudentList from "./components/StudentList";

import StudentProfile from "./components/StudentProfile";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Lalit",
      email: "lalit@gmail.com",
      course: "React",
    },

    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      course: "Node",
    },
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [profile, setProfile] = useState(null);

  const [search, setSearch] = useState("");

  // CREATE

  function addStudent(student) {
    setStudents([
      ...students,

      {
        ...student,

        id: Date.now(),
      },
    ]);
  }

  // DELETE

  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }

  // UPDATE

  function updateStudent(id, data) {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              ...data,
            }
          : student,
      ),
    );

    setSelectedStudent(null);
  }

  // EDIT

  function editStudent(student) {
    setSelectedStudent(student);
  }

  // SEARCH

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1>Student CRUD Application</h1>

      <input
        placeholder="Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <StudentForm
        addStudent={addStudent}
        selectedStudent={selectedStudent}
        updateStudent={updateStudent}
      />

      <StudentList
        students={filteredStudents}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
        viewProfile={setProfile}
      />

      <StudentProfile student={profile} />
    </div>
  );
}

export default App;
