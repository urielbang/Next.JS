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
  return {
    fallback: false,
    paths: [{ params: { meetupId: "m1" } }, { params: { meetupId: "m2" } }],
  };
}

export async function getStaticProps(context) {
  const params = context.params.meetupId;
  return {
    props: {
      meetupData: {
        image:
          "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR6tRdjjen2IemfxQ8N2vFibMcVeUvwYHpNTdbL6jmgjGsekYaEzWdaBqMNPT7CirScdpeGTcBT3Zk5IHc9vhY2NPvMjNe6HFx_INo_pg",
        title: "A first Meet up",
        id: params,
        address: "Some street 5, Some city",
        description: "A first Meet up",
      },
    },
  };
}
