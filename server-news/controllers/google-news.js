const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('1d01268cb056446083eefeee93e25036');

// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
exports.getGoogleNews = (req, res) => {
  newsapi.v2.topHeadlines({
    q: 'covid'
}).then(response => {
  res.status(200).json({
    status: 'success',
    data: response.articles
  })
})
}