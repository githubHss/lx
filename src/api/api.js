import axios from 'axios'
import { PAGE_SIZE } from '../constants';

const base = '/api/v1/jm'

export default {
  getJobList (type,page=0) {
      axios.get(`${base}/jobs?page=${page}&limit=${PAGE_SIZE}`).then(res=>{
      console.log(res)
    }).catch(function (error) {
      console.log(error);
    })
  },
  getLibraryList (type,page=0) {
    axios.get(`${base}/libraries?offset=${page * PAGE_SIZE}&limit=${PAGE_SIZE}`).then(res=>{
      console.log(res)
    }).catch(function (error) {
      console.log(error);
    })
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


