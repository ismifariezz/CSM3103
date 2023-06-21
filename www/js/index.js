$(function() {
    // Make an AJAX call to retrieve the email data
    $.ajax({
       url: 'https://kerbau.odaje.biz/getstaff.php',
       method: 'GET',
       dataType: 'json',
       success: function(data) {
          // Update the email list based on the returned data
          var emailList = $('#email-list');
          emailList.empty();
          for (var i = 0; i < data.length; i++) {
             var email = data[i].email;
             var listItem = $('<li>');
             var emailLink = $('<a>').attr('href', 'secondpage.html?id=' + i).text(email);
             listItem.append(emailLink);
             emailList.append(listItem);
          }
       },
       error: function(xhr, status, error) {
          console.error(status + ': ' + error);
       }
    }
}
