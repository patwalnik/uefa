const SHOW_UEFA_DATA = 'SHOW_UEFA_DATA';

export const asyncDataLoading = (data) =>{
    // console.log( 'action realeased', data)
    return{
        type: SHOW_UEFA_DATA,
        data
    }
}
