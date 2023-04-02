import React from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Student/appprovider";


export default function TeacherComponent() {
    const { teacher, setTeacher } = AppState();

    const history = useHistory();
    const teacherDelete = async (idx) => {
        try {
            const response = await fetch(`https://6421624f34d6cd4ebd71bf7d.mockapi.io/teacher/${idx}`, {
                method: "Delete"
            })
            const data = await response.json();
            const teacherAlterList = teacher.filter((tea) => tea.id !== idx);
            setTeacher(teacherAlterList)

        } catch (error) {
            console.log(error)
        }

    }
    return (
        <div className="teacher-c">
            {
                teacher.map((teachers, index) => (
                    <div key={index} className="teacher-card">
                        <h1>{teachers.name}</h1>
                        <img src={teachers.image} title={teachers.name} alt={teachers.name} className="image"></img>
                        <p>Subject heandel: {teachers.subject}</p>
                        <p>Experience: {teachers.experience}</p>
                        <p>School: {teachers.school}</p>


                        <div className="btn-group">
                            <button
                                className="button button-view"
                                onClick={() => history.push(`/teacher/view/${index}`)}
                            >View</button>

                            <button
                                className="button button-edit"
                                onClick={() => history.push(`/teacher/edit/${teachers.id}`)}
                            >Edit</button>

                            <button
                                className="button button-delete"
                                onClick={() => teacherDelete(teachers.id)}
                            >Delete</button>
                        </div>
                    </div>

                ))


            }

        </div>

    )
}