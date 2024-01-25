import { Banner } from "../components/banner";
import { List } from "../components/list";
import { apiBooks } from "../API/apiBooks";
import { useEffect, useState } from "react";
import { Pagination, Spin } from "antd";
import { Paginationn } from "../components/pagination";
export const HomePage = () => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        apiBooks().then((response) => {
            if (response.data.success) {
                setBook(response.data.data)
            }
        })

    }, [])
    return (
        <>
            <Banner />
            {book !== null ?
                <>
                    <List number={4} data={book} title="Mới nhất" />
                    <List number={4} data={book} title="Mua gì hôm nay" />
                    <List number={4} data={book} title="Có thể bạn sẽ thích" />
                    <Paginationn />
                </>
                : <Spin className="container my-5" size="large" />}
        </>


    );
}