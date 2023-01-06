import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./single-post.module.css";

const SinglePost = (props) => {
    return (
        <li className={classes.post}>
            <Link>
                <a>
                    <div className={classes.image}>
                        <Image src="" alt="ZEUS" width={300} height={200} />
                    </div>
                    <div className={classes.content}>
                        <h3>ZEUS</h3>
                        <time>13 march 2020 </time>
                        <p>The excerpt</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default SinglePost;
