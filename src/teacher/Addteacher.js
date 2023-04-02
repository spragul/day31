import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AppState } from "../Student/appprovider";

export function AddTeacher() {
    const history = useHistory();
    const { teacher, setTeacher } = AppState();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [subject, setSubject] = useState("");
    const [experience, setExperience] = useState("");
    const [school, setSchool] = useState("");

    const addNewTeacher = async (e) => {
        e.preventDefault();
        const newTeacher = {
            id,
            name,
            image,
            subject,
            experience,
            school

        }
        try {
            const response = await fetch("https://6421624f34d6cd4ebd71bf7d.mockapi.io/teacher", {
                method: "POST",
                body: JSON.stringify(newTeacher),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json();
            setTeacher([...teacher, data])
            history.push("/teacher")

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
                        placeholder="subject"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                    >
                    </input></li>

                    <li> <input
                        placeholder="experience"
                        value={experience}
                        onChange={(event) => setExperience(event.target.value)}
                    >
                    </input></li>

                    <li>  <input
                        placeholder="School Name"
                        value={school}
                        onChange={(event) => setSchool(event.target.value)}
                    >
                    </input></li>

                    <li>  <div className="btn-group">
                        <button
                            onClick={addNewTeacher}
                        >Add Teacher</button>
                    </div></li>
                </ul>
            </div>
        </div>


    )

}