(function() {
  async function getRandomWord(url) {
    try {
      let response = await fetch(url, {});
      let json = await response.json();
      let max = json.length;
      return json[Math.floor(Math.random() * Math.floor(max))].word;
    } catch (error) {
      console.error(error);
    }
  }

  async function generateProjectName() {
    try {
      const word1 = await getRandomWord(
        "https://api.datamuse.com/words?topics=color"
      );
      const word2 = await getRandomWord(
        "https://api.datamuse.com/words?topics=topography"
      );
      const name = document.querySelector("#name");
      name.innerHTML = `${word1} ${word2}`;
    } catch (error) {
      console.error(error);
    }
  }

  const button = document.querySelector("#button");
  button.addEventListener("click", generateProjectName);
})();
