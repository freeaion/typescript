import { TodoItem } from "./todoItem"
import { TodoCollection } from "./todoCollection"
import * as inquirer from 'inquirer';

let todos = [
  new TodoItem(1, "Buy flowers"), new TodoItem(2, "Get shoes"),
  new TodoItem(3, "Collect tickets"), new TodoItem(4, "call joe", true)];

let collection = new TodoCollection("Adam", todos);

function displayToList(): void {
  console.log(`${collection.userName}'s Todo List`
    + `(${collection.getItemCounts().incomplete} items to do)`);
  collection.getTodoItems(true).forEach(item => item.printDetails());
}

enum Commands {
  Quit = "Quit"
}

function promptUser(): void {
  console.clear();
  displayToList();
  inquirer.prompt({
    type: "list",
    name: "command",
    message: "Choose option",
    choices: Object.values(Commands),
  }).then(answers => {
    if (answers["command"] !== Commands.Quit) {
      promptUser();
    }
  });
}

promptUser();
