import { List } from "../components/list";
import { Filter } from "../components/filter";
import { apiBooks } from "../API/apiBooks";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import { apiGenres } from "../API/apiGenres";
import { Paginationn } from "../components/pagination";
import { apiAuthors } from "../API/apiAuthors";
import { apiSuppliers } from "../API/apiSuppliers";
import Footer from "../components/footer";
import Header from "../components/heder";
export const BookPage = () => {
    const [book, setBook] = useState(null);
    useEffect(() => {
        apiBooks().then((response) => {
            if (response.data.success) {
                setBook(response.data.data)
            }
        })

    }, [])
    const [genre, setGenre] = useState([{ id: "", name: "" }]);
    useEffect(() => {
        apiGenres().then((response) => {
            if (response.data.success) {
                setGenre(response.data.data)
            }
        })

    }, [])
    const [author, setAuthor] = useState([{ id: "", name: "" }]);
    useEffect(() => {
        apiAuthors().then((response) => {
            if (response.data.success) {
                setAuthor(response.data.data)
            }
        })

    }, [])
    const [supplier, setSupplier] = useState([{ id: "", name: "" }]);
    useEffect(() => {
        apiSuppliers().then((response) => {
            if (response.data.success) {
                setSupplier(response.data.data)
            }
        })

    }, [])
    return (
        <>
            <Header/>
            {genre !== null ?
                <>
                    <Filter genre={genre} author={author} supplier={supplier} book={book} />
                </>
                : <Spin className="container my-5" size="large" />}
            {book !== null ?
                <>
                    <List number={16} data={book} title="Danh sách truyện" />
                    <Paginationn />

                </>
                : <Spin className="container my-5" size="large" />}
                <Footer/>
        </>
    );
}