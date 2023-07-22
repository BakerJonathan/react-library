import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Featured from "../pages/Featured";
import About from "../pages/About";

interface RouteType{
    path:string, 
    component:()=>JSX.Element, 
    name:string}

const routes: RouteType[]=[
    {path:"",
    component:Home,
    name: "Home Screen"},
    {path:"/dashboard",
    component: Dashboard,
    name:"Dashboard"},
    {path:"/about",
    component: About,
    name:"About"},
    {path:"/featured",
    component: Featured,
    name:"Featured"},
];
export default routes