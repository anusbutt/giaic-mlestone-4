var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
// function to generate the resume
function generateResume(data) {
    return "\n     <h2>Generated Resume</h2>\n      <p><Strong>Name:</strong>  ".concat(data.name, "  </p>\n\n      <p><Strong>Email:</strong>  ").concat(data.email, "  </p>\n\n      <p><Strong>Phone:</strong>  ").concat(data.phone, "  </p>\n\n\n      <p ><Strong>Education:</strong> ").concat(data.education, "</p>\n\n\n      <p><Strong>Experience:</strong> ").concat(data.experience, "</p>\n\n\n      <p><Strong>Skills:</strong> ").concat(data.skills, "</p>\n\n\n      <p><Strong>Description:</strong> ").concat(data.description, "</p>\n\n      <button id=\"editresume\" >Edit Button</button>\n      \n  ");
}
if (resumeForm && resumeOutput) {
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var description = document.getElementById('description').value;
        resumeOutput.innerHTML = generateResume({
            name: name,
            email: email,
            phone: phone,
            education: education,
            experience: experience,
            skills: skills,
            description: description
        });
        var editButton = document.getElementById('editresume');
        if (editButton) {
            editButton.addEventListener('click', function () {
                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                document.getElementById('phone').value = phone;
                document.getElementById('education').value = education;
                document.getElementById('experience').value = experience;
                document.getElementById('skills').value = skills;
                document.getElementById('description').value = description;
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    });
}
else {
    console.log('Required elements not found');
}
