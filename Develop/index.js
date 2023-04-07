const inquirer = require("inquirer");
const fs = require("fs");

const readMeDoc = ({
  projectTitle,
  motivation,
  purpose,
  solve,
  learn,
  installation,
  usage,
  credits,
  license,
  gitname,
  email,
}) => {
  return `

    # ${projectTitle}

    ## Description

    ${motivation}
    ${purpose}
    ${solve}
    ${learn}

    ## Table of Contents
    
    -[Installation](#installation)
    -[Usage](#usage)
    -[Credits](#credits)
    -[License](#license)

    ## Installation

    ${installation}

    ## Usage

    ${usage}

    ## Credit

    ${credits}

    ## License

    This project uses the ${license} license. Please refer to [https://choosealicense.com/](https://choosealicense.com/).

    ## Questions

    You can see my GitHub Profile at https://github.com/${gitname}.

    You can reach me at my email: ${email}
    `;
};

inquirer
  .prompt([
    {
      type: "input",
      name: "project",
      message: "What is your name?",
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      name: "stack",
      choices: ["HTML", "CSS", "JavaScript", "MySQL"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      name: "contact",
      choices: ["email", "phone", "telekinesis"],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, "\t"), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
