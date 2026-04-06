$(document).ready(function () {

  // Wait until the page has loaded before running the jQuery code.
  // Then listen for clicks on any button with the class "filter-btn".
  $(".filter-btn").click(function() {

    // Get the category stored in the clicked button's data-filter attribute.
    // Example values: "all", "web", "design", "photo", or "video"
    var selectedFilter = $(this).attr("data-filter"); // <-- FIXED typo here

    // Remove the active class from every filter button.
    // This clears the old selected button style.
    $(".filter-btn").removeClass("active");

    // Add the active class to the button that was clicked.
    // This highlights the current choice.
    $(this).addClass("active");

    // If the selected category is "all",
    // hide and then show every card.
    if (selectedFilter === "all") {
      $(".card").hide().fadeIn(250);
    } else {
      // Hide all cards first.
      $(".card").hide();

      // Then show only the cards whose class matches the selected category.
      // Example: if selectedFilter is "photo", this becomes $(".photo")
      $("." + selectedFilter).fadeIn(250);
    }

  });

});