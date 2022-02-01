'use strict';

const addTodoTextField = document.getElementById('add-todo-field');
const addTodoBtn = document.getElementById('add-todo-btn');
const resetBtn = document.getElementById('reset-btn');
const doList = document.getElementById('the-list-ul');
const doneList = document.getElementById('the-done-list-ul');
const errorDiv = document.getElementById('error-div');

/**
 *
 * Object
 *
 *
 */

const list = {
  // Create element
  createEl(type, innerText, attribute1, attribute2, class1, class2) {
    let element = document.createElement(type);
    if (innerText) element.innerHTML = innerText;
    if (attribute1) element.setAttribute(attribute1, attribute2);
    element.classList.add(class1);
    if (class2) element.classList.add(class2);
    return element;
  },

  // Edit button
  editInput(e) {
    // let errorMessages = '';
    if (e.target.innerText == 'ÄNDRA') {
      e.target.parentNode.firstChild.disabled = false;
      e.target.innerText = 'SPARA';
    } else {
      e.target.innerText = 'ÄNDRA';
      e.target.parentNode.firstChild.disabled = true;
      // Check if empty
      if (e.target.parentNode.firstChild.value.trim() === '') {
        // listInput.append(ERR)
        eRR.innerHTML = '! En syssla kan inte vara tom';
        e.target.parentNode.append(eRR);
        e.target.parentNode.firstChild.disabled = false;
        e.target.innerText = 'SPARA';
        return false;
      } else {
        eRR.remove();
      }
    }
  },

  // Done button
  done(e) {
    if (e.target.parentNode.firstChild.value.trim() === '') {
      eRR.innerHTML = '! En syssla kan inte vara tom';
      e.target.parentNode.append(eRR);
      return false;
    } else {
      eRR.remove();
    }
    if ((e.target.parentNode.childNodes[1].innerText = 'SPARA')) {
      e.target.parentNode.childNodes[1].innerText = 'ÄNDRA';
    }

    // Make list-input disabled
    e.target.parentNode.firstChild.disabled = true;
    // Append
    doneList.append(e.target.parentNode);
    e.target.parentNode.childNodes[2].remove();

    // if ((e.target.parentNode.childNodes[2].innerHTML = 'FÄRDIG')) {
    //   e.target.parentNode.childNodes[2].innerHTML = 'TILLBAKA';
    //   e.target.parentNode.childNodes[2].addEventListener('click', function (e) {
    //     doList.append(e.target.parentNode);
    //     e.target.parentNode.childNodes[2].innerHTML = 'FÄRDIG';
    //   });
    // } else {
    //   return false;
    // }
  },

  // Delete button
  clear(e) {
    e.target.parentNode.remove();
  },

  // Reset all lists
  reset(id) {
    return (document.querySelector(id).innerHTML = '');
  },
};

let eRR = list.createEl('p', null, null, null, 'error-messages');

addTodoBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // Create variabel with input value
  let todoInput = addTodoTextField.value;

  // Check if input field is empty / Error messages
  let errorMessages = '';

  if (todoInput === '') {
    errorMessages += '! Fältet måste vara ifyllt';
    errorDiv.innerHTML = errorMessages;
    return false;
  } else {
    errorDiv.innerHTML = '';
  }

  // Create list
  let listItem = list.createEl('li', null, null, null, 'todo-list', null);

  // Create input field
  let listInput = list.createEl(
    'INPUT',
    null,
    'type',
    'text',
    'todo-field',
    null
  );

  // Send value to the input field
  listInput.value = todoInput;

  // Empty first input field
  addTodoTextField.value = '';

  // Make list-input disabled
  listInput.disabled = true;

  //Create Edit-button
  const editBtn = list.createEl(
    'button',
    'ÄNDRA',
    null,
    null,
    'btn-all',
    'btn-edit'
  );

  //Create Done-button
  const doneBtn = list.createEl(
    'button',
    'FÄRDIG',
    null,
    null,
    'btn-all',
    'btn-done'
  );

  //Create Delete-button
  const deleteBtn = list.createEl(
    'button',
    'RADERA',
    null,
    null,
    'btn-all',
    'btn-delete'
  );

  // Append
  listItem.append(listInput, editBtn, doneBtn, deleteBtn);
  doList.append(listItem);

  // Done <li>
  doneBtn.addEventListener('click', list.done);

  // Edit <li>
  editBtn.addEventListener('click', list.editInput);

  // Delete <li>
  deleteBtn.addEventListener('click', list.clear);
});

// Reset both lists
resetBtn.addEventListener('click', function (e) {
  e.preventDefault();
  list.reset('#the-list-ul');
  list.reset('#the-done-list-ul');
  list.reset('.emess');
});
