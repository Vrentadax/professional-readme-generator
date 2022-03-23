// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderBadge = license => {
  if(license === 'None') {
      return ' ';
  } 

  return `
![image](https://img.shields.io/badge/license-${license.replace('-', '--')}-brightgreen)
`;
};

const renderLicense = license => {
  if(license === 'None') {
      return '';
  } 

  let licenseDescription;

  switch(license) {
    case 'Apache 2.0':
        licenseDescription = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
        break;
      case 'GNU GPLv3':
          licenseDescription = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
          break;
      case 'MIT':
          licenseDescription = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
      case 'Unlicense':
          licenseDescription = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';
          break;
  }

  return `
## License
[https://choosealicense.com/licenses/${license.toLowerCase()}](https://choosealicense.com/licenses/${license.toLowerCase()})
${licenseDescription}
`;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](license)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ![Screenshot](./assets/images/Screenshot.png)
  ##License
  ${data.license}
  ##Contributing
  ${data.contributing}
  ##Tests
  ${data.tests}
  ##Questions
  If you have any qestions for me you can reach me here:
  Github: https://${data.github}.github.io/
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
