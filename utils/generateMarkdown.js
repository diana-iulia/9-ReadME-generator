// TODO: Create a function to generate markdown for README
function renderProject(project) {
    return `#${project}
    ---
    `
  };
  
  function renderProjectInfo(projectinfo) {
    return `##About: ${projectinfo}
    ---
    `
  };
  // ?? how to link??
  function renderTOC(license) {
    if(license) {
      return `Table of Contents
      ---
      1.[[#contact-info]]
      2.[[#install-command]]
      3.[[#test-command]]
      4.[[#qna]]
      5.[[#contribute]]
      6.[[#license]]
      ---
      `
    } else {
      return `Table of Contents
      ---
      1.[[#contact-info]]
      2.[[#install-command]]
      3.[[#test-command]]
      4.[[#qna]]
      5.[[#contribute]]
      ---
      `
    } 
  };
  
  
  function renderLicenseBadge(license) {
    if (license === "MIT") {
      return `# [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`;
  
    } else if (license === "Apache") {
      return `# [![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  
    } else { 
      return ``;
    }
  };
  
  function renderLicenseSection(license) {
    if (license === "MIT") {
      return `
      ---
      # License: ${license}
      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      ---`
  } else if (license === "Apache") {
      return `
      ---
      # License
      ${license}
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
      You may obtain a copy of the License at
  
      http://www.apache.org/licenses/LICENSE-2.0
  
      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      ---`
      } 
    else { 
      return `
      ---
      #License
      The developer chose to not add any licenses.
      ---`
    }
  };
  
  function renderContact(username, email) {
    return `---
    ##Contact Info
    Find this user at github.com/${username} or send them an email at ${email}`
  };
  
  
  function renderInstallCmd(installcmd) {
    return `
    ---
    #Install Command: ${installcmd}
    `
  };
  
  function renderTestCmd(testcmd) {
    return `#Test Command: ${testcmd}
    ---`
  };
  
  function renderQNA(qna) {
    return `#qna
    The authors would also like you to know:
    ${qna}
    ---`
  };
  
  function renderContribute(username, email) {
    return `#Contribute:
    Wanna smash bugs with us? 
    Let ${username} know by sending an email to ${email}. 
    Thank you for checking out our project!!<3`
  };
  
  function generateMarkdown(data) {
    return ` 
    ${renderProject(data.project)}
    ${renderProjectInfo(data.projectinfo)}
    ${renderLicenseBadge(data.license)}
    ${renderTOC(data.license)}
    ${renderContact(data.username, data.email)}
    ${renderInstallCmd(data.installcmd)}
    ${renderTestCmd(data.testcmd)}
    ${renderQNA(data.qna)}
    ${renderContribute(data.username, data.email)}
    ${renderLicenseSection(data.license)}
  
  `;
  };
  
  module.exports = generateMarkdown;
  