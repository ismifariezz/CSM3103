
   $(function() {
      $.ajax({
         url: 'https://kerbau.odaje.biz/getstaff.php',
         method: 'GET',
         dataType: 'json',
         success: function(data) {
            if (data && data.length > 0) {
               var $list = $('ul');
               $.each(data, function(index, employee) {
                  var $li = $('<li></li>');
                  $li.text(employee.employeeNumber);
                  $list.append($li);

                  $li = $('<li></li>');
                  $li.text(employee.firstName);
                  $list.append($li);

                  $li = $('<li></li>');
                  $li.text(employee.lastName);
                  $list.append($li);

                  $li = $('<li></li>');
                  $li.text(employee.officeCode);
                  $list.append($li);

                  $li = $('<li></li>');
                  $li.text(employee.extension);
                  $list.append($li);

                  $li = $('<li></li>');
                  $li.text(employee.email);
                  $list.append($li);

                  $li = $('<li></li>');
                  $li.text(employee.jobTitle);
                  $list.append($li);

                  $li = $('<li></li>');
                  $li.text(employee.reportsTo);
                  $list.append($li);
               });
            } else {
               console.log('No data found.');
            }
         },
         error: function(xhr, status, error) {
            console.error(status + ': ' + error);
         }
      });
   });

