import React, { useEffect, useRef, useState } from 'react'
import { Modal, StyleSheet, Text, View, TouchableOpacity, ImageBackground, TouchableHighlight, FlatList, Button, Image } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { IC_CLOSEPOST, IC_FONDO, IC_POSTSTICKERS, IC_POSTTEXT, IC_TEMATIC } from '../../assets/svg';
import LinearGradient from 'react-native-linear-gradient';
import { colorsBackgroundPost } from '../../resources/constants/Colors';
import ModalBackground from '../../components/app/create/ModalBackground';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MyText from '../../components/auth/MyText';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ImageViewer from '../../components/app/create/ImageViewer';

// const PlaceholderImage = require('./../../../assets/images/background/viewer_post.png');

const Create = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectColor, setSelectColor] = useState(null); // Estado para almacenar el color seleccionado
    const [isColor, setIsColor] = useState(false)
    const navigation = useNavigation();

    useFocusEffect(
        React.useCallback(() => {
            setIsVisible(true);

            return () => {
                console.log('La pantalla ha perdido el foco');
            };
        }, [])
    );

    const handleClose = () => {
        console.log('cjeckk')
        setIsVisible(false);
        navigation.navigate('HomeStackScreen', { screen: 'Home' });
    }

    function renderColor({ item }) {
        return (
            <TouchableHighlight
                onPress={() => {
                    setIsColor(true);
                    // Actualizar el color seleccionado
                    setSelectColor(prevColor => item.value);
                    console.log("selectColor:", selectColor);
                    bottomSheetModalRef.current.close();
                }}
                style={[
                    styles.renderColorPost,
                    {
                        backgroundColor: item.value,
                        borderWidth: selectColor === item.value ? 4 : 0, // Agregar borde cuando se selecciona el color
                    },
                ]}
            >
                <View />
            </TouchableHighlight >
        );
    }

    const [isOpen, setIsOpen] = useState(false);
    const bottomSheetModalRef = useRef(null);
    const snapPoints = ["25%", "95%", "75%"];
    function handleChangeColorBackground() {
        console.log('isOpen ', isOpen)
        bottomSheetModalRef.current?.present();
        setTimeout(() => {
            setIsOpen(true);
        }, 100);
    }

    const handleOnDismiss = () => setIsOpen(false)

    const ViewContent = () => {
        return (
            <>
                <View style={styles.wrapperClose}>
                    <TouchableOpacity onPress={handleClose} style={{ flex: 1 }}>
                        <IC_CLOSEPOST />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleClose} style={{ marginLeft: 'auto' }}>
                        <IC_CLOSEPOST />
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomBar}>
                    <LinearGradient style={styles.menuButtons}
                        colors={['rgba(6, 100, 147, 1)', 'rgba(0, 75, 35, 1)']}>
                        <TouchableOpacity style={styles.button} onPress={handleChangeColorBackground}>
                            <IC_FONDO />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { console.log('crear TEMATICA') }}>
                            <IC_TEMATIC />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { console.log('crear text') }}>
                            <IC_POSTTEXT />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { console.log('crear stickers') }}>
                            <IC_POSTSTICKERS />
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
            </>

        )
    }

    const imageRef = useRef();
    const selectedImage = () => {

    }

    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>

            <BottomSheetModalProvider>

                <View style={{ flex: 1 }}
                    ref={imageRef}
                    collapsable={false}
                >
                    <ImageViewer
                        ref={imageRef}
                        // placeholderImageSource={PlaceholderImage}
                        selectedImage={selectedImage}
                        isColor={isColor}
                        selectColor={selectColor}
                    />
                </View>

                <ViewContent />

                <ModalBackground
                    onDismiss={handleOnDismiss}
                    snapPoints={snapPoints}
                    bottomSheetModalRef={bottomSheetModalRef}
                >
                    <View>
                        <View style={styles.titleContainer}>
                            <MyText type='title' style={{ color: 'black' }}>Elije un fondo</MyText>
                            <TouchableOpacity onPress={() => bottomSheetModalRef.current.close()}>
                                <MaterialIcons name="close" color="black" size={30} />
                            </TouchableOpacity>
                        </View>
                        <FlatList
                            data={colorsBackgroundPost}
                            renderItem={renderColor}
                            keyExtractor={(item) => item.name}
                            numColumns={4} // Cambia este valor para ajustar el número de columnas
                            contentContainerStyle={{ flexGrow: 1, width: '100%', margin: 3 }}
                        />
                    </View>
                </ModalBackground>
            </BottomSheetModalProvider>
        </Modal>
    )
}

export default Create

const styles = StyleSheet.create({
    wrapperClose: {
        marginTop: 20,
        position: 'absolute',
        top: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleContainer: {
        height: '16%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButtons: {
        display: 'flex',
        flexDirection: 'row',
        height: 84,
    },
    renderColorPost: {
        height: 80,
        width: '22%',
        margin: 5,
        borderRadius: 14
    }

});
