import axios from 'axios';

export const apiSuppliers = () => {
    return axios({
        'url': "http://127.0.0.1:8000/api/nha-cung-cap-sach",
        'method': 'get',
        // 'headers': {},
        // 'data': {},
    })
}