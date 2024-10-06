import React from "react";
import { Link } from "react-router-dom";

const Tags = () => {
  const styles = {
    categoryBtn:
      "text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2 md:py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
  };
  return (
    <ul className='mx-4 mt-6 flex items-center overflow-x-scroll pl-4 capitalize text-white md:mx-0  md:flex-wrap md:overflow-auto lg:justify-center lg:pl-0'>
      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/music"}>Music</Link>{" "}
      </li>

      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/knowledge"}>Knowledge</Link>{" "}
      </li>

      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/dance"}>Dance</Link>{" "}
      </li>

      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/lifestyle"}>Lifestyle</Link>{" "}
      </li>

      <li className={`${styles.categoryBtn}`}>
        <Link to={"/category/entertainment"}>Entertainment</Link>{" "}
      </li>
    </ul>
  );
};

export default Tags;
