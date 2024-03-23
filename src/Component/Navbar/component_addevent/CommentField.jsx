import { useRef, useState } from "react";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CommentField({comment, onChangeComment}) {    
    const [isEditingComment, setIsEditingComment] = useState(false);
    function handleChange(event) {
        onChangeComment(event.target.value);
    }


    function handleClick(){
        setIsEditingComment(!isEditingComment);
        } 
   
    let editableComment = isEditingComment?
    <input value={comment} onChange={handleChange}></input>
    :<span></span>;
    return (
        <>
           {editableComment}
            <FontAwesomeIcon icon={faComment} onClick={handleClick}/>
        </>
        
    )
}