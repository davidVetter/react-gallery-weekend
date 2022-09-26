import Axios from "axios";
import GalleryItem from "../GalleryItem/GalleryItem";
import {useEffect} from 'react';
import AddForm from "../AddForm/AddForm";

// This function will perform the GET to request the current
// collection of photos and descriptions in the database
// It runs a GET on intial load
function GalleryList(props) {
    // Function that performs the GET from server, sets local state to
    // returned results from GET
    function getGallery() {
    Axios.get('/gallery').then((results) => {
        props.setGalleryList(results.data);
        console.log('This ran');
    }).catch((error) => {
        console.log('Error caught in GET: ', error);
    });
    }
    // Run get on intial load
    useEffect(() => {
        getGallery();
    }, []);

    // Render the div's that contain the "add Photo" form
    // Maps over the array from the returned from the GET and 
    // passes each element into the GalleryItem component for rendering
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