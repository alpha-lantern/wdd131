const selection = document.querySelector("#product");
const form = document.querySelector("form");

// keys: id / name / averagerating
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

localStorage.setItem('successful-submit', false);

// Display options
products.forEach((product) => {
  const option = document.createElement("option");
  
  option.textContent = product.name;
  option.setAttribute("name", product.name);
  option.setAttribute("id", product.id);

  selection.appendChild(option);
});

form.addEventListener('submit', async () => {
  localStorage.setItem('successful-submit', 1);
});