import React from 'react'
import Filter from '../components/Filter.jsx'
import Product from '../components/Product.jsx'
import { Grid, Row, Col, ListGroup } from 'react-bootstrap'
import { VIEW_PRODUCT_GRID, VIEW_PRODUCT_LIST } from '../components/Constants.jsx'

export default class ShoppingCartPage extends React.Component {


    createInnerStructure(mode, amountColumns){
        return (
            <Row className="show-grid">
                {this.props.shoppingcart.products.map(sp =>
                    <Col key={sp._id} md={amountColumns} style={{ marginTop: 10 + 'px' }}>
                        {<Product {...sp} mode={mode} />}
                    </Col>
                )}
            </Row>
        )
    }

    createOuterStructure() {
        if (this.props.filter.view === VIEW_PRODUCT_GRID) {
            const gridStyle = {
                top: 51,
                width: 85 + '%',
                marginRight: 0 + 'px',
                position: 'relative',
                paddingBottom: 100 + 'px',
                minHeight: 100 + '%'
            }

            return (
                <Grid style={gridStyle}>
                    {this.createInnerStructure.bind(this, VIEW_PRODUCT_GRID, 4)()}
                </Grid>
            )
        } else if (this.props.filter.view === VIEW_PRODUCT_LIST) {
            const listStyle = {
                top: 51,
                width: 129 + '%',
                position: 'relative',
                paddingRight: 15 + 'px',
                paddingLeft: 15 + 'px',
                marginRight: 0 + 'px',
                marginLeft: 15 + '%',
                paddingBottom: 100 + 'px',
                minHeight: 100 + '%'
            }

            return (
                <ListGroup componentClass="ul" style={listStyle}>
                    {this.createInnerStructure.bind(this, VIEW_PRODUCT_LIST, 8)()}
                </ListGroup >
            )
        }
    }
    render() {
        return (
            <div>
            <div>
                {this.props.shoppingcart.products.map(sp =>
                    <Product key={sp.id} {...sp} />
                )}
            </div>

            <div>
            <Button bsStyle="success">Checkout</Button>
            </div>

            </div>
        )
    }
}