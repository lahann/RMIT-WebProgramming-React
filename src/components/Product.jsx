import React from 'react'
import { VIEW_PRODUCT_OVERVIEW, VIEW_PRODUCT_DETAILS, VIEW_PRODUCT_EDIT } from '../components/Constants.jsx'
import logo from '../images/cropped-logo.png';
import { Panel, Image } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.id,
            name: props.name,
            price: props.price,
            description: props.description,
            brand: props.brand,
            producer: props.producer,
            imageURL: props.imageURL
        }
    }

    handleClick() {
        alert('Click Event')
    }

    overview() {

        return (
            <div>
                <Panel footer={this.state.name} onClick={this.handleClick.bind(this)} data-tip data-for={this.state.id}>
                    <Image src={logo} responsive />
                </Panel>
                <ReactTooltip id={this.state.id} place="right" type="light" effect="float" delayShow={550} >
                    <span>
                        Name: {this.state.name} <br />
                        Price: {this.state.price} <br />
                        Description: {this.state.description} <br />
                        Brand: {this.state.brand} <br />
                        Producer: {this.state.producer} <br />
                    </span>
                </ReactTooltip>
            </div >
        )
    }

    details() {
        <div>
            <Panel footer={this.state.name}>
                <Image src={logo} responsive />

                ID: {this.state.id} <br />
                Name: {this.state.name} <br />
                Price: {this.state.price} <br />
                Description: {this.state.description} <br />
                Brand: {this.state.brand} <br />
                Producer: {this.state.producer} <br />
                Image URL: {this.state.imageURL} <br />
            </Panel>
        </div >
    }

    edit() {
        <div>
            <Panel footer={this.state.name}>
                <Image src={logo} responsive />

                ID: <input type="text" /> {this.state.id} <br />
                Name: <input type="text" />{this.state.name} <br />
                Price: <input type="text" />{this.state.price} <br />
                Description: <input type="text" />{this.state.description} <br />
                Brand: <input type="text" />{this.state.brand} <br />
                Producer: <input type="text" />{this.state.producer} <br />
                Image URL: <input type="text" />{this.state.imageURL} <br />
            </Panel>
        </div >
    }

    render() {
        switch (this.props.mode) {
            case VIEW_PRODUCT_OVERVIEW:
                return this.overview();

            case VIEW_PRODUCT_DETAILS:
                return this.detail();

            case VIEW_PRODUCT_EDIT:
                return this.edit();
        }
        return (<div></div>)
    }
}