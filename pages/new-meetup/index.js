import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function MeetUpPage() {
  const addMeetupHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
