import React ,{  Component } from "react";
import {connect} from 'react-redux';
import {asyncGetData} from '../actions/index'


class UefaTeams extends Component{



componentDidMount(){
    this.props.dispatch(asyncGetData())
    let loadData = this.props.homepageReducer

   }


showTeamsData =()=> {
    let loadData = this.props.homepageReducer.uefaData;
    if(!loadData){
        return <h3>loading</h3>
    }

 function shuffleCards(array) {
        var i = array.length,
          j = 0,
          temp;
    
        while (i--) {
          j = Math.floor(Math.random() * (i + 1));
    
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
        return array;
    }
    function chunk(array, size) {
        const chunked_arr = [];
        for (let i = 0; i < array.length; i++) {
          const last = chunked_arr[chunked_arr.length - 1];
          if (!last || last.length === size) {
            chunked_arr.push([array[i]]);
          } else {
            last.push(array[i]);
          }
        }
        
        return chunked_arr;
         
    }    


   
    
    
   


/*  to add country in sample data*/

function addCountryName(x){
    let index = x.teamname.indexOf('(')
  return  x.teamname.slice(index+1, index+4)
  
}

function addCountry(data){
 let d = []; 
for(let i=0; i< data.length; i++){
     let c =  [Object.assign(data[i],{ country : addCountryName(data[i]) } )]
     d = [...d, ...c]
}
return d
   
}

const addCountryData = addCountry(loadData)
/* to arrrange data in given format */ 

function swap(array, groupOfHowMuch){
   
   
   let group = array.length/groupOfHowMuch
   let teams = array.length/group
   if(!Number.isInteger(group)){
     return null
   }
   for(let i=1; i< group; i++ ){
   let temp;
   if(i<4){
      temp = array[i]
    array[i] = array[ (i+1)*teams]
    array[ (i+1)*teams]= temp 
   }
   if(i>=4){
      temp = array[i]
    array[i] = array[ i*teams]
    array[ i*teams]= temp 
    }
   
    }
   return array
}

let shuffleData = shuffleCards(addCountryData)
const sortedData = [...shuffleData.filter((data)=>{
    let x = data.dclChampion
    return x }),
     ...shuffleData.filter((data)=>{
    let y = !data.dclChampion
    return y }) ]



const swapArr = swap(sortedData, 4)



let chuckData = chunk(swapArr, 4)   
let groupName = ['Group A', 'Group B', 'Group C','Group D','Group E','Group F','Group G','Group H',] 
console.log('hello',chuckData)      
return (
             <ul style={{display:'flex', flexWrap: 'wrap'}}>
                {
                    groupName.map((data,i)=>{
                        return(
                        <div className="uefa-items"> 
                            <h2>{data}</h2>
                            {
                                chuckData[i].map(x=>{
                                    return(
                                        <ul className="list-group">
                                        
                                        <li className="list-group-item">
                                        <img style={{height: '40px', width: '40px'}} src={x.imageUrl} alt="No image"/>
                                         {x.country}
                                        </li>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                        
                        )
                       
                    })
                }
           
           </ul>
    )

}

    render(){
        return(
            <div className="container">
                <h1>Teams</h1>
                {this.showTeamsData()}
            </div>
        )
    }


    
}



const matchDispatchToProps = (dispatch) =>{
    return {
        dispatch
    }
}

// const mapStateToProps = (state) => {
//     return {
//        homepageReducer: state.homepageReducer
//     }
// }

export default connect( state=> state ,matchDispatchToProps)(UefaTeams);
