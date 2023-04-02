import { useHistory } from "react-router-dom"

export function School() {
    const history = useHistory();
    return (

        <div className="al-center">
            <h1>BEST SCHOOL</h1>
            <p className="school">
                <img id="school-img" src="https://www.voicesofyouth.org/sites/voy/files/styles/blog_teaser/public/images/2019-03/school.jpg?h=55a93235&itok=BOCEqGVf" title="School" alt="School"></img>
            </p>
            <St />
        </div>


    )
}

function St() {
    const history = useHistory();
    return (
        <div className="st-column" >
            <div className="st-row">
                <img id="teacher-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTHIpzGaBtSM_uRbwS1BKKXs6UnTgp2GdF27fOAOMFkA80qNsD1k78AXJ2tfr7LXlBUo&usqp=CAU"
                    alt="teacher"
                    title="teacher"></img>
                <p><button
                    className="school-btn"
                    onClick={() => (history.push("/Teacher"))}
                >
                    Teacher
                </button>
                </p>
            </div>
            <div className="row">
                <img id="teacher-img" src="https://thumbs.dreamstime.com/b/student-children-learning-classroom-58065425.jpg" title="school" alt="student"></img>
                <p>
                    <button
                        className="school-btn"
                        onClick={() => (history.push("/student"))}
                    >
                        Student
                    </button>
                </p>
            </div>

        </div>
    )
}