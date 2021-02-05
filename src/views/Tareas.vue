<template>
  <div>
    <FormTarea />
    <ListadoTareas />
  </div>
</template>

<script>
import FormTarea from "@/components/FormTarea";
import ListadoTareas from "@/components/ListadoTareas";
export default {
  name: "Tareas",
  components: { FormTarea, ListadoTareas }
};
</script>

<style scoped></style>
