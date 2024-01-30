// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![${license}](https://img.shields.io/badge/license-${license}-blue.svg)](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    return `[License](https://opensource.org/licenses/${license})`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the [${license} license](${renderLicenseLink(
      license
    )}).`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions) 

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}
${renderLicenseBadge(answers.license)}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.github}
${answers.contact}

`;
}

module.exports = generateMarkdown;
