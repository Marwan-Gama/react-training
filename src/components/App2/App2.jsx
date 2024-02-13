import React, { useState, useEffect } from "react";
import "./App2.css";

function App2() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch("https://api.github.com/repositories");
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchRepositories();
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
