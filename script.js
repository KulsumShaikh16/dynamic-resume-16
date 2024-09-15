// Getting form and output div elements
var resumeForm = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
var profileInput = document.querySelector('input[type="file"]');
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var summary = document.getElementById('summary').value;
    var education = document.getElementById('education').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var gradDate = document.getElementById('date').value;
    var experience = document.getElementById('experience').value;
    var jobTitle = document.getElementById('job-title').value;
    var company = document.getElementById('company').value;
    var dates = document.getElementById('dates').value;
    var skills = document.getElementById('skills').value;
    // Check if the profile picture is selected
    var file = profileInput.files ? profileInput.files[0] : null;
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imageUrl = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Dynamically creating the resume HTML with the profile picture
            var resumeHTML = "\n        <h2><center>Resume</center></h2>\n        <center> <img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; height: 150px; border-radius: 50%;\"></center>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> ").concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Summary</h3>\n        <p>").concat(summary, "</p>\n        <h3>Education</h3>\n        <p><strong>Degree:</strong> ").concat(degree, "</p>\n        <p><strong>School:</strong> ").concat(school, "</p>\n        <p><strong>Graduation Date:</strong> ").concat(gradDate, "</p>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p><strong>Job Title:</strong> ").concat(jobTitle, "</p>\n        <p><strong>Company:</strong> ").concat(company, "</p>\n        <p><strong>Dates:</strong> ").concat(dates, "</p>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n      ");
            // Inject the resume HTML into the resumeOutput div
            resumeOutput.innerHTML = resumeHTML;
        };
        // Read the selected file as a data URL
        reader.readAsDataURL(file);
    }
});
