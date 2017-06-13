(function() {


console.log("test");


$.get("http://localhost:1337/user", function(data) {
  $.each(data, function(index, value) {

    $('#table').append('<tr> <td>' + value.card_name + '</td><td>' + value.bank + '</td><td>' + value.reward + '</td><td>' + value.annual_fee + '</td><td>' + value.credit_score_needed + '</td><td>' + value.bonus + '</td><td>' + value.minimum_spend + '</td><td>' + value.rewards_rate + '</td></tr>')

  })
})



})();
