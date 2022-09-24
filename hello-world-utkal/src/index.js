import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const memberData = [
  {
    memName: 'Utkal Nayak, Sparks, Maryland',
    lastActive: 'August, 2022',
    memImageSrc: 'https://storage.googleapis.com/du-prd/books/images/9781368076685.jpg'

  },
  {
    memName: 'Shreeya Nayak, Sparks, Maryland',
    lastActive: 'September, 2022',
    memImageSrc: 'https://scontent-iad3-2.xx.fbcdn.net/v/t39.30808-6/302314766_498925805572852_6198345715476513592_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rktpJV7D0kwAX9xNSFa&_nc_ht=scontent-iad3-2.xx&oh=00_AT-AXoB1Mi6JbmYxELkK7fzA4biUgPxUZ53VfVYEzK-7tg&oe=6334D9AD'
  }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

function MemberList() {
  return (
    <section className='memberlist'>
      <h3>This is the list of Members of the Community</h3>
     <ol>
      <li>
        <Member memData={memberData[1]}/>
      </li>
      <li>
        <Member memData={memberData[0]}/>
      </li>
     </ol>
      
    </section>
  );
}


const Member = (props) => {
  console.log(props);
  return <article className='member'>
    <h2>
    {props.memData.memName}
    </h2>
    <section><img src= {props.memData.memImageSrc} alt=''/></section>
    <section><h4><section>Last Active on: {props.memData.lastActive}</section></h4></section>
    {console.log(props)}
  </article>
};


root.render(
  <React.StrictMode>
    <App />
    <MemberList/>
  </React.StrictMode>
);


 