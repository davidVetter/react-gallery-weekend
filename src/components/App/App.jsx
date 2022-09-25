import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';


function App() {
  const [galleryList, setGalleryList] = useState([]);

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList galleryList={galleryList} setGalleryList={setGalleryList}/>
        {/* <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/> */}
      </div>
    );
}

export default App;
