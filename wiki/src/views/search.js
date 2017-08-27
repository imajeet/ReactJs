import React, {Component} from 'react'

const URL_QUOTES = 'http://quotes.stormconsultancy.co.uk/random.json';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    componentDidMount() {
        fetch(URL_QUOTES, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                this.setState({query: json})
            })
    }

    getNewQuote = () => {
        fetch(URL_QUOTES, {method: 'GET'})
            .then(response => response.json())
            .then(json => {
                this.setState({query: json})
            })

    }

    render() {

        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div
                        className="card mb-3"
                        style={{
                        width: "20rem"
                    }}>
                        <div className="card-header bg-light text-center ">
                            <b>eMASYS Random Quotes</b>
                        </div>
                        <div className="card-body text-dark">
                            <p className="card-text">{this.state.query.quote} {" "}<b>
                                    ~{this.state.query.author}</b>
                            </p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-outline-dark" onClick={this.getNewQuote}>Get another qoute</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
