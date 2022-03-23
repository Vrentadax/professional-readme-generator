// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderBadge = license => {
  if (license === 'None') {
    return ' ';
  }

  return `
  ![image](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-brightgreen)
  `;
};

const renderLicense = license => {
  if (license === 'None') {
    return '';
  }

  let licenseDescription;

  switch (license) {
    case 'Apache 2.0':
      licenseDescription = 'A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
    case 'GNU GPLv3':
      licenseDescription = 'Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.';
      break;
    case 'MIT':
      licenseDescription = 'A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
    case 'Unlicensed':
      licenseDescription = 'A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.';
      break;
  }

  return `
  ## License

  [https://choosealicense.com/licenses/${license.toLowerCase().replace(' ', '-')}](https://choosealicense.com/licenses/${license.toLowerCase().replace(' ','-')})

  ${licenseDescription}
  `;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log(data);

  return `
  # ${data.title}

  ${renderBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}


  ${renderLicense(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any qestions for me you can reach me here:

  Github: https://github.com/${data.github}/
  
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
