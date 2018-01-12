import axios from 'axios'

const dataUrl = 'https://data.' + process.env.CLUSTER_NAME + '.hasura-app.io'
const fetchData = (cb) => {
  const reqBody = {
    'type': 'select',
    'args': {
      'table': 'author',
      'columns': ['*', {'name': 'articles', 'columns': ['*']}],
      'limit': 2
    }
  }
  axios.post(dataUrl + '/v1/query', reqBody)
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          cb(res)
        }
      })
      .catch((error) => {
        cb(error)
        return Promise.reject(error)
      })
}
export default fetchData
