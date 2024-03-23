export default function CommentButton({isEditingComment, handleClick, id}) {
    return(<button
        id="cmt-btn" 
        onClick={handleClick}>{isEditingComment ? "Save" : "Comment"}</button>
)
    }
    