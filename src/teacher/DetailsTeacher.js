import { useHistory, useParams } from "react-router-dom";
import { AppState } from "../Student/appprovider";

export function DetailsTeacher() {
    const { teacher } = AppState();
    const history = useHistory();
    const { id } = useParams();
    const teachers = teacher[id];
    return (

        <div className="detail-continar">
            <div className="detail-card">
                <h1>{teachers.name}</h1>
                <img src={teachers.image} title={teachers.name} alt={teachers.name} className="image"></img>
                <p>Subject heandel: {teachers.subject}</p>
                <p>Experience: {teachers.experience}</p>
                <p>School: {teachers.school}</p>

                <div className="btn-group">
                    <button
                        className="btn btn-detail"
                        onClick={() => history.push("/teacher")}
                    >Dashboard</button>

                </div>
            </div>
        </div>

    )
}