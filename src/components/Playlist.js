import '../css/playlist.css';
import React, { useState } from 'react';
const Playlist = ({songs, removeFromPlaylist, savePlaylist}) =>{
     //Playlist name
     const [name,setName]=useState('');
    const changeName = (value) => {
        setName(value);
    }


      // Save the playlist name
  
    const savePlaylistname = () => {

         savePlaylist(name,songs);
        
    }

    return <>
           <div className="playlist_container">
             <h2>Playlist</h2>
             <input type='text' placeholder='Insert Playlist Name'name='name' id='name'  value={name} onChange={(e)=>changeName(e.target.value)}/>
             <button className='button' onClick={savePlaylistname}  >Save to Spotify</button>
             {
                songs.map((song)=>{
                    return(
                    <>
                    <div  className="containerTrack">
                    <h2>{song.name}</h2>
                    <div className="track">   
                   <p>Album Name: {song.album.name}</p>
                   <button type='submit' onClick={()=> {removeFromPlaylist(song)}}>-</button>
                   </div>
                   </div>
    
                  
                  </>)})
            }
            

           </div>
        </>;
    }

export default Playlist;