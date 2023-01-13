import AllPosts from "../../components/posts/all-posts";
import { useState, useEffect } from "react";

const allPostsPage = () => {
    const [allGods, setAllGods] = useState([]);

    useEffect(() => {
        fetch("https://kratos-killed-gods-default-rtdb.firebaseio.com/gods.json")
            .then((response) => response.json())

            .then((data) => {
                const arr = [];

                for (const key in data) {
                    arr.push(data[key]);
                }
                setAllGods(arr);
            });
    }, []);
    return <AllPosts posts={allGods} />;
};

export default allPostsPage;
