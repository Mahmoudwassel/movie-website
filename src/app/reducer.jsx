const savedFavorites =JSON.parse(localStorage.getItem("favorits"));
const initialState ={
    favorits:Array.isArray(savedFavorites)?savedFavorites: []};
export default function favorites( state=initialState , action){
    switch(action.type){
        case "ADDTOFAVORIT":{
            const currentList = Array.isArray(state.favorits)
                ? state.favorits 
                :[];
            const isExist = currentList.find(movie=>movie.id === action.payload.id);
            if(isExist){
                return state;
            }
            const data_favorits = [...currentList, action.payload];
            localStorage.setItem("favorits" , JSON.stringify(data_favorits))
            return{...state , favorits:data_favorits};
        }
        case"REMOVEFROMFAVORIT":{
            const currentList = Array.isArray(state.favorits) ? state.favorits : [];
            // إنشاء مصفوفة جديدة تستبعد الفيلم الذي يطابق الـ id المرسل في الـ payload
            const updated_favorits = currentList.filter(movie => movie.id !== action.payload);
            // تحديث الـ LocalStorage بالمصفوفة الجديدة بعد الحذف
            localStorage.setItem("favorits", JSON.stringify(updated_favorits));
            // تحديث الـ state في Redux لتحديث الواجهة فوراً
            return { ...state, favorits: updated_favorits };
        }
        default:
            return state;
    }
}