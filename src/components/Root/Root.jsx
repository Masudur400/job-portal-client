import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="">
                <NavBar></NavBar>

            </div>
            <div className="container my-20 mx-auto px-4 md:px-9  min-h-[calc(100vh-380px)]">
                <Outlet></Outlet>
            </div>
            <div className="bg-base-200 mt-10">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;