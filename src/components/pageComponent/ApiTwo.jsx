import React from "react";
import { useQuery } from "react-query";

function ApiTwo() {
  // API call function

  // First repository query
  const repOne = useQuery(
    [
      "gitpage",
      "https://api.github.com/repos/mani2206/wave_animation-Reactjs-",
    ],
    apicall
  );

  // Second repository query
  const repTwo = useQuery(
    [
      "gitpage",
      "https://api.github.com/repos/mani2206/wave_animation-Reactjs-",
    ],
    apicall
  );

  const repThree = useQuery(
    [
      "gitpage",
      "https://api.github.com/repos/mani2206/wave_animation-Reactjs-",
    ],
    apicall
  );

  function apicall({ queryKey }) {
    return fetch(queryKey[1]).then((res) => res.json());
  }

  // Handle loading state
  if (repOne.isLoading || repTwo.isLoading || repThree.isLoading) {
    return <h6>Loading...</h6>;
  }

  // Handle error state
  if (repOne.error || repTwo.error || repThree.error) {
    return (
      <div>
        <h6>An error occurred:{error}</h6>
      </div>
    );
  }

  // Render both repositories' data
  return (
    <>
      <div>
        <h5>Repo Name: {repOne.data.name}</h5>
        <h6>Repo Visibility: {repOne.data.visibility}</h6>
        <h6>Repo Watchers: {repOne.data.watchers}</h6>
        <h6>
          Repo URL: <a href={repOne.data.html_url}>{repOne.data.html_url}</a>
        </h6>
      </div>

      <div>
        <h5>Repo Name: {repTwo.data.name}</h5>
        <h6>Repo Visibility: {repTwo.data.visibility}</h6>
        <h6>Repo Watchers: {repTwo.data.watchers}</h6>
        <h6>
          Repo URL: <a href={repTwo.data.html_url}>{repTwo.data.html_url}</a>
        </h6>
      </div>

      <div>
        <h5>Repo Name: {repThree.data.name}</h5>
        <h6>Repo Visibility: {repThree.data.visibility}</h6>
        <h6>Repo Watchers: {repThree.data.watchers}</h6>
        <h6>
          Repo URL: <a href={repThree.data.html_url}>{repTwo.data.html_url}</a>
        </h6>
      </div>
    </>
  );
}

export default ApiTwo;
