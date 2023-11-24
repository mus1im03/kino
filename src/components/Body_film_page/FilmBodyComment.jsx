import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../features/commentSlice";
import { fetchComment } from "../../features/commentSlice";
import { useEffect, useState } from "react";
import styles from "./Comment.module.css";
import { useParams } from "react-router-dom";

const FilmBodyComment = ({ id }) => {
  const [text, setText] = useState("");
  const [blur, setBlur] = useState(false);
  const comments = useSelector((state) => state.comment.comment.filter(comment => comment.filmId === id));
  
  const dispatch = useDispatch();

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(addComment({ id, text }));
    setText("");
  };

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    text === "" && setBlur(true);
  };

  const blurFokus = () => {
    blur && setBlur(false);
  };

  useEffect(() => {
    dispatch(fetchComment(id));
  }, [dispatch, id]);

  return (
    <div className={styles.comment_main}>
      <div className={styles.allComment}>
        <div className={styles.allInput}>
          {blur && (
            <div className={styles.blur}>Поле не должно быть пустым</div>
          )}
          <div className={styles.form_comment}>
            <form action="" onSubmit={handleAddComment}>
              <input
                className={`${blur ? "is-error" : ""}`}
                value={text}
                onChange={handleChangeText}
                onBlur={handleBlur}
                onFocus={blurFokus}
                type="text"
                name=""
                id={styles.input}
              />
              <button
                type="submit"
                className={styles.commentBtn}
                disabled={text === ""}
              >
                Добавить
              </button>
            </form>
          </div>
        </div>
        <div>
        {comments.map((comment) => {
    return (
      <div key={comment._id}>
        <div className={styles.comment_text}>{comment.text}</div>
      </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FilmBodyComment;