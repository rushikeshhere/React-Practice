import React from "react";

export default function Eleven(props) {
  let quote = [
    " Avoid daydreaming about the years to come.",
    "You are the most important person in your whole life.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Always be true to who you are, and ignore what other people have to say about you.",
    "Only demonstrate your strength when it’s really required.",
    "Subscribe to Drop X Out",
  ];

  let newQuotes = Math.floor(Math.random() * quote.length);
  let quotes = quote[newQuotes];

  return <>{quotes}</>;
}
