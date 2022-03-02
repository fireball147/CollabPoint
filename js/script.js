window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

function setFrame(e) {
  if (e.target.id === "new_req") {
    document
      .getElementById("main-frame")
      .setAttribute("src", "new_request.html");
  }
  if (e.target.id === "my_req") {
    document
      .getElementById("main-frame")
      .setAttribute("src", "my_request.html");
  }
}
