var scrambleMsg = function (string){
  var msg = string.replace(/ /g,'');
  msg = msg.toLowerCase();
  var encMsg = "";
  var length = Math.sqrt(msg.length);
  for (var x = 0; x < length; x++){
    for (var y = 0; y < length; y++){//length will need to be height
      encMsg += msg[x+length*y];
    }
  }
  return encMsg;
};

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#message").val();

    var output = scrambleMsg(input);
    $("#output").text(output);
  });

});
