  import { Heading, Box, HStack, Image, VStack, Text, Button, ButtonText, Divider, Center } from "@gluestack-ui/themed";
  import { Link } from "expo-router";
  import { Header } from "../../components";
  import { SafeAreaView, Touchable } from "react-native";
  import { TouchableOpacity } from "react-native-gesture-handler";

  const Profile = () => {
    return (
      <>
        <Header title={"Profile"} />  
        <Box py="$4" rounded="$10"> 
        <Link
                  href={{
                    pathname: "/Aboutus" 
                  }}
              >
                  
                  <VStack space="md" backgroundColor="lightyellow" width="100%" >
    
            <Text textAlign="$center" mx="$40">About us</Text>
            <Divider my={0.2}/>
          </VStack>
          
          </Link>
          </Box>
      </>
    );
  };

  export default Profile;
