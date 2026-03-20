# 🚀 Task Manager PRO+

## 🧩 Situación problemática

En el entorno académico actual, muchos estudiantes tienen dificultades para organizar sus tareas, trabajos y actividades diarias. Esto provoca olvidos, retrasos en entregas y bajo rendimiento académico.

Además, la falta de herramientas centralizadas hace que los estudiantes utilicen múltiples medios (papel, apps, notas), generando desorden y poca eficiencia.

---

## 🎯 Sector al que va dirigido

* Estudiantes de bachillerato
* Estudiantes universitarios
* Personas que necesitan organizar actividades diarias

---

## 💡 Solución propuesta

Se desarrolló una aplicación web utilizando Vue.js que permite gestionar tareas de manera eficiente, intuitiva y moderna.

---

## ⚙️ Funcionalidades del sistema

* Agregar tareas
* Editar tareas
* Eliminar tareas
* Marcar tareas como completadas
* Filtrar tareas (todas, pendientes, completadas)
* Buscar tareas en tiempo real
* Validación de campos
* Persistencia de datos con localStorage
* Modo oscuro
* Interfaz moderna y amigable

---

## 🛠️ Tecnologías utilizadas

* HTML
* CSS
* JavaScript
* Vue.js
---

## ❓ Preguntas

### ✅ ¿Qué es Vue.js y cuál es su función dentro de la página web desarrollada?

Vue.js es un framework de JavaScript que permite crear interfaces de usuario interactivas y dinámicas de forma sencilla. En esta aplicación, Vue.js se encarga de manejar la lógica del sistema y de actualizar automáticamente la interfaz cuando los datos cambian, sin necesidad de recargar la página.

---

### ✅ ¿Qué variables reactivas utilizó y cuál es su función?

En la aplicación se utilizaron las siguientes variables reactivas:

* **nuevaTarea**: almacena el texto que el usuario escribe en el input.
* **tareas**: contiene la lista de tareas registradas en el sistema.
* **error**: muestra mensajes de validación cuando el usuario comete un error.
* **filtro**: determina qué tipo de tareas se muestran (todas, pendientes o completadas).
* **busqueda**: permite filtrar tareas en tiempo real según el texto ingresado.

---

### ✅ Diferencia entre v-bind y v-model

* **v-bind**: se utiliza para enlazar atributos dinámicamente, por ejemplo clases o estilos.
* **v-model**: permite enlazar datos de forma bidireccional entre el input y una variable, es decir, lo que el usuario escribe se guarda automáticamente en el sistema.

---

### ✅ Ejemplo de evento utilizado

Se utilizó el evento **@click** en varios botones, por ejemplo para agregar tareas, eliminar tareas y cambiar filtros. Este evento permite ejecutar funciones cuando el usuario interactúa con la interfaz.

---

### ✅ ¿Para qué se utilizó v-for?

La directiva **v-for** se utilizó para recorrer la lista de tareas y mostrarlas dinámicamente en la interfaz. Esto permite que cada vez que se agregue o elimine una tarea, la lista se actualice automáticamente.

---

### ✅ ¿En qué situación se utilizó v-if y qué problema resuelve?

Se utilizó **v-if** para mostrar mensajes de error cuando el usuario intenta ingresar una tarea vacía y también para mostrar u ocultar el campo de edición. Esto ayuda a controlar la interfaz y evita mostrar elementos innecesarios.

---

### ✅ ¿Cómo se realiza la validación de datos y por qué es importante?

La validación se realiza verificando que el campo de entrada no esté vacío utilizando el método `trim()`. Si el usuario intenta ingresar una tarea vacía, se muestra un mensaje de error.

La validación es importante porque evita datos incorrectos, mejora la experiencia del usuario y asegura que el sistema funcione correctamente.
