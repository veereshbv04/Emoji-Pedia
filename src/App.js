import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "🙂": "Slightly Smiling Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤪": "Zany Face",
  "😝": "Squinting Face with Tongue",
  "🤑": "Money-Mouth Face",
  "🤗": "Hugging Face",
  "🤭": "Face with Hand Over Mouth",
  "🤫": "Shushing Face",
  "🤔": "Thinking Face",
  "🤐": "Zipper-Mouth Face",
  "🤨": "Face with Raised Eyebrow",
  "😐": "Neutral Face",
  "😑": "Expressionless Face",
  "😶": "Face Without Mouth",
  "😶‍": "Face in Clouds",
  "😏": "Smirking Face",
  "😒": "Unamused Face",
  "🙄": "Face with Rolling Eyes"
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
        placeholder="Search emoji here or click on the provide  emojis to know meaning"
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
