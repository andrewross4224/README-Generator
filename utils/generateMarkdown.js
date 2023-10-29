function License(name, link, badge) {
  this.name = name;
  this.link = link;
  this.badge = badge;
}
const license1 = new License('Apache license 2.0', 'https://opensource.org/licenses/Apache-2.0', 'https://img.shields.io/badge/License-Apache%202.0-blue.svg')
const license2 = new License('BSD 2-clause "Simplified" license', 'https://opensource.org/licenses/BSD-2-Clause', 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg')
const license3 = new License('BSD 3-clause "New" or "Revised" license', 'https://opensource.org/licenses/BSD-3-Clause', 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg')
const license4 = new License('Creative Commons Attribution 4.0', 'https://creativecommons.org/licenses/by/4.0/', 'https://licensebuttons.net/l/by/4.0/80x15.png')
const license5 = new License('Creative Commons Attribution ShareAlike 4.0', 'https://creativecommons.org/licenses/by-nc-sa/4.0/)', 'https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png')
const license6 = new License('Eclipse Public License 1.0', 'https://opensource.org/licenses/EPL-1.0', 'https://img.shields.io/badge/License-EPL%201.0-red.svg')
const license7 = new License('Eclipse Public License 2.0', 'https://opensource.org/license/epl-2-0', 'https://img.shields.io/badge/License-EPL%201.0-red.svg')
const license8 = new License('GNU Affero General Public License v3.0', 'https://www.gnu.org/licenses/agpl-3.0', 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg')
const license9 = new License('GNU General Public License v2.0', 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html', 'https://img.shields.io/badge/License-GPL%20v2-blue.svg')
const license10 = new License('GNU General Public License v3.0', 'https://www.gnu.org/licenses/gpl-3.0', 'https://img.shields.io/badge/License-GPL%20v3-blue.svg')
const license11 = new License('GNU Lesser General Public License v2.1', 'https://www.gnu.org/licenses/lgpl-2.1', 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg')
const license12 = new License('GNU Lesser General Public License v3.0', 'https://www.gnu.org/licenses/lgpl-3.0', 'https://img.shields.io/badge/License-LGPL%20v3-blue.svg')
const license13 = new License('MIT License', 'https://opensource.org/licenses/MIT', 'https://img.shields.io/badge/License-MIT-yellow.svg')
const license14 = new License('Mozilla Public License 2.0', 'https://opensource.org/licenses/MPL-2.0', 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg')
const license15 = new License('zLib License', 'https://opensource.org/licenses/Zlib', 'https://img.shields.io/badge/License-Zlib-lightgrey.svg')
const options = [license1, license2, license3, license4, license5, license6, license7, license8, license9, license10, license11, license12, license13, license14, license15]

// TODO: Create a function that returns the license data
// If there is no license, return an empty string
function renderLicenseData(data) {
  data.licenseLink = ''
  data.licenseBadge = ''
  data.licenseSection = ''
  data.licenseAnchor = ''
  for (const option of options) {
    if (option.name === data.license) {
      data.licenseLink = option.link
      data.licenseBadge = `![alt text](${option.badge})`
      data.licenseSection = `# License
This project is covered under the ${data.license} the link for the license can be found below
`
      data.licenseAnchor = '- [License](#license)'
    }
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const text = `# ${data.title} ${data.licenseBadge}
  # Description
  ${data.description}
  # Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  ${data.licenseAnchor}
  - [Credits](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  # Installation
  ${data.install}
  # Usage
  ${data.usage}
  ${data.licenseSection}
  ${data.licenseLink}
  # Contributing
  ${data.contributors}
  # Tests
  ${data.testing}
  # Questions
  For any questions pertaining to this project or others email me: [${data.email}](https://${data.email})

  You can also find my GitHub account located at: [${data.github}](https://github.com/${data.github})
`;
return text
}

module.exports = {
  generateMarkdown,
  renderLicenseData,
};
