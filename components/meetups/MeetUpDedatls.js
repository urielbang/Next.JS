import React from "react";
import classes from "./meetupDetails.module.css";

export default function MeetUpDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>A First Meetup</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}
