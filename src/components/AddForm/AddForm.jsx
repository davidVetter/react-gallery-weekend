import Axios from "axios";
import {useState} from "react";

function AddForm(props) {
    const [toggleAddForm, setToggleAddForm] = useState(true);
    let [newImgPath, setNewImgPath] = useState("");
    let [newTitle, setNewTitle] = useState("");
    let [newDescription, setNewDescription] = useState("");

    const addIcon = (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
        </svg>
    )

    const handleSubmit = () => {
        if (!newImgPath || !newTitle || !newDescription) {
            alert('All three fields are required!');
        } else {
            addNewPhoto();
        };
    }

    const addNewPhoto = () => {
      Axios.post("/gallery", {
        path: newImgPath,
        title: newTitle,
        description: newDescription,
      }).then((response) => {
        props.getGallery();
        setNewImgPath("");
        setNewTitle("");
        setNewDescription("");
        toggle();
      })
        .catch((error) => {
            alert("Error adding photo to page");
        });
    };

    function toggle() {
        setToggleAddForm(!toggleAddForm);
    }
    
    if(!toggleAddForm) {
        return (
            <>
            <h2>Add Photo</h2>
            <input 
                placeholder="URL"
                className="form-inputs"
                id="pathInput"
                value={newImgPath}
                onChange={(event) => setNewImgPath(event.target.value)}>
            </input>
            <input 
                placeholder="Title"
                className="form-inputs"
                value={newTitle}
                onChange={(event) => setNewTitle(event.target.value)}>
            </input>
            <input 
                placeholder="Description"
                className="form-inputs"
                value={newDescription}
                onChange={(event) => setNewDescription(event.target.value)}>
            </input>
            <div className="addFormBtnDiv">
                <button className='addFormBtn' onClick={handleSubmit}>Add</button>
                <button className='addFormBtn cancelBtn' onClick={() => {toggle()}}>Cancel</button>
            </div>
            </>
            
        )
    }  else {
        return (
            <>
            <button onClick={() => {toggle()}} className="addBtn">
                {addIcon}<br />Add Photo
            </button>
            </>
        )
    }
}

export default AddForm;