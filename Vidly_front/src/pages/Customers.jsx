import Customers from "../api/customer.js";
import { NewCustomer, Card } from "../Components/CustomerCard.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import { useState, useEffect } from "react";
function Customer() {
  const [search, setSearch] = useState("");
  const [customer, setCustomer] = useState([]);
  const [refresh, setRefresh] = useState(0);
  useEffect(() => {
    async function fetchCustomers() {
      try {
        const res = await Customers.getAll();
        if (res) setCustomer(res.data);
      } catch (err) {
        console.error("Error fetching customer", err);
      }
    }
    fetchCustomers();
  }, [refresh]);

  const page = "Customer";
  return (
    <div>
      <div className="flex flex-col items-center">
        <SearchBar setSearch={setSearch} page={page} />
      </div>
      <NewCustomer refresh={refresh} setRefresh={setRefresh} />
      {customer.map(
        (m, i) =>
          m.name.toLowerCase().startsWith(search.toLowerCase()) && (
            <Card
              customer={m}
              key={i}
              customers={customer}
              setCustomers={setCustomer}
              refresh={refresh}
              setRefresh={setRefresh}
              index={i}
            />
          )
      )}
    </div>
  );
}
export default Customer;
