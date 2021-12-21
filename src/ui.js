
export function createContainer() {

    const containerDiv = document.createElement('div');
    const todoContainer = document.createElement('div');
    const projectContainer = document.createElement('div');

    // create form to enter new project info

    function newProjectForm() {
        const projectFormDiv = document.createElement('div');
        const form = document.createElement('form');

        // project name

        const projectName = document.createElement('label');
        projectName.innerText = 'name';
        const br1 = document.createElement('br');

        const projectNameInput = document.createElement('input');
        const br2 = document.createElement('br');

    }

    // create form to enter new todo info

    function newTodoForm() {
        const todoFormDiv = document.createElement('div');
        const form = document.createElement('form');

        // title 

        const titleLabel = document.createElement('label');
        titleLabel.innerText = 'title';
        const br1 = document.createElement('br')

        const titleInput = document.createElement('input');
        const br2 = document.createElement('br')




        // description

        const descriptionLabel = document.createElement('label');
        descriptionLabel.innerText = 'description';
        const br3 = document.createElement('br');

        const descriptionInput = document.createElement('input');
        const br4 = document.createElement('br');



        // dueDate

        const dueDateLabel = document.createElement('label');
        dueDateLabel.innerText = 'date';
        const br5 = document.createElement('br');

        const dueDateInput = document.createElement('input');
        const br6 = document.createElement('br');



        // priority

        const priorityLabel = document.createElement('label');
        priorityLabel.innerText = 'priority';
        const br7 = document.createElement('br');

        const prioritySelect = document.createElement('select');

        const priorityOptionHigh = document.createElement('option');
        priorityOptionHigh.innerText = 'high';
        const priorityOptionMed = document.createElement('option');
        priorityOptionMed.innerText = 'medium';
        const priorityOptionLow = document.createElement('option');
        priorityOptionLow.innerText = 'Low';

        prioritySelect.append(priorityOptionHigh, priorityOptionMed, priorityOptionLow);

        const br8 = document.createElement('br');

        // notes

        const notesLabel = document.createElement('label')
        const br9 = document.createElement('br');
        const notesText = document.createElement('textarea');

        notesLabel.innerText = 'notes';

        // submit

        const submitBtn = document.createElement('button');
        submitBtn.innerText = 'Add';


        form.append(titleLabel, br1, titleInput, br2, descriptionLabel, br3, descriptionInput, br4, dueDateLabel, br5, dueDateInput, br6, priorityLabel, br7, prioritySelect, br8, notesLabel, br9, notesText);
        todoFormDiv.append(form, submitBtn)
        todoContainer.appendChild(todoFormDiv);
        console.dir(titleInput);

    };

    // create button to add new project

    function newProjectBtn() {
        const projectBtn = document.createElement('button');

        projectBtn.innerText = 'New Project';

        projectContainer.appendChild(projectBtn);
    }

    // create button to add new todo

    function newTodoBtn() {
        const newBtn = document.createElement('button');

        newBtn.innerText = "New Todo";

        todoContainer.appendChild(newBtn);

    };

    newProjectBtn();

    newTodoBtn();

    newProjectForm();

    newTodoForm();

    containerDiv.append(projectContainer, todoContainer);

    return containerDiv

};


