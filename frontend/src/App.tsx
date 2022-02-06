import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {Home} from "./view/Pages/Home"


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/about_2' element={<Navigate to='/about' />} />
          <Route path='/*' element={<ErrorPage/>} /> {/*not foundの時*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function ErrorPage() {
  return <h2>404 Notfound</h2>;
}
