const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = " © Amaya Davis" + thisYear;
footer.appendChild(copyright);

const skills = ["JavaScript", "HTML", "Python", "DOM", "CSS", "GitHub"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

fetch("https://api.github.com/users/giddydavis1020/repos")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    const repositories = data;
    console.log(repositories);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {

    const project = document.createElement("li"); 

    project.innerText = repositories[i].name;

    projectList.appendChild(project);
}

})
.catch(function(error) {
    console.error("Failed to load repositories:", error);
});

