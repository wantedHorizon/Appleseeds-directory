import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">


      <ApprovalCard avatar={faker.image.abstract()} title={faker.name.title()}  desc={faker.name.jobDescriptor()} follow={Math.floor(Math.random()*16)}  />
      <ApprovalCard avatar={faker.image.animals()} title={faker.name.title()}  desc={faker.name.jobDescriptor()} follow={Math.floor(Math.random()*16)}  />
      <ApprovalCard avatar={faker.image.city()} title={faker.name.title()}  desc={faker.name.jobDescriptor()} follow={Math.floor(Math.random()*16)}  />


    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
