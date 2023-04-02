import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { School } from './school';
import StudentComponent from './Student/studentcomponent';
import TeacherComponent from './teacher/Teachercomponent';
import { AddTeacher } from './teacher/Addteacher';
import { EditTeacher } from './teacher/EditTeacher';
import { DetailsTeacher } from './teacher/DetailsTeacher';
import { AddStudent } from './Student/Addstudent';
import { EditStudent } from './Student/Editstudent';
import { DetailsStudent } from './Student/Detailsstudent';
import Sidebar, { Footer, NavScrollExample } from './SideNavBar/SideNavBar';




function App() {

  return (
    <div className="App">
      <Sidebar>
        <NavScrollExample />
        <Switch>
          <Route exact path="/">
            <School />
          </Route>

          <Route exact path="/student">
            <StudentComponent />
          </Route>
          <Route path="/add/student">
            <AddStudent />
          </Route>

          <Route path="/student/edit/:id">
            <EditStudent />
          </Route>

          <Route path="/student/view/:id">
            <DetailsStudent />
          </Route>

          <Route exact path="/teacher">
            <TeacherComponent />
          </Route>
          <Route path="/teacher/add">
            <AddTeacher />
          </Route>

          <Route path="/teacher/edit/:id">
            <EditTeacher />
          </Route>

          <Route path="/teacher/view/:id">
            <DetailsTeacher />
          </Route>

        </Switch>
      </Sidebar>
      <Footer />
    </div>
  );
}

export default App;
