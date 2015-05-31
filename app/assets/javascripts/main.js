
$(function(){
  // var jsonStream = new EventSource('http://api.open-notify.org/iss-now.json')
  // jsonStream.onmessage = function (e) {
  //   var message = JSON.parse(e.data);
  //   alert(data);
  // };

  var ISSapi = "http://api.open-notify.org/iss-now.json";

  $('#iss-btn').on('click', function(){
    $.ajax({
      url: ISSapi,
      dataType: 'jsonp',
      success: function(data){
        $('#lat').html('<h4>Latitude: '+ data['iss_position']['latitude'].toFixed(6) +'</h4>');
        $('#lon').html('<h4>Longitude: '+ data['iss_position']['longitude'].toFixed(6) +'</h4>');
      }
    });
  });

});