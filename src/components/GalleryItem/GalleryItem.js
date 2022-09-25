import Axios from "axios";
import {useState, useEffect} from 'react';

function GalleryItem(props) {
    const [toggleDescription, setToggleDescription] = useState(false);

    function addLike(id) {
        Axios({
            method: "PUT",
            url: `/gallery/like/${id}`
        }).then(() => {
            props.getGallery();
        }).catch((error) => {
            console.log('Error in like PUT: ', error);
        });
    }

    function toggle() {
       setToggleDescription(!toggleDescription);
    }

    if (!toggleDescription) {
    return (
        <div className="imgDiv">
            <div key={props.item.id} onClick={() => {toggle()}}>
                <img key={props.item.id} src={props.item.path}></img><br />
            </div>
            <button onClick={() => {addLike(props.item.id)}}>Like</button>
            <p>{props.item.likes}</p>
        </div>
    )
    } else {
        return (
            <div className="imgDiv">
                <div key={props.item.id} onClick={() => {toggle()}} className="descriptionDiv">
                    <p>{props.item.description}</p><br />
                </div>
                <button onClick={() => {addLike(props.item.id)}}>Like</button>
                <p>{props.item.likes}</p>
            </div>
        )
    }
}

export default GalleryItem;