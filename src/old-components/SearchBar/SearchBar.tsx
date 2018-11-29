import * as React from 'react';
import { Search, SearchProps, SearchResultData } from 'semantic-ui-react';

class SearchBar extends React.Component<{}, {}> {
    state = {
        isLoading: false,
        searchValue: '',
        results: []
    }
    render = () => {
        return (
            <Search 
                loading={this.state.isLoading}
                onResultSelect={this.onResultSelect}
                onSearchChange={this.onSearchChange}
                results={this.state.results}
                value={this.state.searchValue}/>
        )
    }

    onSearchChange = (event: React.MouseEvent<HTMLElement>, data: SearchProps) => {
        this.setState({ isLoading: true, searchValue: data.value });
        // @TODO: search for value in results, return results
        this.setState({
            results: [
                {
                    title: 'result 1'
                },
                {
                    title: 'result 2'
                },
                {
                    title: 'result 3'
                }
            ],
            isLoading: false
        });
    } 

    onResultSelect = (event: React.SyntheticEvent, data: SearchResultData) => {
        this.setState({
            searchValue: data.result.title
        });
    }
}

export default SearchBar;