const Note = ({ title, body}) => {
    //console.log({props})
    //const {content, date} = props

    return (
        <li>
            <p>{title}</p>
            <small><time>{body}</time></small>
        </li>
    );
}
 
export default Note;