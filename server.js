const inquirer = require('inquirer')
const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Star2324!',
        database:'company_db'
},
console.log('connected to the database')
)

const mainCommand = () => {
    inquirer.prompt([
        {
            type:'list',
            message:'What would you like to do?',
            name:'start',

            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ])
}

const departmentInfo = () => {
         inquirer.prompt([
            {
                type: 'input',
                message: 'What is the name of the department?',
                name: 'department'
            },
            
         ])
}

const createEmployee = () => {
    inquirer.prompt([
        {
            type:'input',
            message:'What is the employees first name?',
            name: 'name'
        },
        {
            type:'input',
            message:'What is the employees last name?',
            name:'last'
        },
        {
            type:'list',
            message:'What is the employees role?',
            name:'role',

            choices: ['Sales Lead', 'Sales Person', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service']
        },
        {
            type:'list',
            message:'Who is the employees manager?',
            name:'manager',

            choices: ['Colton Smith', 'Nathan Henderson', 'Natasha Amber', 'Mikey Swagg', 'Scot Smith']
        }
    ])
}

const updateEmployee = () => {
   
}