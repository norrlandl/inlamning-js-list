    // DENNA FUNKAR **** edit knappen ****

    editBtn.addEventListener('click', function () {
      if (editBtn.innerText == 'Ändra') {
        editBtn.innerText = 'Spara';
        listInput.disabled = false;
      } else {
        editBtn.innerText = 'Ändra';
        listInput.disabled = true;
        // Check if empty
        if (listInput.value === '') {
          document.querySelector('.error-done').classList.remove('hidden');
        } else {
          document.querySelector('.error-done').classList.add('hidden');
        }
        todoInput = listInput.value;
      }
    });


    editInput(e) {
      let errorMessages = '';
      let todoInput;
      if (e.target.innerText == 'Ändra') {
        e.target.parentNode.firstChild.disabled = false;
        e.target.innerText = 'Spara';
      } else {
        e.target.innerText = 'Ändra';
        e.target.parentNode.firstChild.disabled = true;
        // Check if empty
        if (e.target.parentNode.firstChild.value === '') {
          let eRR = document.createElement('p') 
          eRR.innerHTML = errorMessages 
          // listInput.append(ERR)
          errorMessages += 'Listan kan inte vara tom';
          errorDiv.innerHTML = errorMessages;
          e.target.parentNode.firstChild.disabled = false;
          e.target.innerText = 'Spara';
          return false;
        } else {
          errorDiv.innerHTML = '';
        }
        todoInput = e.target.parentNode.firstChild.value;
        console.log(e.target);
        console.log(todoInput);
      }
    },
  };


  


      // FUNKAR!!

  editBtn.addEventListener('click', function () {
    let errorMessages = '';
    if (editBtn.innerText == 'Ändra') {
      listInput.disabled = false;
      editBtn.innerText = 'Spara';
    } else {
      editBtn.innerText = 'Ändra';
      listInput.disabled = true;
      // Check if empty
      if (listInput.value === '') {
        errorMessages += 'Listan kan inte vara tom';
        errorDiv.innerHTML = errorMessages;
        return false;
      } else {
        errorDiv.innerHTML = '';
      }
      todoInput = listInput.value;
    }
  });


    // const hej = function () {
  //   let errorMessages = '';
  //   if (editBtn.innerText == 'Ändra') {
  //     listInput.disabled = false;
  //     editBtn.innerText = 'Spara';
  //   } else {
  //     editBtn.innerText = 'Ändra';
  //     listInput.disabled = true;
  //     // Check if empty
  //     if (listInput.value === '') {
  //       errorMessages += 'Listan kan inte vara tom';
  //       errorDiv.innerHTML = errorMessages;
  //       return false;
  //     } else {
  //       errorDiv.innerHTML = '';
  //     }
  //     todoInput = listInput.value;
  //   }
  // };





// document.querySelector('.error-done').classList.remove('hidden');
// document.querySelector('.error-done').classList.add('hidden');

// editInput(e) {
//   if (e.target.innerText == 'Ändra') {
//     e.target.innerText = 'Spara';
//     e.target.parentNode.firstChild.disabled = false;
//   } else {
//     e.target.innerText = 'Ändra';
//     e.target.parentNode.firstChild.disabled = true;
//     // Check if empty
//     // if (e.target.parentNode.firstChild.value === '') {
//     //   e.target.parentNode.parentNode.append(
//     //     list.createEl('p', 'Du måste fylla i något', null, null, 'error')
//     //   );
//     // } else {
//     //   e.target.parentNode.parentNode.children[1].remove();
//     // }
//     // Save new value
//     todoInput = e.target.parentNode.firstChild.value;
//   }
// },
// };

