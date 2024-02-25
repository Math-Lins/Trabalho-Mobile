import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

import Apresentation from '../../assets/apresentation.png'

export const Home = () => {
    return <View style={StyleSheet.container}>
        <View style={styles.header}>
            <Text style={styles.h1}>Tagpet</Text>
            <Image style={styles.Apresentation} source={Apresentation} />
            <Text style={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis ex orci, vel placerat justo euismod id. Maecenas dapibus arcu in consequat consequat. Suspendisse potenti. Etiam eget nisi risus. Nullam.</Text>
            <Pressable style={styles.btn} onPress={() => {console.log('clicado')}}>
                <Text style={styles.txt_btn}>Next</Text>
            </Pressable>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
    },
    header: {
        width: '100%',
        paddingTop: 80,
    },
    h1: {
        paddingLeft: 30,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5CB15A'
    },
    Apresentation: {
        width: 400,
        height: 400,
        marginVertical: 20,
    },
    p: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        textAlign: 'justify',
        color: '#888',
        fontSize: 15
    },
    btn: {
        backgroundColor: '#5CB15A',
        marginVertical: 20,
        marginHorizontal: 70,
        paddingVertical: 10,
        borderRadius: 19,
        alignItems: 'center',
    },
    txt_btn: {
        color: '#fff'
    }

})