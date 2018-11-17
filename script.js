(function() {
  async function getJSON(url) {
    const response = await fetch(url, {});
    const json = await response.json();
    const max = json.length;
    return json[Math.floor(Math.random() * Math.floor(max))].word;
  }

  async function generateProjectName() {
    const word1 = await getJSON("https://api.datamuse.com/words?topics=color");
    const word2 = await getJSON(
      "https://api.datamuse.com/words?topics=topography"
    );
    const name = document.querySelector("#name");
    name.innerHTML = `${word1} ${word2}`;
  }

  const button = document.querySelector("#button");
  button.addEventListener("click", generateProjectName);
})();
