var scrambleMsg = function (string){
  var msg = string.replace(/\W/g,'').toLowerCase();
  
  var encMsg = "";
  var length = Math.floor(Math.sqrt(msg.length));
  var height = Math.ceil(Math.sqrt(msg.length));
  for (var x = 0; x < length; x++){
    for (var y = 0; y < height; y++){//length will need to be height
      if(msg[x+length*y]===undefined){
        break;
      } else {
        encMsg += msg[x+length*y];
      }
    }
  }//regex adds upto 5 of any character, repeated for the entire string// .match returns an array of these matches
  encMsg =(encMsg.match(/.{1,5}/g)).join(" ");
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
