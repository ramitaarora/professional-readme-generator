// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  }
  if (license === 'APACHE 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  }
  if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  }
  if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]';
  }
  if (license === 'None') {
    return '';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';
  }
  if (license === 'APACHE 2.0') {
    return '(https://opensource.org/licenses/Apache-2.0)';
  }
  if (license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license === 'BSD 3') {
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  }
  if (license === 'None') {
    return '';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## <a name="license">License</a>
  This project is licensed under the ${license} license.`;
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)

  ## <a name="installation">Installation</a>
  To install or access this project, please use the following command:
  <code>${data.installation}</code>

  ## <a name="usage">Usage</a>
  ${data.usage}

  ${data.license? renderLicenseSection(data.license) : ''}

  ## <a name="credits">Credits</a>
  This project was created by ${data.credits}.

  ## <a name="tests">Tests</a>
  To test this project, please use the following command:
  <code>${data.tests}</code>

  ## <a name="questions">Questions</a>
  Please contact me with any questions at:

  ${data.email} or ${data.github}
`;
}

module.exports = generateMarkdown;
