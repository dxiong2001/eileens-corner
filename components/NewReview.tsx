import React from "react";
import { FormEvent, useState } from "react";
import Image, { StaticImageData } from "next/image";

export default function NewReview() {
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Genre, setGenre] = useState("");
  const [Review, setReview] = useState("");
  function updateTitle(e: any) {
    setTitle(e);
  }
  function updateDate(e: any) {
    setDate(e);
  }
  function updateGenre(e: any) {
    setGenre(e);
  }
  function updateReview(e: any) {
    setReview(e);
  }

  async function dbUpdate(e: {
    title: string;
    date: string;
    genre: string;
    review: string;
  }) {
    try {
      let response = await fetch("http://localhost:3000/api/addReview", {
        method: "POST",
        body: JSON.stringify(e),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
    } catch (errorMessage: any) {}
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newReviewJSON = {
      title: Title,
      date: Date,
      genre: Genre,
      review: Review,
    };
    await dbUpdate(newReviewJSON);
    console.log(newReviewJSON);
    location.reload();
    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   body: formData,
    // });

    // // Handle response if necessary
    // const data = await response.json();
    // // ...
  }
  return (
    <section id="Review" className="white">
      <form className="red" onSubmit={onSubmit}>
        <label id="title">Title</label>
        <br />
        <input
          type="text"
          id="title_input"
          name="title_input"
          onChange={(e) => {
            updateTitle(e.target.value);
          }}
        />
        <br />
        <label id="date">Date Watched</label>
        <br />
        <input
          type="text"
          id="date_input"
          name="date_input"
          onChange={(e) => {
            updateDate(e.target.value);
          }}
        />
        <br />
        <label id="genre">Genre</label>
        <br />
        <input
          type="text"
          id="genre_input"
          name="genre_input"
          onChange={(e) => {
            updateGenre(e.target.value);
          }}
        />
        <br />
        <textarea
          id="review-text"
          placeholder="Write your review for the anime here!"
          onChange={(e) => {
            updateReview(e.target.value);
          }}
        ></textarea>
        <br />
        <button className="submit-review">Submit</button>
      </form>
    </section>
  );
}

type Props = {
  title: string;
  icon: string | StaticImageData;
  description: string;
  projects: number;
};
