import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../Apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onSearchSubmit('vikings');
    }

    onSearchSubmit = async term => {
        console.log('onSearchSubmit');
        const result  = await Youtube.get('search',{
            params : {
                q: term
            }
        });

        this.setState({ 
            videos: result.data.items, 
            selectedVideo: result.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video});
    };

    render(){
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"><VideoDetail video={this.state.selectedVideo}/></div>
                        <div className="five wide column"><VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;