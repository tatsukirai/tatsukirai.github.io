const USERNAME = "HTravas";
const RYM_BASE = "https://rateyourmusic.com/collection";

const form = document.getElementById("searchForm");
const filter = document.getElementById("filter");
const query = document.getElementById("query");


const yearButton = document.getElementById("yearButton");
const yearButton2 = document.getElementById("yearButton2");
const yearButton3 = document.getElementById("yearButton3");
const yearButton4 = document.getElementById("yearButton4");
const yearButton5 = document.getElementById("yearButton5");
const yearButton6 = document.getElementById("yearButton6");
const yearButton7 = document.getElementById("yearButton7");
const yearButton8 = document.getElementById("yearButton8");
const collection =
document.getElementById("collection");

function updateButtons() {
  const isYear = filter.value === "strm_relyear,ss.rd";
  const isAlbum = filter.value === "strm_l";

  query.placeholder = "";

yearButton.hidden = !isYear;
  yearButton2.hidden = !isYear;
  yearButton3.hidden = !isYear;
  yearButton4.hidden = !isYear;
  yearButton5.hidden = !isYear;
  yearButton6.hidden = !isYear;
  yearButton7.hidden = !isYear;
  yearButton8.hidden = !isYear;

  collection.hidden = !isAlbum;
}


filter.addEventListener("change", updateButtons);

updateButtons();


yearButton.addEventListener("click", () => {
  window.open("https://rateyourmusic.com/collection/HTravas/strm_relyear/1950s/1","_blank", "noopener,noreferrer");
});

yearButton2.addEventListener("click", () => {
  window.open("https://rateyourmusic.com/collection/HTravas/strm_relyear/1960s/1", "noopener,noreferrer");
});

yearButton3.addEventListener("click", () => {
  window.open("https://rateyourmusic.com/collection/HTravas/strm_relyear/1970s/1", "noopener,noreferrer");
});

yearButton4.addEventListener("click", () => {
  window.open("https://rateyourmusic.com/collection/HTravas/strm_relyear/1980s/1", "noopener,noreferrer");
});

yearButton5.addEventListener("click", () => {
  window.open("https://rateyourmusic.com/collection/HTravas/strm_relyear/1990s/1", "noopener,noreferrer");
});

yearButton6.addEventListener("click", () => {
  window.open("https://rateyourmusic.com/collection/HTravas/strm_relyear/2000s/1", "noopener,noreferrer");
});

yearButton7.addEventListener("click", () => {
  window.open("https://rateyourmusic.com/collection/HTravas/strm_relyear/2010s/1", "noopener,noreferrer");
});

yearButton8.addEventListener("click", () => {
  window.open("https://rateyourmusic.com/collection/HTravas/strm_relyear/2020s/1", "noopener,noreferrer");
});

collection.addEventListener("click", () => {
  window.open(
    "https://rateyourmusic.com/collection/HTravas/d.rp,aat,albjh,o,g,ts,aat,n100,ss.rd",
    "_blank",
    "noopener,noreferrer"
  );
});


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = query.value.trim();

  if (!value) {
    query.focus();
    status.textContent = "empty search query";
    return;
  }

  const variable = filter.value;
  const encodedValue = encodeURIComponent(value);

  // O /1 é dispensável no RYM, portanto não o adicionamos.
  const url = `${RYM_BASE}/${encodeURIComponent(USERNAME)}/${variable}/${encodedValue}`;

  // Abre em uma nova aba e mantém o site atual aberto.
  window.open(url, "_blank", "noopener,noreferrer");
});
