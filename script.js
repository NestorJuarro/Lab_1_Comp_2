const { createApp } = Vue;

createApp({
  data() {
    return {
      nuevaTarea: "",
      tareas: JSON.parse(localStorage.getItem("tareas")) || [],
      error: "",
      filtro: "todas",
      busqueda: "",
      darkMode: false
    };
  },

  watch: {
    tareas: {
      deep: true,
      handler(nuevas) {
        localStorage.setItem("tareas", JSON.stringify(nuevas));
      }
    }
  },

  computed: {
    tareasFiltradas() {
      let lista = this.tareas;

      if (this.filtro === "pendientes") {
        lista = lista.filter(t => !t.completada);
      }

      if (this.filtro === "completadas") {
        lista = lista.filter(t => t.completada);
      }

      if (this.busqueda) {
        lista = lista.filter(t =>
          t.texto.toLowerCase().includes(this.busqueda.toLowerCase())
        );
      }

      return lista;
    },

    completadas() {
      return this.tareas.filter(t => t.completada).length;
    }
  },

  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim() === "") {
        this.error = "⚠️ No puedes dejar vacío";
        return;
      }

      this.tareas.push({
        id: Date.now(),
        texto: this.nuevaTarea,
        completada: false,
        editando: false
      });

      this.nuevaTarea = "";
      this.error = "";
    },

    eliminarTarea(index) {
      this.tareas.splice(index, 1);
    },

    editarTarea(tarea) {
      tarea.editando = !tarea.editando;
    }
  }
}).mount("#app");