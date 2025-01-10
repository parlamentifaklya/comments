import Score from "./Score"
import { Comment as CommentType } from "../types/ApiResponse"
import Reply from "./Reply"
import replyIcon from "../assets/icon-reply.svg"
const Comment = (props: CommentType) => {
  return (
    <>
        <section>
            <Score score={props.score}/>
            <div className="commentHeader">
                <img className="profilePicture" src={props.user.image.png}/>
                <span className="username">{props.user.username}</span>
                <span className="createdAt">{props.createdAt}</span>
                <button type="button"><img src={replyIcon}/>Reply</button>
            </div>
            <div className="content">
                {props.content}
            </div>
        </section>
        {props.replies.map(reply => <Reply {...reply}/>)}
    </>
  )
}

export default Comment