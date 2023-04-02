import {
    FaUserSecret,
    FaUserCog,
    FaUserGraduate,
    FaBookReader,
    FaUserPlus
} from "react-icons/fa";
import { NavLink, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap"



function Sidebar({ children }) {

    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaBookReader />
        },
        {
            path: "/student",
            name: "Student",
            icon: <FaUserGraduate />
        },
        {
            path: "/add/student",
            name: "Add Student",
            icon: <FaUserPlus />
        },
        {
            path: "/teacher",
            name: "Teacher",
            icon: <FaUserSecret />
        },
        {
            path: "/teacher/add",
            name: "Add Teacher",
            icon: <FaUserCog />
        }

    ]
    return (
        <div className="sid-container">

            <div className="sidebar">
                <div className="top_section">
                    <div className="icon"><FaBookReader /></div>
                    <div className="link d-none d-sm-inline">BOOK </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link text-deactron" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div className="ms-3 d-none d-sm-inline">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>

            <main>{children}</main>

        </div>
    );
};

export default Sidebar;

export function NavScrollExample({ title }) {
    const history = useHistory()
    return (
        <div>
            <Navbar className="nav-clr" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" className="title">{title}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <button class="btn btn-outline-warning me-2" type="button" onClick={() => history.push("/")}>Home</button>
                            <NavDropdown title="Student" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/student">Student</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/add/student">
                                    Add Student
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Teacher" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/teacher">Teacher</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/teacher/add">
                                    Add Teacher
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button class="btn btn-outline-warning me-2">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export function Footer() {
    return (
        <div>
            <footer>
                contact us
                <div>email : schoolmange@gmail.com</div>
                <div>phone : 9788652355</div>
            </footer>
        </div>
    )
}