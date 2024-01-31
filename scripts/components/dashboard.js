// document.addEventListener('DOMContentLoaded', () => {
//     const widgets = document.querySelectorAll('.task-item');    

//     

//     widgets.forEach(widget => {
//         widget.addEventListener('dragstart', handleDragStart);
//         widget.addEventListener('dragover', handleDragOver);
//         widget.addEventListener('drop', handleDrop);
//     });
// });

// let draggedElement = null;

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

// function handleDragStart(event) {
//     draggedElement = event.currentTarget;
//     draggedElement.classList.add('dragging');
// }

// function handleDragOver(event) {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = 'move';
// }

// function handleDrop(event) {
//     event.preventDefault();
//     const targetElement = event.currentTarget;

//     if (draggedElement && targetElement) {
//         const parent = targetElement.parentNode;
//         const targetIndex = Array.from(parent.children).indexOf(targetElement);
//         const draggedIndex = Array.from(parent.children).indexOf(draggedElement);

//         if (draggedIndex > targetIndex) {
//             parent.insertBefore(draggedElement, targetElement);
//         } else {
//             parent.insertBefore(draggedElement, targetElement.nextSibling);
//         }
        
//         draggedElement.classList.remove('dragging');

//         // update the tasks list numbers
//         updateTasksNumbers();
//     }
// }


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