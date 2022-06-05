import React, {} from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
import { GridItem } from "./GridItem";

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);


    return(
        <>
        <h2 className="centerText">{category}</h2>
        {loading && <div className="loader"></div>}
        <div className="grid animate__animated animate__fadeIn">
            {images.map(img =>{
                return(
                   <GridItem key={img.id} {...img}/>
                )
            })}
        </div>
        </>
    );

}
