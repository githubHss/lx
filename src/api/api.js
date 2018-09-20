import axios from 'axios'
import { PAGE_SIZE } from '../constants';

const base = '/api/v1/jm'

export default {
  getJobList (page=0,params={}) {
    return new Promise((resolve, reject) => {
      axios.get(`${base}/jobs?page=${page}&limit=${PAGE_SIZE}`,{data:params}).then(function (response) {
        resolve(response.data)
      })
        .catch(function (err) {
          reject(err)
        })
    })
  },
  getLibraryList (page=0) {
    axios.get(`${base}/libraries?offset=${page * PAGE_SIZE}&limit=${PAGE_SIZE}`)
  },
  create(type,jData){
    axios({
      method: 'post',
      url: `${base}/${type}`,
      data: JSON.stringify(jData)
    });
  },
  remove(type,id){
    axios.delete(`${base}/${type}/${id}`)
      .then(res=>{console.log(`成功！${res}`)}).catch(error=>{console.log(error)})
  },
  getDetail(type,id){
  axios.get(`${base}/${type}/${id}`)
    .then(res=>{console.log(`成功！${res}`)}).catch(error=>{console.log(error)})
  },
  update(type,id,jData){
    axios({
      method: 'put',
      url: `${base}/${type}/${id}`,
      data: JSON.stringify(jData)
    });
  },
  startJob(type,id,jData){
    axios({
      method: 'put',
      url: `${base}/${type}/${id}/start`,
      data: JSON.stringify(jData)
    });
  },
  libraryListItems(id, { page = 1, limit = 24 }){
    axios(`${base}/libraries${id}/items?offset=${page * limit}&limit=${limit}`);
  }
}


