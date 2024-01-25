import { Pagination } from 'antd';
export const Paginationn = () => {
    return (
        <>
            <div className='container' style={{ marginLeft: "50%" }}><Pagination defaultCurrent={1} total={50} /></div>
        </>
    );

}