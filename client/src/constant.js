export const APIENDPOINT="https://mern-app-depressor.onrender.com/";

export const getuserData=`${APIENDPOINT}getdata`;
export const getAllData=`${APIENDPOINT}getalldata`;
export const AUTH=`${APIENDPOINT}auth`;
export const SLTEST=`${APIENDPOINT}sltest`;
export const login=`${APIENDPOINT}login`;
export const updateChats=`${APIENDPOINT}updatechats`;
export const deletchatsAll=`${APIENDPOINT}deletechatsall`;
export const deletchatsLast=`${APIENDPOINT}deletechatslast`;
export const createprofile=`${APIENDPOINT}profile`;
export const addStory=`${APIENDPOINT}addstory`;
export const SVM=`${APIENDPOINT}svm`;
export const placeOrder=`${APIENDPOINT}placeorder`;
export const register=`${APIENDPOINT}register`;
export const addtoCart=`${APIENDPOINT}addtocart`;
export const deleteorder=`${APIENDPOINT}deleteorder`;
export const deletetocart=`${APIENDPOINT}deletetocart`;
export const deletechats=`${APIENDPOINT}deletechats`;
export const deletemy_members=`${APIENDPOINT}deletemy_members`;
export const logout=`${APIENDPOINT}logout`;
export const sahyog_memory=`${APIENDPOINT}sahyog_memory`;
export const updateproblem=`${APIENDPOINT}updateproblem`;
export const profile_update=`${APIENDPOINT}profile_update`;
export const updaterelievers=`${APIENDPOINT}updaterelievers`;
export const update_password=`${APIENDPOINT}update_password`;
export const postCommentStory=`${APIENDPOINT}postCommentStory`;
export const findstorygetdata=`${APIENDPOINT}findstorygetdata`;

export function post(variables){
    const token=localStorage.getItem('authorization');
    const apiHeaders={
        method: "POST",
        headers: {
            Accept: "application/json",
            "Authorization":`Bearer ${token}`,
            "Content-Type": "application/json",
          },
        body: JSON.stringify(
           variables
        )
    }
    return apiHeaders;
};


export function get(){
    const token=localStorage.getItem('authorization');
    const apiHeaders={
        method: "GET",
        headers: {
          Accept: "application/json",
          "Authorization":`Bearer ${token}`,
          "Content-Type": "application/json",
        }
    }
    return apiHeaders;
}