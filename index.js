const inquirer = require("inquirer");
require("console.table");
const db = require("./db");

menu();

function menu (){
    inquirer.prompt([
        {
            type: "list",
            name: "menuOptions",
            message: "select one of the options",
            choices: [
                {
                    name: "view all depts",
                    value:"view_Dept"  
                },
                {
                    name: "view all roles",
                    value: "view_Roles"
                },
                {
                    name: "view all employees",
                    value: "view_Employees"
                },

                {
                    name: "done",
                    value: "done"
                }
            ]
        }
    ])
    .then((data)=>{
        console.log(data);
        switch(data.menuOptions){
            case "view_Dept":
                viewDept();
                break;
            case "view_Roles":
                viewRole();
                break;
            case "view_Employees":
                viewEmployees();
                break;
            
            default:
                done();
        }
    })
}

function viewDept(){
    console.log("View Dept");
    db.findAllDept()
    .then(([depatrtments]) => {
        console.table(depatrtments)
    })
    .then(() => menu())
}
function viewRole(){
    console.log("View Role")
}
function viewEmployees() {
    console.log("View Emp")
}

function done() {
    console.log("Done");
    process.exit();
}