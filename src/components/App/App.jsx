import React, { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../Header/Header';

// This function will display any photos in the connected database on
// the DOM.
// The DOM will also contain an "Add Photo" button, "like" photo buttons,
// delete photo buttons, display the number of likes for a photo and
// each photo is clickable to display the photo's description from the database
function App() {
  //state to hold the current photos in the database
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
