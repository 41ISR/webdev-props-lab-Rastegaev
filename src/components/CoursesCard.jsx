export const CourseCard = (props) => {
   return <article className="course-card">
        <img
            className="course-card__image"
            src="https://placehold.co/400x220?text=React"
            alt="React с нуля"
        />
        <div className="course-card__body">
            <span className="course-card__category">{props.item.category}</span>
            <h3 className="course-card__title">{props.item.title}</h3>
            <p className="course-card__meta">{props.item.duration} · {props.item.level}</p>
            <div className="course-card__footer">
                <span className="course-card__price">{props.item.price} ₽</span>
                <span className="course-card__rating">★ {props.item.rating}</span>
            </div>
            <button className="btn btn--primary btn--full">Записаться</button>
        </div>
    </article>
}