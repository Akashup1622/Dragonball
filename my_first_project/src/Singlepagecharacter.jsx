import { useEffect } from "react"
import { useParams } from "react-router-dom"
import {useState} from "react"
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";



 const  Singlepagecharacter=()=>{
    const [item, setItem]=useState({})
    const {id} =useParams()
     const URL=`https://dragonball-api.com/api/characters/${id}`
    const fetchData= async()=>{
        const response =await fetch(URL)
        const data =await response.json()
        console.log("data",data)
        setItem(data)

    }

    console.log("item",item.name)

    useEffect(()=>{
        fetchData()
    },[])
            
       return (
            <>
    <div className="w-full bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center py-16 px-6 space-y-20">

      {/* CHARACTER CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/40 rounded-3xl overflow-hidden shadow-[0px_0px_35px_#facc15aa] flex flex-col md:flex-row"
      >
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 p-6 flex justify-center items-center bg-black/40">
          <motion.img
            src={item.image}
            alt={item.name}
            className="rounded-2xl w-72 object-cover drop-shadow-[0_0_25px_#facc15]"
            whileHover={{ scale: 1.08 }}
          />
        </div>

        {/* RIGHT INFO */}
        <div className="md:w-1/2 p-10 flex flex-col space-y-6">
          <h1 className="text-5xl font-extrabold text-yellow-400 tracking-wider">
            {item.name}
          </h1>

          <p className="text-gray-300 leading-relaxed text-lg">
            <span className="font-semibold text-yellow-400">Description:</span> {item.description}
          </p>

          <div className="grid grid-cols-2 gap-5 pt-2">
            {[
              { label: "Gender", value: item.gender },
              { label: "Race", value: item.race },
              { label: "Ki", value: item.ki },
              { label: "Max Ki", value: item.maxKi },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                className="bg-gray-800/60 rounded-xl p-4 text-center border border-gray-700"
              >
                <p className="text-xs uppercase tracking-widest text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-yellow-300">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="text-sm text-gray-400 uppercase tracking-widest">Affiliation</p>
            <p className="text-2xl font-bold text-yellow-300">{item.affiliation}</p>
          </div>
        </div>
      </motion.div>

      
      {/* ORIGIN PLANET */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full bg-gradient-to-br from-gray-900 to-gray-800 border border-yellow-500/40 rounded-3xl shadow-[0px_0px_30px_#facc15aa] p-10 flex flex-col items-center space-y-8"
      >
        <h2 className="text-4xl font-extrabold text-yellow-400">
          Origin Planet — <span className="text-white">{item.name}</span>
        </h2>

        <img
          src={item.originPlanet?.image}
          alt={item.originPlanet?.name}
          className="w-80 h-80 object-cover rounded-2xl border border-yellow-500/50 shadow-[0px_0px_30px_#facc15aa] hover:scale-105 transition-all"
        />

        <div className="text-center text-gray-300 space-y-2 max-w-2xl">
          <p className="text-2xl">
            <span className="font-semibold text-yellow-400">Name:</span> {item.originPlanet?.name}
          </p>
          <p className="text-gray-400">
            <span className="font-semibold text-yellow-400">Description:</span> {item.originPlanet?.description}
          </p>
          <p className="text-2xl">
            <span className="font-semibold text-yellow-400">Destroyed:</span>{" "}
            {item.originPlanet?.isDestroyed ? "Yes 💥" : "No 🌍"}
          </p>
        </div>

        <Link
          to={`/singlapageplanet/${item.id}`}
          className="mt-6 bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-xl hover:bg-yellow-500 hover:shadow-[0_0_22px_#facc15] transition-all duration-300"
        >
          View Planet Details
        </Link>
      </motion.div>


      {/* TRANSFORMATIONS */}
      <div className="w-full max-w-6xl">
        <h2 className="text-center text-4xl font-extrabold text-yellow-400 mb-10 flex justify-center items-center gap-3">
          <Sparkles className="text-yellow-300 animate-pulse" /> Transformations of {item.name}
        </h2>

        <div className="flex flex-wrap justify-center gap-12">
          {item?.transformations?.length > 0 ? (
            item.transformations.map((value, ind) => (
              <motion.div
                key={ind}
                whileHover={{ scale: 1.06 }}
                className="w-80 bg-gray-800 border border-yellow-500/40 rounded-2xl shadow-[0_0_25px_#facc15aa] overflow-hidden"
              >
                <div className="bg-gradient-to-br from-yellow-200 to-amber-400 h-52 flex justify-center items-center">
                  <img src={value.image} alt={value.name} className="h-40 drop-shadow-[0_0_18px_#fff]" />
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-bold text-yellow-400">{value.name}</h3>
                  <p className="text-gray-300 mt-2">
                    <span className="font-semibold text-yellow-200">Ki:</span> {value.ki} / {value.maxKi}
                  </p>
                </div>
              </motion.div>
            ))
          ) : (
            <p className="text-gray-400 text-lg italic">No transformations available.</p>
          )}
        </div>
      </div>
    </div>

</>
  );
    
    
}

export default Singlepagecharacter