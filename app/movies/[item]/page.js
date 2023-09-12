'use client'

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';


function MovieDetailsPage ({params}) {
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  useEffect(() => {

    const getPhoto = async () => {
      setLoading(true);
       const axios = require('axios');

       let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `https://jsonplaceholder.typicode.com/photos/${params.item}`,
        headers: {}
      };

      async function makeRequest(){
        try {
          const response = await axios.request(config);
          console.log(response);
        
        if (response.data) {
          setPhoto(response?.data)
          setLoading(false)
        } else{
          setLoading(true)
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    makeRequest();
  }
    getPhoto();
  }, []);

  const Loading = () => {
    
  }

  return (
    <div className='w-11/12 md:flex m-auto '>
      <div className='md:flex gap-6 mt-6 '>
        <h2 className='text-[#282727d3] font-bold text-[2rem] place-content-center md:mt-28 '>
          {photo.title}
        </h2>
        <img
          className='border-opacity-5 rounded-lg '
          src={photo.url}
          alt={photo.title}
        />
        <p>{photo.description}</p>
      </div>
    </div>
  );
  }

export default MovieDetailsPage;