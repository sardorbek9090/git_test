import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "somthing went wrong",
      };
    default:
      return state;
  }
};



function FetchData2(props) {

    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(() => {
       axios
          .get(`https://jsonplaceholder.typicode.com/posts/1`)
          .then((res) => {
            dispatch({type:"FETCH_SUCCESS" , payload:res.data})
          })
          .catch((error) => {
           dispatch({type: "FETCH_ERROR"})
          });
      }, []);


  return <div>
      {state.loading ? "Loding" : state.post.title}
      {state.error ? state.error : null}
  </div>;
}

export default FetchData2;
