import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";

import Image1 from '../../assets/1.png'



export default function Shoes(props){

    function filterDesc(desc){
        if(desc.length < 27) {
            return desc;
        }

        return `${desc.substring(0, 25)}...`; 
    }

    return(
        <TouchableOpacity style={styles.container} onPress={props.onClick}>
            <Image 
                source={props.img}
                style={styles.shoesImg}
            />
            <Text style={styles.shoesText}>
                {filterDesc(props.children)}
            </Text>
            <Text style={[styles.shoesText, {opacity: 0.4}]}>{props.cost}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shoesImg:{
        width: 150,
        height: 150,
        borderRadius: 5        
    },
    shoesText:{
        fontSize: 16
    }
})