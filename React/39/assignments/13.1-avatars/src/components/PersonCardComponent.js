import React from 'react';
const PersonCardComponent = ({ data }) => {
    return (
        <div className="ui card">
            <div className="content">
                <p>{`${data.firstname} ${data.lastname}`}</p>
            </div>
            <div className="ui  image"  >
                <img src={data.src}   alt={data.description}  />
            </div>
        </div>
    );
}
export default PersonCardComponent;