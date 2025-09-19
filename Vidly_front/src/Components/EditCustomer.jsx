import { useState } from "react";
import Customers from "../api/customer.js";
export default function Edit({ customer, index, refresh, setRefresh }) {
  const [name, setName] = useState(customer.name);
  const [phone, setPhone] = useState(customer.phone);
  const [isGold, setType] = useState(false);
  async function handleChange(id) {
    if (name && phone) {
      try {
        await Customers.updateCustomer(id, { name, phone, isGold });
        setRefresh(refresh + 1);
      } catch (err) {
        if (err.status === 400) alert(err);
        else console.err(err);
      }
    }
  }
  return (
    <div
      id={`edt-${index}`}
      className="hidden absolute flex flex-col  items-center bg-black/30 p-4 ml-140"
    >
      <input
        type="text"
        placeholder={customer.name}
        className="bg-slate-300 text-gray-600 px-2 py-1 rounded-lg m-4"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="tel"
        placeholder={customer.phone}
        className="bg-slate-300 text-gray-600 px-2 py-1 rounded-lg"
        onChange={(e) => setPhone(e.target.value)}
      />
      <div>
        <label className="text-amber-300 m-2">IsGold</label>
        <input type="checkbox" onChange={() => setType(true)} />
      </div>
      <button
        className="bg-sky-600 px-4 rounded m-2 text-sky-200 hover:bg-sky-700"
        onClick={() => {
          handleChange(customer._id);
          document.getElementById("edt-" + index).classList.add("hidden");
        }}
      >
        Apply
      </button>
    </div>
  );
}
