import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchField from "./components/SearchField";
import Profile from "./components/Profile";

class App extends Component {

    state = {
        user: {},
        repos: [],
        client_secret: '73d7efbedebdb0713d0b316032058629dc231f66',
        client_id: '982be8efef69d15a3bf1',
        username: 'VikBn',
        baseUrl: 'https://api.github.com/users/',
        search: '',
        isLoaded: false,
        error: ''
    };

    async getUser() {
        try {
            const data = await fetch(`${this.state.baseUrl}${this.state.search}?client_id=${this.state.client_id}&client_secret=${this.state.client_secret}`);
            const jsonData = await data.json();
            if (data.status !== 200) {
                this.setState({
                    error: 'We couldn’t find any repositories'
                });
            } else if (data.status) {
                this.setState({
                    user: jsonData,
                    isLoaded: true,
                    error: ''
                });
            }
            return jsonData;
        } catch (error) {
            console.log(error);
        }
    }

    async getRepos() {
        try {
            const data = await fetch(`${this.state.baseUrl}${this.state.search}/repos?client_id=${this.state.client_id}&client_secret=${this.state.client_secret}`);
            const jsonData = await data.json();
            this.setState({
                repos: jsonData
            });
            return jsonData;
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = e => {
        this.setState({
            search: e.target.value,
            isLoaded: false
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.search.length > 0) {
            this.getUser();
            this.getRepos();
        }
    };

    render() {
        const {user, repos, isLoaded, error} = this.state;
        return (
            <React.Fragment>
                <SearchField
                    user={user}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    value={this.state.search}
                />
                <Profile
                    isLoaded={isLoaded}
                    error={error}
                    user={user}
                    repos={repos}
                />
            </React.Fragment>
        );
    }
}

export default App;
