import PostHeader from "./post-header";
import classes from "./post-content.module.css";

const PostContent = ({ content }) => {
    return (
        <article className={classes.content}>
            <PostHeader title={content.title} image={content.image} />
            <p>{content.excerpt}</p>
        </article>
    );
};

export default PostContent;
