var scrambleMsg = function (string){
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
