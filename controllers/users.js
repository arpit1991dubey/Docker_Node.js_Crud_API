import { v4 as uuid } from 'uuid';

let users = [];
export const getUsers =(req, res) => {
    console.log(users)
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;
    const userWithId = { ...user, id: uuid() }
    users.push(userWithId);
    res.send(`User ${user.fistName} succesfully added in the databse`);
};

export const getUser = (req, res) => {
    const { id } = req.params;
    console.log(req.params);
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser)
};

export const deleteUser = (req, res) => {
    users = users.filter((user) => user.id !== req.params.id);
    res.send(users);
};

export const updateUser =  (req, res) => {
    const {id}=req.params;
    const user = users.find((user) => user.id === id);
    const { firstName, lastName, age } = req.body;
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }

    res.send(`User id wih id  ${id} has been updated`)
};