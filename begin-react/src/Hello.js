import React, { Component } from 'react';

// function Hello({name, color="green", isSpecial}) {
//   return (
//   <div style={{color}}>
//       {isSpecial?<b>*</b>:null}
//       안녕하세요 {name}
//   </div>
//   );
// }

// Hello.defaultProps = {
//     name : "노네임",
// }
class Hello extends Component{
  render(){
    const {color, name, isSpecial} = this.props;
    return(
      <div style={{color}}>
        {isSpecial && <b>*</b>}
        hello.js {name}
      </div>
    );
  }
};
export default Hello;