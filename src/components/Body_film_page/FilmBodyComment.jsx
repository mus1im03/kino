import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../features/commentSlice";
import { fetchComment } from "../features/commentSlice";
import { useEffect, useState } from "react";
import styles from "./Comment.module.css";

const FilmBody_Comment = () => {
  const [text, setText] = useState("");

  const [blur, setBlur] = useState(false);

  const comments = useSelector((state) => state.comment.comment);

  const dispatch = useDispatch();

  const handleAddComment = () => {
    dispatch(addComment(text));
    console.log(text, 'param');
    setText("");
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  // const handleBlur = () => {
  //   text === "" && setBlur(true);
  // };

  // const blurFokus = () => {
  //   blur && setBlur(false);
  // };

  useEffect(() => {
    dispatch(fetchComment());
  }, [dispatch]);

  return (
    <div className={styles.comment_components}>
      <div className={styles.allComment}>
        <div>
          {blur && (
            <div className={styles.blurtext}>Поле не должно быть пустым</div>
          )}
          <div className={styles.input_comment}>
            <form action="" onSubmit={handleAddComment}>
              <input
                className={`${blur ? "is-error" : ""}`}
                value={text}
                onChange={handleChangeText}
                // onBlur={handleBlur}
                // onFocus={blurFokus}
                type="text"
                name=""
                id={styles.input}
              />
              <button type="submit" className={styles.commentBtn} disabled={text === ""}>
                Добавить
              </button>
            </form>
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
