#!/usr/bin/env node

var path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');
const CHOICES = fs.readdirSync(`${__dirname}/templates`);
const Handlebars = require('handlebars');

const QUESTIONS = [
  {
    name: 'boilerplate-choice',
    type: 'list',
    message: 'What template whould you like to generate?',
    choices: CHOICES
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Component/Page name:',
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return 'Components or Pages name may only include letters, numbers, underscores and hashes.';
    }
  }
];


inquirer.prompt(QUESTIONS)
  .then(answers => {
    const projectChoice = answers['boilerplate-choice'];
    const projectName = answers['project-name'];
    const templatePath = `${__dirname}/templates/${projectChoice}`;
    const projectPath = projectChoice === 'component' ? '/../components/' : '/../pages/';

    fs.mkdirSync(`${__dirname}${projectPath}${projectName}`);

    createDirectoryContents(templatePath, projectName, projectChoice);
});

function createDirectoryContents (templatePath, projectName, projectChoice) {
  const filesToCreate = fs.readdirSync(templatePath);
  const projectPath = projectChoice === 'component' ? '/../components/' : '/../pages/';

  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;
    const ext = path.extname(origFilePath);
    const stats = fs.statSync(origFilePath);

    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      const template = Handlebars.compile(contents);
      let writePath = `${__dirname}${projectPath}${projectName}/${projectName}${ext}`;
      if(ext === '.scss') {
        writePath = `${__dirname}${projectPath}${projectName}/_${projectName}${ext}`;
      }
      fs.writeFileSync(writePath, template({component: projectName}), 'utf8');
      
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${__dirname}${projectPath}${projectName}/${file}`);
      
      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${projectName}/${file}`);
    }
  });
}