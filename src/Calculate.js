import React from 'react'
import Total from "./Total"
class Calculate extends React.Component {
    constructor(props){
        super(props)
        this.state={
Amount:"",
total:"",
LastArray:[],
SharePrice: [
    {Share:'L&T',Buy:100.0,Sell:112.0},
    {Share:'NHPC',Buy:25.6,Sell:28.8},
    {Share:'SBICARD',Buy:80.0,Sell:85.4},
    {Share:'Apollo',Buy:250.0,Sell:195.0},
    {Share:'Edelweiss',Buy:290.24,Sell:62.8},
    {Share:'ITC',Buy:153.95,Sell:244.94},
    {Share:'TCS',Buy:456.0,Sell:561.0},
    {Share:'CEAT',Buy:200.0,Sell:205.44},
    {Share:'HDFCBANK',Buy:806.0,Sell:1008.5},
    {Share:'PowerGrid',Buy:190.0,Sell:565.45},
    {Share:'AXISBANK',Buy:30.5,Sell:80.54},
    {Share:'BajajFinserv',Buy:31.6,Sell:81.65},
    {Share:'CIPLA',Buy:140.0,Sell:157.45},
    {Share:'EKC',Buy:80.5,Sell:88.5},


  ],
        }
    }
    calculate=(event)=>{
        this.setState({Amount:event.target.value})
    }

    HandleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.Amount)
        this.setState({Amount:""})
    let finalArray= this.checkShare()
    console.log(finalArray)
       this.setState(()=>({LastArray:finalArray}))
       
      
    }
    checkShare=()=>{
        let Amount=this.state.Amount
        let sharePrice=this.state.SharePrice
    
        let arr=[]
        let profit=[]
        for (let i=0;i<sharePrice.length;i++){
            profit.push(+(sharePrice[i].Sell-sharePrice[i].Buy).toFixed(2))
        }
        for(let i=0;i<sharePrice.length;i++){
            if(sharePrice[i].Buy<Amount){
                arr.push(sharePrice[i].Buy) 
            }
        }
        arr.sort(function(a,b){
            return a-b
        })

        console.log(arr)
        console.log(profit)
        var n=arr.length

        function add(arr,n,sum){
            let current_sum=arr[0],max_sum=0
            var start=0
            for(let i=1;i<n;i++){
                if(current_sum<=sum){
                    max_sum=Math.max(max_sum,current_sum)
                }
                while(current_sum+arr[i]>sum && start<i){
                    current_sum-=arr[start]
                    start++
                }
                current_sum+=arr[i]
            }
            if(current_sum<=sum){
                max_sum=Math.max(max_sum,current_sum)
                return max_sum
            }
        }
       let addedArray= add(arr,n,Amount)

       console.log(addedArray)
    
       var newArray=[]
       var sum1=0
       for(let i=0;i<arr.length;i++){
          
           if(sum1<=addedArray){
               sum1+=arr[i]
               console.log(sum1,addedArray)
               if(sum1<=addedArray){
                newArray.push(arr[i])
               }
           }
       }
       console.log(newArray)
       var finalArray=[]
       for(let i=0;i<sharePrice.length;i++){
           console.log(sharePrice[i].Buy)
           for(let j=0;j<newArray.length;j++){
            if(sharePrice[i].Buy===newArray[j]){
                finalArray.push(sharePrice[i])
            }
           }
       }
       console.log(finalArray)
      return finalArray
    }

  render() {
      const {Amount}=this.state
    return (
      <div>
        <form onSubmit={this.HandleSubmit}>
          <div>
            <label HtmlFor='Amount'>Amount:</label>
            <input type='number' value={this.state.Amount} name="Amount" id="Amount" onChange={this.calculate}/>
            <br/>
            <div >
              <button type='submit'>Calculate</button>
            </div>
          </div>
        </form>
  
        Invested Share:
        <table className='table'>
          <thead className='center'>
              
            <tr>
              <th>Share</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Profit</th>
              
            </tr>
          </thead>
          <tbody>
              <tr>
                  
                
                  {/* <td><ul>{this.state.Buy.map(b=><li>{b}</li>)}</ul></td>
                  <td><ul>{this.state.Sell.map(s=><li>{s}</li>)}</ul></td>
                  <td><ul>{this.state.Profit.map(p=><li>{p}</li>)}</ul></td>  */}

              </tr>
          </tbody>
        </table>

      </div>

    )
  }
}
export default Calculate
