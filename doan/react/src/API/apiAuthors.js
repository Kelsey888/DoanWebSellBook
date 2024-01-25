import axios from 'axios';

export const apiAuthors = () => {
    return axios({
        'url': "http://127.0.0.1:8000/api/tac-gia-sach",
        'method': 'get',
        // 'headers': {},
        // 'data': {},
    })
}