async function run() {
  try {
    const server = await import('./server/server.mjs');
    const app = await server.app();

    const port = 10010;

    app.listen(port, () => {
      console.log(`Node Express server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Failed to import app:', error);
  }
}

run();
