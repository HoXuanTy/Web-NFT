import LoginLayout from "../Layouts/LoginLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Signup/Signup";

const publicRouters = [
    {path: "/", component:Home },
    {path:"/login", component: Login, layout: LoginLayout },
    {path:"/signup", component: SignUp, layout: LoginLayout }
    
];

export {publicRouters};