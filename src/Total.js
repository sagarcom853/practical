import React from "react"
class Total extends React.Component {
    constructor(props){
super(props)
this.state={
    InvestedTotal:[],
    TotalProfit:[]
}
    }
    render(){
        console.log(this.props)
        return(
            <div>
               <p>Total Invested:{this.props.total}</p>
                <p>Total Profit:{this.state.TotalProfit}</p>
            </div>
        )
    }
}
export default Total