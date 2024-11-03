import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipM3JWusd4E3ws8vdn8-cEwmw5ryOHdhXZsGTWAK=w1080-h624-n-k-no",
    address: "Some Address 5, 23455 some city",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR6tRdjjen2IemfxQ8N2vFibMcVeUvwYHpNTdbL6jmgjGsekYaEzWdaBqMNPT7CirScdpeGTcBT3Zk5IHc9vhY2NPvMjNe6HFx_INo_pg",
    address: "Some Address 5, 23455 some city",
  },
  {
    id: "m3",
    title: "A First Meetup",
    image:
      "https://lh5.googleusercontent.com/p/AF1QipM3JWusd4E3ws8vdn8-cEwmw5ryOHdhXZsGTWAK=w1080-h624-n-k-no",
    address: "Some Address 5, 23455 some city",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
