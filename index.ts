const resumeForm = document.getElementById('resumeForm') as HTMLInputElement|null;
const resumeOutput = document.getElementById('resumeOutput') as HTMLInputElement|null;

// function to generate the resume
function generateResume (data: {

  name: string,
  email: string,
  phone: string,
  education: string,
  experience: string,
  skills: string,
  description: string
}) {
return `
     <h2>Generated Resume</h2>
      <p><Strong>Name:</strong>  ${data.name}  </p>

      <p><Strong>Email:</strong>  ${data.email}  </p>

      <p><Strong>Phone:</strong>  ${data.phone}  </p>


      <p ><Strong>Education:</strong> ${data.education}</p>


      <p><Strong>Experience:</strong> ${data.experience}</p>


      <p><Strong>Skills:</strong> ${data.skills}</p>


      <p><Strong>Description:</strong> ${data.description}</p>

      <button id="editresume" >Edit Button</button>
      
  `;
}
if (resumeForm && resumeOutput) {
  resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = (document.getElementById('name')as HTMLInputElement).value ;
    const email = (document.getElementById('email')as HTMLInputElement).value;
    const phone = (document.getElementById('phone')as HTMLInputElement).value;
    const education = (document.getElementById('education')as HTMLInputElement).value;
    const experience = (document.getElementById('experience')as HTMLInputElement).value;
    const skills = (document.getElementById('skills')as HTMLInputElement).value;
    const description = (document.getElementById('description')as HTMLInputElement).value;

    resumeOutput.innerHTML = generateResume({
      name,
      email,
      phone,
      education,
      experience,
      skills,
      description
    });
   
const editButton = document.getElementById('editresume')as HTMLInputElement ;
if (editButton) {
 editButton.addEventListener('click', () => {

    (document.getElementById('name') as HTMLInputElement).value= name;
    (document.getElementById('email') as HTMLInputElement).value= email;
    (document.getElementById('phone') as HTMLInputElement).value= phone ;
    (document.getElementById('education') as HTMLInputElement).value= education;
    (document.getElementById('experience') as HTMLInputElement).value= experience;
    (document.getElementById('skills') as HTMLInputElement).value= skills;
    (document.getElementById('description') as HTMLInputElement).value= description;
  
     window.scrollTo({top: 0, behavior:"smooth"});
  });

 }

});

}else{
  console.log('Required elements not found');
 
} 


