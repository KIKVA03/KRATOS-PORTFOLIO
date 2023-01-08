import React from "react";
import PostGrid from "../posts/posts-grid";
import classes from "./feturedPosts.module.css";

const FeturedPosts = (props) => {
    return (
        <section className={classes.latest}>
            <h1>killed gods</h1>
            <PostGrid posts={props.posts} />
        </section>
    );
};

export default FeturedPosts;
