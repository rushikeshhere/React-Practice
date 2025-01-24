const WelcomeMessage = ({ onGetPosts }) => {
  return (
    <center style={{ marginTop: "100px" }}>
      <h2>Oops! No posts Available</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onGetPosts()}
      >
        Get Post from Server
      </button>
    </center>
  );
};
export default WelcomeMessage;
