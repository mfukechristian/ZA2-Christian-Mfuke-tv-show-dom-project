//Retrieve the JSON
const rootContainer = document.querySelector("#root");

fetch("https://api.tvmaze.com/shows/82/episodes")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((episode) => {
      //create episode container
      const episodeContainer = document.createElement("div");
      const episodeNameContainer = document.createElement("div");
      const episodeName = document.createElement("h3");
      const episodeContentContainer = document.createElement("div");
      const episodeImg = document.createElement("img");
      const episodeDescription = document.createElement("div");

      //add class to each container
      episodeContainer.className = "episode-container";
      episodeNameContainer.className = "episode-name-container";
      episodeName.className = "episode-name";
      episodeContentContainer.className = "episode-content-container";
      episodeImg.className = "episode-img";
      episodeDescription.className = "episode-description";

      console.log(episodeContentContainer);
      //add content
      episodeName.innerHTML = episode.name;
      episodeImg.src = episode.image.medium;
      episodeDescription.innerHTML = episode.summary;

      //append element
      episodeNameContainer.appendChild(episodeName);
      episodeContentContainer.append(episodeImg, episodeDescription);
      episodeContainer.append(episodeName, episodeContentContainer);
      rootContainer.append(episodeContainer);
    });
  })
  .catch((err) => {
    console.error(err);
  });
