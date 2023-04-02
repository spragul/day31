import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "./appprovider";

export function EditStudent() {
    const { student, setStudent } = AppState();
    const [idx, setIdx] = useState("")
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [std, setStd] = useState("");
    const [session, setSession] = useState("");
    const [school, setSchool] = useState("");
    const [mark, setMark] = useState("");

    const { id } = useParams();
    const selectedStudent = student.find((stu) => stu.id === id);
    const history = useHistory();

    useEffect(() => {
        setIdx(selectedStudent.id)
        setName(selectedStudent.name)
        setImage(selectedStudent.image)
        setStd(selectedStudent.std)
        setSession(selectedStudent.session)
        setSchool(selectedStudent.school)
        setMark(selectedStudent.mark)
    }, []);

    const EditedStudent = async () => {
        const editindex = student.findIndex(stu => stu.id === id);
        const editedData = {
            id: idx,
            name,
            image,
            std,
            session,
            school,
            mark
        }
        try {
            const response = await fetch(`https://6421624f34d6cd4ebd71bf7d.mockapi.io/student/${idx}`, {
                method: "PUT",
                body: JSON.stringify(editedData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json();
            console.log(data);

            student[editindex] = data;
            setStudent([...student]);
            history.push("/student")

        } catch (error) {
            console.log(error)
        }

    }

    return (

        <div className="add-container">
            <div className="box-model">
                <ul type="none">
                    <li><input
                        placeholder="id"
                        value={idx}
                        onChange={(event) => setIdx(event.target.value)}
                    >
                    </input></li>

                    <li>  <input
                        placeholder="Name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    >
                    </input></li>
                    <li>  <input
                        placeholder="image sorce"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    >
                    </input></li>

                    <li> <input
                        placeholder="std"
                        value={std}
                        onChange={(event) => setStd(event.target.value)}
                    >
                    </input></li>

                    <li> <input
                        placeholder="Session"
                        value={session}
                        onChange={(event) => setSession(event.target.value)}
                    >
                    </input></li>

                    <li>  <input
                        placeholder="School Name"
                        value={school}
                        onChange={(event) => setSchool(event.target.value)}
                    >
                    </input></li>


                    <li>  <input
                        placeholder="Total Mark"
                        value={mark}
                        onChange={(event) => setMark(event.target.value)}
                    >
                    </input></li>

                    <li>  <div className="btn-group">
                        <button
                            className="edit-button"
                            onClick={EditedStudent}
                        >Edit Student</button>
                    </div></li>
                </ul>
            </div>
        </div>


    )
}