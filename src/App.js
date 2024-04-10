import Header from './components/Header';
import { useState, useEffect} from 'react';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import {CLIENT_ID, CLIENT_SECRET} from './components/API_KEYS';
import {Spotify} from './components/Spotify';
import React from 'react';



function App() {

  const [results, setResults] = useState([]);
  const [resultP,setResultP]=useState('');
  const [songs,addSongs]=useState([]);
  const [playlistName,setPlaylistName] = useState();
  const [accessToken, setAccessToken]=useState();
  
  //setAccessToken(Spotify.getAccessToken());
  useEffect(() => {
    //console.log('HOLA');
    const token = Spotify.getAccessToken();
    setAccessToken(token);
    //console.log(token);
   
    
    },[]);

  
  
  
  const addSongstoPlaylist= (song) =>{
    const check_song = songs.filter((r) => r.id === song.id);
    if(check_song.length < 1){
     addSongs((songs) => [...songs,song])
    }

 }


 const removeFromPlaylist =(result) =>{
  
  addSongs(songs.filter((r) => r.id !== result.id));
}

const savePlaylist = (text,tracks) =>{
  setResultP('');
//check if playlist already exist
 Spotify.getUserPlaylists(text)
 .then((playlists) => {
  setResultP(playlists[0].id);
 })
 .catch((error) => {
  console.error("Error fetching user playlists:", error);
  setResultP('');
});
 
//console.log('hola'+ resultP);
 

if(resultP.length===0){
  console.log('create new list');
  const trackUris = tracks.map((track) => track.uri);
  Spotify.savePlaylist(text, trackUris);
}

else{
  console.log('Update the list');
}
  // setPlaylistName(text)
 // const trackUris = tracks.map((track) => track.uri);
 //  console.log('Dentro: '+text+ trackUris);

// Spotify.savePlaylist(text, trackUris);

}



  return (
    <>
    <Header  setResults={setResults} accessToken={accessToken}/>
    <SearchResults results={results} addSongstoPlaylist={addSongstoPlaylist}/>
    <Playlist songs={songs} removeFromPlaylist={removeFromPlaylist} savePlaylist={savePlaylist}/>
    <Footer />
    </>
    );
}

export default App;
