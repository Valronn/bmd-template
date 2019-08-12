$(document).ready(function() {
  $("body").bootstrapMaterialDesign();
  $(".toggler").click(()=>{
    $(".bar-0").toggleClass("change0");
    $(".bar-1").toggleClass("change1");
    $(".bar-2").toggleClass("change2");
  })
  
});