$(document).ready(function() {
  $("body").bootstrapMaterialDesign();
  $(".carousel").carousel({
    interval: 5000,
    pause: false
  });
  $(".toggler").click(()=>{
    $(".bar-0").toggleClass("change0");
    $(".bar-1").toggleClass("change1");
    $(".bar-2").toggleClass("change2");
  })
  
});