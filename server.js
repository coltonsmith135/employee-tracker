const inquirer = require('inquirer')
const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Star2324!',
        database: 'company_db'
    },
    console.log('connected to the database')
)

const mainCommand = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'start',

            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ]).then(answers => {
        switch(answers.start) {

            case 'View All Employees':
                viewEmployees();
                break;
    
            case 'Add Employee':
                createEmployee();
                break;
    
            case 'Update Employee Role':
                updateEmployeeRole();
                break;
    
            case 'View All Roles':
                viewRoles();
                break;
    
            case 'Add Role':
                createRole();
                break;
    
            case 'View All Departments':
                viewDepartments();
                break;
    
            case 'Add Department':
                createDepartment();
                break;
        }
    })
    
    
    
}

function createDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the department?',
            name: 'department'
        },

    ])
}

 function createEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employees first name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is the employees last name?',
            name: 'last'
        },
        {
            type: 'list',
            message: 'What is the employees role?',
            name: 'role',

            choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service']
        },
        {
            type: 'list',
            message: 'Who is the employees manager?',
            name: 'manager',

            choices: ['Colton Smith', 'Nathan Henderson', 'Natasha Amber', 'Mikey Swagg', 'Scot Smith']
        }
    ])
}

function createRole() {
    inquirer.prompt([
        {
            type:'input',
            message:'What is the name of the role?',
            name:'newRole'
        },
        {
            type:'input',
            message:'What is the salary of the role?',
            name:'salary'
        },
        {
            type:'list',
            message:'Which department does the role belong to?',
            name:'owner',

            choices: ['Engineering', 'Finance', 'Legal', 'Sales']
        },
        
    ]).then(answers => {
        const role = {
            title: answers.newRole,
            salary: answers.salary,
            department_id: answers.owner
        }
        console.log(role)
    })
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'Which employee role would you like to update',
            name: 'employeeRole'
        }
    ])
}

function viewEmployees() {
    db.promise().query('SELECT * FROM employee')
        .then(([rows]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => db.end());
}

function viewRoles() {
    db.promise().query('SELECT * FROM role')
        .then(([rows]) => {
            console.table(rows);
        })
        .catch(console.log)
        .then(() => db.end());
}

function viewDepartments() {
    db.query('SELECT * FROM department', (err, result) => {
        if(err) {
            console.log(err)
        } else {
            console.table(result)
            mainCommand();
        }
    })
        
}

mainCommand();