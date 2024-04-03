import React from 'react';
import { useEffect, useState } from 'react';
import '../css/results_css.css';
import Track from './Track';

const SearchResults = ({results,addSongstoPlaylist}) =>{
 
return (<>
       <div className="results_css">
           <div>
               <h2>Results</h2>
           </div>
           <div>
           {
            results.map((result,id) => {
                return <Track item={result} key={id} addSongstoPlaylist={addSongstoPlaylist}/>

            }
            )
           }
           </div>

       </div>
      </>);    
}

export default SearchResults;