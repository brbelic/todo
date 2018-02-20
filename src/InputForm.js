import React from 'react';

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleChange(evt) {
        const value = evt.target.value;

        this.setState({ text: value });
    }

    handleSave(evt) {
        evt.preventDefault();

        const addTask = this.props.addTask;
        const text = this.state.text;

        if (addTask) {
            addTask(text);

            this.setState({ text: '' });
        }

    }

    render() {
        return (
            <div className="col-sm-6 col-sm-offset-3">
                <form className="col-sm-12 col-xs-12">
                    <input
                        value={this.state.text}
                        onChange={evt => this.handleChange(evt)}
                        className="col-sm-8 col-xs-8"
                        placeholder=" Enter task."
                        type="text"
                    />
                    <button className="col-sm-4 col-xs-4 btn-primary" onClick={evt => this.handleSave(evt)}>+</button>
                </form>
            </div>
        );
    }
}

export default InputForm;