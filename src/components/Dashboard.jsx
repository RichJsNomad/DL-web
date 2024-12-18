import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="icons-container">
      <div>
        <Link to="/">
          <img src="/user.png" alt="Loading..." />
        </Link>
      </div>

      <div>
        <Link to="/">
          <img src="/free-icon.png" alt="Loading" />
        </Link>
      </div>

      <div>
        <Link to="/">
          <img src="/dollar-icon.png" alt="Loading" />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
