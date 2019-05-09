const path = require('path');
const express = require('express');

const app = express();

const docsPath = path.resolve(__dirname, '../docs');
const staticPath = path.resolve(docsPath, 'static');

app.use('/static', express.static(staticPath));

app.get('/', (req, res) => {
	// TODO 템플릿으로 갈아끼우기
	res.sendfile(path.resolve(docsPath, 'index.html'));
});

const port = 3000;
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
