// Utilities
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAppStore = defineStore('app', () => {

  const tasks = ref([]);
  const newTask = ref('');

  const addTask = () => {
    if (newTask.value.trim() !== '') {
      tasks.value.push({
        title: newTask.value,
        done: false,
      });
      newTask.value = '';
    } else {
      alert('Campo vazio! Por favor, digite o nome da tarefa.');
    }
  };

  const removeTask = (index) => {
    const task = tasks.value[index];
    if (!task.done) {
      tasks.value.splice(index, 1);
    } else {
      alert('Essa tarefa já foi concluída e não pode ser excluída!');
    }
  };

  const completeTask = (task) => {
    task.done = !task.done;
  };

  return { tasks, newTask, addTask, removeTask, completeTask }
})
