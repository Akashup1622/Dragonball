import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {useState} from "react"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

 const  SinglePagePlanet=()=>{
    const [item, setItem]=useState({})
    const {id} =useParams()
    console.log("id",id)
     const URL=`https://dragonball-api.com/api/planets/${id}`
    const fetchData= async()=>{
        const response =await fetch(URL)
        console.log("response",response)
        const data =await response.json()
        console.log("data",data)
        setItem(data)

    }

    console.log("item",item.name)

    useEffect(()=>{
        fetchData()
    },[])


    return(
        <>
         <div className="main w-full bg-gray-800 min-h-screen ">
           <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white px-6 py-10">
  <div className="max-w-6xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 transition-all duration-500 hover:shadow-[0_0_30px_#60a5fa]">

    <div className="flex flex-col md:flex-row gap-10 items-center">

      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="rounded-3xl overflow-hidden shadow-[0_0_25px_#60a5fa] border border-blue-400/30">
          <img
            src={item.image}
            alt={item.name}
            className="h-[420px] w-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>

      {/* RIGHT DETAILS */}
      <div className="w-full md:w-1/2 space-y-6">

        <h1 className="text-5xl font-extrabold tracking-wide text-blue-400 drop-shadow-[0_0_15px_#3b82f6]">
          {item.name}
        </h1>

        <div className="space-y-2">
          <p className="text-xl text-gray-300 font-semibold">Planet Description</p>
          <p className="bg-gray-800/60 p-5 rounded-2xl text-gray-200 text-lg leading-relaxed shadow-inner max-h-64 overflow-y-auto border border-gray-700 hover:border-blue-400 transition-all duration-400">
            {item.description}
          </p>
        </div>

        {/* OPTIONAL INFO GRID */}
        {/* <div className="grid grid-cols-2 gap-4 text-center text-lg">
          <div className="p-4 bg-blue-900/40 rounded-xl border border-blue-500/30 shadow-md">
            <span className="block font-semibold text-blue-300">isDestroyed</span>
            <span className="text-white">{item.isDestroyed || "Unknown"}</span>
          </div>

          <div className="p-4 bg-red-900/40 rounded-xl border border-red-500/30 shadow-md">
            <span className="block font-semibold text-red-300">isDestroyed</span>
            <span className="text-white">{item.isDestroyed || "Unknown"}</span>
          </div>
        </div> */}

      </div>

    </div>
  </div>
</div>



          {/* Character Section */}
      {/* Character Section */}
<div className="char flex flex-wrap justify-center gap-10 py-16 bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-3xl">
  <h2 className="w-full text-center text-4xl font-extrabold text-yellow-400 mb-10 flex justify-center items-center gap-3">
    <Sparkles className="text-yellow-300 w-8 h-8 animate-pulse" />
    Characters from <span className="text-white ml-2">{item.name}</span>
  </h2>

  {item?.characters?.length > 0 ? (
    item.characters.map((value, ind) => (
      <motion.div
        key={ind}
        whileHover={{ scale: 1.05, rotate: 0.5 }}
        transition={{ type: "spring", stiffness: 250 }}
        className="relative w-80 bg-gray-800 border border-yellow-500/40 rounded-2xl shadow-[0_0_20px_#facc15] overflow-hidden hover:shadow-[0_0_35px_#facc15] transition-all duration-300"
      >
        {/* Aura Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>

        {/* Image Section */}
        <div className="relative bg-gradient-to-br from-amber-100 to-amber-300 h-56 flex justify-center items-center overflow-hidden">
          <motion.img
            src={value.image}
            alt={value.name}
            className="h-40 object-contain drop-shadow-[0_0_10px_#fff] z-10"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="relative z-10 p-5 text-gray-100">
          <h2 className="text-2xl font-bold text-yellow-400 mb-1">{value.name}</h2>

          <div className="space-y-1 text-sm">
            <p>
              <span className="font-semibold text-gray-300">Race:</span>{" "}
              {value.race || "Unknown"}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Gender:</span>{" "}
              {value.gender || "Unknown"}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Affiliation:</span>{" "}
              {value.affiliation || "Unknown"}
            </p>
            <p>
              <span className="font-semibold text-gray-300">Ki:</span> {value.ki} /{" "}
              {value.maxKi}
            </p>
          </div>
          +

      
          <div className="pt-4">
            <Link
              to={`/singlapagecharacter/${value.id}`}
              className="block w-full text-center bg-yellow-400 text-gray-900 font-bold py-2 rounded-lg hover:bg-yellow-500 transition-all shadow-md"
            >
              View Details
            </Link>
          </div>
        </div>
      </motion.div>
    ))
  ) : (
    <p className="text-gray-300 text-xl italic">No characters found for this planet.</p>
  )}
</div>
     </div>
      
        </>

    )
  }

export default SinglePagePlanet