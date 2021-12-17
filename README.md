## The purpose of this page 


```
The users are concerned about protecting their sensitive data, so the page is created to randomly generate passwords between 8 to 128 characters, including special characters and numbers. 
```
## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
## The steps I took in figuring what codes to write 
First, I console.log, ensuring the "function generatePassword" was working. 
When I console.log, I was given an undefine response. 
Next Step, I analyzed the acceptance criteria step by Step as I wrote my codes. 
I used the Javascript file to make all the changes to meet the acceptance criteria. 

## Writing my codes
Created variables in the Javascript 
I used "if statement" to execute if a statement is true or false.  
I also use querySelector to assign code for the HTML file. 
I use the "for statement" to create a loop to execute.

## Creating a repository
I went into my GitHub account and created a new repository named "many-passwords"
Then I uploaded all my files, such as readme, HTML, and CSS.

![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

