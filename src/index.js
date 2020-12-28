//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const hour = date.getHours();

// To create a variable use let than var
let dayGreeting;
// let customStyle;
const customStyle = {
  color: ""
};

if (hour <= "12") {
  dayGreeting = "Good Moring!";
  // customStyle = { color: "red" };
  customStyle.color = "red";
} else if (hour > "12" && hour <= "18") {
  dayGreeting = "Good Afternoon!";
  // customStyle = { color: "green" };
  customStyle.color = "green";
} else {
  dayGreeting = "Good Evening!";
  // customStyle = { color: "blue" };
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    {dayGreeting + " The time is :" + hour}
  </h1>,
  document.getElementById("root")
);
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
