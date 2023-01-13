import { Fragment, useState, useEffect } from "react";
import Hero from "../components/home-page/hero";
import FeturedPosts from "../components/home-page/fetured-posts";

const HomePage = () => {
    const [gods, setGods] = useState([]);

    useEffect(() => {
        fetch("https://kratos-killed-gods-default-rtdb.firebaseio.com/gods.json")
            .then((response) => response.json())

            .then((data) => {
                const arr = [];

                for (const key in data) {
                    arr.push(data[key]);
                }
                setGods(arr);
            });
    }, []);

    return (
        <Fragment>
            <Hero />
            <FeturedPosts posts={gods} />
        </Fragment>
    );
};

export default HomePage;
