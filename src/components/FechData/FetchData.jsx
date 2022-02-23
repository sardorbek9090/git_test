import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchData(props) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/1`)
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((error) => {
        setLoading(false);
        setPost({});
        setError("Somthing went wrong");
      });
  }, []);

  return (
    <div>
      {loading ? "Loding" : post.title}
      {error ? error : null}
    </div>
  );
}

export default FetchData;