if (e.target.innerText == 'Ändra') {
  e.target.innerText = 'Spara';
  e.target.parentNode.firstChild.disabled = false;
} else {
  e.target.innerText = 'Ändra';
  e.target.parentNode.firstChild.disabled = true;
  Check if empty
  if (e.target.parentNode.firstChild.value === '') {
    e.target.parentNode.parentNode.append(
      list.createEl('p', 'Du måste fylla i något', null, null, 'error')
    );
  } else (e.target.parentNode.firstChild.value !== '') {
    e.target.parentNode.parentNode.children[1].remove();
  }
    // Save new value
    todoInput = e.target.parentNode.firstChild.value;
};

let lina = {
  init: function (name, type, text) {
    this.name = name;
    this.type = type;
    this.text = text;
  },

  createButton: function (name, classe, text) {
    `${document.createElement('button')}`;
    `${this.name}.className = ${this.classe}`;
    `${this.name}.innerHTML = ${this.text}`;
    hej.append(this.createButton);
  },

  hej: function (text) {
    document.createElement('button');
    this.innerHTML = this.text;
  },
};

let testButton = Object.create(lina);

console.log(testButton.hej('Ändra'));

hej.append(testButton);

// addTodoTextField.value.length === 0
//   ? document.querySelector('.error').classList.remove('hidden')
//   : document.querySelector('.error').classList.add('hidden');

// function for create input
const createList = function (hop) {
  document.createElement('INPUT');
  hop.setAttribute('type', 'text');
};

list.createButton('deleteBtn', 'Radera');

createList(listInput);



// function for creating and append elements


function createTest(varName, type, text) {
  var varName document.createElement(type);
  varName.innerHTML = text;
  varName
  listItem.append(v);
   return v;
 }

    // console.log(
    //   createTest('editBtn', 'button', 'test-edit'),
    //   createTest('doneBtn', 'button', 'test-done'),
    //   createTest('deleteBtn', 'button', 'test-delete')
    // );

    

    // function createEl(name, type, text, appendTo, attributeOne, attributeTwo) {
    //   var name = document.createElement(type);
    //   name.innerHTML = text;
    //   name.setAttribute(attributeOne, attributeTwo);
    //   appendTo.append(name);
    //   return name;
    // }




// Variabel för första input fältet
let addTodoTextField = document.getElementById('add-todo-field');

// Variabel för att spara värdet som hamnar i första inputfältet 
let todoInput = addTodoTextField.value;

// Det nya <li> fältet som skapas, dess värde blir det som skrevs i första input fältet
listInput.value = todoInput;

// Listan längre ner <li> flytter värdet dit 
doneListInput.value = todoInput;


/**
 * 
 * @param {*} varName 
 * @param {*} type 
 * @param {*} innerText 
 * @param {*} attributeOne 
 * @param {*} attributeTwo 
 */










function createEl(varName, type, innerText, attributeOne, attributeTwo) {

  var varName = document.createElement(type);
  varName.innerHTML = innerText;
  varName.setAttribute(attributeOne, attributeTwo);

  }
  






const list = {
  // **** METODER ****
  // Delete <li>  ---- function ----
  clear(e) {
    e.target.parentNode.remove();
  },

  // Create element ---- function ----
  createEl(type, innerText, attribute1, attribute2) {
    // return document.createElement(type);
    let element = document.createElement(type);
    element.innerHTML = innerText;
    element.setAttribute(attribute1, attribute2);
    return element;
  },

  reset(id) {
    return (document.querySelector(id).innerHTML = '');
  },

  // FRÅGA
  changeInputValue(x, y, z) {
    if (e.target.innerText == 'Ändra') {
      e.target.innerText = 'Spara';
      listInput.disabled = false; // navigation
    } else {
      e.target.innerText = 'Ändra';
      listInput.disabled = true;
      addTodoTextField.value = listInput.value; // Finns bara en add
    }
  },
};
  


{/* <h6> Description : </h6>  <span id="Description12"> </span><br />

<input name="reportnoss" type="text" id="DescriptionTextBox"></input>


document.getElementById("DescriptionTextBox").value=document.getElementById("Description12").innerText;

document.getElementById("add-todo-field").value=document.getElementById("span").innerText; */}
