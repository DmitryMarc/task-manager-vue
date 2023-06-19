export const setTasksToLocalStorage = (newValue) => {
    const json = JSON.stringify(newValue);
    localStorage.setItem('tasks', json);
}