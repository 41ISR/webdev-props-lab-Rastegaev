export const ReviewsCard = (props) => {
    return (
        <div className="review-card">
            <img
                className="review-card__avatar"
                src={props.item.avatar}
                alt={props.item.name}
            />
            <div className="review-card__content">
                <p className="review-card__text">
                    {props.item.text}
                </p>
                <span className="review-card__author">
                    {props.item.name} — курс {props.item.course} 
                </span>
            </div>
        </div>
    )
}