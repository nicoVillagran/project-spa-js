export function FormSearch() {
  const d = document,
    $form = d.createElement("form");

  $form.classList.add("form-search");
  $form.innerHTML = `<input type="search" name="search" id="bar-search" placeholder="Search">`;

  if (location.hash.includes("#/Search")) {
    $form.search.value = localStorage.getItem("wpSearch");
  }

  d.addEventListener("search", (e) => {
    if (!e.target.matches('input[type="search"]')) return false;
    if (!e.target.value) localStorage.removeItem("wpSearch");
  });

  d.addEventListener("submit", (e) => {
    if (!e.target.matches(".form-search")) return false;

    e.preventDefault();
    localStorage.setItem("wpSearch", e.target.search.value);
    location.hash = `#/Search?search=${e.target.search.value}`;
  });

  return $form;
}
