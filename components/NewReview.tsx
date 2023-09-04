import React from "react";
import { FormEvent, useState, useRef, useEffect } from "react";
import Loading from "./Loading";
import Image, { StaticImageData } from "next/image";
import ImageUploader from "./ImageUploader";
import axios from "axios";
import { storage } from "../firebase";
import {
  ref as refFireBase,
  uploadBytes,
  listAll,
  getDownloadURL,
} from "firebase/storage";
import { v4 as uuid } from "uuid";

export default function NewReview() {
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Genre, setGenre] = useState("");
  const [Review, setReview] = useState("");
  const [Image, setImage] = useState<File | null>(null);
  const [imageString, setImageString] = useState(
    "https://favim.com/pd/p/orig/2018/10/09/aesthetic-header-writing-Favim.com-6428689.jpg"
  );
  const [showLoading, setShowLoading] = useState(false);
  const [imageList, setImageList] = useState<string[]>([]);
  const [Update, setUpdate] = useState("");

  const ref = useRef<HTMLInputElement>(null);
  const imageListRef = refFireBase(storage, "anime-pictures/");

  async function dbUpdate(e: {
    title: string;
    date: string;
    genre: string;
    review: string;
    imageURL: string;
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
  // useEffect(() => {}, [Update]);
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await setShowLoading(true);
    console.log(showLoading);
    var animImage =
      "https://favim.com/pd/p/orig/2018/10/09/aesthetic-header-writing-Favim.com-6428689.jpg";
    if (Image != null) {
      const imageName = Image.name + uuid();
      console.log("image name:" + imageName);
      const imageRef = refFireBase(storage, `anime-pictures/${imageName}`);
      await uploadBytes(imageRef, Image);

      await listAll(imageListRef).then((response) =>
        response.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            if (url.includes(encodeURIComponent(imageName))) {
              animImage = url;
              console.log("found matching url");
              const newReviewJSON = {
                title: Title,
                date: Date,
                genre: Genre,
                review: Review,
                imageURL: animImage,
              };

              dbUpdate(newReviewJSON).then(() => {
                location.reload();
              });
            }
          });
        })
      );
    } else {
      const newReviewJSON = {
        title: Title,
        date: Date,
        genre: Genre,
        review: Review,
        imageURL: animImage,
      };

      dbUpdate(newReviewJSON);
    }
    // location.reload();

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
      <div className="loading-div">{showLoading ? <Loading /> : null}</div>
      {showLoading ? <div className="loading-background"></div> : null}
      <form className="red new-review-form" onSubmit={onSubmit}>
        <label id="title">Title</label>
        <br />
        <input
          type="text"
          id="title_input"
          name="title_input"
          onChange={(e) => {
            setTitle(e.target.value);
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
            setDate(e.target.value);
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
            setGenre(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          className="upload-input"
          type="file"
          name="files"
          ref={ref}
          accept="image/png, image/gif, image/jpeg"
          multiple
          onChange={(event) => {
            if (!event.target.files) return;
            else {
              setImage(event.target.files[0]);
            }
          }}
        />

        <br />
        <textarea
          id="review-text"
          placeholder="Write your review for the anime here!"
          onChange={(e) => {
            setReview(e.target.value);
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

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}
