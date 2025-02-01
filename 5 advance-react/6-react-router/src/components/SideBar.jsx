import { useNavigate } from "react-router-dom";

const SideBar = ({ selectedTab, setSelectedTab }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
        style={{ width: "170px" }}
      >
        <a
          xlinkHref="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto setPointer">
          <li
            className="nav-item"
            onClick={() => {
              setSelectedTab("Home");
              navigate("/");
            }}
          >
            <a
              xlinkHref="#"
              className={`nav-link text-white ${
                selectedTab === "Home" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </a>
          </li>

          <li
            onClick={() => {
              setSelectedTab("create post");
              navigate("/create-post");
            }}
          >
            <a
              xlinkHref="#"
              className={`nav-link text-white  ${
                selectedTab === "create post" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width="16" height="16">
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Create Post
            </a>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};
export default SideBar;
