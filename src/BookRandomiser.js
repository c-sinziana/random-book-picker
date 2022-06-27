import React, { useState } from "react";
import axios from "axios";
import "./style.scss";

function BookRandomiser() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [bookImage, setBookImage] = useState("");
  const [bookDescription, setBookDescription] = useState([]);

  const getBooks = () => {
    axios
      .get("./books.json")
      .then((res) => {
        let randomNum = Math.floor(Math.random() * res.data.length);
        let randomTitle = res.data[randomNum].title;
        let randomAuthor = res.data[randomNum].author;
        let randomBookImage = res.data[randomNum].imageUrl;
        let randomBookDescription = res.data[randomNum].description;
        setTitle(randomTitle);
        setAuthor(randomAuthor);
        setBookImage(randomBookImage);
        setBookDescription(randomBookDescription);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div id="parent">
      <div id="book">
        <button onClick={() => getBooks()} id="new-book">
          Get a new book suggestion!
        </button>
      </div>
      <div id="result">
        {title !== "" && author !== "" ? (
          <div>
            <div id="title"> "{title}" </div>
            <div id="author"> - {author}</div>
          </div>
        ) : null}
        {bookDescription.length !== 0 ? (
          <div id="description">
            {bookDescription.map((currentElement, index) => {
              return <div id={"currentElement" + index}>{currentElement}</div>;
            })}
          </div>
        ) : null}
        {bookImage !== "" ? (
          <div>
            <img id="image" src={bookImage} />
          </div>
        ) : null}
        {title !== "" && author !== "" ? (
          <div id="twitter-share-button">
            <a
              id="share-link"
              href={encodeURI(
                `https://twitter.com/intent/tweet?text=Hey! I just read ${title} by ${author}`
              )}
              target="_blank"
            >
              Share on
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default BookRandomiser;
