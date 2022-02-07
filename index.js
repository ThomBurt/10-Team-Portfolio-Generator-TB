// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./lib/generate-page");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Array for answers to questions
const newStaffMembers = [];

// Array object questions asked in CLI to user
const questions = async () => {

  console.log(`
  ===================================================
              Create a Team Profile
  ===================================================
  `)
  
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
      {
        type: "list",
        message: "What is your role in the company?",
        name: "role",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])


    
    //  console.log(answers);
      // if manager selected, answer these specific question
      if (answers.role === "Manager") {
        const managerResponse = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your office number",
              name: "officeNumber",
            },
          ])
          const newManager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            managerResponse.officeNumber
          );
          newStaffMembers.push(newManager);
          
        // if engineer selected answer these set of questions
      } else if (answers.role === "Engineer") {
        const gitHubResponse = await inquirer
          .prompt([
            {
              type: "input",
              message: "What is your GitHub username?",
              name: "github",
            }
          ])
            const newEngineer = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              gitHubResponse.github
            );
            newStaffMembers.push(newEngineer);
          
        // if intern selected answer these set of questions
      } else if (answers.role === "Intern") {
        const internResponse = await inquirer
          .prompt([
            {
              type: "input",
              message: "What university did you go to?",
              name: "school",
            },
          ])
          
          const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            internResponse.school
          );
          newStaffMembers.push(newIntern);          
      } 

}; //end of questions function

async function promptQuestions() {
  await questions()
    
  
  const addMemberResponse = await inquirer
    .prompt([
      {
        name:'addMember',
        type: 'list',
        choices: ['Add a new member', 'Create your team'],
        message: "What would you like to do next?"
      }
    ])

    if (addMemberResponse.addMember === 'Add a new member') {
      return promptQuestions()
    }
    return createTeam();
}  

promptQuestions();

function createTeam () {
  console.log("new employee", newStaffMembers)
  fs.writeFileSync(
    "./output/index.html",
    generateTeam(newStaffMembers),
    "utf-8",
    console.log('SUCCESS! Your Team Portfolio Has been generated')
  );
}

