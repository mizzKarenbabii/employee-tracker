DROP DATATBASE IF EXISTS employeetracker;
CREATE DATATBASE employeetracker;

USE employeetracker;

CREATE TABLE department (
    id AUTO_INCREMENT INT PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
    id AUTO_INCREMENT INT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL (10, 2), NOT NULL,
    department_id INT UNSIGNED NOT NULL
   INDEX dept_ind (department_id),
   CONSTRAINT fk_department FOREIGN KEY(department_id) REFERENCES department(id) 
);

CREATE TABLE employee (
    id AUTO_INCREMENT INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT UNSIGNED NOT NULL ,
    INDEX role_ind (role_id) 
    CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES role(id),
    manager_id UNSIGNED INT, 
    INDEX man_ind (manager_id)
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employee(id)
);
