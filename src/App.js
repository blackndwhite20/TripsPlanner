import { Route, Switch } from "react-router-dom";
import AllTripsPage from "./pages/AllTrips";
import NewTripPage from "./pages/NewTrip";
import FavouritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      {/* <MainNavigation></MainNavigation> */}
      <Switch>
        <Route path="/" exact>
          <AllTripsPage />
        </Route>

        <Route path="/new-trip">
          <NewTripPage></NewTripPage>
        </Route>

        <Route path="/favourites">
          <FavouritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
