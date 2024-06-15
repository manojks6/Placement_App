import Navbar from "../Components/Navbar";
import '../CSS/Dsa.css'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Answer from "../Components/Answer";

function Dsa() {
   const [data, setData] = useState([]);
   const [QA, setQA] = useState([]);
   const [ans, setAns] = useState(false);
   useEffect(() => {
      axios
         .get("http://localhost:8000/dsa")
         .then((res) => {
            setData(res.data);
            //console.log(res.data);
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   const Topics = [],
   qustionAnswer = [];
   data.map((i, j) => <>{(qustionAnswer[j] = i.QA)};</>);
   data.map((i, j) => <>{(Topics[j] = i.Topic)};</>);
   const onClickListner = (index) => {
      setAns(true);
      setQA(qustionAnswer[index]);
   };
   console.log(Topics);
   return (
      <div>
         <div className="Aptitude_Navbar">
            <Navbar />
         </div>
         <div className="Aptitude_Body">
            <div className="content">
              {data.length!=0? <h3> Topics</h3> : <marquee direction="right" scrollamount="14"> database connection failed</marquee>}
               {Topics.map((topicname, index) => (
                  <div className="items">
                     <div className="link">
                        <Link
                           to={"/dsa"}
                           onClick={() => {
                              onClickListner(index);
                           }}>
                           {topicname}
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
            <div className="answers">{ans ? <Answer QA={QA} /> : <></>}</div>
         </div>
         <div></div>
      </div>
   );
}

export default Dsa;
