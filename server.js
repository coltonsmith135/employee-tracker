const inquirer = require('inquirer')
const express = require('express')
const mysql = require('mysql2')

const app = express()

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Star2324!',
        database:''
},
console.log('connected to the database')
)

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

            choices: [salesLead, salesPerson, leadEngineer, softwareEngineer, accountManager, accountant, legalTeamLead, lawyer, customerService]
        },
        {
            type:'list',
            message:'Who is the employees manager?',
            name:'manager',

            choices: [colton-smith, nathan-henderson, natasha-amber, mikey-swagg, scot-smith]
        }
    ])
}