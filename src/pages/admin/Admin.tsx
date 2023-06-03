import React, { useEffect, useState } from "react";
import Login from "../../components/login/Login";
import "./Admin.scss";
import { useCookies } from "react-cookie";
import Update from "./Update";
import AddNew from "./AddNew";
import { render } from "@testing-library/react";
import Remove from "./Remove";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [renderComponent, setRenderComponent] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("laverdaboom-auth") === "loggedIn";

    setIsLoggedIn(loggedIn);
  }, []);
  return isLoggedIn ? (
    <div className="admin-wrapper">
      <div className="choices">
        <div className="choice" onClick={() => setRenderComponent("addNew")}>
          Lägg till hund
        </div>
        <div className="choice" onClick={() => setRenderComponent("update")}>
          Uppdatera hund
        </div>
        <div className="choice" onClick={() => setRenderComponent("remove")}>
          Ta bort hund
        </div>
      </div>
      {renderComponent !== undefined && (
        <div>
          {renderComponent === "update" && <Update />}
          {renderComponent === "addNew" && <AddNew />}
          {renderComponent === "remove" && <Remove />}
        </div>
      )}
    </div>
  ) : (
    <Login setIsLoggedIn={setIsLoggedIn} />
  );
};

export default Admin;
