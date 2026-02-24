import { useEffect, useState } from "react";
import {Link} from "react-router-dom"


const Planets=()=>{
    const[item,setItem]=useState([])
    
    const URL="https://dragonball-api.com/api/planets"
    const fetchData=async()=>{
        const res=await fetch(URL)
        const Data=await res.json()
        console.log("planets",Data.items);
        setItem(Data.items)
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* 🌠 Navbar */}
      {/* <nav className="w-full bg-gray-900/70 backdrop-blur-md px-10 py-5 flex justify-between items-center border-b border-indigo-700">
        <h1 className="text-3xl font-bold text-indigo-400 tracking-wide">
          🌌 Planet Explorer
        </h1>
        <div className="flex gap-8 text-lg">
          <Link
            to="/"
            className="hover:text-indigo-400 transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/planets"
            className="hover:text-indigo-400 transition-all duration-300"
          >
            Planets
          </Link>
          <Link
            to="/about"
            className="hover:text-indigo-400 transition-all duration-300"
          >
            About
          </Link>
        </div>
      </nav> */}

      {/* 🌍 Title Section */}
      <div className="text-center py-2 mb-8">
        <h2 className="text-5xl font-extrabold text-indigo-400 drop-shadow-[0_0_15px_#6366f1]">
          Explore the Universe
        </h2>
        <p className="text-gray-300 mt-3 text-lg">
          Discover mysterious worlds and their hidden stories.
        </p>
      </div>

      {/* 💫 Card Grid */}
      <div className="w-full flex justify-center flex-wrap gap-8 px-8 pb-16">
        {item.map((planet, ind) => (
          <div
            key={ind}
            className="w-72 bg-gray-900/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_0_20px_#1e1b4b] hover:shadow-[0_0_35px_#6366f1] hover:-translate-y-2 transform transition-all duration-300 border border-gray-700/70"
          >
            {/* 🪐 Planet Image */}
            <div className="w-full h-44 overflow-hidden">
              <img
                src={planet.image}
                alt={planet.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* 🌠 Planet Info */}
            <div className="p-5 flex flex-col justify-between h-48">
              <h2 className="text-2xl font-bold text-indigo-400 mb-2 tracking-wide">
                {planet.name}
              </h2>

              <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 overflow-y-auto scrollbar-hide">
                {planet.description}
              </p>

              <div className="mt-3">
                {planet.isDestroyed ? (
                  <span className="text-red-500 font-semibold text-sm">
                    🔥 Destroyed
                  </span>
                ) : (
                  <span className="text-green-400 font-semibold text-sm">
                    🌍 Not Destroyed
                  </span>
                )}
              </div>
            </div>

            {/* 🚀 Button */}
            <div className="p-5 pt-0">
              <Link
                to={`/singlapageplanet/${planet.id}`}
                className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 🌌 Footer */}
      <footer className="w-full text-center py-6 border-t border-gray-800 text-gray-400">
        © 2025 Planet Explorer • Designed with 💜 by Akash
      </footer>
    </div>
  );
}

export default Planets