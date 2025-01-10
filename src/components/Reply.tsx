import Score from "./Score"
import { Reply as ReplyType } from "../types/ApiResponse"
import replyIcon from "../assets/icon-reply.svg"
import "../index.css"

const Reply = (props: ReplyType) => {
  return (
    <section>
        <Score score={props.score}/>
        <div className="commentHeader">
            <img className="profilePicture" src={props.user.image.png}/>
            <span className="username">{props.user.username}</span>
            <span className="createdAt">{props.createdAt}</span>
            <button type="button"><img src={replyIcon}/>Reply</button>
        </div>
        <div className="content">
            <a href="#">@ {props.replyTo}</a>
            {props.content}
        </div>
    </section>
  )
}

export default Reply