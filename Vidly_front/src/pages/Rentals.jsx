import { useState, useEffect } from "react";
import Rental from "../api/rental.js";
import { NewCard, Card } from "../Components/RentalCard.jsx";
import SearchBar from "../Components/SearchBar.jsx";
function Rentals() {
  const [search, setSearch] = useState("");
  const [rentals, setRentals] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const rental = await Rental.getAll();
        if (rental.data) setRentals(rental.data);
      } catch (err) {
        alert("Unable to fetch data please try again".err);
      }
    }
    fetchData();
  }, [refresh]);
  return (
    <>
      <div className="flex flex-col items-center">
        <SearchBar setSearch={setSearch} page={"Rental"} />
      </div>
      <NewCard refresh={refresh} setRefresh={setRefresh} />
      <div className="m-16">
        {rentals.map(
          (r, k) =>
            r.customer.name.toLowerCase().startsWith(search.toLowerCase()) && (
              <Card
                rental={r}
                key={k}
                refresh={refresh}
                setRefresh={setRefresh}
                idd={k}
              />
            )
        )}
      </div>
    </>
  );
}
export default Rentals;
