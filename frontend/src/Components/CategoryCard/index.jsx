import "./style.css";

export default function CategoryCard({
  title,
  questionAmount,
  thumbnail,
  marks,
  onClick,
}) {
  return (
    <div onClick={onClick} className="card-img card-width">
      <img src={thumbnail} alt="data" />
      <div className="card_data">
        <p>{title}</p>
        <p>Take a quiz to test yourself.</p>
        <p>
          {questionAmount} questions | {marks} Marks
        </p>
      </div>
    </div>
  );
}
