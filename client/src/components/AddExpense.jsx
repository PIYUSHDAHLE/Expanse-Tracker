import { useEffect, useState } from "react";

const AddExpense = ({ onAddExpense, editable }) => {
  const [type, setType] = useState("get");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (editable) {
      setType(editable.type);
      setTitle(editable.title);
      setAmount(editable.amount);
    }
  }, [editable]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpense({
      type,
      title,
      amount: parseFloat(amount),
    });

    // Reset form
    setTitle("");
    setAmount("");
    setType("get");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow mb-4 space-y-4">
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="get">Get Money</option>
        <option value="given">Given Money</option>
      </select>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <button
        type="submit"
        className={`${
          editable ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-600 hover:bg-blue-700"
        } text-white px-4 py-2 rounded`}
      >
        {editable ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
};

export default AddExpense;
