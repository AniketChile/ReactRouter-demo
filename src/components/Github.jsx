import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github(props) {
    // const [data,setData]= useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/AniketChile')
    //     .then(response=>response.json())
    //     .then(data=>{(console.log(data))
    //         setData(data)
    //         })
    // }, []);

    const data = useLoaderData()

    return (
        <div className='text-center m-4 bg-gray-600 p-4 text-3xl'> 
            <h2>Github Followers : {data.followers}</h2>
            <img src={data.avatar_url} alt="" />
        </div>
    );
}

export default Github;
export const githubinfoLoader = async () =>{
   const response = await fetch('https://api.github.com/users/AniketChile')
    return response.json()
}