const http = require('http');

const html = `<!doctype html>
<html lang="uk">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Хроніки Забутих Земель</title>
<style>
body {
  background: #11131a;
  color: #e8dfc8;
  font-family: sans-serif;
  max-width: 650px;
  margin: 35px auto;
  padding: 20px;
}
h1 { color: #c8a96e; }
button {
  display: block;
  width: 100%;
  margin: 12px 0;
  padding: 14px;
  background: #292c38;
  color: white;
  border: 1px solid #766344;
  border-radius: 8px;
}
#story { line-height: 1.7; }
</style>
</head>
<body>
<h1>Хроніки Забутих Земель</h1>
<p>Текстова RPG — перший прототип</p>
<div id="story">Ти прокидаєшся біля руїн стародавнього міста.
У кишені — зламаний медальйон. Попереду три шляхи.</div>
<button onclick="act(1)">Увійти до руїн</button>
<button onclick="act(2)">Піти до лісу</button>
<button onclick="act(3)">Оглянути медальйон</button>
<script>
function act(n) {
  const scenes = {
    1: 'У руїнах чути кроки. Хтось знає, що ти прийшов.',
    2: 'Ліс зустрічає тишею. На землі видніються свіжі сліди.',
    3: 'На медальйоні проступає символ, якого ти ніколи не бачив.'
  };
  document.getElementById('story').textContent = scenes[n];
}
</script>
</body>
</html>`;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}).listen(8080, '127.0.0.1', () => {
  console.log('Гра доступна: http://127.0.0.1:8080');
});
