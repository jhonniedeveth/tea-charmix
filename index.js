const { onboardDeveloper, registerProject, receiveTokens } = require('tea-demo-arsen');

console.log("Global Tea Culture Exploration Project Initialization...");

const developerInfo = {
    name: "Cultural Explorer Charlie",
    email: "charlie@teaculturecharm.com"
};

const projectInfo = {
    name: "Charms of Tea: A Cultural Journey",
    repositoryUrl: "https://github.com/charliecharm/tea-culture-journey"
};

const walletAddress = onboardDeveloper(developerInfo);
const projectId = registerProject(projectInfo);
receiveTokens(projectId);

console.log("Tea Culture Project setup completed.");
