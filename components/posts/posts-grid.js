import classes from "./post-grid.module.css";
import SinglePost from "./single-post";
const PostGrid = ({ posts }) => {
    return (
        <ul className={classes.grid}>
            {posts.map((post) => (
                <SinglePost key={post.slug} post={post} />
            ))}
        </ul>
    );
};

export default PostGrid;
