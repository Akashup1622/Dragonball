import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
const Character=()=>{
    const [item,setItem]=useState([])

    const URL="https://dragonball-api.com/api/characters"
    const fetchData=async()=>{
        const res=await fetch (URL)
        const data=await res.json()
        console.log("data",data);
        setItem(data.items)
    }
    console.log("itens",item);
    useEffect(()=>{
        fetchData()
    },[])
    return (
    <div className="w-full min-h-screen bg-black p-8 flex justify-center flex-wrap gap-8">
      {item.map((value, ind) => (
        <div
          key={ind}
          className="w-64 bg-gray-900 border border-yellow-400 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_#facc20]"
        >
          
          <div className="relative w-full h-44 bg-black flex items-center justify-center overflow-hidden">
            <img
              src={value.image}
              alt={value.name}
              className="w-28 h-auto object-contain drop-shadow-[0_0_15px_#facc15] transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute bottom-2 right-2 text-xs text-yellow-300 font-semibold bg-black/60 px-2 py-0.5 rounded-lg">
              KI: {value.ki}
            </div>
          </div>

    
          <div className="p-4 text-sm text-gray-200 space-y-1">
            <h1 className="text-xl font-extrabold text-yellow-400 text-center uppercase mb-2">
              {value.name}
            </h1>

            <div className="flex justify-between">
              <span className="font-semibold text-yellow-400">Race:</span>
              <span>{value.race}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-yellow-400">Gender:</span>
              <span>{value.gender}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-yellow-400">Affil.:</span>
              <span>{value.affiliation}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold text-yellow-400">Max Ki:</span>
              <span>{value.maxKi}</span>
            </div>
          </div>

          
          <div className="p-4 pt-0">
            <Link
              to={`/singlapagecharacter/${value.id}`}
              className="block w-full text-center bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded-xl transition-all duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
            }
   



export default Character