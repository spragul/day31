import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "./appprovider";

export function AddStudent() {
    const { student, setStudent } = AppState();
    const history = useHistory();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [std, setStd] = useState("");
    const [session, setSession] = useState("");
    const [school, setSchool] = useState("");
    const [mark, setMark] = useState("");
    //update the data to api
    const addNewStudent = async (e) => {
        e.preventDefault();
        const newStudent = {
            id,
            name,
            image,
            std,
            session,
            school,
            mark
        }
        try {
            const response = await fetch("https://6421624f34d6cd4ebd71bf7d.mockapi.io/student", {
                method: "POST",
                body: JSON.stringify(newStudent),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json();
            console.log(data);
            setStudent([...student, data])
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
                        value={id}
                        onChange={(event) => setId(event.target.value)}
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
                            onClick={addNewStudent}
                        >Add Student</button>
                    </div></li>
                </ul>
            </div>
        </div>


    )

}