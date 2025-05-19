const https = require('https');

function parseTopMovies(html, count = 20) {
  const movies = [];
  const itemRegex = /<div class="item">([\s\S]*?)<\/div>\s*<\/div>/g;
  let match;
  while (movies.length < count && (match = itemRegex.exec(html))) {
    const item = match[1];
    const titleMatch = /<span class="title">([^<]+)<\/span>/.exec(item);
    const linkMatch = /<a href="([^"]+)"/.exec(item);
    const quoteMatch = /<span class="inq">([^<]+)<\/span>/.exec(item);
    if (titleMatch) {
      movies.push({
        title: titleMatch[1].trim(),
        link: linkMatch ? linkMatch[1] : '',
        quote: quoteMatch ? quoteMatch[1].trim() : ''
      });
    }
  }
  return movies;
}

function fetchTop20Movies() {
  const url = 'https://movie.douban.com/top250?start=0&filter=';
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => {
        try {
          const movies = parseTopMovies(data, 20);
          resolve(movies);
        } catch (err) {
          reject(err);
        }
      });
    }).on('error', reject);
  });
}

module.exports = {
  parseTopMovies,
  fetchTop20Movies
};
