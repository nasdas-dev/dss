import { useState } from "react";

export const Nav = ({ isLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar bg-neutral drop-shadow-xl min-h-16 w-full">
      <div className="flex-1 m-2">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 300.000000 300.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            {" "}
            <g
              transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
              fill="#eeeeee"
              stroke="none"
            >
              {" "}
              <path d="M1416 2943 c-87 -97 -148 -152 -238 -213 -220 -148 -495 -232 -808 -247 -150 -7 -175 -17 -191 -76 -13 -49 -6 -415 11 -567 37 -321 112 -619 217 -859 101 -234 214 -402 383 -572 134 -134 246 -216 400 -294 90 -45 278 -115 310 -115 32 0 173 51 280 101 169 80 289 166 430 308 254 256 417 564 521 986 62 252 87 455 96 755 8 312 0 330 -151 330 -176 0 -434 50 -600 116 -205 83 -343 180 -492 347 -42 48 -56 57 -84 57 -28 0 -42 -9 -84 -57z m161 -243 c224 -209 595 -361 943 -385 144 -10 130 7 130 -158 0 -230 -32 -484 -91 -726 -87 -357 -242 -659 -447 -873 -159 -165 -318 -271 -525 -349 l-87 -32 -97 36 c-456 174 -774 556 -938 1126 -70 244 -115 565 -115 821 0 161 -14 145 130 155 348 24 723 177 941 384 41 39 76 70 78 71 2 0 37 -32 78 -70z" />{" "}
              <path d="M1161 2234 c-39 -32 -40 -70 -6 -148 14 -31 25 -62 25 -69 -1 -7 -25 -29 -56 -50 -48 -34 -117 -108 -143 -154 -8 -14 -16 -13 -75 10 -83 34 -125 35 -154 4 -26 -27 -29 -82 -8 -113 8 -11 47 -33 86 -49 l71 -29 -7 -50 c-6 -44 -6 -128 -1 -230 2 -27 -3 -31 -58 -54 -81 -32 -105 -56 -105 -104 0 -48 35 -88 77 -88 15 0 58 14 96 29 l67 29 29 -41 c30 -44 119 -131 161 -158 l24 -16 -27 -69 c-15 -38 -27 -82 -27 -97 0 -39 41 -77 82 -77 49 0 72 21 103 97 l28 68 157 0 157 0 28 -68 c31 -76 54 -97 103 -97 41 0 82 38 82 77 0 15 -12 59 -27 97 l-27 69 24 16 c42 27 131 114 161 158 l29 41 67 -29 c38 -15 81 -29 96 -29 42 0 77 40 77 88 0 48 -24 72 -105 104 -55 23 -60 27 -58 54 5 102 5 186 -1 230 l-7 50 70 28 c39 15 78 37 86 49 23 33 19 90 -8 115 -31 29 -72 28 -153 -5 -58 -23 -68 -24 -75 -11 -25 45 -103 128 -148 159 -28 18 -51 39 -51 46 0 7 11 38 25 69 34 78 33 116 -6 148 -60 51 -113 23 -158 -84 -24 -57 -30 -65 -52 -62 -13 1 -71 3 -129 3 -58 0 -116 -2 -129 -3 -22 -3 -28 5 -52 62 -45 107 -98 135 -158 84z m438 -325 c234 -54 386 -299 327 -528 -57 -224 -274 -369 -493 -331 -238 41 -405 267 -366 494 29 172 142 306 300 356 64 21 165 25 232 9z" />{" "}
            </g>{" "}
          </svg>
          <span className="m-2" />
          Ransomware DSS
        </a>
        {isLoggedIn ? (
          <ul className="menu-horizontal p-0">
            <li>
              <a href="/signup" className="btn btn-ghost rounded-full m-2">
                Dashboard
              </a>
            </li>

            <li>
              <a href="/signup" className="btn btn-ghost rounded-full m-2">
                Assessment
              </a>
            </li>

            <li>
              <a href="/" className="btn btn-ghost rounded-full m-2">
                User Statistics
              </a>
            </li>
            <li>
              <a href="/" className="btn btn-ghost rounded-full m-2">
                Current CVEs
              </a>
            </li>
          </ul>
        ) : (
          false
        )}
      </div>
      <div className="ml-20" />
      <div className="flex-none">
        {!isLoggedIn ? (
          <ul className="menu-horizontal p-0">
            <li>
              <a href="/dashboard" className="btn btn-ghost rounded-full mr-2">
                Log In
              </a>
            </li>
            <li>
              <a href="/signup" className="btn text-white rounded-full">
                Sign Up
              </a>
            </li>{" "}
          </ul>
        ) : (
          false
        )}

        {
          // ------------------------------- //}
        }

        {isLoggedIn ? (
          <ul className="menu-horizontal p-0">
            <li>
              <a href="/" className="btn text-white rounded-full">
                Log Out
              </a>
            </li>
          </ul>
        ) : (
          false
        )}
      </div>
    </div>
  );
};

export default Nav;
