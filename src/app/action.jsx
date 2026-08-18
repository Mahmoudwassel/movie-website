export function addtofavoit(data){
    return{
        type:"ADDTOFAVORIT",
        payload:data,
    }
}
export function removefromfavoit(data){
    return{
        type:"REMOVEFROMFAVORIT",
        payload:data.id
    }
}