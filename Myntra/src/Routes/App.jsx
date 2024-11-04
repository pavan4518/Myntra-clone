import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import FetchItems from "../Components/FetchItems";
import Spinner from "../Components/Spinner";
import { useSelector } from "react-redux";

Header;
function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <Spinner /> : <Outlet />}

      <Footer />
    </>
  );
}

export default App;
