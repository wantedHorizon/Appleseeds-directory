import React from 'react';

class ApprovalCard extends React.Component  {
  
  render(){
    return (
      <div>
        <div className="ui card">
          <div className="image">
            <img src={this.props.avatar} />
          </div>
          <div className="content">
            <a className="header">{this.props.title}</a>
            <div className="meta">
              <span className="date">Joined in 2013</span>
            </div>
            <div className="description">
             {this.props.desc}
      </div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
        {this.props.follow} Friends
      </a>
          </div>
        </div>
      </div>
    );
   
  }
  
};

export default ApprovalCard;
