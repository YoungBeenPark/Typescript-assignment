"use strict";
// 상수 정의: TODO_FORM_ID, TODO_INPUT_ID, TODO_LIST_ID는 각각 Todo 폼, Todo 입력 필드, Todo 목록의 HTML 요소의 ID입니다.
const TODO_FORM_ID = 'todo-form';
const TODO_INPUT_ID = 'todo-input';
const TODO_LIST_ID = 'todo-list';
// Todo 상태 배열: todos는 Todo 항목을 저장하는 배열입니다.
let todos = [
    { id: 1, task: '할 일 1', completed: true },
    { id: 2, task: '할 일 2', completed: false },
    { id: 3, task: '할 일 3', completed: false },
];
// DOM 요소를 가져오는 함수 정의: getElementById 함수는 주어진 ID에 해당하는 HTML 요소를 가져오는 역할을 합니다.
const todoForm = document.getElementById(TODO_FORM_ID);
// Todo 추가 함수: addTodo 함수는 새로운 Todo 항목을 생성하고 todos 배열에 추가한 후 Todo를 렌더링합니다.
const addTodo = (task) => {
    const newTodo = {
        id: todos.length + 1,
        task,
        completed: false,
    };
    todos.push(newTodo);
};
// Todo 삭제 함수: deleteTodo 함수는 주어진 ID에 해당하는 Todo 항목을 todos 배열에서 제거한 후 Todo를 렌더링합니다.
const deleteTodo = (id) => {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
};
// Todo 상태 업데이트 함수: updateTodo 함수는 주어진 ID에 해당하는 Todo 항목의 상태를 업데이트한 후 Todo를 렌더링합니다.
const updateTodo = (id, task, completed) => {
    todos = todos.map(todo => {
        if (todo.id === id) {
            return Object.assign(Object.assign({}, todo), { task, completed });
        }
        return todo;
    });
    renderTodos();
};
// Todo 렌더링 함수: renderTodos 함수는 todos 배열에 있는 각 Todo 항목을 HTML 요소로 만들어 Todo 목록에 표시합니다. 각 Todo 항목에는 할 일 내용과 완료/미완료 상태를 표시하며, 삭제 버튼과 완료/미완료 전환 버튼이 있습니다.
const renderTodos = () => {
    const todoListElement = document.getElementById(TODO_LIST_ID);
    if (todoListElement) {
        todoListElement.innerHTML = ''; // 기존 목록 초기화
        todos.forEach(todo => {
            const todoItem = document.createElement('div');
            todoItem.textContent = `${todo.task} - ${todo.completed ? '완료' : '미완료'}`;
            // 삭제 버튼 생성
            const deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.onclick = () => deleteTodo(todo.id);
            // 완료/미완료 전환 버튼 생성
            const toggleButton = document.createElement('button');
            toggleButton.textContent = todo.completed ? '미완료' : '완료';
            toggleButton.onclick = () => updateTodo(todo.id, todo.task, !todo.completed);
            // Todo 항목에 버튼 추가
            todoItem.appendChild(deleteButton);
            todoItem.appendChild(toggleButton);
            todoListElement.appendChild(todoItem);
        });
    }
};
// 폼 제출 이벤트 핸들러: handleFormSubmit 함수는 Todo 폼을 제출할 때 호출되는 이벤트 핸들러입니다. 입력 필드에 입력된 내용을 새로운 Todo로 추가합니다.
const handleFormSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    const inputField = document.getElementById('todo-input'); // 입력 필드 가져오기
    const task = inputField.value.trim(); // 입력된 값 가져오기 및 공백 제거
    if (task) { // 입력된 값이 비어있지 않은 경우에만 추가
        addTodo(task); // 새로운 Todo 추가
        inputField.value = ''; // 입력 필드 초기화
    }
    else {
        alert('할 일을 입력하세요!'); // 입력이 비어있을 경우 경고
    }
};
// DOM 로드 후 초기화: DOMContentLoaded 이벤트가 발생하면 Todo 폼의 제출 이벤트를 처리하고 Todo 목록을 렌더링합니다.
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form'); // 폼 요소 가져오기
    form.addEventListener('submit', handleFormSubmit); // 폼 제출 이벤트 핸들러 등록
    renderTodos(); // 초기 Todo 목록 렌더링
});
