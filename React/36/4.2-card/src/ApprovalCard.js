import React from 'react';

const ApprovalCard = props => {
  console.log(props);
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={props.avatar} />
        </div>
        <div className="content">
          <a className="header">{props.title}</a>
          <div className="meta">
            <span className="date">Joined in 2013</span>
          </div>
          <div className="description">
           {props.desc}
    </div>
        </div>
        <div className="extra content">
          <a>
            <i className="user icon"></i>
      {props.follow} Friends
    </a>
        </div>
      </div>
    </div>
  );
 
};

export default ApprovalCard;
