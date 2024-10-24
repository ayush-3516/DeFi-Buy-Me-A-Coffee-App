import React, { useEffect, useState } from 'react';

const Memos = ({state}) => {
  const [memos,setMemos]= useState([]);
  const {contract}= state;
  useEffect(()=>{
    const memosMesssage =async ()=>{
      const memo = await contract.getMemo();
      console.log( memo );
      setMemos(memo)
    };
    contract && memosMesssage();
  },[contract]);

  const style = {
    textAlign:"center",
    backgroundColor: "#96D4D4",
    border: "1px solid white",
    borderCollapse: "collapse",
    padding: "7px",
  };
  
  return (
    <div >
      <p style={{textAlign:"center",marginTop:"20px", fontSize: "24px", fontWeight: "bold"}}>
        Messages
      </p>
      {memos.map((memo)=>{
        return (
          <div
            className="container-fluid"
            style={{ width: "100%" }}
            key={Math.random()}
          >
            <table style={{ marginBottom: "10px", width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{...style, width: "20%"}}>
                    {memo.name}
                  </td>
                  <td className="hero" style={{...style, width: "30%"}}>
                    {new Date(memo.timestamp * 1000).toString()}
                  </td>
                  <td className="hero" style={{...style, width: "30%"}}>
                    {memo.description}
                  </td>
                  <td style={{...style, width: "20%"}}>
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  )
}

export default Memos;
