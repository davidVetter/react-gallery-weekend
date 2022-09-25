import Axios from "axios";

function GalleryItem(props) {
    
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
    
    return (
        <div key={props.item.id} className="imgDiv">
            <img key={props.item.id} src={props.item.path}></img><br />
            <button onClick={() => {addLike(props.item.id)}}>Like</button>
            <p>{props.item.likes}</p>
        </div>
    )
}

export default GalleryItem;