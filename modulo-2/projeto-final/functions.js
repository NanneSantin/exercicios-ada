const tasks = require('./database');
const validateString = require('./utils');
let id = 1;

function createTask(title, description) {
    try {
        if (!title || title.trim().length === 0) {
            throw new Error('TITLE field is required.');
        }
        if (title.trim().length < 4) {
            throw new Error('The TITLE field must contain at least 4 characters.');
        }
        if (validateString(title)) {
            throw new Error('The provide TITLE is not a valid value. Must have at least 4 letters.')
        }

        if (!description || description.trim().length === 0) {
            throw new Error('DESCRIPTION field is required.');
        }
        if (description.trim().length < 20) {
            throw new Error('The DESCRIPTION field must contain at least 20 characters.');
        }

        const titleExists = tasks.find((task) => task.title === title);

        if (titleExists) {
            throw new Error('Title is already in use in another task.');
        }

        id++

        tasks.push({ id, title, description });

        return
    } catch (error) {
        console.log(error.message);
    }
}

function updateTask(id, title, description) {
    try {
        if (!id) {
            throw new Error('ID field is required.');
        }

        if (!title || title.trim().length === 0) {
            throw new Error('TITLE field is required.');
        }
        if (title.trim().length < 4) {
            throw new Error('The TITLE field must contain at least 4 characters.');
        }
        if (validateString(title)) {
            throw new Error('The provide TITLE is not a valid value. Must have at least 4 letters.')
        }

        if (!description || description.trim().length === 0) {
            throw new Error('DESCRIPTION field is required.');
        }
        if (description.trim().length < 20) {
            throw new Error('The DESCRIPTION field must contain at least 20 characters.');
        }

        const idExist = tasks.find((task) => task.id === id);

        if (!idExist) {
            throw new Error('ID not found.');
        }

        if (idExist.title !== title) {
            const titleExists = tasks.find((task) => task.title === title);

            if (titleExists) {
                throw new Error('Title is already in use in another task.');
            }
        }

        idExist.title = title;
        idExist.description = description;

        return
    } catch (error) {
        console.log(error.message);
    }
}

function removeTask(id) {
    try {
        if (!id) {
            throw new Error('Provide the ID of the task.');
        }

        const taskPosition = tasks.findIndex((task) => task.id === id);

        if (taskPosition === -1) {
            throw new Error('ID not found.');
        }

        tasks.splice(taskPosition, 1);

        return
    } catch (error) {
        console.log(error.message);
    }
}

function getTasks(id) {
    try {
        if (!id) {
            console.log(tasks);
            return
        }

        const taskFound = tasks.find((task) => task.id === id);

        if (!taskFound) {
            throw new Error('ID not found.');
        }

        console.log(taskFound);
        return;
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    createTask,
    updateTask,
    removeTask,
    getTasks
}