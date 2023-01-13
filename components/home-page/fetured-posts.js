import React from "react";
import PostGrid from "../posts/posts-grid";
import classes from "./feturedPosts.module.css";

const FeturedPosts = (props) => {
    const feturedGods = props.posts.filter((god) => god.isFetured);
    return (
        <section className={classes.latest}>
            <h1>killed gods</h1>
            <PostGrid posts={feturedGods} />
        </section>
    );
};

export default FeturedPosts;
