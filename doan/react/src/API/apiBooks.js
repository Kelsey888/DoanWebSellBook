import axios from 'axios';

export const apiBooks = () => {
    return axios({
        'url': "http://127.0.0.1:8000/api/danh-sach-sach",
        'method': 'get',
        // 'headers': {},
        // 'data': {},
    })
}