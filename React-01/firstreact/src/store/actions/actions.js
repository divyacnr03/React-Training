import  { ACTION_TYPE } from './action_type'
import axios from 'axios'

export function incrementPoint (data) {
    return {
        type : ACTION_TYPE.addAttendance, //'addAttendance' ,
        data: data
    }
}

export function decrementPoint (data) {
    return {
        type : ACTION_TYPE.subAttendance, //'subAttendance', 
        data: data
    }
}

export function setStudentData (data) {
    return {
        type :   ACTION_TYPE.init, // 'initialise',// ACTION_TYPE.init,
        data: data
    }
}

export function incrementPointUsingReduxThunk () {
    return function (dispatch) {
        console.log(" Inside REDU thunk function")

        let data = {
            studentName : "Harsh", pointsToIncrement: 10
        }
        dispatch( incrementPoint(data));
    }
}


export function initialiseUsingReduxThunk ( )  {

    return function(dispatch){

        axios.get("https://studentteacherexercise-6.firebaseio.com/studentDetails.json")
        .then((response) => {
            let responseData = Object.entries(response.data);
            // setStudents(responseData.map(element => ({ studentName: element[1].studentName, attendance: 0 })))
            console.log(" in reux thunk")
            dispatch(setStudentData(responseData.map(element => ({ studentName: element[1].studentName, attendance: 0 }))))
        })
        .catch((error) => {
            console.log(error)
        })

    }
    
}