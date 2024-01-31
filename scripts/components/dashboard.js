/// This function is to update the tasks number after each drag and drop event
function updateTasksNumbers(){
    const todoTasks = document.querySelectorAll('.tasks-todo .tasks-list .task-item');
    const onprogressTasks = document.querySelectorAll('.tasks-onprogress .tasks-list .task-item');
    const doneTasks = document.querySelectorAll('.tasks-done .tasks-list .task-item');

    const todoTasksNo = todoTasks.length;
    const onprogressTasksNo = onprogressTasks.length;
    const doneTasksNo = doneTasks.length;

    document.querySelectorAll('.tasks-todo .tasks-numbers')[0].innerHTML = todoTasksNo;
    document.querySelectorAll('.tasks-onprogress .tasks-numbers')[0].innerHTML = onprogressTasksNo;
    document.querySelectorAll('.tasks-done .tasks-numbers')[0].innerHTML = doneTasksNo;
}

document.addEventListener('DOMContentLoaded', () => {
    const dashboardTodo = document.getElementById('todo-dashboard');
    const dashboardOnprogress = document.getElementById('onprogress-dashboard');
    const dashboardDone = document.getElementById('done-dashboard');

    updateTasksNumbers();

    // Initialize SortableJS for each dashboard
    const sortable1 = new Sortable(dashboardTodo, {
        group: 'shared',
        animation: 150, // Animation duration in milliseconds
    });

    const sortable2 = new Sortable(dashboardOnprogress, {
        group: 'shared',
        animation: 150, // Animation duration in milliseconds
    });
    const sortable3 = new Sortable(dashboardDone, {
        group: 'shared',
        animation: 150, // Animation duration in milliseconds
    });
});