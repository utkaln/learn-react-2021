import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// this is how not default exports are used, name must match
import {memberData} from './membersdata'

// this is how default exports are used, name need not match
import Member from './Member'

const root = ReactDOM.createRoot(document.getElementById('root'));

function MemberList() {
  return (
    <section className='memberlist'>
      {
        memberData.map(member => {
          return <Member key={member.memId} {...member}/>
        })
      }
    </section>
  );
}


root.render(
  <React.StrictMode>
    <App />
    <MemberList/>
  </React.StrictMode>
);


 