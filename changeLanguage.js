const dataSelection = document.querySelectorAll("[data-languageSelection]");
dataSelection.forEach((items) => {
  items.addEventListener("change", (e) => {
    dataSelection.forEach((items2) => {
      items2.value = items.value;
      localStorage.setItem("language", `${items.value}`);
      getLang();
    });
  });
});
function getLang() {
  if (localStorage.getItem("language") === "Deutsch") {
    console.log(dataSelection);

    dataSelection.forEach((items) => {
      items.value = "Deutsch";
    });
  } else if (localStorage.getItem("language") === "English") {
    console.log(dataSelection);
    dataSelection.forEach((items) => {
      items.value = "English";
    });
  }
}
getLang();
