/* eslint-disable react/prop-types */
import Post from "../../components/Post";
import Sidebar from "./Sidebar";

const Posts = ({ posts }) => {
    return (
        <section className="section-posts">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {
                            posts.map(post => <Post key={post.id} post={post} />)
                        }
                    </div>
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Posts;