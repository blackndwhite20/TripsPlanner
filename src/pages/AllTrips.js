const DUMMY_DATA = [
  {
    id: "trip1",
    title: "Malta",
    image: "https://media.nomadicmatt.com/maltaguide_.jpg",
    address: "Malta",
    description: "Trip in Malta 2022",
  },
  {
    id: "trip2",
    title: "Adriatic Sea Sailing",
    image:
      "https://www.purevacations.com/wp-content/uploads/2020/05/Beautiful-bay-in-Greece-1024x683.jpg",
    address: "Lefkada",
    description: "Sailing trip with friends 2022",
  },
];

function AllTripsPage() {
  return (
    <section>
      <h1>All trips</h1>
      <ul>
        {DUMMY_DATA.map((trip) => {
          return <li key={trip.id}>{trip.title}</li>;
        })}
      </ul>
    </section>
  );
}

export default AllTripsPage;
