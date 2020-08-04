import React from 'react';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

	handlerChange = (e) => {
		this.setState({ text: e.target.value });
	};

	submitForm = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state.text);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<div className="todo-form">
						<input
							placeholder="Input a new Todo here..."
							value={this.state.text}
							onChange={this.handlerChange}
						/>
						<button>add</button>
					</div>
				</form>
			</div>
		);
	}
}

export default TodoForm;
