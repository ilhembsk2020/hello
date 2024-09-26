// Sélection des éléments
const addTaskBtn = document.getElementById("add-task-btn");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Fonction pour ajouter une tâche
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") return;  // Si l'input est vide, on ne fait rien

    // Créer un nouvel élément de liste
    const li = document.createElement("li");
    li.textContent = taskText;

    // Bouton supprimer
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";
    deleteBtn.classList.add("delete-btn");

    // Ajout du bouton dans l'élément <li>
    li.appendChild(deleteBtn);

    // Ajouter l'événement pour marquer comme complété
    li.addEventListener("click", function() {
        li.classList.toggle("completed");
    });

    // Ajouter l'événement pour supprimer la tâche
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Ajouter la tâche à la liste
    taskList.appendChild(li);

    // Réinitialiser le champ input
    taskInput.value = "";
}

// Ajouter un écouteur d'événements sur le bouton
addTaskBtn.addEventListener("click", addTask);

// Permet d'ajouter une tâche avec la touche "Enter"
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});
