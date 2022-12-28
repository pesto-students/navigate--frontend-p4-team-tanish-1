// import SignInPage from "./Components/signIn/index.js";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn/index.js";
import SignUp from "./Pages/Auth/SignUp/index.js";
import ViewProfile from "./Pages/ViewProfile/index.js";
import EditProfile from "./Pages/EditProfile/index.js";
import StudentDashboard from "./Pages/Dashboard/index.js";
import SearchAlumni from "./Pages/SearchAlumni/index.js";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<SignIn />}/>
        <Route exact path="/signin" element={<SignIn />}/>
        <Route exact path="/signup" element={<SignUp />}/>
        <Route exact path="/profile" element={<ViewProfile />}/>
        <Route exact path="/edit-profile" element={<EditProfile />}/>
        <Route exact path="/search" element={<SearchAlumni />}/>
        <Route path="/alumni">
            <Route exact path=":id" element={<h1>404 Page not found</h1>}></Route>
        </Route>
        <Route path="/student">
            <Route exact path=":id" element={<h1>404 Page not found</h1>}></Route>
            <Route exact path="dashboard" element={<StudentDashboard />}></Route>
        </Route>
        <Route path="*" element={<h1>404 Page not found</h1>}/>
        
    </Routes>
  );
}

export default App;
