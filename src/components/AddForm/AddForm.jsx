import Axios from "axios";
import {useState} from "react";

// This function will display or hide an "add a photo" form
// with text inputs for the img url, a title and a description of the photo
// It will also do a POST with the new information and add it to the database
function AddForm(props) {
    // Local states used to hold inputs and if form should be displayed
    const [toggleAddForm, setToggleAddForm] = useState(true);
    let [newImgPath, setNewImgPath] = useState("");
    let [newTitle, setNewTitle] = useState("");
    let [newDescription, setNewDescription] = useState("");

    // svg icon used in the "add photo" button
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

    // This function will check if any of the 3 text inputs were empty
    // otherwise it calls the addNewPhoto function
    const handleSubmit = () => {
        if (!newImgPath || !newTitle || !newDescription) {
            alert('All three fields are required!');
        } else {
            addNewPhoto();
        };
    }

    // This function will perform a POST with the new
    // photos infomation
    // It will then clear the inputs and hide the "add form"
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

    // This function will change the local state for toggleAddForm to the opposite
    // of what it currently is
    function toggle() {
        setToggleAddForm(!toggleAddForm);
    }
    
    // Determines what should be rendered depending on the toggle's
    // current state
    // If the toggle is false, then display the form and inputs
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
                <button className='addFormBtn submitBtn' onClick={handleSubmit}>Add</button>
                <button className='addFormBtn cancelBtn' onClick={() => {toggle()}}>Cancel</button>
            </div>
            </>
            
        )
    }  else { // if the toggle is true then do NOT display the form and display a button to show the form
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