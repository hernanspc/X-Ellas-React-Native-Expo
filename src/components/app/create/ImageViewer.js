import { StyleSheet, Image, ImageBackground } from 'react-native';

export default function ImageViewer({
    selectedImage,
    isColor,
    selectColor
}) {
    console.log('isColor ', isColor)

    if (isColor) {
        return (
            <ImageBackground
                backgroundColor={selectColor}
                style={styles.colorBackground}
            />
        )
    } else {
        return (
            <Image
                source={require('./../../../assets/images/background/viewer_post.png')}
                style={styles.image}
            />
        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 18,
        // flex: 2,
    },
    colorBackground: {
        width: "100%",
        height: "100%",
        borderRadius: 18,
        // flex: 2,
    }
});
