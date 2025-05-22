import React, { useState } from "react";
import {
  FaWallet,
  FaBolt,
  FaFileInvoice,
  FaUserCircle,
  FaUniversity,
  FaHistory,
  FaRegCalendarAlt,
  FaHeartbeat,
  FaPiggyBank,
  FaMoneyCheckAlt,
  FaQrcode,
  FaHome,
  FaSearch,
} from "react-icons/fa";
import "./App.css";

const services = [
  { icon: <FaBolt />, label: "Schedule Payment" },
  { icon: <FaWallet />, label: "Wallet" },
  { icon: <FaFileInvoice />, label: "Bills" },
  { icon: <FaUserCircle />, label: "Contact" },
  { icon: <FaUniversity />, label: "Add Bank" },
];

const cards = [
  {
    icon: <FaHistory />,
    title: "Transaction History",
    desc: "View all your recent transactions in one place.",
  },
  {
    icon: <FaRegCalendarAlt />,
    title: "Upcoming Bills",
    desc: "Never miss a payment. See what's due next.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Health Insurance",
    desc: "Check your coverage and claims status.",
  },
  {
    icon: <FaPiggyBank />,
    title: "Savings",
    desc: "Track your savings goals and progress.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Your Loans",
    desc: "For the loan you can visit here",
  },
];

function App() {
  const [showBalance, setShowBalance] = useState(true);
  const [activeTab, setActiveTab] = useState("Quick Loans");

  return (
    <div className="app-container">
      <header className="header">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="User"
          className="avatar"
        />
        <div className="logo-title">
          <div className="logo">FINTECH</div>
          <h2>breakfree</h2>
          <p>Your Money, Your Control</p>
        </div>
      </header>

      <section className="balance-section">
        <h1>
          {showBalance ? "$ 124.25" : "••••••"}
          <button
            className="show-balance-btn"
            onClick={() => setShowBalance((v) => !v)}
          >
            {showBalance ? "Hide Balance" : "Show Balance"}
          </button>
        </h1>
        <div className="tabs">
          <button
            className={activeTab === "Bill Payment" ? "active" : ""}
            onClick={() => setActiveTab("Bill Payment")}
          >
            Bill Payment
          </button>
          <button
            className={activeTab === "Quick Loans" ? "active" : ""}
            onClick={() => setActiveTab("Quick Loans")}
          >
            Quick Loans
          </button>
        </div>
      </section>

      <section className="services">
        <h3>Services</h3>
        <div className="services-list">
          {services.map((s, i) => (
            <div className="service-item" key={i}>
              <div className="icon">{s.icon}</div>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cards">
        {cards.map((card, i) => (
          <div className="card" key={i}>
            <div className="card-icon">{card.icon}</div>
            <div>
              <strong>{card.title}</strong>
              <p>{card.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <nav className="bottom-nav">
        <button>
          <FaHome />
        </button>

        <button>
          <FaQrcode />
        </button>
        <button>
          <FaUserCircle />
        </button>
      </nav>
    </div>
  );
}

export default App;
