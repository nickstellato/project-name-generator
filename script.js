randomNumber = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

getMountain = () => {
  return "mountain";
};

getAdverb = () => {
  fetch("https://api.datamuse.com/words?rel_jjb=mountain")
    .then(response => {
      return response.json();
    })
    .then(json => {
      const max = json.length;
      const random = randomNumber(max);
      return json[random].word;
    })
    .catch(error => {
      console.error(error);
    });
};

generateProjectName = () => {
  const adverb = getAdverb();
  console.log(adverb);
  const mountain = getMountain();
  const name = document.querySelector(".name");
  projectName = `${adverb} ${mountain}`;
  name.innerText = projectName;
};

const button = document.querySelector(".btn");

button.addEventListener("click", generateProjectName, false);
