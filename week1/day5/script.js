class Task {
    constructor(name, complete) {
        this.name = name;
        this.complete = complete;
    }
    static fromJSON(json) {
        return new Task(json.name, json.complete);
    }
}


class UI {
    constructor() {
        this.form = document.getElementById('form');
        this.name = document.getElementById('taskInput');
        this.tableBody = document.getElementById('tableBody');
        this.addTaskButton = document.getElementById('addTaskButton');
        this.form.addEventListener('submit', (e) => this.onTaskSubmit(e));
        this.tasks = [];
        console.log('check');
        this.loadTasksFromLocalStorage();
        this.renderTaskTable();
    }

    onTaskSubmit(e) {
        e.preventDefault
        console.log('check2');
        if (this.name.value == ''){
            return;
        }
        let initialFalse = false;
        const task = new Task(this.name.value, initialFalse);
        this.tasks.push(task);
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
        this.name.value = '';
    }

    renderTaskTable() {
        this.tableBody.innerHTML = '';
        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];
            console.log("check")
            const tr = this.createTaskTableRow(task);
            this.tableBody.appendChild(tr);
        }
    }

    createTaskTableRow(task) {
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdComplete = document.createElement('td');
        const tdActions = document.createElement('td');

        tdName.innerHTML = task.name;

        const completeButton = this.createCompleteButton(task);
        tdComplete.appendChild(completeButton);

        const deleteButton = this.createDeleteButton(task);
        tdActions.appendChild(deleteButton);

        tr.appendChild(tdName);
        tr.appendChild(tdComplete);
        tr.appendChild(tdActions);

        return tr;
    }

    createCompleteButton(task) {
        const completeButton = document.createElement('button');
        if(task.complete == false){
            completeButton.setAttribute('class', 'btn btn-secondary btn-sm');
            completeButton.innerHTML = "Not Done"
        }
        else{
            completeButton.setAttribute('class', 'btn btn-success btn-sm');
            completeButton.innerHTML = "Done"
        }
        completeButton.addEventListener('click', () => this.onCompleteClicked(task));
      
        return completeButton;
      }

    createDeleteButton(task) {
        const deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'btn btn-danger btn-sm');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () =>
        this.onDeleteClicked(task));
        return deleteButton;
    }

    onCompleteClicked(task){
        console.log("before: " + task.complete);
        task.complete = !task.complete;
        console.log("after: " + task.complete);
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
    }

    onDeleteClicked(task){
        this.tasks = this.tasks.filter((x) => {
            return task.name !== x.name;
        });
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
    }

    saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
    }
    loadTasksFromLocalStorage() {
        const json = localStorage.getItem('tasks');
        if(json) {
            const taskArr = JSON.parse(json);
            this.tasks = taskArr.map((x) => Task.fromJSON(x));
        }
    }
}

const ui = new UI();