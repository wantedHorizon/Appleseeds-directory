const todoElement = document.querySelector('.todo-list');
const btnAdd = document.querySelector('.btn-add');



let todosIdCounter = 3;
let todos = [{

        task: 'task1 ',
        done: false,
        id: 0,
        priority: 1,
        created_at: new Date()

    },
    {
        task: 'task2 ',
        done: false,
        id: 1,
        priority: 2,
        created_at: new Date()


    },
    {
        task: 'task3 ',
        done: true,
        id: 2,
        priority: 1,
        created_at: new Date()

    },
];


const createTodo = (t) => {
    const li = document.createElement('li');
    li.classList.add('todo');
    li.id = t.id;

    if (t.done) li.classList.add('done');
    li.innerHTML =
        `
        <input class="check" type="checkbox"  ${t.done ? 'checked' : null} >
        
        <p>${t.task} </p> 
       
       
        <input type="text" class="update" value="${t.task}" hidden>
        <button class="todo__edit">Edit</button>
        <button class="todo__delete">Delete</button> 
        <span> priority:${t.priority} created:${new Date(t.created_at).toLocaleDateString() }  </span>

           `;

    //set events
    li.querySelector('input.check').addEventListener('click', onCheckboxToggle);
    li.querySelector('.todo__delete').addEventListener('click', onDeleteTodoHandler);
    li.querySelector('.todo__edit').addEventListener('click', onUpdateTodoHandler);

    return li;

}

const updateTodosToUI = () => {
    //map todo arr to html elements
    const elements = todos.map(createTodo);
    //add elements to ui
    elements.forEach(li => todoElement.appendChild(li));
}

const getTodosLocal = () => {
    const oldTodos = JSON.parse(localStorage.getItem('todos'));
    if (oldTodos) {
        todos = oldTodos;
    } else {
        updateTodosLocal();
    }
}

const updateTodosLocal = () => {
    localStorage.setItem('todos', JSON.stringify(todos));

}

const sortTodos = () => {

    todos.sort((a, b) => {
        if (a.priority != b.priority) {
            return a.priority - b.priority;
        } else {
            return Date.parse(a.created_at) - Date.parse(b.created_at);
        }
    });
    todos.reverse();

}

//events handlers 
const onUpdateTodoHandler = (e) => {
    const parent = e.target.parentElement;
    const input = parent.querySelector('input.update');
    const p = parent.querySelector('p');

    if (!e.target.hasAttribute('editing')) {
        e.target.textContent = "Update";

    } else {
        e.target.textContent = "Edit";

        p.textContent = input.value;
        const index = todos.findIndex(t => t.id == parent.id);

        if (!isNaN(index)) {
            todos[index].task = input.value;
            updateTodosLocal();
        } else {
            return;
        }

    }

    e.target.toggleAttribute('editing');
    input.toggleAttribute('hidden');
    p.toggleAttribute('hidden');
}

const onAddTodoHandler = (e) => {

    const task = e.target.parentElement.querySelector('input.task').value;
    const p = parseInt(e.target.parentElement.querySelector('input.priority').value);
    if (!task || isNaN(p) || p < 0) {
        return;
    }
    const todo = {
        task: task,
        done: false,
        id: todosIdCounter,
        priority: p,
        created_at: new Date()
    };
    todosIdCounter++;
    todos.push(todo);
    updateTodosLocal();
    todoElement.insertAdjacentElement('afterbegin', createTodo(todo, todos.length - 1));
}

const onDeleteTodoHandler = (e) => {


    const parent = e.target.parentElement;
    const id1 = parseInt(parent.id);
    console.log(id1);
    todos = todos.filter(t => t.id !== id1);
    parent.remove();
    updateTodosLocal();
}

const onCheckboxToggle = (event) => {
    const checkbox = event.target;

    const id = checkbox.parentElement.id;
    const index = todos.findIndex(t => t.id == id);
    todos[index].done = !todos[index].done;
    updateTodosLocal();

    checkbox.toggleAttribute('checked');
    checkbox.parentElement.classList.toggle('done');
}




//main
getTodosLocal();
sortTodos();
todosIdCounter = todos.length;
updateTodosToUI();
btnAdd.addEventListener('click', onAddTodoHandler);