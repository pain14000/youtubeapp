import React from 'react';


class SearchBar extends React.Component{
    state = { term: ''};

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };

    onInputChange = (event) => {
        this.setState({ term: event.target.value});
        console.log('Text Entered:',event.target.value);
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSubmit}>
                    <div className="field">
                        <label> Video Search </label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;