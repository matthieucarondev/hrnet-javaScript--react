import store from '../store/store.js';
import { addEmployee } from './employeesReducer.js'; 
import { departments, states } from '../data/data.js';

const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)].value;

const exampleEmployees = [
    { firstName: 'John', lastName: 'Doe', startDate: '2021-01-01', department: getRandomItem(departments), dateOfBirth: '1990-01-01', street: '123 Main St', city: 'New York', state: getRandomItem(states), zipCode: '10001' },
    { firstName: 'Jane', lastName: 'Smith', startDate: '2021-02-01', department: getRandomItem(departments), dateOfBirth: '1991-02-01', street: '456 Elm St', city: 'Los Angeles', state: getRandomItem(states), zipCode: '90001' },
    { firstName: 'Michael', lastName: 'Johnson', startDate: '2021-03-01', department: getRandomItem(departments), dateOfBirth: '1992-03-01', street: '789 Oak St', city: 'Chicago', state: getRandomItem(states), zipCode: '60001' },
    { firstName: 'Emily', lastName: 'Davis', startDate: '2021-04-01', department: getRandomItem(departments), dateOfBirth: '1993-04-01', street: '101 Pine St', city: 'Houston', state: getRandomItem(states), zipCode: '77001' },
    { firstName: 'William', lastName: 'Brown', startDate: '2021-05-01', department: getRandomItem(departments), dateOfBirth: '1994-05-01', street: '202 Maple St', city: 'Phoenix', state: getRandomItem(states), zipCode: '85001' },
    { firstName: 'Jessica', lastName: 'Wilson', startDate: '2021-06-01', department: getRandomItem(departments), dateOfBirth: '1995-06-01', street: '303 Cedar St', city: 'Philadelphia', state: getRandomItem(states), zipCode: '19019' },
    { firstName: 'David', lastName: 'Martinez', startDate: '2021-07-01', department: getRandomItem(departments), dateOfBirth: '1996-07-01', street: '404 Birch St', city: 'San Antonio', state: getRandomItem(states), zipCode: '78201' },
    { firstName: 'Sarah', lastName: 'Lee', startDate: '2021-08-01', department: getRandomItem(departments), dateOfBirth: '1997-08-01', street: '505 Walnut St', city: 'San Diego', state: getRandomItem(states), zipCode: '92101' },
    { firstName: 'Robert', lastName: 'Clark', startDate: '2021-09-01', department: getRandomItem(departments), dateOfBirth: '1998-09-01', street: '606 Spruce St', city: 'Dallas', state: getRandomItem(states), zipCode: '75201' },
    { firstName: 'Laura', lastName: 'Lewis', startDate: '2021-10-01', department: getRandomItem(departments), dateOfBirth: '1999-10-01', street: '707 Redwood St', city: 'San Jose', state: getRandomItem(states), zipCode: '95101' }
  ];

  exampleEmployees.forEach(employee => {
    store.dispatch(addEmployee(employee));
  });