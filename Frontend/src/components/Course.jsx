import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("https://bookstore-ns0o.onrender.com/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-16 items-center justify-center text-center">
          <h1 className="text-2xl pt-20 md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :) </span>
          </h1>
          <p className="mt-12">
          At Bookstore, we offer a variety of engaging courses tailored to enrich your reading experience. From literature analysis to creative writing workshops, our courses cater to all skill levels. Learn from industry experts, connect with fellow book lovers, and gain valuable insights that will elevate your literary journey. Enroll today and take the first step toward expanding your knowledge!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
