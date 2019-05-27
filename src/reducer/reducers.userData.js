import sampleData from '../sampleData';
const SHOW_UEFA_DATA = 'SHOW_UEFA_DATA';

const initialState={
    uefaData: sampleData,
    arr1 : [ { a: 'a'}, { c:'c'}], 
    arr3: {}
}

export const homepageReducer = (state = initialState, action) =>{
// console.log('action released in reducer', action)
 
switch(action.type){
        case SHOW_UEFA_DATA:
        
        return  {   ...state,
                uefaData: action.data
            }
        

        
        default: 
        // console.log('reducer default', initialState)
        return {
            ...state,
        }
    }


}