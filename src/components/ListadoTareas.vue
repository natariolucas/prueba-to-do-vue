<template>
  <ul>
    <li v-for="tareaListado in tareasDelListado" :key="tareaListado.id">
      {{ tareaListado.nombreTarea }}
      <button @click="EliminarTarea(tareaListado.id)">Eliminar</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListadoTareas",
  computed: {
    tareasDelListado() {
      return this.$store.state.Tareas;
    }
  }
};
</script>

<style scoped></style>
