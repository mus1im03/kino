import { useState, useEffect } from 'react';
  

const LikeDislike = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  // Функция для получения текущих значений из localStorage
  const getValuesFromLocalStorage = () => {
    const localLikes = localStorage.getItem('likes') || 0;
    const localDislikes = localStorage.getItem('dislikes') || 0;
    setLikes(parseInt(localLikes, 10));
    setDislikes(parseInt(localDislikes, 10));
  };

  // Функция для обновления localStorage и состояния
  const updateValues = (newLikes, newDislikes) => {
    localStorage.setItem('likes', newLikes);
    localStorage.setItem('dislikes', newDislikes);
    setLikes(newLikes);
    setDislikes(newDislikes);
  };

  // Обработчик для лайка
  const handleLike = () => {
    updateValues(likes + 1, dislikes);
  };

  // Обработчик для дислайка
  const handleDislike = () => {
    updateValues(likes, dislikes + 1);
  };

  // Получаем значения из localStorage при загрузке компонента
  useEffect(() => {
    getValuesFromLocalStorage();
  }, []);

  return (
    <div>
      <h1>Статья</h1>
      <p>Лайки: {likes}</p>
      <p>Дислайки: {dislikes}</p>
      <button onClick={handleLike}>Лайк</button>
      <button onClick={handleDislike}>Дислайк</button>
    </div>
  );
};

export default LikeDislike;

