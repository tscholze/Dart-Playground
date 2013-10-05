import 'dart:html';

// <input> element object
InputElement todoInput;

// <ul> element object
UListElement todoList;

// <button> element object
ButtonElement todoDelete;


// Main function
void main()
{
  // Bind properties
  todoInput = query('#todo-input');
  todoList = query('#todo-list');
  todoDelete = query('#todo-delete-all');
  
  // Attach event handler
  todoInput.onChange.listen(onTodoInputChanged);
  todoDelete.onClick.listen(onTodoDeleteClicked);
}

// Triggered if todo input field's value changed
void onTodoInputChanged(Event event)
{
  // Create a new <li> element
  var newTodo = new LIElement();
  
  // Set value from the input field
  newTodo.text = todoInput.value;
  
  // Clear input field
  todoInput.value = '';
  
  // Add child to list
  todoList.children.add(newTodo);
}

// Triggered if 'delete all' button was clicked.
void onTodoDeleteClicked(Event event)
{
  // Clear children nodes
  todoList.children.clear();
}
