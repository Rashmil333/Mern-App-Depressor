export const APIENDPOINT="https://mern-app-depressor.onrender.com/";

export const getuserData=`${APIENDPOINT}getdata`;
export const AUTH=`${APIENDPOINT}auth`;
export const SLTEST=`${APIENDPOINT}sltest`;
export const login=`${APIENDPOINT}login`;

export function post(variables){
    const apiHeaders={
        method: "POST",
        headers: {
            Accept: "application/json",
            "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE2NjgzYTc3ZmNlOTA0OWM2ZTlmMzAiLCJpYXQiOjE2NzI0Nzc5MDN9.zpK_Vt_EM4vyBkVqp4oyAv3AwIzx_lErD9QTr29I3VY`,
            "Content-Type": "application/json",
          },
        body: JSON.stringify(
           variables
        )
    }
    return apiHeaders;
};


export function get(){
    const apiHeaders={
        method: "GET",
        headers: {
          Accept: "application/json",
          "Authorization":`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE2NjgzYTc3ZmNlOTA0OWM2ZTlmMzAiLCJpYXQiOjE2NzI0Nzc5MDN9.zpK_Vt_EM4vyBkVqp4oyAv3AwIzx_lErD9QTr29I3VY`,
          "Content-Type": "application/json",
          "Cookie":"jwtoken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE2NjgzYTc3ZmNlOTA0OWM2ZTlmMzAiLCJpYXQiOjE2NzI0Nzc5MDN9.zpK_Vt_EM4vyBkVqp4oyAv3AwIzx_lErD9QTr29I3VY"
        },
    }
    return apiHeaders;
}