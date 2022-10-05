import TripList from "../components/trips/TripList";

const DUMMY_DATA = [
  {
    id: "trip1",
    title: "Malta",
    image: "/img/malta.jpg",
    address: "Malta",
    description: "Trip in Malta 2022",
  },
  {
    id: "trip2",
    title: "Adriatic Sea Sailing",
    image: "/img/sailing.jpg",
    address: "Lefkada",
    description: "Sailing trip with friends 2022",
  },
];

function AllTripsPage() {
  return (
    <section>
      <h1>All trips</h1>
      <TripList trips={DUMMY_DATA}></TripList>
    </section>
  );
}

export default AllTripsPage;
