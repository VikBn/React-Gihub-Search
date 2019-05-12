import React, {Component} from 'react';
import styled from "styled-components";

export default class SearchField extends Component {
    render() {
        const {value, handleSubmit, handleChange} = this.props;
        return (
            <React.Fragment>
                <SearchWrapper
                    className="d-flex align-items-center flex-wrap justify-content-md-between justify-content-center">
                    <div className="search__wrapper">
                        <img className="search__logo" src="./img/github-logo.svg" alt="logo"/>
                        <span className="search__logo-text text-white text-capitalize">search user with github</span>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input type="text" autoFocus className="form-control search__input"
                                       onChange={handleChange} value={value} placeholder="Enter User Login"/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary search__btn w-100" onClick={handleSubmit}
                                            type="button">Search
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <h4 className="search__title text-white text-capitalize ml-1 d-none d-sm-block">search user with github</h4>
                </SearchWrapper>
            </React.Fragment>
        )
    }
}

const SearchWrapper = styled.div`
    background-color: #24292e;
    padding: 16px;
    
    .search__wrapper {
        align-items: center;
        display: flex;
    }
    
    img {
        margin-right: 16px;
        width: 32px;
        height: 32px;
    }
    
    .search__input {
        width: 320px;
        background-color: #3f4448;
        border: none;
        color: #d3d3d3;
    }
    
    .search__logo-text {
        display: none;
        font-size: 21px;
        font-weight: 500;
    }

@media (max-width: 576px) {
    .search__input,
    .search__btn {
        border-radius: 0;
        margin: 4px 0;
    }
  
  .search__logo {
      margin-bottom: 8px;
  }
  
  .search__input,
  .search__wrapper .input-group-append{
      width: 100%;
  }
  
  .search__wrapper {
      display: block;
  }
  
  .search__logo-text {
      display: inline-block;
  }
}
`;