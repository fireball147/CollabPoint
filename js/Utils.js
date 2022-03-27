function testIn() {
  console.log("hovering in sidebar");
}
function testOut() {
  console.log("hovering outside sidebar");
}

function toggleSidebarIn() {
  hoverElements = document.getElementsByClassName("visible-hover");
  for (let element of hoverElements) {
    element.classList.remove("d-none");
  }
  hoverElements = document.getElementsByClassName("accordion-collapse");
  for (let element of hoverElements) {
    element.classList.remove("show");
  }

  hoverElements = document.getElementsByClassName("accordion-button");
  for (let element of hoverElements) {
    element.classList.add("collapsed");
    element.setAttribute("aria-expanded", "false");
  }
  hoverElements = document.querySelectorAll(".accordion-button::after");
  for (let element of hoverElements) {
    element.classList.remove("d-none");
  }

  const psuedoSidebarStyle = document.getElementById("psuedoSidebarStyle");
  psuedoSidebarStyle.remove();

  const sidebarLogo = document.getElementById("sidebarLogo");
  sidebarLogo.style.width = "5vw";
}

function toggleSidebarOut() {
  hoverElements = document.getElementsByClassName("visible-hover");
  for (let element of hoverElements) {
    element.classList.add("d-none");
  }
  hoverElements = document.getElementsByClassName("accordion-collapse");
  for (let element of hoverElements) {
    element.classList.remove("show");
  }

  hoverElements = document.getElementsByClassName("accordion-button");
  for (let element of hoverElements) {
    element.classList.add("collapsed");
  }

  let psuedoStyle = document.createElement("style");
  psuedoStyle.setAttribute("id", "psuedoSidebarStyle");
  psuedoStyle.appendChild(
    document.createTextNode(".accordion-button::after {display: none;}")
  );
  document.getElementById("styleJS").appendChild(psuedoStyle);

  const sidebarLogo = document.getElementById("sidebarLogo");
  sidebarLogo.style.width = "2vw";
}
