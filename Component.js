import React,{Component} from "react";
class TextTransformer extends Component{
    constructor(props){
        super(props);
        this.state={
            inputText:''
        };
    }
    handleChange=(event)=>{
        this.setState({inputText:event.target.value});
    };
    handleUpperCase=()=>{
        console.log(this.state.inputText,toUpperCase());
    };
    handelLowerChange=()=>{
        console.log(this.state.inputText.toLocaleLowerCase());
    };
    render(){
        return(
            <div style={{padding:'20px'}}>
                <input
                type="text"
                placeholder="Enter text"
                value={this.state.inputText}
                onChange={this.handleChange} />

                <be /><br/>
                <button onClick={this.handleUpperCase}>upper Case</button>
                <button onClick={this.handelLowerChange} style={{marginLef:'10px'}}>
                    Lower Case
                </button>

            </div>
        );
    }
}
export default TextTransformer;