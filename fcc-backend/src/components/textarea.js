import React, {Component} from 'react'

class Textarea extends Component {
    constructor(props) {
        super(props);

        this.inputChanged = this
            .inputChanged
            .bind(this);
    }
    inputChanged(event) {
        this.setState = {
            input: event.target.value
        }
        console.log(event.target.value);
    }
    render() {
        return (
            <div className="col-6">
                <div className="bg-light form-group">
                    <h4 className="text-center">Input</h4>
                    <hr/>
                    <textarea
                        className="form-control"
                        value={this.state.input}
                        rows="6"
                        onChange={this.inputChanged}></textarea>
                </div>
            </div>
        )
    }
}
