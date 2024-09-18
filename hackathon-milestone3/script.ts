document.getElementById('resumeForm')?.addEventListener('submit', (e: Event) => {
        e.preventDefault(); // Prevent form from submitting
    
        // Get form data
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    
        // Generate resume output
        const resumeOutput = `
            <h2>${name}'s Resume</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
    
        // Display generated resume
        const outputElement = document.getElementById('resumeOutput');
        if (outputElement) {
            outputElement.innerHTML = resumeOutput;
        }
    });
    
    