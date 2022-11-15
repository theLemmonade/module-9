const inquirer = require('inquirer');
const fs = require('fs');

const generate = ({head, desc, inst, auth, ackn}) =>
`# ${head}

## Description

${desc}

## Getting Started

${inst}

## Authors

${auth}

## Acknowledgments

${ackn}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'head',
      message: 'input the title of the project',
    },
    {
      type: 'input',
      name: 'desc',
      message: 'input a short description of the project',
    },
    {
      type: 'input',
      name: 'inst',
      message: 'input access URL and/or installation instructions for the project',
    },
    {
      type: 'input',
      name: 'auth',
      message: 'input the author of the project',
    },
    {
      type: 'input',
      name: 'ackn',
      message: 'input the any acknolwedges for the project',
    }
  ])
  .then((answers) => {
    const content = generate(answers);

    fs.writeFile('README.md', content, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });