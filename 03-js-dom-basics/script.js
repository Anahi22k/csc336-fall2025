const input = document.getElementById('taskInput');
const tagSelect = document.getElementById('taskTag');
const list = document.getElementById('taskList');
const progressFill = document.getElementById('progressFill');

let tasks = [];

function updateProgress() {
  const doneCount = tasks.filter(t => t.done).length;
  const percent = tasks.length ? Math.round((doneCount / tasks.length) * 100) : 0;
  progressFill.style.width = percent + '%';
  progressFill.textContent = percent + '%';
}

function render() {
  list.innerHTML = '';
  tasks.forEach((task, i) => {
    const li = document.createElement('li');
    const left = document.createElement('div');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.addEventListener('change', () => {
      task.done = checkbox.checked;
      updateProgress();
      render();
    });

    const span = document.createElement('span');
    span.textContent = task.title;
    if (task.done) span.classList.add('done');

    const tag = document.createElement('span');
    tag.className = 'tag';
    tag.textContent = task.tag;

    left.appendChild(checkbox);
    left.appendChild(span);
    left.appendChild(tag);
    li.appendChild(left);

    const del = document.createElement('button');
    del.textContent = 'Delete';
    del.style.background = '#ef4444';
    del.addEventListener('click', () => {
      tasks.splice(i, 1);
      updateProgress();
      render();
    });

    li.appendChild(del);
    list.appendChild(li);
  });
  updateProgress();
}

document.getElementById('addBtn').addEventListener('click', () => {
  const title = input.value.trim();
  if (!title) return;
  const tag = tagSelect.value;
  tasks.push({ title, tag, done: false });
  input.value = '';
  render();
});

render();
