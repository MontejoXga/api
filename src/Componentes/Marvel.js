import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';


export const Marvel = () =>{
    const {id}=useParams();
    const [item,setItem]=useState()
    const fetch=async()=>{
        const res=await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=4e4262f5add91c0e7887e0437a7f87c8&hash=bf28c6b8a294cb19965af89efdf86d6a`)
        setItem(res.data.data.results[0])
    }
    fetch();
    return(
        <>
           {
                (!item)? "":(
                    <div className="box-content">
                        <div className="rigth-box">
                            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=''/>
                        </div>
                        <div className="left-box">
                            <h1>{item.name}</h1>
                            <h4>{item.description}</h4>
                        </div>
                    </div>
                )
           }
        </>
    )
}