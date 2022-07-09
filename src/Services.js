import React, { useState } from "react";

const Services = () => {
  // const [changeClass, setChangeClass] = useState("drop-list");
  // function changer() {
  //   setChangeClass("drop-list2");
  // }

  // function returner() {
  //   setChangeClass("drop-list");
  // }
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <nav>
      <button
        onMouseEnter={toggler}
        onMouseLeave={toggler}
        className="services"
        // onMouseEnter={changer}
        // onMouseLeave={returner}
      >
        Services
      </button>
      <ul className={toggle ? "drop-list2" : "drop-list"}>
        <li className="list-items">
          <svg
            className="list-icons"
            width="42"
            height="40"
            viewBox="0 0 42 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.60831 29.6727L5.47092 24.5476C4.4205 22.0288 5.62546 19.0374 8.16228 17.8662L30.6223 7.49617C33.1591 6.3249 36.0671 7.41725 37.1175 9.93601L37.3529 10.5005C38.4034 13.0193 37.1984 16.0107 34.6616 17.1819L18.3168 24.7285"
              stroke="black"
            />
            <rect
              x="-0.392722"
              y="-0.577174"
              width="14.4725"
              height="9.91581"
              rx="4.5"
              transform="matrix(0.199232 -0.979952 -0.984676 -0.174396 15.892 35.5648)"
              stroke="black"
            />
          </svg>
          Plumber
        </li>
        <hr />
        <li className="list-items">
          <svg
            width="35"
            height="33"
            viewBox="0 0 35 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.216772"
              y="0.653245"
              width="7.13704"
              height="31.0706"
              rx="3.56852"
              transform="matrix(0.905305 0.424762 -0.47176 0.881727 15.7133 0.563676)"
              stroke="black"
            />
            <rect
              x="-0.688533"
              y="0.228482"
              width="8.35393"
              height="25.4063"
              rx="4.17697"
              transform="matrix(-0.47176 0.881727 -0.905305 -0.424762 33.4485 13.3129)"
              stroke="black"
            />
          </svg>
          Mechanic
        </li>
        <hr />
        <li className="list-items">
          <svg
            width="24"
            height="35"
            viewBox="0 0 24 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="7.5592"
              y="10.1586"
              width="8.59641"
              height="24.1304"
              rx="4.29821"
              stroke="black"
            />
            <path
              d="M12.8994 10.3976H12.0139C10.8988 10.3976 9.83869 9.91316 9.10891 9.07002L8.03399 7.82814C7.39796 7.09332 6.98986 6.18908 6.85961 5.226L6.57158 3.09629C6.39286 1.7748 5.2647 0.78894 3.93117 0.78894C2.24342 0.78894 0.980897 2.33818 1.32156 3.99119L2.26102 8.54981L3.03798 12.3199C3.51684 14.6435 5.56265 16.3107 7.93507 16.3107H12.8994C14.5323 16.3107 15.8559 14.987 15.8559 13.3542C15.8559 11.7213 14.5323 10.3976 12.8994 10.3976Z"
              stroke="black"
            />
            <path
              d="M10.8154 10.3976L11.7009 10.3976C12.8161 10.3976 13.8762 9.91316 14.6059 9.07002L15.6809 7.82814C16.3169 7.09332 16.725 6.18907 16.8552 5.22599L17.1433 3.09629C17.322 1.77479 18.4501 0.78894 19.7837 0.78894C21.4714 0.78894 22.7339 2.33818 22.3933 3.99119L21.4538 8.54981L20.6769 12.3199C20.198 14.6435 18.1522 16.3107 15.7798 16.3107L10.8154 16.3107C9.18258 16.3107 7.8589 14.987 7.8589 13.3542C7.8589 11.7213 9.18258 10.3976 10.8154 10.3976Z"
              stroke="black"
            />
          </svg>
          Electrician
        </li>
      </ul>
    </nav>
  );
};

export default Services;
