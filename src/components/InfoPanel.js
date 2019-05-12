import React, {Component} from 'react';
import styled from "styled-components";

export default class InfoPanel extends Component {
    render() {
        const {user} = this.props;
        return (
            <React.Fragment>
                <PanelWrapper>
                    <div className="info__header d-flex flex-wrap mb-4">
                        <div className="info__box mr-4">
                            <span className="info__title">Repositories</span>
                            <span className="info__count">{user.public_repos}</span>
                        </div>
                        <div className="info__box mr-4">
                            <span className="info__title">Followers</span>
                            <span className="info__count">{user.followers}</span>
                        </div>
                        <div className="info__box">
                            <span className="info__title">Following</span>
                            <span className="info__count">{user.following}</span>
                        </div>
                    </div>
                </PanelWrapper>
            </React.Fragment>
        )
    }
}

const PanelWrapper = styled.div`

    .info__header {
       padding: 20px 0;
       border-bottom: 1px solid #d1d5da;
    }
     
    .info__title {
       font-size: 14px;
       font-weight: 500;
       margin-right: 4px;
    }
    
    .info__count {
       background-color: #ededee;
       border-radius: 50%;
       font-size: 12px;
       padding: 1px 3px;
    }
`;