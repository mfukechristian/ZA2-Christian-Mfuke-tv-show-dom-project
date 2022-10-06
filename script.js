const url = "https://api.tvmaze.com/shows/82/episodes";
const root = document.querySelector("#root");
const inputValue = document.querySelector(".search");
const listOfEpisode = [];

inputValue.addEventListener("input", (e) => filterData(e.target.value));
getData();
//fetch episodes
async function getData() {
  const res = await fetch(url);
  const data = await res.json();

  data.map((episode) => {
    const card = document.createElement("div");
    card.className = "card";

    listOfEpisode.push(card);

    card.innerHTML = ` <div class="title">
                        <h3>${episode.name}</h3>
                      </div>
                      <div class="content">
                        <img src="${episode.image.medium}" class="cover" alt="" /> //
                        <p class="summary">${episode.summary}</p>
                      </div>`;

    root.appendChild(card);
  });
}

function filterData(searchEpisode) {
  listOfEpisode.filter((filterEpisode) => {
    if (
      filterEpisode.innerHTML
        .toLowerCase()
        .includes(searchEpisode.toLowerCase())
    ) {
      filterEpisode.style.display = "block";
    } else {
      filterEpisode.style.display = "none";
    }
  });
}
