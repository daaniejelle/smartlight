function pie(canvas,context,value){
  context.clearRect(0, 0, canvas.width, canvas.height);
  var height = canvas.height;
  var width = canvas.width;
  var i = 0;
  if(value>=100) value = 100
  var angle = (2*Math.PI)/200;
  var a = angle;
  var d = height/2.2;
  while(i<100){

    context.beginPath();
    context.arc(width/2, height/2, d, a-angle,a);
    context.fillStyle="#10151f"
    context.lineTo(width/2, height/2)
    context.fill();
    i++;
    a+=2*angle;
  }
  i=0;
  a=-Math.PI/2 + angle;
  while(i<value){

    context.beginPath();
    context.arc(width/2, height/2, d, a-angle,a);
    context.fillStyle="#00BCD4"
    context.lineTo(width/2,height/2)
    context.fill();
    i++;
    a+=2*angle;
  }


  context.beginPath();
  context.arc(width/2, height/2, d*0.85, 0, 2*Math.PI);
  context.fillStyle="#141d2d"
  context.fill();
}



function graph(canvas){

  var context = canvas.getContext("2d");
  var width = canvas.width, height = canvas.height;

  if(canvas==document.getElementById("E_graph") || canvas==document.getElementById("C_graph") || canvas==document.getElementById("H_graph")){
    var fillGradient = context.createLinearGradient(0,height,width,height);
    fillGradient.addColorStop(0,"#31414c");
    fillGradient.addColorStop(1,"#263e49");

    var strokeGradient = context.createLinearGradient(0,height,width,height);
    strokeGradient.addColorStop(0,"#80DEEA");
    strokeGradient.addColorStop(1,"#00BCD4");
  }
  else if(canvas==document.getElementById("G_graph") || canvas==document.getElementById("Co_graph")){
    var fillGradient = context.createLinearGradient(0,height,width,height);
    fillGradient.addColorStop(0,"#344443");
    fillGradient.addColorStop(1,"#394441");

    var strokeGradient = context.createLinearGradient(0,height,width,height);
    strokeGradient.addColorStop(0,"#91ff8f");
    strokeGradient.addColorStop(1,"#cbff82");
  }

  var fadeGradient = context.createLinearGradient(0,height,0,0);
  fadeGradient.addColorStop(0,"rgba(20, 29, 45, 1)");
  fadeGradient.addColorStop(0.4,"rgba(20, 29, 45, 0)");

  context.lineWidth = 1;

  var val = height - (height/3 + Math.random()*height/5);

  context.fillStyle=fillGradient;
  context.strokeStyle=strokeGradient;
  context.moveTo(0,val);

  if(canvas==document.getElementById("G_graph") || canvas==document.getElementById("Co_graph")){
    for(var i=0; i<width; i+=width/20){
    context.lineTo(i,val);
      val = height - (height/7 + Math.random()*height/5)
    }
  }
  else {
    for(var i=0; i<width; i+=width/40){
      context.lineTo(i,val+i/5);

      val = height - (height/3 + Math.random()*height/5)
    }
  }

  context.lineTo(width, height);
  context.lineTo(0,height);

  context.fill();
  context.stroke();
  context.fillStyle=fadeGradient;
  context.fill();
}




$(document).ready(function(){
  var percentVal = 80;
  var lightCanvas = this.getElementById("lightCanvas");
  var context = lightCanvas.getContext("2d");
  lightCanvas.height = $("#lightPercentage").height();
  lightCanvas.width = $("#lightPercentage").width();

  pie(lightCanvas,context,percentVal);
  $("#percentageIncrement").click(function(){
    console.log(lightCanvas.height);
    if(percentVal!=100) percentVal++;
    $("#percentageValue").html(percentVal+"%");
    pie(lightCanvas,context, percentVal)
  });
  $("#percentageDecrement").click(function(){
    percentVal--;
    $("#percentageValue").html(percentVal+"%");
    pie(lightCanvas,context, percentVal)
  });
  var C_canvas = this.getElementById("C_graph");
  C_canvas.height = $("#C").height()*0.85;
  C_canvas.width = $("#C").width()*0.95;
  graph(C_canvas);
  var H_canvas = this.getElementById("H_graph");
  H_canvas.height = $("#H").height()*0.85;
  H_canvas.width = $("#H").width()*0.95;
  graph(H_canvas);
  var E_canvas = this.getElementById("E_graph");
  E_canvas.height = $("#electricity").height()*0.85;
  E_canvas.width = $("#electricity").width()*0.95;
  graph(E_canvas);
  var Co_canvas = this.getElementById("Co_graph");
  Co_canvas.height = $("#Co").height()*0.85;
  Co_canvas.width = $("#Co").width()*0.95;
  graph(Co_canvas);

  var temperature = $("#C");
  var humidity = $("#H");
  temperature.on("mouseover", function(e){
    $(".currentWeather").css("top","1%");
    $("#C_graph").css("bottom","1%");
  })
  .on("mouseout",function(){
    $(".currentWeather").css("top",0);
    $("#C_graph").css("bottom",0);
  });
  humidity.on("mouseover", function(e){
    $(".currentHumidity").css("top","1%");
    $("#H_graph").css("bottom","1%");
  })
  .on("mouseout",function(){
    $(".currentHumidity").css("top",0);
    $("#H_graph").css("bottom",0);
  });

});
