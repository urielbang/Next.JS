import MeetUpDetail from "../../components/meetups/MeetUpDedatls";

export default function MeetUpDetails(props) {
  return (
    <MeetUpDetail
      image={props.meetupData.image}
      description={props.meetupData.description}
      address={props.meetupData.address}
      title={props.meetupData.title}
    />
  );
}

export async function getStaticPaths() {
  const { MongoClient } = await import("mongodb"); // Import only on server side

  const client = await MongoClient.connect(
    "mongodb+srv://uriel:uriel19988@meets.fzc3b.mongodb.net/?retryWrites=true&w=majority&appName=meets"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const allMeets = await meetupsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    fallback: false,
    paths: allMeets.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  const { MongoClient, ObjectId } = await import("mongodb"); // Import only on server side

  const client = await MongoClient.connect(
    "mongodb+srv://uriel:uriel19988@meets.fzc3b.mongodb.net/?retryWrites=true&w=majority&appName=meets"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });

  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        description: meetup.description,
      },
    },
  };
}
