export interface LoginInterFace{
    success:boolean,
    message:string,
    description:string
    data:{
        token:string,
        username:string,
        firstName:string,
        lastName:string,
        refreshToken:string
    }
}