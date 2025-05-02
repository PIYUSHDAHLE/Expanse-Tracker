const ExpenseList = ({ expenses, onEdit }) => {
    return (
      <div className="space-y-2">
        {expenses.map((expense) => (
          <div
            key={expense._id}
            className={`p-4 border rounded flex justify-between items-center ${
              expense.type === "get" ? "text-green-600" : "text-red-600"
            }`}
          >
            <div>
              <p className="font-semibold">{expense.title}</p>
              <p>₹{expense.amount}</p>
            </div>
  
            <button
              onClick={() => onEdit(expense)}
              className="text-blue-600 border border-blue-600 px-2 py-1 rounded hover:bg-blue-50"
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ExpenseList;
  