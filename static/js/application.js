$(document).ready(function() {
  $("#login").click(function () {
    /*
      navigator.id.request({ siteName : 'Learn By Hacking'
  								         , returnTo : '/users/new'});
    */
    window.location = "/users/new";
  });
  $("#logout").click(function () {
    /*
  		navigator.id.logout();
    */
  });

// enable alerts
$(".alert").alert();

// enable tooltips
$("a[data-toggle=tooltip]").tooltip();

});

