import Axios from "axios";
import {useState, useEffect} from 'react';

function GalleryItem(props) {
    const [toggleDescription, setToggleDescription] = useState(false);

    const heartIcon = (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 512 512">
            <path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/>
        </svg>
    )

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
            <button onClick={() => {addLike(props.item.id)}}>Like {heartIcon}</button>
            <p>{props.item.likes}</p>
        </div>
    )
    } else {
        return (
            <div className="imgDiv">
                <div key={props.item.id} onClick={() => {toggle()}} className="descriptionDiv">
                    <h3>{props.item.title}</h3><br />
                    <p>{props.item.description}</p><br />
                </div>
                <button onClick={() => {addLike(props.item.id)}}>Like {heartIcon}</button>
                <p>{props.item.likes}</p>
            </div>
        )
    }
}

export default GalleryItem;