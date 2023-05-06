import React from "react";
import {Col, Row} from "react-bootstrap";
import ProductBlock from "./ProductBlock";
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import {selectProducts} from "../redux/product/product.selectors";
import {fetchProducts} from "../redux/product/product.action";
import ProductSkeleton from "./ProductSkeleton";

const ProductList = ({categoryId, isPagination}) => {

    const dispatch = useDispatch();

    const products = useSelector(selectProducts);

    const handlePageClick = (event) => {
        if (event.selected < 0 || event.selected >= products.meta.last_page) {
            return;
        }
        onClickPage(event.selected + 1)
        window.scroll(0, 0);
    }

    const onClickPage = (page) => {
        dispatch(fetchProducts({
            page,
            categoryId,
        }))
    }

    React.useEffect(() => {
        dispatch(fetchProducts({
            page: 1,
            categoryId
        }))
    }, [categoryId]);

    if (products.status === "error") {
        return (
            <div>
                <h1 className="fs-3 text-center">Some error occurred 😕</h1>
                <p className="fs-5 text-center">Come here later!</p>
            </div>
        )
    }

    return (
        <Row>
            {products.status === "loading" ? (
                [...new Array(6)].map((_, index) => (
                    <Col key={index} xs={12} sm={12} lg={6} xl={4} className="mb-4">
                        <ProductSkeleton/>
                    </Col>
                ))
            ) : (
                products.items.length === 0 ? (
                    <div>
                        <h1 className="fs-3 text-center">There is no products 😕</h1>
                        <p className="fs-5 text-center">Come here later!</p>
                    </div>
                ) : (
                    products.items.map(product => (
                        <Col key={product.id} xs={12} sm={12} lg={6} xl={4} className="mb-4">
                            <ProductBlock
                                id={product.id}
                                name={product.name}
                                description={product.description}
                                img={product.img}
                                price={product.price}
                                category={product.category.name}
                            />
                        </Col>
                    ))
                )
            )}

            {isPagination && (
                <ReactPaginate
                    pageCount={products.meta.last_page}
                    nextLabel=">"
                    previousLabel="<"
                    pageRangeDisplayed={4}
                    onPageChange={handlePageClick}
                />
            )}
        </Row>
    )
}

export default ProductList;