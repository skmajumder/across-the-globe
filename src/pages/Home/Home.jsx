import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import TabBar from "./TabBar";
import Posts from "./Posts";

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("category.json")
            .then((response) => response.json())
            .then((result) => {
                setCategories(result);
            });
    }, []);

    useEffect(() => {
        fetch("data.json")
            .then((response) => response.json())
            .then((result) => {
                setPosts(result);
            });
    }, []);

    return (
        <>
            <Breadcrumb />
            <TabBar categories={categories} />
            <Posts posts={posts} />
        </>
    );
};

export default Home;