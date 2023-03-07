# Purple - Automation case study

## Task 1
The first task sounds to me like Exploratory Testing of web form to which I do no not have Requirement tickets.
That is the reason why I used Xray Exploratory Testing app.
I've read the documentation and I believe it's OK to use this app on this case study.
As far as I understand this app is free to use.

I've divided testing into two separated time-boxed testing sessions for 15 minutes each.
I've played a little bit with the form and based on these sessions then I created Scenarios for the next tasks.
You can find the output from these sessions in the directory `Task 1` placed in root directory of this repository.

## Task 2
I've selected Gherking language as human readable and standardized way how to describe Test Cases.
Feature file is stored in the `cypress/e2e` directory.

## Task 3
I had very limited for my solution. That's the reason why I automated only two test cases.
I've used page object (stored in `cypress/support/pageObjects` directory).
Usually the page objects method are not such small and in real world they will become more complex and that's OK.

I would suggest to add "automation id". In the most cases I've used standard id, but id can change.
I think having automation id where do you need is best practice.
I would use something like `data-qa` or `data-automation` as a attribute name.

### How to run it?
1. First you need to install all dependencies: `npm i`
2. If you want to open Cypress windows you can do it by `npm run cy:open`
3. If you want to run tests in CI you can use command `npm run cy:run`

### Problems found during automation implementation
I've found several problems during automation. Here is the brief list
* Page itself throws javascript error what should be fixed. At least it breaks the automation and workaround to silent this failure must be introduced. 
* I've chosen `faker` library for providing random testing data and if I use Japanese localization the form is not able to accept special Japanese symbols, because there is pattern checking in the source code not accepting these symbols.
* Some valid emails are not accepted by the form e.g.: `Prince_Mitchell71@gmail.com`. The problem is again not very good regexp in the source code for this field counting only with small letters. There could be for instance digits, capital letters or underscore in the valid email address. Again workaround in the automated scenario must be done.

## Task 4
This was the most interesting part for me because I've never heard about `intercept()` functionality in Cypress framework.
This is really cool feature and I am more than happy that I was able to play with it for few minutes.
I can see this could be very useful.
The result of playing is stored in `cypress/e2e/task4.cy.js` file.
