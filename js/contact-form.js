$(document).ready(function () {
    // Handle form submission
    $("#contactForm").submit(function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Gather form data
        var formData = $(this).serialize();

        // Send form data to the server using Ajax
        $.ajax({
            type: "POST",
            url: "path-to-your-server-side-script.php", // Replace with the actual path to your server-side script
            data: formData,
            success: function (response) {
                // Handle success response from the server
                console.log("Form submitted successfully!");
                console.log("Server response:", response);

                // You can add additional logic here, such as displaying a success message to the user.
            },
            error: function (error) {
                // Handle error response from the server
                console.error("Error submitting form:", error);

                // You can add additional error-handling logic here, such as displaying an error message to the user.
            }
        });
    });
});
