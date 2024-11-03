import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

export default function MeetUpPage() {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetUpData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    console.log(data);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetings!"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
