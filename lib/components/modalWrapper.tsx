// import React from "react";
// import {
//   KeyboardAvoidingView,
//   ScrollView,
//   StatusBar,
//   TouchableOpacity,
//   View,
//   Modal,
// } from "react-native";
// import { useTheme } from "../styles/ThemeProvider";
// import { Dim, ModalStyles } from "../styles/theme";
// import Container from "./container";
// export default function ModalWrapper({
//   visible,
//   setVisible,
//   children,
//   fullHeight,
//   minHeight,
//   scrollable,
//   noSwipe,
//   zIndex,
//   paddingX,
//   avoidKeyboard,
//   needsAbsolute,
// }) {
//   const { Colors } = useTheme();
//   const backgroundZIndex = 0;
//   const foregroundZIndex = 1;
//   const bottomZIndex = 2;
//   const topZIndex = 3;
//   let height: number | undefined = Dim.height * 0.6;
//   if (minHeight) {
//     height = undefined;
//   } else if (fullHeight) {
//     height = Dim.height;
//   }
//   const swipeElement = {
//     width: 100,
//     height: 5,
//     borderRadius: 2.5,

//     // backgroundColor: "red",
//     backgroundColor: Colors.text,

//     opacity: 0.4,
//   };
//   const containerStyle1 = {
//     ...ModalStyles.modalFull,
//     backgroundColor: Colors.background,
//     alignContent: "center",
//     zIndex: topZIndex,
//     elevation: topZIndex,
//   };
//   const containerStyle = {
//     ...ModalStyles.modalBottom,
//     paddingHorizontal: paddingX !== undefined ? paddingX : 10,
//     height: fullHeight ? Dim.height * 0.85 : Dim.height * 0.6,
//     backgroundColor: Colors.background,
//     alignContent: "center",
//     zIndex: topZIndex,
//     elevation: topZIndex,
//     ...(needsAbsolute && {
//       position: "absolute",
//       top: 50,
//       bottom: 0,
//     }),
//   };

//   return (
//     <Modal
//       animationIn={"slideInUp"}
//       hasBackdrop={true}
//       backdropColor={Colors.background}
//       backdropOpacity={0.7}
//       animationInTiming={300}
//       animationOutTiming={300}
//       onBackdropPress={() => setVisible(false)}
//       supportedOrientations={["portrait", "landscape"]}
//       transparent={true}
//       isVisible={visible}
//       onSwipeComplete={() => {
//         setVisible(false);
//       }}
//       swipeDirection={noSwipe ? null : "down"}
//       onRequestClose={() => {
//         setVisible(false);
//       }}
//       propagateSwipe={noSwipe ? false : true}
//       style={{
//         padding: 0,
//         margin: 0,
//         left: 0,
//         height,
//         zIndex: zIndex,
//       }}
//     >
//       <View style={containerStyle}>
//         <Container justifyCenter alignCenter fullWidth paddingY={10}>
//           <View style={swipeElement}></View>
//         </Container>
//         {scrollable ? (
//           <ScrollView>
//             {children}
//             <View style={{ height: Dim.height }} />
//           </ScrollView>
//         ) : (
//           <View>{children}</View>
//         )}
//       </View>
//     </Modal>
//   );
// }
export default function ModalWrapper() {
  return <></>;
}
