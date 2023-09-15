"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
    <div className="text-center mt-36 flex justify-center align-middle flex-col">
      <h1 className="text-rose-700 font-bold text-lg">Opps.......</h1>
      <h2>Something went wrong</h2>
      <button onClick={() => reset()} className="hover:text-amber-600" >Try Again</button>
    </div>
    </>
    
  );
}