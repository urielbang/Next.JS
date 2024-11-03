import Head from "next/head";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetings!"
        ></meta>
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  const { MongoClient } = await import("mongodb"); // Import only on server side

  const client = await MongoClient.connect(
    "mongodb+srv://uriel:uriel19988@meets.fzc3b.mongodb.net/?retryWrites=true&w=majority&appName=meets"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  // Await the array of meetups
  const allMeets = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: allMeets.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
