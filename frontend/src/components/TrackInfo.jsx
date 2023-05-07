import React from 'react';
import {Badge, ListGroup, Tab, Tabs, Toast} from "react-bootstrap";

const TrackInfo = ({track}) => {
    const [key, setKey] = React.useState('track');

    return (
        <Tabs
            defaultActiveKey="profile"
            activeKey={key}
            id="uncontrolled-tab-example"
            className="mt-2"
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="track" title="Track" className="mt-2">
                <div>
                    <Toast>
                        <Toast.Header>
                            <strong className="me-auto">{track.name}</strong>
                            <small>Billed: {track.billedDate}</small>
                        </Toast.Header>
                        <Toast.Body>
                            <div><span style={{fontWeight: 500}}>Status</span>: {track.status}</div>
                            <div><span style={{fontWeight: 500}}>Address</span>: {track.street}</div>
                        </Toast.Body>
                    </Toast>
                </div>
            </Tab>
            <Tab eventKey="products" title="Products" className="mt-2">
                <ListGroup>
                    {track.products.map(product => (
                        <ListGroup.Item
                            key={product.id}
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{product.name}</div>
                            </div>
                            <Badge bg="primary" pill>
                                {product.count}
                            </Badge>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Tab>
        </Tabs>
    )
}
export default TrackInfo;