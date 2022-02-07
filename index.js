const inquirer = require('inquirer');
const pageGenerator = require("generate-page.js");

// lib modules
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



// Questions
const questions = async () => {
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
          message: "What is your email?",
          name: "email",
        },
        {
          type: "list",
          message: "What is your role?",
          name: "role",
          choices: ["Engineer", "Intern", "Manager"],
        },
      ])
  
  
        // if manager selected, answer these specific question
        if (answers.role === "Manager") {
          const managerAns = await inquirer
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
              managerAns.officeNumber
            );
            newStaffMemberData.push(newManager);
            
          // if engineer selected answer these set of questions
        } else if (answers.role === "Engineer") {
          const githubAns = await inquirer
            .prompt([
              {
                type: "input",
                message: "What is your GitHub user name?",
                name: "github",
              }
            ])
              const newEngineer = new Engineer(
                answers.name,
                answers.id,
                answers.email,
                githubAns.github
              );
              newStaffMemberData.push(newEngineer);
            
          // if intern selected answer these set of questions
        } else if (answers.role === "Intern") {
          const internAns = await inquirer
            .prompt([
              {
                type: "input",
                message: "What university did you attend?",
                name: "school",
              },
            ])
            
            const newIntern = new Intern(
              answers.name,
              answers.id,
              answers.email,
              internAns.school
            );
            newStaffMemberData.push(newIntern);          
        } 
  
  }; //end of questions function



