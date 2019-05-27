import { UEFA_DATA_API} from '../../constants/api';

import {getCallApi } from '../../utils/utils';

import { asyncDataLoading } from '../action/home.action';


export const asyncGetData = () =>{
    return(dispatch) =>{
        return getCallApi(UEFA_DATA_API)
        .then(data=>{  
            dispatch(asyncDataLoading(data))
           
            return Promise.resolve(data)
        })
        .catch(error=>{
            return Promise.resolve(error)
        })
    }
}