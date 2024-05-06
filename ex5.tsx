
interface Task {
    id: number;
    title: string;
    completed: boolean;
}


type TaskList = Task[];

function addTask(tasks: TaskList, title: string): TaskList {
    const newTask: Task = {
        id: tasks.length + 1, 
        title: title,
        completed: false 
    };
    return [...tasks, newTask]; 
}
function deleteTask(tasks: TaskList, id: number): TaskList {
    return tasks.filter(task => task.id !== id);
}

let tasks: TaskList = [
    { id: 1, title: "Почистить зубы", completed: true },
    { id: 2, title: "Приготовить завтрак", completed: false },
    { id: 3, title: "Прогуляться", completed: false }
];

tasks = addTask(tasks, "Полить цветы");

console.log("Список задач:");
tasks.forEach(task => {
    console.log(`Задача ${task.id}: ${task.title} (${task.completed ? 'Выполнено' : 'Не выполнено'})`);
});

tasks = deleteTask(tasks, 2);
console.log("\nОбновленный список задач после удаления:");
tasks.forEach(task => {
    console.log(`Задача ${task.id}: ${task.title} (${task.completed ? 'Выполнено' : 'Не выполнено'})`);
});
