function clickHandler (e) {
 console.log('Event Details: ', e ); 
 console.log('***** Event target : ', e.target);
};

const Member = (props) => {
  // deconstruct the props into smaller variables
  const {memName, memImageSrc, lastActive} = props;
  return (<article className='member'>
    <h2>
    {memName}
    </h2>
    <img src= {memImageSrc} alt=''/>
    <h4>Last Active on: {lastActive}</h4>
    <button type='button' onClick={clickHandler}>Active On</button>
  </article>);
};

export default Member;