import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐": "Smiling Face with Smiling Eyes",
  "๐": "Slightly Smiling Face",
  "๐": "Squinting Face with Tongue",
  "๐ค": "Money-Mouth Face",
  "๐ค": "Hugging Face",
  "๐คญ": "Face with Hand Over Mouth",
  "๐คซ": "Shushing Face",
  "๐ค": "Thinking Face",
  "๐คช": "Zany Face",
  "๐ค": "Zipper-Mouth Face",
  "๐คจ": "Face with Raised Eyebrow",
  "๐": "Neutral Face",
  "๐": "Expressionless Face",
  "๐ถ": "Face Without Mouth",
  "๐ซโ": "Tired Face",
  "๐": "Smirking Face",
  "๐": "Unamused Face",
  "๐": "Face with Rolling Eyes"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function userInputHandler(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      var meaning = emojiDictionary[userInput];
    } else {
      var meaning = "Sorry We don't have that in our DataBase";
    }
    setMeaning(meaning);
  }

  function userClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Pedia</h1>
      <input
        onChange={userInputHandler}
        placeholder="Search emoji here or click on the provided  emojis to know meaning"
      />
      <div
        style={{ fontStyle: "italic", fontSize: "2rem", fontWeight: "bold" }}
      >
        {meaning}
      </div>

      <h2 style={{ fontSize: "small" }}>
        Click on the below Emojis to know their Meaning
      </h2>
      {emojisWeKnow.map((item) => {
        return (
          <span
            onClick={() => userClickHandler(item)}
            style={{ fontSize: "5rem", padding: "1rem", cursor: "pointer" }}
            keys={item}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
