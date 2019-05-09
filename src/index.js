const fs = require('fs');
const path = require('path');
const express = require('express');
const MarkdownIt = require('markdown-it');
const es6Renderer = require('express-es6-template-engine');

const app = express();
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

const md = new MarkdownIt();

const docsPath = path.resolve(__dirname, '../docs');
const contentPath = path.resolve(__dirname, '../content');

app.use('/static', express.static(path.resolve(docsPath, 'static')));
app.use('/assets', express.static(path.resolve(docsPath, 'assets')));
app.use('/fonts', express.static(path.resolve(docsPath, 'fonts')));

function readDetailContent(locale) {
	const p = path.resolve(contentPath, `detail_${locale}.md`);
	const markdown = fs.readFileSync(p).toString();
	return md.render(markdown);
}

function readSummaryContent(locale) {
	const p = path.resolve(contentPath, `summary_${locale}.md`);
	const markdown = fs.readFileSync(p).toString();
	return md.render(markdown);
}

app.get('/', (req, res) => render(req, res, 'en'));
app.get('/ko/', (req, res) => render(req, res, 'ko'));
app.get('/en/', (req, res) => render(req, res, 'en'));

function render(req, res, locale) {
	const detail = readDetailContent(locale);
	const summary = readSummaryContent(locale);
	res.render('index', { locals: { detail, summary } });
}

const port = 3000;
app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
