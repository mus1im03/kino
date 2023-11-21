import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../features/commentSlice";
import { useState } from "react";
import styles from "./Comment.module.css";

const FilmBody_Comment = () => {
  const [text, setText] = useState("");

  const comments = useSelector((state) => state.comment.comment);

  const dispatch = useDispatch();
  const handleAddComment = () => {
    dispatch(addComment(text));
  };

  const handleComment = (e) => {
    setText(e.target.value);
  };

  return (
      <div className={styles.comment_components}>
        <div className={styles.allComment}>
          <div>
          <div className={styles.input_comment}>
            <textarea
              className={styles.comment_input}
              value={text}
              onChange={handleComment}
              onClick={handleAddComment}
              type="text"
              name=""
              id=""
            />
            <div>
              <button className={styles.commentBtn} onClick={handleAddComment}>
                Добавить
              </button>
            </div>
          </div>
        </div>
          <div className={styles.comment_text}>
            {comments.map((comment) => {
              return <div key={comment}>{comment.text}</div>;
            })}
            </div>
          </div>
        </div>
  );
};

export default FilmBody_Comment;
