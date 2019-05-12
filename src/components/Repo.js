import React, {Component} from 'react';
import styled from 'styled-components';

export default class Repo extends Component {
    render() {
        const {repo} = this.props;
        return (
            <React.Fragment>
                <RepoWrapper className="repo p-3 mb-3 border">
                        <div className="repo__top">
                            <a href={repo.html_url} className="repo__title"  rel="noopener noreferrer" target="_blank">{repo.name}</a>
                            <p className="repo__descr">{repo.description}</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="repo__box">
                                <div className={repo.language + ' repo__mark'} />
                                <span className="repo__span">{repo.language}</span>
                            </div>
                            <div className="repo__box">
                                <img src="./img/star.svg" alt="star" />
                                <span className="repo__span">{repo.stargazers_count}</span>
                            </div>
                        </div>
                </RepoWrapper>
            </React.Fragment>
    )}
}

const RepoWrapper = styled.div`
    width: calc(50% - 8px);
    
    .repo__title{
       font-size: 14px;
       font-weight: 600;
     }
    
    .repo__descr {
       font-size: 12px;
       color: gray;
       margin: 16px 0 20px 0;
    }
     
    .repo__box {
       display: flex;
       align-items: center;
       margin-right: 16px;
     }
     
    .repo__span {
       margin-left: 5px;
       font-size: 12px;
     }
     
    .repo__mark {
       width: 10px;
       height: 10px;
       border-radius: 50%;
       background-color:#178600;
    }
     
    .HTML {
      background-color:#e34c26;
    }
    
    .TypeScript {
      background-color:#2b7489;
    }
    
    .JavaScript {
      background-color:#f1e05a;
    }
    
    .Java {
      background-color:#b07219;
    }
    
    .CSS {
      background-color:#563d7c;
    }
    
    .Visual Basic {
      background-color:#945db7;
    }
    
    .Python {
      background-color:#3572A5;
    }
    
    .C {
      background-color:#555555;
    }
    
    .Lua {
      background-color:#000080;
    }
    
    .Shell {
      background-color:#89e051;
    }
    
    .PHP {
      background-color:#4F5D95;
    }
`;