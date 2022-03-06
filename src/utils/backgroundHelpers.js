import React from "react";

export const changePattern = (e) => {
  let page_bg = document.getElementById("page_bg");
  page_bg.style.setProperty(
    "background-size",
    `
      ${5 - e.pageX * 0.000001}px ${5 - e.pageY * 0.000001}px
      `
  );
  page_bg.style.setProperty(
    "background-position",
    `
      ${200 - 50 * e.pageX * 0.000005}% ${100 - 50 * e.pageY * 0.000005}%
      `
  );
};

export const changeColor = (e) => {
  let bg = document.getElementById("bg");
  bg.style.setProperty(
    "background-image",
    `radial-gradient(at ${e.pageX * 0.05}% ${
      e.pageY * 0.05
    }%,hsl(347, 93%, 57%) 0, transparent 50%),
      radial-gradient(at ${e.pageX * 0.15}% ${
      e.pageY * 0.15
    }%,rgb(88, 3, 206) 0, transparent 50%),
      radial-gradient(at ${e.pageX * 0.4}% ${
      e.pageY * 0.001
    }%,rgb(165, 253, 240) 0, transparent 50%),
      radial-gradient(at ${e.pageY * 0.01 * e.pageX}% ${
      e.pageX * 0.001
    }%,rgb(88, 3, 206) 0, transparent 50%),
      radial-gradient(at ${e.pageX * 0.11}% ${
      e.pageY * 0.01 * e.pageX
    }%,hsl(347, 93%, 57%) 0, transparent 50%),
      radial-gradient(at ${e.pageY * 0.2}% ${
      e.pageY * 0.15 * e.pageX
    }%,hsl(347, 93%, 57%) 0, transparent 50%)
      `
  );
};
