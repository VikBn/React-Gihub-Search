import React, {Component} from 'react';
import Repo from './Repo';
import styled from 'styled-components';
import InfoPanel from "./InfoPanel";

export default class Profile extends Component {
    render() {
        const {user, repos, isLoaded, error} = this.props;
        return (
            <React.Fragment>
                {isLoaded && !error
                    ?
                    <ProfileWrapper>
                        <div className="container-fluid profile__wrapper mt-4 d-flex flex-wrap">
                            <div className="col-md-3 col-sm-12 mb-3">
                                <div className="profile__info mb-3">
                                    <img className="profile__img" src={user.avatar_url}
                                         alt="avatar"/>
                                    <div>
                                        <span className="profile__name d-block my-2">{user.name}</span>
                                        <span className="profile__nickname">{user.login}</span>
                                        <div className="profile__bio d-none d-sm-block my-2">{user.bio}</div>
                                        <div className="mb-3">
                                            {user.location ?
                                                <img className="align-baseline mr-1" width="14" src="./img/location.svg"
                                                     alt=""/>
                                                : null}
                                            {user.location}
                                        </div>
                                    </div>
                                </div>


                                <div className="profile__bio d-block d-sm-none mb-3">{user.bio}</div>
                                <a target="_blank" rel="noopener noreferrer" href={user.html_url}
                                   className="btn btn-light btn-lg py-1 border btn-block text-capitalize profile__btn">view
                                    profile
                                </a>
                            </div>

                            <div className="col-md-9 col-sm-12">
                                <InfoPanel user={user} />

                                {repos ? <h6 className="font-weight-normal">Repositories</h6> : null}

                                {repos.length > 0 ?
                                    <div className="d-flex justify-content-between flex-wrap">
                                        {repos.map(repo => {
                                            return (
                                                <Repo repo={repo} key={repo.id}/>
                                            )
                                        })}
                                    </div>
                                    :
                                    <div className="text-warning">There are no repos...</div>
                                }
                            </div>
                        </div>
                    </ProfileWrapper>
                    :
                    (error
                            ?
                            <div className="text-danger text-center mt-5 font-weight-bold">We could not find any user
                                with
                                specific login</div>
                            :
                            null
                    )}
            </React.Fragment>
        )
    }
}

const ProfileWrapper = styled.div`
  
    .profile__wrapper {
        padding: 0 3rem;
    }
     
    .profile__img {
       max-width: 260px;
       max-height: 260px;
       width: 100%;
       border-radius: 5px;
     }
     
     .profile__btn {
        font-size: 14px;
        font-weight: 600;
     }
    
    .profile__name {
        font-size: 26px;
        line-height: 1;
        font-weight: 500;
    }
    
    .profile__nickname {
        color: #666;
        font-size: 20px;
        font-weight: 300;
        line-height: 1em;
    }
    
    .profile__bio {
        font-size: 14px;
        color: gray;
    }

@media (max-width: 551px) {

  .profile__wrapper {
      padding: 0;
  }
  
  .profile__info {
      display: flex;
  }
  
  .profile__img {
      max-width: 150px;
      max-height: 150px;
      margin-right: 16px;
  }
  
  .profile__name {
      font-size: 20px;
  }
  
  .profile__nickname {
      font-size: 18px;
  }
  
  .search__btn,
  .repo {
      width: 100%;
  }
}

@media (min-width: 552px) and (max-width: 767px) {

  .profile__wrapper {
     padding: 0 1rem;
  }

  .repo {
     width: 100%;
  }
}
`;