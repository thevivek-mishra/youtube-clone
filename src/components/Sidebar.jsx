import React from "react";
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions, MdWatchLater } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GiLinkedRings, GiThumbUp } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
export default function Sidebar() {
  const sidebaritems = [
    {
      id: 1,
      name: "Home",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "Shorts",
      icon: <SiYoutubeshorts />,
    },
    {
      id: 3,
      name: "subsciption",
      icon: <MdOutlineSubscriptions />,
    },
  ];
  const sidebaritems2 = [
    {
      id: 1,
      name: "Your Channel",
      icon: <GoHome />,
    },
    {
      id: 2,
      name: "History",
      icon: <FaHistory />,
    },
    {
      id: 3,
      name: "Playlists",
      icon: <MdPlaylistPlay />,
    },
    {
      id: 4,
      name: "Your Videos",
      icon: <BiVideo />,
    },
    {
      id: 5,
      name: "Watch Later",
      icon: <MdWatchLater />,
    },
    {
      id: 6,
      name: "Liked Videos",
      icon: <GiThumbUp />,
    },
  ];

  const sidebaritems3 =[
    {
        id:1,
        name:"Trending",
        icon:<SiTrendmicro/>
    },
    {
        id:2,
        name:"Shopping",
        icon:<HiOutlineShoppingBag/>
    },
    {
        id:3,
        name:"Music",
        icon:<SiYoutubemusic/>

    },
    {
        id:4,
        name:"Movies",
        icon:<PiFilmSlateLight/>
    },
    {
        id:5,
        name:"Live",
        icon:<CgMediaLive />
    },
    {
        id:6,
        name:"Gaming",
        icon:< SiYoutubegaming/>
    },
    {
        id:7,
        name:"News",
        icon:<FaRegNewspaper/>
    },
    
    {
        id:8,
        name:"Sports",
        icon:<TfiCup/>
    },
    {
        id:9,
        name:"Courses",
        icon:<PiLightbulbLight/>
    },
    {
        id:10,
        name:"Fashion & Beauty",
        icon:< SiStylelint/>
    },
    {
        id:12,
        name:"Podcasts",
        icon:<MdPodcasts/>
    }
  ]

  const sidebaritems4 =[
    {
        id:1,
        name:"YouTube Premium",
        icon:<FaYoutube/>
    },
    {
        id:2,
        name:"YouTube Studio",
        icon:<SiYoutubestudio />
    },
    {
        id:3,
        name:"YouTube Music",
        icon:<PiMusicNoteLight/>
    },
    {
        id:4,
        name:"YouTube Kids",
        icon:<SiYoutubekids/>
    }
  ]

  return (
    <div className="px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16">
      <div className="space-y-0 items-center">
        {sidebaritems.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer" > 
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      {/* you  */}
      <div className=" mt-4 space-y-0 items-center">
        <div className="flex items-center space-x-2"> 
            <h1>You</h1>
            < FaChevronRight/>
        </div>
        {sidebaritems2.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer" > 
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />

      {/* Explore  */}
      <div className=" mt-4 space-y-0 items-center">
        <div className="items-center "> 
            <h1 className="font-semibold">Explore</h1>
        </div>
        {sidebaritems3.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer" > 
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
       {/* More from YouTube  */}
       <div className=" mt-4 space-y-0 items-center">
        <div className="items-center "> 
            <h1 className="font-semibold">More from YouTube</h1>
        </div>
        {sidebaritems4.map((item) => {
          return (
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
              <div className="text-xl cursor-pointer text-red-500" > 
                {item.icon}
              </div>
              <span className="cursor-pointer">{item.name}</span>
            </div>
          );
        })}
      </div>
      <br />
      <hr />
      <span className="text-xs font-semibold text-gray-500">
        About Press Copyright
        <br />
        Contact us Creator
        <br />
        Advertise Developers
        <br /> <br />
        <p>
            This Privacy Policy & Safety <br /> How YouTube works <br /> Test new features
        </p>
      </span>
      <br />
      <p className="text-xs mt-1 text-gray-800">&#169; 2024  Learn coding</p>
    </div>
  );
}
