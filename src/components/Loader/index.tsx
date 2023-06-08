import React, { useEffect, useRef } from "react";
import loading from './../../assets/gif/loading.gif'
const Loader = () => {
  return (
    <div style={{height:"400px", display:"flex", flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
      <img width={100} height={100} src={loading}/>
    </div>
  );
};

export default Loader;
