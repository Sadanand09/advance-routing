import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardData from '../utils/Data.json';

function ReadInfo() {
  const { id } = useParams()

    const [info, setInfo] = useState({})

    useEffect(()=>{
        CardData.forEach((infoObj)=>{
            if(infoObj.id == id){
                setInfo(infoObj)
            }
        })
    }, [id])
  return (
    <>
      <div>
        <h1>{info.id}</h1>
        <span>{info.name}</span>
        <p>{info.info}</p>
      </div>
    </>
  )
}
export default ReadInfo;