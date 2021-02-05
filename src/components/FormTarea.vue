<template>
  <form action="">
    <label for="nombreTarea"> Nombre de la tarea</label>
    <input type="text" v-model="tarea.nombreTarea" />

    <button @click.prevent="agregarTarea()" type="submit">Agregar tarea</button>
  </form>
</template>

<script>
export default {
  name: "FormTarea",
  data() {
    return {
      tarea: {
        nombreTarea: "",
        id: ""
      }
    };
  },
  methods: {
    agregarTarea: function() {
      this.tarea.id = (1 + Math.random()) * 100000000000000;
      let tareaCommit = {
        nombreTarea: this.tarea.nombreTarea,
        id: this.tarea.id
      };
      this.$store.commit("agregarTarea", tareaCommit);
      this.$store.commit("agregarTarea", this.tarea);
      this.tarea.nombreTarea = "";
    }
  }
};
</script>
