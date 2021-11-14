const inquirer = require('inquirer');
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username',
            validate: ghUserNameInput => {
                if (ghUserNameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                }
            }
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:'
        }
    ]);
};


const promptProject = portfolioData => {
    console.log(`
        =================
        Add a New Project
        =================
`);
    //If there are no 'projects' array property, create one. This will create an array of different projects that you enter information for as long as the "Would you like to add another project is answered 'true.'"
    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }     
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project?',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter a name for your GitHub project!');
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript','HTML','CSS','ES6','jQuery','Bootstrap','Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: ghLink => {
                if (ghLink) {
                    return true;
                } else {
                    console.log('Please enter the link to your GitHub repository!');
                }
            }
        },
        {
            type: 'confirm',
            name: 'feature',
            message: 'Would you like to feature this project?',
            default: false
        },
        {
            type: 'confirm',
            name: 'confirmAddProject',
            message: 'Would you like to enter another project?',
            default: false
        }
    ])
    .then(projectData => {
        portfolioData.projects.push(projectData);
        if (projectData.confirmAddProject) {
            return promptProject(portfolioData);
        } else {
            return portfolioData;
        }
    });;
};
promptUser()
    .then(promptProject)
    .then(portfolioData => {
        console.log(portfolioData);
    });
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
// const pageHTML = generatePage(name, github);


// fs.writeFile('index.html', generatePage(name, github), err => {
//     if(err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!')
// });

// Code from Module 9.1
// const printProfileData = profileDataArr => {
//     //This...
//     for (let i=0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('============');

//     //is the same as this...
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });
// };

// printProfileData(profileDataArgs);