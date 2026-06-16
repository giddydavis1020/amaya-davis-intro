/* Footer year */
const today = new Date();
const thisYear = today.getFullYear();

const footer = document.querySelector("footer");
const copyright = document.createElement("p");

copyright.innerHTML = " © Amaya Davis" + thisYear;
footer.appendChild(copyright);

/* Skills list */
const skills = ["JavaScript", "HTML", "Python", "DOM", "CSS", "GitHub"];
const skillsSection = document.querySelector("#skills");
const skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

/* GitHub projects fetch */
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

/* Message form handling */
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(name, email, message);

    const messageSection = document.getElementById("messages");
    const messageList = document.querySelector("#messages ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto:${email}">${name}</a>
    <span>${message}</span>
`;

const removeButton = document.createElement("button");
removeButton.innerText = "remove";
removeButton.type = "button";

removeButton.addEventListener("click", function () {
    const entry = removeButton.parentNode;
    entry.remove();

});

newMessage.appendChild(removeButton);

messageList.appendChild(newMessage);

    event.target.reset();

});
