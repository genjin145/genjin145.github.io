const ports = new Set();

self.addEventListener('connect', event => {
  const port = event.ports[0];

  ports.add(port);

  port.addEventListener('message', event => {
    ports.forEach((p) => {
      p.postMessage(event.data);
    });
  });

  port.start();
});
