import Header from "../component/header/header";
import Footer from "../component/footer/footer";
import {Outlet} from "react-router-dom";

const Layout = () => <>
    <Header />
    <Outlet />
    <Footer />
</>

export default Layout