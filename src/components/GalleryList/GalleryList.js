import Axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";
import {useEffect} from 'react';
import AddForm from "../AddForm/AddForm";

function GalleryList(props) {
    
    function getGallery() {
    Axios.get('/gallery').then((results) => {
        props.setGalleryList(results.data);
        console.log('This ran');
    }).catch((error) => {
        console.log('Error caught in GET: ', error);
    });
    }
    useEffect(() => {
        getGallery();
    }, []);

    return (
        <>
        <div className="bodyDiv">
            <div className="addFormDiv">
                <AddForm getGallery={getGallery}/>
            </div>
            <div className="mainDiv">
                {props.galleryList.map((item) => (
                    <GalleryItem key={item.id} item={item} getGallery={getGallery}/>
                )
                )}
            </div>
        </div>
        </>
    )
}

export default GalleryList;