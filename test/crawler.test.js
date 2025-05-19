const assert = require('assert');
const { parseTopMovies } = require('../js/doubanCrawler');

const sample = `
<div class="item">
  <a href="https://movie.douban.com/subject/1/">
    <span class="title">Movie 1</span>
  </a>
  <div class="bd">
    <p class="quote"><span class="inq">Intro 1</span></p>
  </div>
</div>
<div class="item">
  <a href="https://movie.douban.com/subject/2/">
    <span class="title">Movie 2</span>
  </a>
  <div class="bd">
    <p class="quote"><span class="inq">Intro 2</span></p>
  </div>
</div>
`;

const result = parseTopMovies(sample, 2);
assert.strictEqual(result.length, 2);
assert.deepStrictEqual(result[0], { title: 'Movie 1', link: 'https://movie.douban.com/subject/1/', quote: 'Intro 1' });
assert.deepStrictEqual(result[1], { title: 'Movie 2', link: 'https://movie.douban.com/subject/2/', quote: 'Intro 2' });

console.log('crawler tests passed');
