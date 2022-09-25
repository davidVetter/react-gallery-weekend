import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';


function App() {
  const [galleryList, setGalleryList] = useState([]);

    return (
      <div className="App">
        <Header />
        <GalleryList galleryList={galleryList} setGalleryList={setGalleryList}/>
        <footer>
          <div className="footDiv"></div>
        </footer>
      </div>
    );
}

export default App;
