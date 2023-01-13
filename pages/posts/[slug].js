import React from "react";
import PostContent from "../../components/posts/post-details/post-content";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const singlePostPage = () => {
    const router = useRouter();

    const [singleGod, setSingleGod] = useState({});

    fetch(`https://kratos-killed-gods-default-rtdb.firebaseio.com/gods/${router.query.slug}.json`)
        .then((response) => response.json())
        .then((data) => (data ? setSingleGod(data) : console.log("there is no data")));

    return (
        <div>
            <PostContent content={singleGod} />
        </div>
    );
};

export default singlePostPage;
