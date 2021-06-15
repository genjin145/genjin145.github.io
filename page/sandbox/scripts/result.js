const sharedWorker = new SharedWorker('sharedWorker.js');

sharedWorker.port.start();

const style = document.querySelector('.style');
const script = document.querySelector('.script');
let timeoutId;

window.onload = function() {
  console.clear();
  sharedWorker.port.postMessage({type: 'loaded'});
};

sharedWorker.port.addEventListener('message', event => {
  if (event.data.type === 'start') {
    const { html, css, js } = event.data.result;

    document.body.innerHTML = html;
    style.textContent = css;
    script.textContent = js;
  }

  if (event.data.type === 'update') {
    const { html, css, js } = event.data.result;

    if (html) {
      document.body.innerHTML = html;
    }

    if (css) {
      style.textContent = css;
    }

    if (js) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }
});
