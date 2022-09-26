import Axios from "axios";
import {useState, useEffect} from 'react';

// This function will display the individual images
// It will handle if an img should be displayed or if the description should be displayed
// and it will perform the PUT and DELETE's needed to add "likes"
// or delete a photo from the database. Each of these actions refresh the images displayed if they change
function GalleryItem(props) {
    // Local state to keep track if photo or description is to be displayed
    const [toggleDescription, setToggleDescription] = useState(false);

    // SVG icon from likes (heart)
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
    // SVG icon for delete (trash can)
    const deleteIcon = (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor" 
            viewBox="0 0 448 512">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
        </svg>
    )

    // This function performs the PUT to increase a photos "likes" by
    // one in the database, the photos are refreshed to show new "likes"
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

    // This function performs the DELETE to remove a photo from
    // the database, the photos displayed are refreshed to show the current set
    // Sweet Alert (library) adds a nice confirmation before deleting photo
    function deletePhoto(id) {
        swal({
          title: "Remove Photo?",
          text: "Are you sure you want to remove this photo?",
          buttons: {
            cancel: true,
            confirm: {
              text: "Remove",
              className: "redBtn",
            },
          },
        }).then((result) => {
          if (result) {
            Axios({
              method: "DELETE",
              url: `/gallery/delete/${id}`,
            })
              .then(() => {
                props.getGallery();
              })
              .catch((error) => {
                console.log("Error in DELETE: ", error);
              });
          }
        });
    }

    // function to change the toggle (local state) on whether to show a photo description or not
    // to the opposite of what it currently is
    function toggle() {
       setToggleDescription(!toggleDescription);
    }

    // Determine what to render based on the current state of the toggle (local state)
    // if the toggle is false, then display the photo as photo
    if (!toggleDescription) {
    return (
        <div className="imgTile">
            <div key={props.item.id} onClick={() => {toggle()}}>
                <img key={props.item.id} src={props.item.path}></img><br />
            </div>
            <div className="imgDiv">
            <p>{props.item.likes} Likes</p>
            <button onClick={() => {addLike(props.item.id)}}><div id="heartBtn" className="likeDeleteBtn">{heartIcon}</div></button>
            <button onClick={() => {deletePhoto(props.item.id)}}><div id="trashBtn" className="likeDeleteBtn">{deleteIcon}</div></button>
            </div>
        </div>
    )
    } else { // if the toggle is true then display the photo description and not the photo
        return (
            <div>
                <div key={props.item.id} onClick={() => {toggle()}} className="descriptionDiv">
                    <h3>{props.item.title}</h3><br />
                    <p>{props.item.description}</p><br />
                </div>
                <div className="imgDiv">
                <p>{props.item.likes} Likes</p>
                <button onClick={() => {addLike(props.item.id)}}><div id="heartBtn" className="likeDeleteBtn">{heartIcon}</div></button>
                <button onClick={() => {deletePhoto(props.item.id)}}><div id="trashBtn" className="likeDeleteBtn">{deleteIcon}</div></button>
                </div>
            </div>
        )
    }
}

export default GalleryItem;