$(document).ready(function() {
  $("#add").on("click", function(e) {
    e.preventDefault()
    var val = Number($("#Num1").val())
    var value = Number($("#Num2").val())

    $("#answer").val(val + value)
  })
  $("#subtract").on("click", function(e) {
    e.preventDefault()
    var val = Number($("#Num1").val())
    var value = Number($("#Num2").val())

    $("#answer").val(val - value)
  })
  $("#multiply").on("click", function(e) {
    e.preventDefault()
    var val = Number($("#Num1").val())
    var value = Number($("#Num2").val())

    $("#answer").val(val * value)
  })
  $("#divide").on("click", function(e) {
    e.preventDefault()
    var val = Number($("#Num1").val())
    var value = Number($("#Num2").val())

    $("#answer").val(val / value)
  })
})
