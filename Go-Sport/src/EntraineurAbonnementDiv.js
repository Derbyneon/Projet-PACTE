import React from "react";
import AbonnementTable from "./AbonnementTable";
import EntraineurTable from "./EntraineurTable";
import EquipmentTable from "./EquipmentTable";

function EntraineurAbonnementDiv () {
    return (
      <div className='inner'>
        <div className='inner-1'>
          <h1 style={{ color: "#333", textAlign: "center", fontWeight:'bold' }}>La liste des Equipements</h1>
          <EquipmentTable/>
        </div>
        <div className='inner-1'>
          <h1 style={{ color: "#333", textAlign: "center" , fontWeight:'bold'}}>La liste des abonnements</h1>
          <AbonnementTable/>
        </div>
      </div>
    );
  }


  export default EntraineurAbonnementDiv ;