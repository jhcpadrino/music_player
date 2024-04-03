import React from "react";
import { useState } from "react";
import '../css/track.css';
import Playlist from "./Playlist";


const Track = ({item,addSongstoPlaylist}) =>{


    return <>
         <div className="containerTrack">

            <h2 >{item.name}</h2>
            <div className="track">   
               <p>Album Name: {item.album.name}</p>
               <button className ='button' type='submit' onClick={()=>{ addSongstoPlaylist(item) }}>+</button>
            </div>

    
        
        
        
        </div>


    </>;

}

export default Track;