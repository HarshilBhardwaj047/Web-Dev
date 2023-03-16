const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// This function removes the "active" class from all panels
const removeActiveClasses = () => {
  // `panels` is a collection of DOM elements, and we're using the
  // `forEach()` method to iterate over each element in the collection

  panels.forEach((panel) => panel.classList.remove("active"));
  // The `panel` argument represents each element in the `panels`
  // collection. We're calling the `remove()` method on each `panel`
  // element to remove the "active" class.
};
