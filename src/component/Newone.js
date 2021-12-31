import React from 'react';

const Newone = (props) => {
  const {allrepo} = props;
  const {name, language, description} = allrepo;

return ( 
  <div style={{border:"1.5px solid black", width:"45%", margin:"2%", 
  paddingLeft:"4px", paddingBottom:"4px"}}>
    <p style={{color:"blue", fontSize:"18px"}}>{name}</p>
    <p>{description}</p>
    {language && <button style={{color:"white", backgroundColor:"#548CFF"}}>{language}</button>}
  </div>
);
};



export default Newone;