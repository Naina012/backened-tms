import { postApi, getApi, deleteApi, putApi } from "./API_Methods";


// const LOGIN = "data/loginaccount";
// export const LoginApi = (payload)=>{
//     return postApi(LOGIN, payload);
// }


// const OTP = "data/forgettpasswordgenerateotp"

// export const OtpApi = (payload)=>{
//     return putApi(OTP, payload);
// }


// const HomeData ="/data/showitemstouser"
// export const HomeDataApi = (payload)=>{
//     if (payload === "" || payload === " " ||payload === undefined ) 
//     {
//         return getApi(HomeData,payload)
//     }
//     else{

//         return getApi(HomeData+"?search="+ payload);
//     }
// }


// const Categories = "/data/showAllsubcategoriesTouser"
// export const CategoriesApi = (payload)=>{
//     return getApi(Categories , payload );
// }


// const UserDel ="/data/deleteuseritem"
// export const UserDelApi = (payload)=>{
//     return deleteApi(UserDel,payload)
// }
// export const deleteReport = (id) => {
//   return deleteApi(`${DELETE_REPORT}?report_id=${id}`);
// };
// GET : /post/getTagsDetails?post_id