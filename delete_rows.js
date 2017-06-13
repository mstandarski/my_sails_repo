(function() {


$.get("http://localhost:1337/user", function(data) {
  $.each(data, function(index, value) {
//this will grab on to the table tag I have in my HTML and build rows and data cells as needed
//this is the same method used to build my marvel page
    $('#table').append('<tr> <td>' + value.card_name + '</td><td>' + value.bank + '</td><td>' + value.reward + '</td><td>' + value.annual_fee + '</td><td>' + value.credit_score_needed + '</td><td>' + value.bonus + '</td><td>' + value.minimum_spend + '</td><td>' + value.rewards_rate + '</td><td><button id="delete" type="button" name="button">Delete!</button></td></tr>')

  })
})
//solution found via https://stackoverflow.com/questions/11553768/remove-table-row-after-clicking-table-row-delete-button
//the below line targets the table and the clicking of the #delete button.
//the next line then deletes the same 'tr' tag that the button sits on
  $('#table').on('click', ('#delete'), function(){
    $(this).closest('tr').remove()
  })



})();
