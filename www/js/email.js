$.ajax({
    url: 'https://kerbau.odaje.biz/getstaff.php',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
       // Update HTML content based on the returned data
       // Modify this part to update the specific elements on your page

       // Example: Update the title
       $('title').text(data.title);

       // Example: Update the navbar brand
       $('.navbar-brand').text(data.navbarBrand);

       // Example: Update the navbar links
       $('.nav.navbar-nav li:eq(0) a').text(data.navbarLinks[0]);
       $('.nav.navbar-nav li:eq(1) a').text(data.navbarLinks[1]);
       // ...

       // Example: Update the footer text
       $('.navbar-fixed-bottom .col-md-12').text(data.footerText);
    },
    error: function(xhr, status, error) {
       console.error(status + ': ' + error);
    }
 });