// DEPENDENCIES
// req inquirer
const inquirer = require('inquirer');




// inquirer prompts
//list: post, bid or exit
//prompt 
function mainPrompt() {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "mainStep",
        message: "Would you like to post or bid?",
        choices: ["Post an item", "Bid on an item", "Exit"],
      },
    ])
    .then((answers) => {
      console.log(answers);
      if (answers.mainStep === "Post an item") {
        postItem();
      } else if (answers.mainStep === "Bid on an item") {
        bidItem();
      } else {
        endConnection();
      }
    })
    .catch((error) => {
      console.log(error);
      mainPrompt();
    });
}


// post prompt 
  //what to post?  item name
  //what category
  // price

// bid prompt
  //choose from items avai for bid
  //price
    // reject if lower than posted
    // if higher, success!



module.exports = ("prompts.js")