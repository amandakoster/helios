'use strict';

  $('#start-button').click(function() {
  let $app = $('#app');
  $('main').empty();
  getDate();
  getLocation();
  // getDataByCoordinates();
  // app.Render.BC(targetData);
  // app.sunView.translateBC(app.Render.angles[0].angle);
});
