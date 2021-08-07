import "./styles.css";
import React, { useState } from "react";

var AnimalDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🙉": "Hear-No-Evil Monkey",
  "🙊": "Speak-No-Evil Monkey",
  "🐵": "Monkey Face",
  "🦍": "Gorilla",
  "🦧": "Orangutan",
  "🐶": "Dog Face",
  "🦁": "Lion",
  "🐯": "Tiger Face",
  "🦒": "Giraffe"
};

var animalEmoji = Object.keys(AnimalDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function onChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = AnimalDictionary[userInput];
    if (meaning === undefined) {
      meaning = "This animal emoji is not in our database";
    }

    setMeaning(meaning);
  }
  function onClickHandler(emoji) {
    var userInput = AnimalDictionary[emoji];
    setMeaning(userInput);
  }
  return (
    <div className="App">
      <h1>Welcome To Anmimal Kingdom</h1>
      <input onChange={onChangeHandler} />
      <div className="meaning">{meaning}</div>
      {animalEmoji.map(function (emoji) {
        return (
          <span
            className="span"
            onClick={() => onClickHandler(emoji)}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
