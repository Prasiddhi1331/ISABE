(function ($) { // Begin jQuery
  $(function () { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.dropdown-content').toggle();
      // Close one dropdown when selecting another
      $('.dropdown-content').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function () {
      $('.dropdown-content').hide();
    });
    // Toggle open and close nav styles on click
    $('.toggle-btn').click(function () {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('.toggle-btn').on('click', function () {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery