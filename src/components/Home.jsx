import React from "react";
import Sidebar from "../components/Sidebar"
import Video from "../components/Video";
import { useAuth } from "../context/AuthProvider";

function Home() {
  const { data } = useAuth();
  return (
    <div>
      <Sidebar/>
      <div>
        {data.map((item) => {
          if (item.type !== "video") return false;
          return <Video key={item.id} video={item?.video} />;
        })}
      </div>
    </div>
  );
}

export default Home;
