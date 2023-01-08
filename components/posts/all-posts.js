import PostGrid from "./posts-grid";
import classes from "./all-posts.module.css";
const AllPosts = (props) => {
    return (
        <section className={classes.posts}>
            <h1>ALL KILLED GODS</h1>
            <PostGrid posts={props.posts} />
        </section>
    );
};

export default AllPosts;
