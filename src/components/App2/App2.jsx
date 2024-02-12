import React, { useState, useEffect } from "react";
import "./App2.css";

function App2() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repositories")
      .then((response) => response.json())
      .then((data) => setRepos(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="App">
      <h1>GitHub Repos Gallery</h1>
      <div className="repos-container">
        {repos.map((repo) => (
          <div className="repo" key={repo.id}>
            <img src={repo.owner.avatar_url} alt="Avatar" />
            <p>{repo.full_name}</p>
            <a href={repo.html_url}>Visit Repo</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App2;
