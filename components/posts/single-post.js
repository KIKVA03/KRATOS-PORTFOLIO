import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./single-post.module.css";

const SinglePost = (props) => {
    const { title, date, image, excerpt } = props.post;

    const linkPath = `/posts/${title}`;

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                {/* <a> */}
                <div className={classes.image}>
                    <Image src={image} alt="ZEUS" width={450} height={100} layout="responsive" />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <time>{date}</time>
                    <p>{excerpt}</p>
                </div>
                {/* </a> */}
            </Link>
        </li>
    );
};

export default SinglePost;
