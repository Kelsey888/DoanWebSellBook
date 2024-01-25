import { Paginationn } from "../components/pagination";
import { WishList } from "../components/wishlist";

export const WishListPage = () => {
    return (
        <>
            <WishList number={4} title="Danh sách yêu thích" />
            <Paginationn />
        </>
    );
}