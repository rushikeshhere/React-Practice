import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const authorElement = useRef();
  const user_id_Element = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const dateElement = useRef();
  const tagsElement = useRef();

  const { addPost } = useContext(PostList);

  const handleSubmit = (event) => {
    event.preventDefault();
    const author = authorElement.current.value;
    const user_id = user_id_Element.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const date = dateElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    addPost(author, user_id, title, content, date, tags);

    authorElement.current.value = "";
    user_id_Element.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    dateElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Author Name
        </label>
        <input
          type="text"
          ref={authorElement}
          className="form-control"
          id="author"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="user_id" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={user_id_Element}
          className="form-control"
          id="user_id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Content Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Add more about content
        </label>
        <textarea
          rows={5}
          ref={contentElement}
          className="form-control"
          id="user_id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Date
        </label>
        <input
          type="date"
          ref={dateElement}
          className="form-control"
          id="date"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Use Tags for better search
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="add tags using spaces"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create Post
      </button>
    </form>
  );
};

export default CreatePost;
