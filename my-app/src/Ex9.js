import React, { useState } from "react";
import "./Ex9.css";
const Ex9 = () => {
  let [data, setData] = useState([]);

  async function fetchData() {
    let hr = await fetch(
      `https://random-data-api.com/api/users/random_user?size=10`
    );
    if (hr.ok) {
      let data = await hr.json();
      setData(data);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    fetchData();
  };

  const EmployeeInfo = () => {
    return (
      <div>
        {data.map((info) => {
          let avatar = info.avatar.slice(0, -22);
          return (
            <div class="centered">
              <div class="flip-card" key={info.id}>
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img
                      src={avatar}
                      alt="avatar"
                      style={{ width: "150px", height: "150px;" }}
                    />
                    <br />
                    <b>
                      {info.first_name} {info.last_name}
                    </b>{" "}
                    <br />
                    {info.employment.title}{" "}
                  </div>
                  <div class="flip-card-back">
                    {info.address.city} <br />
                    {info.date_of_birth} <br />
                    <b>More additional info</b>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <EmployeeInfo />
      <button onClick={handleClick}>Randomize users</button>
    </div>
  );
};
export default Ex9;
