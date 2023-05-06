import React from "react";
import {Button, Card} from "react-bootstrap";
import ContentLoader from 'react-content-loader'

const ProductSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="2" y="3" rx="0" ry="0" width="257" height="147"/>
            <rect x="5" y="167" rx="0" ry="0" width="175" height="14"/>
            <rect x="6" y="258" rx="5" ry="5" width="135" height="36"/>
            <rect x="6" y="197" rx="0" ry="0" width="175" height="46"/>
        </ContentLoader>
    )
}

export default ProductSkeleton;