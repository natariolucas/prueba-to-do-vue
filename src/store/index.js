import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Tareas: []
  },
  mutations: {
    agregarTarea(state, tarea) {
      state.Tareas.push(tarea);
    },
    eliminarTareaPorIndice(state, indice){

    }
  },
  actions: {
    EliminarTareaPorId({commit}, idTarea) {

    }
  },
  modules: {}
});

export default store;
