getMountain = () => {
  // find an API to use to randomly select a mountain range
  return "Alps";
};

getAdverb = () => {
  // url = "https://api.datamuse.com/words?rel_jjb=mountain";
  // XMLHttpRequest;
  return "Real";
};

generateProjectName = () => {
  console.log("Clicked");
  const mountain = getMountain();
  const adverb = getAdverb();
  const name = document.querySelector(".name");
  projectName = `${adverb} ${mountain}`;
  name.innerHTML = projectName;
};

const button = document.querySelector(".btn");

button.addEventListener("click", generateProjectName, false);
