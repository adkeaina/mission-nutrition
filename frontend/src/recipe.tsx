import React from "react";
import "./styles/recipe.css";

const Recipe: React.FC = () => {
  return (
    <div className="recipe">
      <div className="status-bar">
        <div className="time-display">9:41</div>
        <div className="dynamic-island" />
        <div className="status-icons">
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
              d="M58.6864 3.30213C61.1735 3.30223 63.5655 4.22432 65.368 5.8778C65.5038 6.00545 65.7207 6.00384 65.8544 5.87419L67.1519 4.61072C67.2196 4.54496 67.2573 4.45588 67.2568 4.3632C67.2562 4.27052 67.2174 4.18187 67.1489 4.11688C62.4179 -0.257833 54.9542 -0.257833 50.2232 4.11688C50.1546 4.18183 50.1158 4.27044 50.1151 4.36313C50.1145 4.45581 50.1522 4.54491 50.2198 4.61072L51.5177 5.87419C51.6513 6.00404 51.8684 6.00565 52.004 5.8778C53.8068 4.22421 56.1991 3.30212 58.6864 3.30213Z"
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

      <div className="recipe-content">
        <h1 className="recipe-title">Spaghetti Recipe</h1>

        <section className="recipe-section">
          <h2 className="section-title">Ingredients</h2>
          <ul className="ingredients-list">
            <li>A box of Spaghetti</li>
            <li>A jar of marinara sauce</li>
            <li>1-2 lbs of ground beef or italian sausage</li>
            <li>2 large pots</li>
            <li>Sauce</li>
            <li>Salt and Water</li>
          </ul>
        </section>

        <section className="recipe-steps">
          <div className="step-container">
            <h3 className="step-title">Cooking the meat + Get water boiling</h3>
            <p className="step-description">
              Fill a large pot with salted water and bring it to a boil. Cook
              the meat in a large pan over medium heat Break it into small
              pieces and brown it for 10-15 minutes.
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f36c655647aaedcb183416c2519fb90bf01c5e4d"
              alt="Cooking meat and boiling water"
              className="step-image"
            />
          </div>

          <div className="step-container">
            <h3 className="step-title">Mixing in the Sauce</h3>
            <p className="step-description">
              Pour the marinara sauce over the cooked meat and stir until well
              combined. Reduce the heat to low and let it simmer. Meanwhile,
              cook the pasta.
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c06ead6d631f9e82b59238af5fec24f3b049dc7"
              alt="Mixing sauce with meat"
              className="step-image"
            />
          </div>

          <div className="step-container">
            <h3 className="step-title">Cooking the Spaguetti</h3>
            <p className="step-description">
              Add the spaghetti to boiling water and cook for 7-11 minutes,
              stirring occasionally to prevent sticking. Once done, strain it
              and set it aside or mix it directly into the sauce to blend.
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/643cb60fbc1bcb2f35a84811dd1b02f34eada6e3"
              alt="Cooking spaghetti"
              className="step-image"
            />
          </div>

          <div className="step-container">
            <h3 className="step-title">Serving Your Spaguetti</h3>
            <p className="step-description">
              Mix noodles directly in the pan with the sauce, using tongs to
              transfer them and adding a bit of pasta water to help the sauce
              stick. Alternatively, you can plate the plain spaghetti and spoon
              the sauce on top
            </p>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3679c48f96ea9c3a10b040b47ed71c4246f3b00"
              alt="Serving spaghetti"
              className="step-image"
            />
          </div>
        </section>

        <div className="action-buttons">
          <button className="action-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V16M8 12H16M5 3H19C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3Z"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Log Meal</span>
          </button>
          <button className="action-button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 18L12 14.95L16 18L14.5 13.05L18.5 10.2H13.6L12 5L10.4 10.2H5.5L9.5 13.05L8 18ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                fill="white"
              />
            </svg>
            <span>Add To Week</span>
          </button>
        </div>

        <section className="video-section">
          <h2 className="section-title">Video Instructions</h2>
          <div className="video-player">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_370_707)">
                <path
                  d="M9.99996 18.3333C14.6023 18.3333 18.3333 14.6023 18.3333 9.99996C18.3333 5.39759 14.6023 1.66663 9.99996 1.66663C5.39759 1.66663 1.66663 5.39759 1.66663 9.99996C1.66663 14.6023 5.39759 18.3333 9.99996 18.3333Z"
                  stroke="#F3F3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.33329 6.66663L13.3333 9.99996L8.33329 13.3333V6.66663Z"
                  stroke="#F3F3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_370_707">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </section>

        <p className="recipe-footer">Thanks</p>
      </div>

      <nav className="navigation-bar">
        <button className="nav-item active">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="#1E1E1E"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Search</span>
        </button>
        <button className="nav-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
              stroke="#757575"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Calendar</span>
        </button>
        <button className="nav-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              stroke="#757575"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Home</span>
        </button>
        <button className="nav-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 20V10M12 20V4M6 20V14"
              stroke="#757575"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Stats</span>
        </button>
        <button className="nav-item">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
              stroke="#757575"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"
              stroke="#757575"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Settings</span>
        </button>
      </nav>
    </div>
  );
};

export default Recipe;
