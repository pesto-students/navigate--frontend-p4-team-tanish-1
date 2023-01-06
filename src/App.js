// import SignInPage from "./Components/signIn/index.js";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Pages/Auth/SignIn/index.js";
import SignUp from "./Pages/Auth/SignUp/index.js";
import ViewProfile from "./Pages/Student/ViewProfile/index.js";
import EditProfile from "./Pages/Student/EditProfile/index.js";
import StudentDashboard from "./Pages/Student/Dashboard/index.js";
import SearchAlumni from "./Pages/Student/SearchAlumni/index.js";
import Booking from "./Pages/Student/Book Session/index.js";
import StudentViewAlumniProfile from "./Pages/Student/ViewAlumni/index.js";

import AlumniDashboard from "./Pages/Alumni/Dashboard/index.js";
import AlumniViewProfile from "./Pages/Alumni/ViewProfile/index.js";
import AlumniEditProfile from "./Pages/Alumni/EditProfile/index.js";
import ConfirmPage from "./Pages/Student/Book Session/confirmation.js";

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<SignIn />}/>
        <Route exact path="/signin" element={<SignIn />}/>
        <Route exact path="/signup" element={<SignUp />}/>
        <Route path="/alumni">
        <Route exact path=":id" element={<StudentViewAlumniProfile />}></Route>
        <Route exact path="dashboard" element={<AlumniDashboard />}></Route>
        <Route exact path="profile" element={<AlumniViewProfile />}/>
        <Route exact path="edit-profile" element={<AlumniEditProfile />}/>
        </Route>
        <Route path="/student">
          <Route exact path=":id" element={<h1>404 Page not found</h1>} />
          <Route exact path="dashboard" element={<StudentDashboard />} />
          <Route exact path="profile" element={<ViewProfile />}/>
          <Route exact path="edit-profile" element={<EditProfile />}/>
          <Route exact path="session-confirm" element={<ConfirmPage />}/>
          <Route exact path="booking" element={<Booking />}/>
          <Route exact path="search" element={<SearchAlumni />}/>
        </Route>
        <Route path="*" element={<h1>404 Page not found</h1>}/>
        
    </Routes>
  );
}

export default App;
