import {View, Text, Image} from "react-native";

const HeaderContent = () => {
    return (
        <View>
            <Image
            source={require("../assets/images/one.png")}
            />
            <Text>Welcome to ChowNow</Text>
        </View>
    
    )
}
export default HeaderContent;