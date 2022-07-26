// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    const badge = {
      Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
    }
    if (license) {  
      return badge[license];
    } else {
      return '';
    }; 
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    const links = {
      Apache: 'https://opensource.org/licenses/Apache-2.0',
      GNUGPLv3: 'https://www.gnu.org/licenses/gpl-3.0',
      MIT: 'https://opensource.org/licenses/MIT',
      ISC: 'https://opensource.org/licenses/ISC',
      Mozilla: 'https://opensource.org/licenses/MPL-2.0'
    }
    if (license) {
      return links[license];
    } else {
      return '';
    };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
      return `Licensed under the <a href='${renderLicenseLink(license)}'>${license}</a> license.`;
    } else {
      return '';
    };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Project Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Collaboration](#collaboration)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Collaboration
  ${data.collaborate}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  * Github username: <a href='https://github.com/${data.github}'>${data.github}</a>
  * E-mail address: ${data.email} </br>
    Please feel free to e-mail me with any questions.
`;
}


module.exports = generateMarkdown;
