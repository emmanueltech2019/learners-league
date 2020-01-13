import React from 'react'


class Navmodal extends React.Component{
    onClose=(e)=>{
        this.props.onClose && this.props.onClose(e);
    }
  
    render(){
        if (!this.props.show){
            return null;
        }
        return(
            <div>
               {this.props.children }
               <button onClick={(e)=>{
                   this.onClose(e)
               }}>
                   close
               </button>
            </div>
        )
    }
}

export default Navmodal;