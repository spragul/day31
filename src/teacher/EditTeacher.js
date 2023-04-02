import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../Student/appprovider";

export function EditTeacher() {

    const { teacher, setTeacher } = AppState();
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [subject, setSubject] = useState("");
    const [experience, setExperience] = useState("");
    const [school, setSchool] = useState("");

    const { id } = useParams();
    const selectedteachers = teacher.find((tea) => tea.id === id);
    const history = useHistory();

    useEffect(() => {
        setIdx(selectedteachers.id)
        setName(selectedteachers.name)
        setImage(selectedteachers.image)
        setSubject(selectedteachers.subject)
        setExperience(selectedteachers.experience)
        setSchool(selectedteachers.school)

    }, []);

    const EditedTeacher = async () => {
        const editindex = teacher.findIndex(tea => tea.id === id);
        const editedData = {
            id: idx,
            name,
            image,
            subject,
            experience,
            school,

        }
        try {
            const response = await fetch(`https://6421624f34d6cd4ebd71bf7d.mockapi.io/teacher/${idx}`, {
                method: "PUT",
                body: JSON.stringify(editedData),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json();
            teacher[editindex] = data;
            setTeacher([...teacher]);
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
                            className="edit-button"
                            onClick={EditedTeacher}
                        >Edit Teacher</button>
                    </div></li>
                </ul>
            </div>
        </div>


    )
}