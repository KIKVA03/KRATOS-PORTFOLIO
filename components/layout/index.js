import { Fragment } from "react";
import Navigation from "./navigation";

const Layout = (props) => {
    return (
        <div>
            <Navigation />
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;
