import { StyleSheet} from "react-native";
import { myColors } from "./Colors";


export const Styles = StyleSheet.create({
    //Mes boutons
    btnBlue:{
        width:72,
        height:72,
        backgroundColor:myColors.blue,
        borderRadius:24,
        justifyContent:'center',
        alignItems:"center",
        margin:8
    },

    btnDark:{
        width:72,
        height:72,
        backgroundColor:myColors.btnDark,
        borderRadius:24,
        justifyContent:'center',
        alignItems:"center",
        margin:8
    },

    btnLight:{
        width:72,
        height:72,
        backgroundColor:myColors.white,
        borderRadius:24,
        justifyContent:'center',
        alignItems:"center",
        margin:8
    },

    btnGray:{
        width:72,
        height:72,
        backgroundColor:myColors.btnGray,
        borderRadius:24,
        justifyContent:'center',
        alignItems:"center",
        margin:8
    },

    smallTextLight:{
        color : myColors.white,
        fontSize:32
    },

    smallTextDark:{
        color : myColors.black,
        fontSize:32
    },

    //Mon clavier
    row:{
        maxWidth: '100%',
        flexDirection: "row" 
    },

    viewButton:{
        position: 'absolute',
        bottom: 50,
    },

    screenFirstNumber:{
        fontSize:96,
        color:myColors.gray,
        fontWeight :"bold",
        alignSelf: 'flex-end'
    },
    
    screenSecondNumber:{
        fontSize:40,
        color:myColors.gray,
        fontWeight :"bold",
        alignSelf: 'flex-end'
    }
})