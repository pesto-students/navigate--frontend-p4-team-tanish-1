import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from '../Components/signIn/index.js';
import SignUp from '../Components/signUp/index.js';
import EditProfile from '../Components/pages/edit-profile/index.js';
import ViewProfile from "../Components/pages/view-profile/index.js";

export default function Router(){
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<SignIn />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="edit-profile" element={<EditProfile />} />
            <Route path="view-profile" element={<ViewProfile />} />
            {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
        </Routes>
        </BrowserRouter>
    );
}