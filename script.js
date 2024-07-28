const htmlTextarea = document.getElementById('html');
const cssTextarea = document.getElementById('css');
const jsTextarea = document.getElementById('js');
const runButton = document.getElementById('run');
const outputIframe = document.getElementById('output-iframe');

runButton.addEventListener('click', () => {
  const html = htmlTextarea.value;
  const css = cssTextarea.value;
  const js = jsTextarea.value;

  const iframeDoc = outputIframe.contentDocument;
  iframeDoc.open();
  iframeDoc.write(`
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `);
  iframeDoc.close();
});
