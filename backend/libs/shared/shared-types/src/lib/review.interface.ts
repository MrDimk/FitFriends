export interface ReviewInterface {
  id?: number;           // Идентификатор отзыва
  userId: string;        // Идентификатор пользователя, оставившего отзыв
  workoutId: number;     // Идентификатор тренировки, на которую оставлен отзыв
  rating: number;        // Оценка отзыва, целое число от 1 до 5
  text: string;          // Текст отзыва, от 100 до 1024 символов
  createdAt: Date;       // Дата создания отзыва
}
