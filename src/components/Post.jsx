/* eslint-disable react/prop-types */
import { FaEye, FaShareAlt, FaCalendarDay, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
const Post = ({ post }) => {

    return (
        <div className="card mb-3">
            {
                post?.thumb && <img src={post?.thumb} className="card-img-top" alt={post?.title} />
            }
            <div className="card-body">
                <h6 className="card-title fw-medium">{post?.categoty}</h6>
                <div className="d-flex justify-content-between align-items-start">
                    <h4 className="card-title fw-semibold">{post?.title}</h4>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Edit</a></li>
                            <li><a className="dropdown-item" href="#">Report</a></li>
                            <li><a className="dropdown-item" href="#">Comment</a></li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex align-items-center gap-5">
                    {
                        post?.date && <p className="d-flex justify-content-between align-items-center gap-2">
                            <FaCalendarDay />
                            <span>{post?.date}</span>
                        </p>
                    }

                    {
                        post?.company && <p className="d-flex justify-content-between align-items-center gap-2">
                            <FaSuitcase />
                            <span>{post?.company}</span>
                        </p>
                    }

                    {
                        post?.location && <p className="d-flex justify-content-between align-items-center gap-2">
                            <FaMapMarkerAlt />
                            <span>{post?.location}</span>
                        </p>
                    }
                </div>
                <div className="d-flex justify-content-center align-items-center">

                    {
                        post?.website && <a href={post?.website} className="link-btn color-orange" target="_blank" rel="noreferrer">Visit Website</a>
                    }

                    {
                        post?.apply && <a href={post?.apply} className="link-btn color-green" target="_blank" rel="noreferrer">Apply on Timesjobs</a>
                    }
                </div>

                <p className="card-text post-text">{post?.text}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center gap-2">
                        <img src={post?.authorImg} alt={post?.author} />
                        <span className="fw-bold">{post?.author}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center gap-3">
                        <div className="view-text">
                            <FaEye />
                            <span className="ms-2">{post?.view}</span>
                        </div>
                        <button className="btn btn-gray d-flex align-items-center justify-content-center"><FaShareAlt className="share-icon" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;