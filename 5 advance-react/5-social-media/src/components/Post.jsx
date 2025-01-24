import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);

  return (
    <div className="card post" style={{ width: "30rem" }}>
      <span
        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        style={{ height: "22px" }}
      >
        <MdDeleteForever onClick={() => deletePost(post.id)} />
      </span>

      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>

        <span
          className="badge text-bg-info"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            width: "fit-content",
          }}
        >
          <MdOutlineRemoveRedEye />
          {post.views}
        </span>
        <div className="info-row">
          <span
            className="badge text-bg-dark"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "fit-content",
            }}
          >
            <FaUserPen />
            {post.userId}
          </span>
        </div>
        {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-secondary hashtag">
            {tags}
          </span>
        ))}

        <p className="card-text">{post.body}</p>
      </div>
    </div>
  );
};
export default Post;
