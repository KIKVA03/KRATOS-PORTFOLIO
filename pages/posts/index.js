import AllPosts from "../../components/posts/all-posts";

const allPostsPage = () => {
    const DUMMY_POSTS = [
        {
            slug: "killed-ZEUS-bareHanded1",
            title: "ZEUS",
            image: "/images/posts/Zeus.png.jpg",
            excerpt: "Zeus was main reson of my suffering",
            date: "2020-20-12",
        },
        {
            slug: "killed-odin-withMySon",
            title: "ODIN",
            image: "/images/posts/odin.jpg",
            excerpt: "me and my son defeated ODIN together & that was fun",
            date: "2020-20-12",
        },
        {
            slug: "killed-HELIOS-TheSunGod",
            title: "HELIOS",
            image: "/images/posts/helios.jpg",
            excerpt: "i ripped his head of from his shoulders becouse he was weak for live",
            date: "2020-20-12",
        },
    ];
    return <AllPosts posts={DUMMY_POSTS} />;
};

export default allPostsPage;
