import { Box, Image, HStack, Heading } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

const Header = ({ title, withBack = false, withClose = false }) => {
  const trueGray900 = "#171717";
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <StatusBar barStyle="light" backgroundColor={trueGray900} />
      <Box bg="$trueGray900" p="$4">
        <HStack justifyContent="space-between" alignItems="center">
          <HStack alignItems="center">
            {!withBack ? (
              <>
                <Image
                  source={require("../assets/paw.png")}
                  w="$12"
                  h="$12"
                  alt="paw Logo"
                  mr={"$2"}
                  role="img"
                />
              </>
            ) : (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => navigation.goBack()}
              >
                <Box mr={"$3"}>
                  <Ionicons name="arrow-back-outline" size={32} color="orange" />
                </Box>
              </TouchableOpacity>
            )}
            <Heading color={"$orange"}>{title}</Heading> 
          </HStack>

          <HStack space={"2xl"}>
            <Image
              source={require("../assets/search.png")}
              w="$5"
              h="$5"
              alt="Search Icon"
              role="img"
            />
          </HStack>
        </HStack>
      </Box>
    </SafeAreaView>
  );
};

export default Header;