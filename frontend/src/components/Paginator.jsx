import ReactPaginate from "react-paginate";
import React from "react";

const Paginator = ({last_page,currentPage, handlePageClick}) => {
    return (
        <ReactPaginate
            pageCount={last_page}
            initialPage={currentPage}
            nextLabel=">"
            previousLabel="<"
            pageRangeDisplayed={4}
            onPageChange={handlePageClick}
        />
    )
}

export default Paginator;