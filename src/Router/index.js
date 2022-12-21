import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from '../Components/signIn/index.js';
import SignUp from '../Components/signUp/index.js';
import Profile from '../Components/pages/profile/index.js';

export default function Router(){
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/">
            <Route index element={<SignIn />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
            {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
        </Routes>
        </BrowserRouter>
    );
}