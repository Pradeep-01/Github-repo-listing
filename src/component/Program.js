import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Newone from "./Newone";

const Program = () => {
  const { id } = useParams();
  const [program, setProgram] = useState({});
  const [program2, setProgram2] = useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(response=> response.json())
    .then(data=> setProgram(data) )
    fetch(`https://api.github.com/users/${id}/repos`)
    .then(response=> response.json())
    .then(data=> setProgram2(data) )
  }, [id]);


  return ( program.message ? <h2>Invalid Git hub id{console.log("refresh")}</h2> :
    <div>
        <div style={{boxSizing:"border-box", display:"block", 
        backgroundColor:"aliceblue", width:"96%", marginLeft:"2%"}}>
    {/*                        -----------------------                     */}
          <div style={{boxSizing:"border-box",display:"inline-block", padding:"2px",
          width:"300px", textAlign:"center"}}>
          <img src={program.avatar_url} alt="User " 
          style={{borderRadius:"50%", height:"150px", width:"150px"}}/>
          <a href="program.html_url">{program.html_url}</a>
          </div>
          {/*                        -----------------------                     */}
          <div style={{boxSizing:"border-box",display:"inline-block", marginLeft:"2px"}}>
          <p>{program.login}</p>
          <p>{program.bio}</p> 
          <p>{program.location}</p>
          <p>{program.twitter_username}</p>
          </div>
          </div>
    {/*                        -----------------------                     */}
          <div style={{boxSizing:"border-box", display:"flex", 
          flexWrap:"wrap", justifyContent:"space-between"}}>
          {
           
            program2.map((el)=>{
              return <Newone allrepo={el}/>
            })
          }
        </div>
    {/* ----------------------------------------------------------------------- */}

        </div>

        
  );
};
export default Program;
