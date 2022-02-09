import React from "react";

function Footer(props) {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
        <button className="link link-hover">About</button>
        <button className="link link-hover">Contact</button>
      </div>
      <div></div>
      <div>
        <p>Copyright © 2022 - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
