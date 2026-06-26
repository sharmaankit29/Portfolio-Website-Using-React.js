import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import { Outlet, useLocation } from "react-router-dom";

function ScrollToTopOnNavigate() {
    const { pathname } = useLocation();
    React.useEffect(() => {
        // scroll to top smoothly when route changes
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);
    return null;
}

function AnimatedOutlet({ children, id }) {
    const [visible, setVisible] = React.useState(false);
    React.useEffect(() => {
        setVisible(false);
        const t = setTimeout(() => setVisible(true), 20);
        return () => clearTimeout(t);
    }, [id]);

    return (
        <div className={`transition-opacity transition-transform duration-1000 ease-in-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-2 scale-95"}`}>
            {children}
        </div>
    );
}

function Layout(){
        const location = useLocation();
        return(
                <>
                <Landing/>
                <Header/>
                <ScrollToTopOnNavigate />
                <AnimatedOutlet id={location.pathname}>
                    <Outlet />
                </AnimatedOutlet>
                <Footer/>
                </>
        )
}

export default Layout