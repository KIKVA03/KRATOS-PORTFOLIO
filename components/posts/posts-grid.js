import classes from "./post-grid.module";
const PostGrid = ({ posts }) => {
    return (
        <ul className={classes.grid}>
            {posts.map((post) => (
                <SinglePost />
            ))}
        </ul>
    );
};

export default PostGrid;
