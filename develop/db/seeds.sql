INSERT INTO department (department_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO  role (title, salary, department_id) 
VALUES ('Sales Lead', 70000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Chelsea', 'Bonnet', 1, 1),
       ('Zack', 'Majors', 2, 2),
       ('Keifer', 'Peters', 3, 3);

