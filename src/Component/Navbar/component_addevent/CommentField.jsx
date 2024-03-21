import { useRef, useState } from "react";
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CommentField({ handleClick}) {
    
    const [comment, setComment] = useState('');
    
    const [isEditingComment, setIsEditingComment] = useState(false);
    function handleChange(event) {
        setComment(event.target.value);
    }

    function handleClick(){
        setIsEditingComment((prevState) => !prevState);
        } 
   
    let editableComment = <span id='cmt-text' type="text" value={comment} onChange={handleChange}>{comment}</span>;
    if (isEditingComment) {
        editableComment = <input type="text" required value={comment} onChange={handleChange} />;
    }
    return (
        <>
           {editableComment}
        <FontAwesomeIcon icon={faComment} onClick={handleClick}/>
        </>
        
    )
}