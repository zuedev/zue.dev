document.addEventListener("DOMContentLoaded", () =>
  setInterval(updateSpotifyWidget, 1000)
);

async function updateSpotifyWidget() {
  let widget = document.getElementById("zd_spotify_widget");

  if (!widget) {
    widget = document.createElement("div");

    widget.id = "zd_spotify_widget";

    widget.style.display = "none";
    widget.style.position = "fixed";
    widget.style.bottom = "-70px";
    widget.style.right = "0";
    widget.style.margin = "10px";
    widget.style.zIndex = "1";

    if (window.innerWidth >= 1000 && window.innerHeight >= 800)
      widget.style.display = "block";

    const body = document.querySelector("body");
    body.appendChild(widget);
  }

  const response = await fetch("https://api.zue.dev/zuedev/spotify");

  const { playing, id } = await response.json();

  // if the same song is playing, don't update
  if (widget.dataset.zd_spotify_id === id) return;

  if (playing) {
    widget.innerHTML = `<iframe src="https://open.spotify.com/embed/track/${id}" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  } else {
    widget.innerHTML = ``;
  }

  widget.dataset.zd_spotify_id = id;
}
