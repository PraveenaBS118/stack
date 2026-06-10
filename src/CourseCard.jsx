import "./CourseCard.css";
function CourseCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="course" />
      <h2>{props.title}</h2>
      <p><b>Instructor:</b> {props.instructor}</p>
      <p><b>Duration:</b> {props.duration}</p>
      <p><b>Rating:</b>{props.rating}</p>
      <p><b>Fee:</b> ₹{props.fee}</p>
    </div>
  );
}
export default CourseCard;