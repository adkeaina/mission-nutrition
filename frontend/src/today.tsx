import React from "react";
import "./styles/today.css";

const Today: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="today-container">
        <div className="status-bar">
          <div className="time">9:41</div>
          <div className="status-icons">
            <div>
              <svg
                width="135"
                height="14"
                viewBox="0 0 135 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.1152 2.03302C43.1152 1.39997 42.6376 0.886791 42.0485 0.886791H40.9818C40.3927 0.886791 39.9152 1.39997 39.9152 2.03302V11.967C39.9152 12.6 40.3927 13.1132 40.9818 13.1132H42.0485C42.6376 13.1132 43.1152 12.6 43.1152 11.967V2.03302ZM35.681 3.33207H36.7477C37.3368 3.33207 37.8144 3.85757 37.8144 4.50581V11.9395C37.8144 12.5877 37.3368 13.1132 36.7477 13.1132H35.681C35.0919 13.1132 34.6144 12.5877 34.6144 11.9395V4.50581C34.6144 3.85757 35.0919 3.33207 35.681 3.33207ZM31.3493 5.98112H30.2826C29.6935 5.98112 29.2159 6.51331 29.2159 7.1698V11.9245C29.2159 12.581 29.6935 13.1132 30.2826 13.1132H31.3493C31.9384 13.1132 32.4159 12.581 32.4159 11.9245V7.1698C32.4159 6.51331 31.9384 5.98112 31.3493 5.98112ZM26.0485 8.42641H24.9818C24.3927 8.42641 23.9152 8.951 23.9152 9.59811V11.9415C23.9152 12.5886 24.3927 13.1132 24.9818 13.1132H26.0485C26.6376 13.1132 27.1152 12.5886 27.1152 11.9415V9.59811C27.1152 8.951 26.6376 8.42641 26.0485 8.42641Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M58.6864 3.30213C61.1735 3.30223 63.5655 4.22432 65.368 5.8778C65.5038 6.00545 65.7207 6.00384 65.8544 5.87419L67.1519 4.61072C67.2196 4.54496 67.2573 4.45588 67.2568 4.3632C67.2562 4.27052 67.2174 4.18187 67.1489 4.11688C62.4179 -0.257833 54.9542 -0.257833 50.2232 4.11688C50.1546 4.18183 50.1158 4.27044 50.1151 4.36313C50.1145 4.45581 50.1522 4.54491 50.2198 4.61072L51.5177 5.87419C51.6513 6.00404 51.8684 6.00565 52.004 5.8778C53.8068 4.22421 56.1991 3.30212 58.6864 3.30213ZM58.6831 7.5224C60.0404 7.52232 61.3493 8.03406 62.3554 8.95819C62.4915 9.08934 62.7058 9.0865 62.8385 8.95178L64.1258 7.63247C64.1936 7.56327 64.2312 7.46939 64.2302 7.37184C64.2292 7.27429 64.1897 7.18121 64.1206 7.11342C61.0567 4.22257 56.312 4.22257 53.2482 7.11342C53.179 7.18121 53.1395 7.27434 53.1386 7.37192C53.1377 7.4695 53.1754 7.56337 53.2433 7.63247L54.5302 8.95178C54.6629 9.0865 54.8773 9.08934 55.0133 8.95819C56.0188 8.03467 57.3266 7.52297 58.6831 7.5224ZM61.2075 10.316C61.2094 10.4213 61.1723 10.5229 61.105 10.5967L58.9284 13.0514C58.8646 13.1236 58.7776 13.1642 58.6868 13.1642C58.596 13.1642 58.5091 13.1236 58.4452 13.0514L56.2682 10.5967C56.201 10.5228 56.164 10.4212 56.166 10.3159C56.168 10.2105 56.2088 10.1108 56.2788 10.0401C57.6689 8.72625 59.7048 8.72625 61.0949 10.0401C61.1648 10.1108 61.2056 10.2106 61.2075 10.316Z"
                  fill="black"
                />
                <rect
                  opacity="0.35"
                  x="74.7568"
                  y="1"
                  width="24"
                  height="12"
                  rx="3.8"
                  stroke="black"
                />
                <path
                  opacity="0.4"
                  d="M100.257 5.28113V9.3566C101.062 9.01143 101.585 8.20847 101.585 7.31886C101.585 6.42926 101.062 5.6263 100.257 5.28113Z"
                  fill="black"
                />
                <rect
                  x="76.2568"
                  y="2.5"
                  width="21"
                  height="9"
                  rx="2.5"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="main-content">
          <h1 className="title">Today View</h1>
          <div className="food-grid">
            <div className="food-item">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb5417f23ba8c8598e1943394c33bd18bc2389fd"
                alt="Stack of pancakes with syrup"
                className="food-image"
              />
            </div>
            <div className="food-item">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/08e1b12bc9a9adad73de0d625ceeefc170f05811"
                alt="Wrap with lettuce and meat"
                className="food-image"
              />
            </div>
            <div className="food-item">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b5fd6a396df2ece4cd6b343604c446dba0cbff7"
                alt="Pasta with tomato sauce"
                className="food-image"
              />
            </div>
          </div>
          <div className="controls">
            <div className="toggle-container">
              <button className="toggle-button toggle-button-left">Week</button>
              <button className="toggle-button toggle-button-right">
                Today
              </button>
            </div>
            <div className="shopping-list">
              <div className="shopping-list-text">
                <span>Shopping</span>
                <br />
                <span>List</span>
              </div>
              <div className="cart-icon">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 22 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.916626 1H4.58329L7.03996 14.39C7.12378 14.8504 7.35338 15.264 7.68854 15.5583C8.02371 15.8526 8.4431 16.009 8.87329 16H17.7833C18.2135 16.009 18.6329 15.8526 18.968 15.5583C19.3032 15.264 19.5328 14.8504 19.6166 14.39L21.0833 6H5.49996M9.16663 21C9.16663 21.5523 8.75622 22 8.24996 22C7.7437 22 7.33329 21.5523 7.33329 21C7.33329 20.4477 7.7437 20 8.24996 20C8.75622 20 9.16663 20.4477 9.16663 21ZM19.25 21C19.25 21.5523 18.8396 22 18.3333 22C17.827 22 17.4166 21.5523 17.4166 21C17.4166 20.4477 17.827 20 18.3333 20C18.8396 20 19.25 20.4477 19.25 21Z"
                    stroke="#FF6961"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="snack-section">
            <div className="snack-container">
              <div className="snack-header">
                <span>Snack Ideas</span>
                <svg
                  width="27"
                  height="31"
                  viewBox="0 0 27 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: "absolute", right: "20px" }}
                >
                  <path
                    d="M5.625 15.5H21.375"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="snack-grid">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4996c03f0d80f0dd7d942a63ba8b066bd9ef28ac"
                  alt="Pickles"
                  className="snack-image"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e118346712bcc070cf7e04e6f44195e69cde4bb0"
                  alt="Cashews"
                  className="snack-image"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f3ce49bcca6dd285368cfbbbdb3b6e823d3bf3c"
                  alt="Almonds"
                  className="snack-image"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be1fca5905bafa920f7ac019be2bf6a1552a19a"
                  alt="Celery"
                  className="snack-image"
                />
              </div>
            </div>
          </div>
          <nav className="navigation">
            <div className="nav-item">
              <i className="ti ti-search nav-icon" />
              <span>Search</span>
            </div>
            <div className="nav-item">
              <i className="ti ti-calendar nav-icon" />
              <span>Calendar</span>
            </div>
            <div className="nav-item">
              <i className="ti ti-home nav-icon" />
              <span>Home</span>
            </div>
            <div className="nav-item">
              <i className="ti ti-chart-bar nav-icon" />
              <span>Stats</span>
            </div>
            <div className="nav-item">
              <i className="ti ti-settings nav-icon" />
              <span>Settings</span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Today;
