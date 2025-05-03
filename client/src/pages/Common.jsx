import React from "react";

const sections = [
  {
    title: "Track Your Spending",
    description:
      "Keep a close eye on where your money goes and make informed financial decisions. Our expense tracker helps you categorize and monitor your daily expenses effortlessly.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Budget Better",
    description:
      "Set budgets and stick to them to avoid overspending and save more effectively. Visualize your spending habits and adjust your budget to meet your financial goals.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Achieve Financial Goals",
    description:
      "Plan and monitor your expenses to reach your financial goals faster. Whether it's saving for a vacation or paying off debt, our tracker keeps you on track.",
    img: "https://images.unsplash.com/photo-1496180727794-817822f65950?auto=format&fit=crop&w=800&q=80",
  },
];

const Common = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 p-8 space-y-16">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } gap-8`}
        >
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg text-gray-700">{section.description}</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={section.img}
              alt={section.title}
              className="rounded-lg shadow-lg w-full object-cover max-h-96"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Common;
