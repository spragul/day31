import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "./appprovider";

export default function StudentComponent() {
    const { student, setStudent } = AppState();
    const history = useHistory();

    //api used to delete the data
    const studentDelete = async (idx) => {
        try {
            const response = await fetch(`https://6421624f34d6cd4ebd71bf7d.mockapi.io/student/${idx}`, {
                method: "Delete"
            })
            const data = await response.json();
            const studentAlterList = student.filter((stu) => stu.id !== idx);
            setStudent(studentAlterList)

        } catch (error) {
            console.log(error)
        }


    }
    return (



        <div className="student-c" >

            {
                student.map((students, index) => (
                    <div key={index} className="water-card">
                        <h1>{students.name}</h1>
                        <img src={students.image} title={students.name} alt={students.name} className="image"></img>
                        <p>std: {students.std}</p>
                        <p>Session: {students.session}</p>
                        <p>School: {students.school}</p>
                        <p>Mark: {students.mark}/500 </p>

                        <div className="btn-group">
                            <button
                                className="button button-view"
                                onClick={() => history.push(`/student/view/${index}`)}
                            >View</button>

                            <button
                                className="button button-edit"
                                onClick={() => history.push(`/student/edit/${students.id}`)}
                            >Edit</button>

                            <button
                                className="button button-delete"
                                onClick={() => studentDelete(students.id)}
                            >Delete</button>
                        </div>
                    </div>

                ))


            }

        </div>



    )
}