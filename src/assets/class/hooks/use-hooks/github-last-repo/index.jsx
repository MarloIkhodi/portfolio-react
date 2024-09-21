import { useState, useEffect } from "react";

export default function GitHubLastRepo() {
  const [lastRepo, setLastRepo] = useState("");
  const [repoUrl, setRepoUrl] = useState("");

  useEffect(() => {
    fetch(
      "https://api.github.com/users/MarloIkhodi/repos?sort=updated&per_page=1"
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setLastRepo(data[0].name);
          setRepoUrl(data[0].html_url);
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar o repositório:", error);
      });
  }, []);

  return (
    <div>
      {repoUrl ? (
        <a href={repoUrl} target="_blank">
          <p>&nbsp;{lastRepo}</p>
        </a>
      ) : (
        <a href="https://github.com/MarloIkhodi" target="_blank">
          <p>MarloIkhodi</p>
        </a>
      )}
    </div>
  );
}
