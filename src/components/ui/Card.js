import classes from "./Card.module.css";

function Card(props) {
  return <div className={classes.card}>{props.children}</div>; //deci iau ce e intre <Card></Card>
}

export default Card;
