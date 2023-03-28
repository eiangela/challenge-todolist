<script>
import { useAppStore } from "../store/app";

const appStore = useAppStore(); 


</script>

<template>
            
            <v-list lines="two">
            <v-list-item
              v-for="(task, index) in appStore.tasks"
              :key="index"
              :title="task.title"
              :class="{ completed: task.done }"
            >
              <template v-slot:prepend>
                <v-avatar
                  :color="task.done ? 'green' : ''"
                  @click="appStore.completeTask(task)"
                >
                  <v-icon :color="task.done ? 'white' : ''"
                    >mdi-check-circle</v-icon
                  >
                </v-avatar>
              </template>

              <template v-slot:append>
                <v-btn
                  color="red"
                  size="small"
                  icon="mdi-delete-forever"
                  @click="appStore.removeTask(index)"
                ></v-btn>
              </template>
            </v-list-item>
          </v-list>  

</template>



<style scoped>


</style>