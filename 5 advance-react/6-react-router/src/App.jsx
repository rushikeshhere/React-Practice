import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
import PostListComponent from "./components/PostListComponent";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="content">
          <Header />
          <Outlet>
            {selectedTab === "Home" ? <PostListComponent /> : <CreatePost />}
          </Outlet>
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
