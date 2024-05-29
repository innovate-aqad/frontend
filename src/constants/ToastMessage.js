import Toast from "react-native-toast-message";


export const success=({type,text})=>{
    console.log(text,"types");
    Toast.show({
        type: type,
        text1: text,
      });
}