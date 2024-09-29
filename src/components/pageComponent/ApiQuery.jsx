import React from "react";
import { useQuery } from "react-query";

export default function ApiQuery() {
  const { isLoading, data, error } = useQuery("githubdata", apiCall);

  async function apiCall() {
    const res = await fetch(
      "https://api.github.com/repos/mani2206/wave_animation-Reactjs-"
    );
    return await res.json();
  }

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  if (error) {
    return <p>An error ocuured {error}</p>;
  }

  console.log(data, "data");

  return (
    <>
      <h5>Repos Name:{data.name}</h5>
      <h6>Repos Visible:{data.visibility}</h6>
      <h6>Repos Watcher:{data.watchers}</h6>
      <h6>Repos url:{data.url}</h6>
    </>
  );
}
