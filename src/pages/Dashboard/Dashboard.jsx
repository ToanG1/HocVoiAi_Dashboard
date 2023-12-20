import React from "react";
import styles from "./Dashboard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faList,
  faTag,
  faUser,
  faCircleQuestion,
  faMessage,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  return (
    <>
      <div className="center">
        <div className="left">
          <div className="logo">
            <svg viewBox="0 0 200 400" width="100" height="100">
              <path
                d=" M 174.627 77.683 C 173.776 78.815 142.411 133.739 129.968 166.414 C 129.34 168.064 128.78 169.45 128.204 171.119 C 127.727 172.503 127.488 173.714 126.933 175.086 C 126.212 176.871 126.006 177.829 125.667 179.358 C 125.301 181.008 124.477 184.693 124.121 187.63 C 123.856 189.808 123.741 191.662 123.663 193.853 C 123.462 199.472 123.876 204.233 124.636 209.8 C 127.42 230.202 135.691 246.266 147.665 262.895 C 148.73 264.375 149.618 265.639 150.777 267.047 C 152.739 269.432 154.445 271.444 156.857 273.381 C 159.729 275.688 162.496 277.205 165.903 278.596 C 168.996 279.859 171.753 280.586 175.056 281.078 C 178.597 281.605 181.659 281.725 185.216 281.306 C 188.955 280.865 192.024 279.892 195.522 278.517 C 197.728 277.65 199.557 276.802 201.61 275.62 C 204.662 273.863 225.417 262.219 236.258 252.224 C 239.451 249.28 244.212 243.928 244.962 243.452 C 245.712 242.977 264.83 213.834 259.473 198.687 Q 256.513 190.317 211.583 109.026 Q 196.037 82.262 193.522 78.637 C 191.452 75.653 188.937 70.289 183.683 70.278 C 178.429 70.267 175.231 76.89 175.106 76.877 M 236.638 249.594"
                fill-rule="evenodd"
                fill="rgb(219,223,255)"
              ></path>
              <linearGradient
                id="_lgradient_0"
                x1="93.56120204019503%"
                y1="13.017241572786997%"
                x2="89.84577303569424%"
                y2="99.2065293458878%"
              >
                <stop
                  offset="21%"
                  stop-opacity="1"
                  styles={{ stopColor: "rgb(185,193,255)" }}
                ></stop>
                <stop
                  offset="100%"
                  stop-opacity="1"
                  styles={{ stopColor: "rgb(133,158,255)" }}
                ></stop>
                <stop
                  offset="100%"
                  stop-opacity="1"
                  styles={{ stopColor: "rgb(185,193,255)" }}
                ></stop>
              </linearGradient>
              <path
                d=" M 257.964 96.772 C 256.66 97.325 201.992 129.135 174.849 151.174 C 173.478 152.287 172.299 153.205 170.965 154.361 C 169.858 155.319 169.044 156.248 167.877 157.157 C 166.358 158.34 165.7 159.066 164.64 160.219 C 163.496 161.464 160.937 164.24 159.156 166.603 C 157.836 168.354 156.807 169.901 155.641 171.758 C 152.652 176.52 150.624 180.847 148.491 186.045 C 140.676 205.095 139.782 223.141 141.81 243.533 C 141.99 245.347 142.125 246.886 142.422 248.685 C 142.924 251.732 143.393 254.328 144.509 257.213 C 145.838 260.649 147.472 263.349 149.723 266.26 C 151.767 268.902 153.788 270.914 156.4 272.995 C 159.2 275.226 161.798 276.845 165.078 278.284 C 170.601 280.707 175.792 281.319 181.797 281.467 C 194.524 281.78 204.4 276.078 215.486 270.231 C 227.384 263.956 237.187 257.466 245.557 246.856 C 251.368 239.49 255.506 232.649 258.295 223.53 Q 265.443 200.163 271.169 142.865 Q 274.197 111.464 273.837 107.067 C 273.54 103.447 274.053 97.545 269.512 94.902 C 264.971 92.26 258.884 96.388 258.782 96.315 M 211.637 266.477"
                fill-rule="evenodd"
                fill="url(#_lgradient_0)"
              ></path>
            </svg>
          </div>
          <div className="company">
            <div className="company-name">TradeNinja</div>
            <div className="company-description">
              Stock trading app for everyone
            </div>
          </div>
          <div className="navigation">
            <ul>
              <li>
                <i>
                  <FontAwesomeIcon icon={faCompass} />
                </i>
                <span>Page</span>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faList} />
                </i>
                <span>Category</span>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faTag} />
                </i>
                <span>Tag</span>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <span>User</span>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faMessage} />
                </i>
                <span>Message</span>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faCircleQuestion} />
                </i>
                <span>Questions</span>
              </li>
              <li>
                <i>
                  <FontAwesomeIcon icon={faCircleExclamation} />
                </i>
                <span>Warning</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="right">
          <div className="title">Market</div>
          <div className="description">
            Browse stocks that are always available
          </div>
          <div className="row">
            <div className="graph">
              <svg viewBox="0 0 250 60" width="250" height="90">
                <path
                  d="M 209.328 17.34 C 221.956 17.588 235.264 32.599 250 22.328"
                  fill="none"
                  vector-effect="non-scaling-stroke"
                  stroke-width="2"
                  stroke="rgb(243,243,250)"
                  stroke-linejoin="miter"
                  stroke-linecap="round"
                  stroke-miterlimit="3"
                ></path>
                <linearGradient
                  id="_lgradient_1"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop
                    offset="0%"
                    stop-opacity="1"
                    style={{ stopColor: "rgb(111,234,255)" }}
                  ></stop>
                  <stop
                    offset="100%"
                    stop-opacity="1"
                    style={{ stopColor: "rgb(111,234,255)" }}
                  ></stop>
                </linearGradient>
                <path
                  d=" M 0 43.634 C 5.934 43.634 11.318 51.209 17.462 51.342 C 33.219 51.683 30.603 59.567 39.187 59.868 C 46.963 60.141 50.44 44.192 60.537 43.77 C 69.126 43.77 72.129 52.461 79.739 52.433 C 90.904 52.433 94.93 38.455 106.648 39.78 C 129.082 42.317 124.556 27.606 139.157 27.177 C 153.758 26.747 158.235 44.485 171.96 44.725 C 196.438 45.155 189.782 17.1 208.248 17.1"
                  fill="none"
                  vector-effect="non-scaling-stroke"
                  stroke-width="2"
                  stroke="url(#_lgradient_1)"
                  stroke-linejoin="miter"
                  stroke-linecap="round"
                  stroke-miterlimit="3"
                ></path>
                <path
                  d="M 206.649 17.218 C 206.649 15.739 207.85 14.538 209.328 14.538 C 210.807 14.538 212.008 15.739 212.008 17.218 C 212.008 18.696 210.807 19.897 209.328 19.897 C 207.85 19.897 206.649 18.696 206.649 17.218 Z"
                  fill="rgb(111,232,255)"
                ></path>
                <text
                  transform="matrix(1,0,0,1,195,5)"
                  style={{
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    fontSize: "12px",
                    fontStyle: "normal",
                    fill: "#6fe8ff",
                    stroke: "none",
                  }}
                >
                  +14%
                </text>
                <div className="stock">
                  <div className="stock-logo paperpillar">
                    <i className="fa fa-inverse fa-angle-double-up"></i>
                  </div>
                  <div className="stock-info">
                    <div className="stock-name">PPRPLR</div>
                    <div className="stock-fullname">Paperpillar Studio</div>
                  </div>
                </div>
              </svg>
            </div>
            <div className="graph">
              <svg viewBox="0 0 250 60" width="250" height="90">
                <path
                  d="M 209.328 17.34 C 221.956 17.588 235.264 32.599 250 22.328"
                  fill="none"
                  vector-effect="non-scaling-stroke"
                  stroke-width="2"
                  stroke="rgb(243,243,250)"
                  stroke-linejoin="miter"
                  stroke-linecap="round"
                  stroke-miterlimit="3"
                ></path>
                <linearGradient
                  id="_lgradient_2"
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                >
                  <stop
                    offset="0%"
                    stop-opacity="1"
                    styles="stop-color:rgb(248, 135, 129)"
                  ></stop>
                  <stop
                    offset="100%"
                    stop-opacity="1"
                    styles="stop-color:rgb(247, 198, 130)"
                  ></stop>
                </linearGradient>
                <path
                  d=" M 0 43.634 C 5.934 43.634 11.318 51.209 17.462 51.342 C 33.219 51.683 30.603 59.567 39.187 59.868 C 46.963 60.141 50.44 44.192 60.537 43.77 C 69.126 43.77 72.129 52.461 79.739 52.433 C 90.904 52.433 94.93 38.455 106.648 39.78 C 129.082 42.317 124.556 27.606 139.157 27.177 C 153.758 26.747 158.235 44.485 171.96 44.725 C 196.438 45.155 189.782 17.1 208.248 17.1"
                  fill="none"
                  vector-effect="non-scaling-stroke"
                  stroke-width="2"
                  stroke="url(#_lgradient_2)"
                  stroke-linejoin="miter"
                  stroke-linecap="round"
                  stroke-miterlimit="3"
                ></path>
                <path
                  d="M 206.649 17.218 C 206.649 15.739 207.85 14.538 209.328 14.538 C 210.807 14.538 212.008 15.739 212.008 17.218 C 212.008 18.696 210.807 19.897 209.328 19.897 C 207.85 19.897 206.649 18.696 206.649 17.218 Z"
                  fill="rgb(247, 198, 130)"
                ></path>
                <text
                  transform="matrix(1,0,0,1,195,5)"
                  styles={{
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    fontSize: 12,
                    fontStyle: "normal",
                    fill: "rgb(247, 198, 130)",
                    stroke: "none",
                  }}
                >
                  +14%
                </text>
              </svg>
              <div className="stock">
                <div className="stock-logo dandruft">
                  <i className="fa fa-inverse fa-circle-thin"></i>
                </div>
                <div className="stock-info">
                  <div className="stock-name">DDFT</div>
                  <div className="stock-fullname">Dandruft Craft</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row column">
            <div className="sub-title">Goods</div>
            <div className="asset-category">
              <div className="category">
                <div className="asset">
                  <div className="asset-logo">
                    <i className="fa fa-bolt"></i>
                  </div>
                </div>
                <div className="asset-name">Energy</div>
              </div>
              <div className="category">
                <div className="asset">
                  <div className="asset-logo">
                    <i className="fa fa-inbox"></i>
                  </div>
                </div>
                <div className="asset-name">Gold</div>
              </div>
              <div className="category">
                <div className="asset">
                  <div className="asset-logo">
                    <i className="fa fa-clone"></i>
                  </div>
                </div>
                <div className="asset-name">Metals</div>
              </div>
              <div className="category">
                <div className="asset">
                  <div className="asset-logo">
                    <i className="fa fa-pagelines"></i>
                  </div>
                </div>
                <div className="asset-name">Grains</div>
              </div>
              <div className="category">
                <div className="asset">
                  <div className="asset-logo">
                    <i className="fa fa-adjust"></i>
                  </div>
                </div>
                <div className="asset-name">Livestock</div>
              </div>
              <div className="category">
                <div className="asset">
                  <div className="asset-logo">
                    <i className="fa fa-tencent-weibo"></i>
                  </div>
                </div>
                <div className="asset-name">Cotton</div>
              </div>
              <div className="category">
                <div className="asset">
                  <div className="asset-logo">
                    <i className="fa fa-leaf"></i>
                  </div>
                </div>
                <div className="asset-name">Corn</div>
              </div>
              <div className="category">
                <div className="asset">
                  <div className="asset-logo">
                    <i className="fa fa-tint"></i>
                  </div>
                </div>
                <div className="asset-name">Oil</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="half">
              <div className="sub-title">Today Gainers</div>
              <div className="stock">
                <div className="stock-logo apple">
                  <i className="fa fa-inverse fa-apple"></i>
                </div>
                <div className="stock-info">
                  <div className="stock-name">APPL</div>
                  <div className="stock-fullname">Apple Inc.</div>
                </div>
                <div className="stock-value">+14.5%</div>
              </div>
              <div className="stock">
                <div className="stock-logo facebook">
                  <i className="fa fa-inverse fa-facebook"></i>
                </div>
                <div className="stock-info">
                  <div className="stock-name">FB</div>
                  <div className="stock-fullname">Facebook, Inc.</div>
                </div>
                <div className="stock-value">+12.9%</div>
              </div>
              <div className="stock">
                <div className="stock-logo amazon">
                  <i className="fa fa-inverse fa-amazon"></i>
                </div>
                <div className="stock-info">
                  <div className="stock-name">AMZN</div>
                  <div className="stock-fullname">Amazon.com, Inc.</div>
                </div>
                <div className="stock-value">+10.2%</div>
              </div>
            </div>
            <div className="half">
              <div className="sub-title">Popular this week</div>
              <div className="stock">
                <div className="stock-logo twitter">
                  <i className="fa fa-inverse fa-twitter"></i>
                </div>
                <div className="stock-info">
                  <div className="stock-name">TWTR</div>
                  <div className="stock-fullname">Twitter Inc.</div>
                </div>
                <div className="stock-value">+14.5%</div>
              </div>
              <div className="stock">
                <div className="stock-logo paypal">
                  <i className="fa fa-inverse fa-paypal"></i>
                </div>
                <div className="stock-info">
                  <div className="stock-name">PYPL</div>
                  <div className="stock-fullname">Paypal Holdings Inc.</div>
                </div>
                <div className="stock-value">+12.9%</div>
              </div>
              <div className="stock">
                <div className="stock-logo google">
                  <i className="fa fa-inverse fa-google"></i>
                </div>
                <div className="stock-info">
                  <div className="stock-name">GOOGL</div>
                  <div className="stock-fullname">Alphabet Inc.</div>
                </div>
                <div className="stock-value">+10.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
