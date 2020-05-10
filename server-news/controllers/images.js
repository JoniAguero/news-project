// require syntax

const fetch = require('node-fetch');
const accesKey = "UjPuuPoSoQHI6SCHiE2r9LKujFtA8rqZgS_B9SkYQkk"
const endPoint = 'https://api.unsplash.com/search/photos';

exports.getImages = async (req, res) => {
  let response = await fetch(endPoint + '?query=' + 'news' + 
  '&client_id=' + accesKey);
  res.status(200).json({
    status: 'success',
    data: await response.json()
  })
}