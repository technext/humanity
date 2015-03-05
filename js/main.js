$('#p1,#p2,#p3,#p4,#p5').click(function(e){
  $('input[name=textinput]').val($(this).text());
});