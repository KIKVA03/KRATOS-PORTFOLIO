import styled from "styled-components";
import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeturedPosts from "../components/home-page/fetured-posts";

const HomePage = () => {
    return (
        <Fragment>
            <Hero />
            <FeturedPosts />
        </Fragment>
    );
};

export default HomePage;

const Container = styled.div``;
