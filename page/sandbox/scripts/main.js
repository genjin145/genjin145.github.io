const sharedWorker = new SharedWorker('sharedWorker.js');

sharedWorker.port.start();

const data = {
  html: '',
  css: '',
  js: '',
};

for (let key in data) {
  if (window.localStorage.getItem(key)) {
    data[key] = window.localStorage.getItem(key);
  }

  initEditor(key);
}

function initEditor(key) {
  const options = {
    value: data[key],
    lineNumbers: true,
    tabSize: '2',
    lineWrapping: true,
    theme: 'darcula',
  };
  const mode = { html: 'htmlmixed', css: 'css', js: 'javascript' };
  const textarea = document.querySelector(`.${key} .editor`);

  textareaEditor = CodeMirror(textarea, { ...options, mode: mode[key] });

  textareaEditor.on('change', event => {
    data[key] = event.getValue();

    sharedWorker.port.postMessage({
      type: 'update',
      result: { [key]: event.getValue() }
    });

    window.localStorage.setItem(key, event.getValue());
  });
}

sharedWorker.port.addEventListener('message', event => {
  if (event.data.type === 'loaded') {
    sharedWorker.port.postMessage({
      type: 'start',
      result: data
    });
  }
});

const resize = document.querySelector('.resize');

resize.addEventListener('mousedown', handleResizeDown);

function handleResizeDown() {
  const aside = document.querySelector('.aside');
  const overlay = document.querySelector('.sandbox .overlay');

  function handleResizeUp() {
    window.removeEventListener('mousemove', handleResizeMove);
    overlay.style.zIndex = null;
  }

  function handleResizeMove(event) {
    aside.style.width = event.clientX + 'px';
  }

  overlay.style.zIndex = '1';

  window.removeEventListener('mouseup', handleResizeUp);
  window.addEventListener('mousemove', handleResizeMove);
  window.addEventListener('mouseup', handleResizeUp);
}
