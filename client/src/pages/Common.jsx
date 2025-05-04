import React from "react";
import img1 from "../assets/track-1.jpg";
import img2 from "../assets/track-2.jpg";
import img3 from "../assets/track-3.jpg";


const sections = [
  {
    title: "Track Your Spending",
    description:
      "Keep a close eye on where your money goes and make informed financial decisions. Our expense tracker helps you categorize and monitor your daily expenses effortlessly.",
    img: `${img1}`,
  },
  {
    title: "Budget Better",
    description:
      "Set budgets and stick to them to avoid overspending and save more effectively. Visualize your spending habits and adjust your budget to meet your financial goals.",
    img:`${img2}`,
  },
  {
    title: "Achieve Financial Goals",
    description:
      "Plan and monitor your expenses to reach your financial goals faster. Whether it's saving for a vacation or paying off debt, our tracker keeps you on track.",
    img:`${img3}`,
  },
];

const Common = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200 p-8 space-y-16 w-full mx-auto">
     <section className="max-w-7xl">

      <h1 className="text-5xl font-extrabold text-center mb-12">Expense Tracker</h1>

      <section>
        <h2 className="text-4xl font-bold mb-6">Information</h2>
        <p className="text-lg text-gray-700 mb-4">
          Managing personal finances effectively is crucial in today’s fast-paced world. An expense tracker is an essential tool that helps individuals gain control over their spending habits, budget wisely, and achieve their financial goals.
        </p>
        <p className="text-lg text-gray-700">
          Our expense tracker application offers a user-friendly interface that simplifies the process of tracking income and expenses. It categorizes transactions, provides insightful summaries, and visualizes spending patterns through charts and reports. Whether you are saving for a major purchase, managing monthly bills, or simply trying to cut down on frivolous spending, this tool empowers you to take charge of your financial health with confidence and ease.
        </p>
      </section>

      <section>
        <h2 className="text-4xl font-bold mb-6">Benefits</h2>
        <p className="text-lg text-gray-700 mb-4">
          Using an expense tracker brings numerous benefits including improved budgeting, increased savings, and reduced financial stress. It encourages accountability by making users aware of their spending habits and helps in setting realistic financial goals. Additionally, it provides a clear overview of cash flow, enabling better planning for emergencies and investments. With regular use, an expense tracker can transform your approach to money management, fostering a disciplined and proactive financial lifestyle.
        </p>
      </section>

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
      </section>
    </div>
  );
};

export default Common;