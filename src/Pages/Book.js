import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Book = () => {
  const { id } = useParams(); // parametry z url
  const obj = useOutletContext();

  return (
    <div>
      Book {id} {obj.hello}
    </div>
  );
};

export default Book;
