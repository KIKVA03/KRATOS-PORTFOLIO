import styled from "styled-components";
import { Fragment, useState, useEffect, useMemo } from "react";
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

    // console.log(gods);

    const DUMMY_POSTS = [
        {
            slug: "killed-ZEUS-bareHanded1",
            title: "ZEUS",
            image: "/images/posts/Zeus.png.jpg",
            excerpt: "Zeus was main reson of my suffering",
            date: "2020-20-12",
        },
        {
            slug: "killed-odin-withMySon",
            title: "ODIN",
            image: "/images/posts/odin.jpg",
            excerpt: "me and my son defeated ODIN together & that was fun",
            date: "2020-20-12",
        },
        {
            slug: "killed-HELIOS-TheSunGod",
            title: "HELIOS",
            image: "/images/posts/helios.jpg",
            excerpt: "i ripped his head of from his shoulders becouse he was weak for live",
            date: "2020-20-12",
        },
    ];
    return (
        <Fragment>
            <Hero />
            <FeturedPosts posts={gods} />
        </Fragment>
    );
};

export default HomePage;

const Container = styled.div``;
