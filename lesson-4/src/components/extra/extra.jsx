import React from 'react'
import Card from "@ui/card"


function index({changeColor}) {
  return (
    <div className="container mx-auto bg-slate-300 p-5">
      <h1>EXTRA</h1>
      <Card changeColor={changeColor} />
    </div>
  );
}

export default index