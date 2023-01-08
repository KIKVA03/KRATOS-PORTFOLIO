import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const PostContent = () => {
    return (
        <article className={classes.content}>
            <PostHeader title="" image="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, similique.</p>
        </article>
    );
};

export default PostContent;
