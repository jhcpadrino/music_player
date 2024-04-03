import React from 'react';
import '../css/header.css';
import { useEffect, useState } from 'react';

const Header = ({setResults, accessToken}) =>{

const [ input, setInput] = useState("");





 // SEARCH TRACK
   const search = async () =>{
   
     // console.log('header part: '+{accessToken});
           
     
        var searchParameters={
         method: 'GET',
         headers:{
         'Content-Type': 'application/json',
         'Authorization': 'Bearer '+accessToken
         },
        }   
     
        
        try{
         //GET REQUEST SEARCH USING ARTIST ID
     
         var tracks = await fetch('https://api.spotify.com/v1/search?q='+input+'&type=track', searchParameters)
              .then(response => response.json())
             .then( data=>{return(data.tracks.items)})       
              // .then(data => {return(data.artists.items[0].id)})
           //  console.log("ARTIST ID:"+artist_Id);
           //WITH ARTIST ID GRAB ALL THE TRACKS
            //console.log(tracks);
           setResults(tracks);
    
       }
       catch(error){
     
        console.log(error);
       }       
       
     
    }
     

   

    const handleChange = (value)=>{

        setInput(value);
    }




 return(<>
 <div className='head'>
    <div className='title'>
        <h1>Tu musica favorita --- Your Favorite Music</h1>
    </div>
    <div className='search'>
       <input  placeholder='Input your favorite song' value={input} type='text' id='searchText' onChange={(e)=>handleChange(e.target.value)}/>
       <button onClick={search}> Search</button>
    </div>

 </div>

 </>

 );
}

export default Header;