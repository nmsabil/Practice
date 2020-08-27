const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

const genetateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-item-center">
     <span>${todo}</span>
     <i class="fa fa-trash delete"></i>
  </li>
 `;
  list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    genetateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});
