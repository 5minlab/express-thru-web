const path = require('path');
const express = require('express');

const app = express();

const docsPath = path.resolve(__dirname, '../docs');

app.use('/static', express.static(path.resolve(docsPath, 'static')));
app.use('/assets', express.static(path.resolve(docsPath, 'assets')));
app.use('/fonts', express.static(path.resolve(docsPath, 'fonts')));

app.get('/', (req, res) => {
	// TODO 템플릿으로 갈아끼우기
	res.sendFile(path.resolve(docsPath, 'index.html'));
});

const port = 3000;
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
