import axios from 'axios';

export const apiGenres = () => {
    return axios({
        'url': "http://127.0.0.1:8000/api/the-loai-sach",
        'method': 'get',
        // 'headers': {},
        // 'data': {},
    })
}