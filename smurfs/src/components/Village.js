import React, {useContext, useState} from "react";

import { VillageContext } from "../contexts/VillageContext";
import SmurfCard from "./Card";



const Village = () => {
    const {smurfs} = useContext(VillageContext)

    return(
        <div>
          smurfs.map(villager => {
              return (
                  <SmurfCard
                  key={villager.id}
                  name={villager.name}
                  age={villager.age}
                  height={villager.height}
                  />
              )
          })  
            
        </div>
    )
}


export default Village;