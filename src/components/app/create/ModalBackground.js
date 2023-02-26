import React, { useRef, useState } from 'react'
import { Modal, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import MyText from '../../auth/MyText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

export default function ModalBackground({
    onDismiss,
    children,
    bottomSheetModalRef,
    snapPoints,
}) {
    return (
        <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            backgroundStyle={{ borderRadius: 50, }}
            onDismiss={onDismiss}
        >
            {children}
        </BottomSheetModal>
    );
}


const styles = StyleSheet.create({
})