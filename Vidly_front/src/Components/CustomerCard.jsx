import { useState } from "react";
import Customers from "../api/customer.js";
import Edit from "./EditCustomer.jsx";
export function NewCustomer({ refresh, setRefresh }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isGold, setType] = useState(false);

  async function handleSave() {
    const data = {
      name,
      phone,
      isGold,
    };
    try {
      await Customers.createCustomer(data);
      setRefresh(refresh + 1);
    } catch (err) {
      alert("Customer not created please try again");
      console.log("error", err);
    }
  }
  return (
    <div className="flex justify-around items-center bg-slate-400/50 text-slate-800   m-16 py-6 rounded-lg">
      <input
        type="text"
        placeholder="Name"
        className="bg-slate-300 px-2 py-1 rounded-lg"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder="☎️+251..."
        className="bg-slate-300 px-2 py-1 rounded-lg"
        onChange={(e) => setPhone(e.target.value)}
      />
      <div>
        <label className="text-amber-300 m-2">IsGold</label>
        <input type="checkbox" onChange={() => setType(true)} />
      </div>
      <button
        type="submit"
        className="bg-green-700 px-2 rounded  text-slate-400 hover:bg-green-600"
        onClick={() => handleSave()}
      >
        Save
      </button>
    </div>
  );
}
export function Card({
  customer,
  customers,
  setCustomers,
  index,
  refresh,
  setRefresh,
}) {
  async function handleDelete(id) {
    try {
      await Customers.deleteCustomer(id);
      setCustomers(customers.filter((c) => c._id !== id));
    } catch (err) {
      alert("Failed to remove customer please try again.", err);
    }
  }
  async function handleUpdate(id) {
    document.getElementById(id).classList.toggle("hidden");
  }
  const background = customer.isGold
    ? "bg-gradient-to-r from-amber-300/20 to-amber-200/20"
    : "bg-gradient-to-r from-purple-500/20 to-slate-400/20";
  const text = customer.isGold ? "text-amber-100" : "text-slate-300";
  return (
    <div
      className={`flex justify-around items-center ${background} ${text}  m-16 py-4 rounded-lg`}
    >
      <p>{customer.name}</p>
      <p>{customer.phone}</p>
      <p>{customer.isGold && "Gold Customer"}</p>
      <div>
        <button
          className="bg-sky-600 px-4 rounded m-2 text-sky-200 hover:bg-sky-700"
          onClick={() => handleUpdate(`edt-${index}`)}
        >
          edit
        </button>
        <button
          className="bg-red-600 px-4 rounded m-2 text-pink-200 hover:bg-red-700 "
          onClick={() => handleDelete(customer._id)}
        >
          delete
        </button>
      </div>
      <Edit
        customer={customer}
        index={index}
        refresh={refresh}
        setRefresh={setRefresh}
      />
    </div>
  );
}
