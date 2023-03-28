<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { useAppStore } from "../store/app";
import List from "../components/List.vue"


const appStore = useAppStore(); 

const getCurrentDate = () => {
  const date = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("pt-BR", options);
  
};

</script>

<template>
  <v-container class="fill-height">
    <v-row class="d-flex align-center justify-center">
      <v-col class="v-col-sm-12 v-col-md-6 v-col">
        <v-sheet class="elevation-6 rounded-lg mx-auto pa-2">
          <v-container>
            <v-row
              class="rounded-lg"
              style="
                background-color: #c1c1c1;
                font-family: Helvetica;
                font-weight: bold;
                font-size: 15px;
              "
            >
              <v-col class="v-col-sm-12 v-col-md-6">{{ getCurrentDate() }}</v-col>
              <v-col class="v-col-sm-12 v-col-md-6 v-col text-right">
                {{ appStore.tasks.length }} tarefas
              </v-col>
            </v-row>
          </v-container>
          <v-form @submit.prevent="appStore.addTask">
            <v-responsive class="mx-auto" max-width="270">
              <v-text-field
                v-model="appStore.newTask"
                placeholder="Nova tarefa"
                variant="underlined"
              >
              <List />

                <template v-slot:append>
                  <v-btn
                    icon="mdi-plus"
                    type="submit"
                    size="small"
                    color="green"
                  ></v-btn>
                </template>
              </v-text-field>
            </v-responsive>
          </v-form>


        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-container {
  padding: 8px;
}

.completed.v-list-item {
  text-decoration: line-through;
}
</style>
