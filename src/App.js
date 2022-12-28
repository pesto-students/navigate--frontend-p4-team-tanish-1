// import SignInPage from "./Components/signIn/index.js";
import { Route, Routes } from "react-router-dom"
import SignIn from "./Pages/Auth/SignIn/index.js"
import SignUp from "./Pages/Auth/SignUp/index.js"
import ViewProfile from "./Pages/ViewProfile/index.js";
import EditProfile from "./Pages/EditProfile/index.js"

function App() {
  return (
    <Routes>
        <Route path="/" element={<SignIn />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/profile" element={<ViewProfile />}/>
        <Route path="/edit-profile" element={<EditProfile />}/>
        <Route path="/alumni">
            <Route path=":id" element={<SignIn />}></Route>
        </Route>
        <Route path="/student">
            <Route path=":id" element={<SignIn />}></Route>
        </Route>
        <Route path="*" element={<h1>404 Page not found</h1>}/>
        
    </Routes>
  );
}

export default App;
