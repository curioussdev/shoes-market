import react from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import BannerImg from '../../assets/banner.png'

import Shoes from "../../components/Shoes";

export default function Home(props ) {

    return(
        <View style={styles.container} >
            <View style={styles.header}>
                <Image 
                    source={BannerImg}
                    style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNIS</Text>
                    <Text style={[styles.textShoe, { fontSize: 40}]}>👟</Text>
                    <Text style={[styles.text, {fontWeight: '900'}]}>MASCULINO</Text>
                
                <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center'}}>
                    <MaterialIcons
                        name="filter-list"
                        size={24}
                        color="#000"
                    
                    />
                </TouchableOpacity>

                </View>
            </View>

            <View style={styles.line} />

            <ScrollView>
                <Text style={[styles.text, {fontWeight: '900'}]}>LANÇAMENTOS</Text>
                
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
                        <Shoes img={require('../../assets/1.png')} cost="17.000 kz"onClick={()=> alert('CLICOU')}>
                            Nike Air Maxi Dior
                        </Shoes>

                        <Shoes img={require('../../assets/2.png')} cost="25.000 kz"onClick={()=> alert('CLICOU')}>
                            Nike Kobex Max
                        </Shoes>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Shoes img={require('../../assets/3.png')} cost="117.000 kz"onClick={()=> alert('CLICOU')}>
                            Nike Box
                        </Shoes>

                        <Shoes img={require('../../assets/4.png')} cost="54.000 kz"onClick={()=> alert('CLICOU')}>
                            Nike Lopes
                        </Shoes>
                    </View>
                    
                    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Shoes img={require('../../assets/5.png')} cost="11.000 kz" onClick={()=> alert('CLICOU')}>
                            Nike Runner X
                        </Shoes>

                        <Shoes img={require('../../assets/6.png')} cost="21.000 kz" onClick={()=> alert('CLICOU')}>
                            Nike Sox Buttler
                        </Shoes>
                    </View>
            </ScrollView>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    header: {
        marginBottom: 0
    },
    image:{
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    text:{
        fontFamily: '',
        fontSize: 22,
        marginHorizontal: '1%'
    },
    textShoe: {
        fontSize: 30
    },
    line:{
        borderColor: '#d8d8d8',
        borderBottomWidth: 2
    }
});

