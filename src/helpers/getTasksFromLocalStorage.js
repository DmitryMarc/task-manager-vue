export const getTasksFromLocalStorage = () => {
    const data = localStorage.getItem('tasks');
    const tasks = data ? JSON.parse(data).tasks : [];
    const idCounter = data ? JSON.parse(data).idCounter : '0';
    return {
        tasks,
        idCounter
    }
}