/* Because this is loaded at the bottom, I don't have to use $(document).ready(); */

/* Populate chart */
$.getJSON("https://www.joshuapack.com/ally/data/code-test.json", function(data) {
  /* Sort by earnings highest to lowest */
  data = data.sort(function(a, b) {
    var x = a['earnings']; var y = b['earnings'];
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  });
  /* import data into table */
  $.each(data, function(key, value){
    var URBank = '';
    if (value.name == 'URBank') URBank = ' class="URBank"';
    $('#chart tbody').append('<tr'+URBank+'><td>'+value.name+'</td><td>'+value.apy+' %</td><td>$'+value.earnings+'</td></tr>');
  });
});

/* Tab Controller */
// hide all tab-content
$('.tab-content').hide();
// show default tab-content
$('[for="tab1"]').show();
$('.tab-mode li').click(function() {
  var tabId = $(this).attr('id');
  // hide all tab-content
  $(this).parent().parent().find('.tab-content').hide();
  // show selected tab-content
  $(this).parent().parent().find('[for="'+tabId+'"]').show();
  // remove active from all
  $(this).parent().find('li').removeClass('active');
  // add active to clicked
  $(this).addClass('active');
});

/* Modal */
$('.login-button').click(function() {
  $('.login-modal').fadeIn();
});
$('.login-modal .close').click(function() {
  $('.login-modal').fadeOut();
});

/* Menu Toggle */
$('#menuicon').click(function() {
  $('body > header nav').toggle();
});
/* if resizing the window, which most people won't do. */
$( window ).resize(function() {
  console.log($( window ).width());
  if ($( window ).width() >= 981 ) {
    $('body > header nav').show();
  } else {
    $('body > header nav').hide();
  }
});
