import Axios from 'axios';

export const GetData = (root, header) => {
    const promise = new Promise((resolve, reject) => {
        Axios.get(`${root}`)
        .then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
    return promise;
}

export const PostData = (root, data, header) => {
    const promise = new Promise((resolve, reject) => {
        Axios.post(`${root}`, data, {
            headers: header
        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        })
    })
    return promise;
}