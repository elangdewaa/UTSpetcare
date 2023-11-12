import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View>
      
      <Text>
        login
      </Text>
    </View>
  )
}

export default Login



// import { StyleSheet, Text, View } from 'react-native';
// import React from 'react'
// import { Center, Box, VStack, Heading, Input, InputField, Button, ButtonText} from '@gluestack-ui/themed';

// const login = () => {
//   return (
//     <View>
      
//       <Center>
//           <Box p='$5' maxWidth='$96' borderWidth='$1' borderColor='$backgroundLight300' borderRadius='$lg' sx={{
//              _dark:{
//             borderColor:'$backgroundDark700'
//             }
//           }}>
//             <VStack space='xs' pb='$4'>
//               <Heading lineHeight={30}>
//                 LOGIN
//               </Heading>
//               <Text fontSize='$sm'>
//                 Silahkan masukkan username dan password anda
//               </Text>
//             </VStack>
//             <VStack space='xl' py='$2'>
//               <Input>
//                 <InputField
//                   py='$2'
//                   placeholder="Username"
//                 />
//               </Input>
//               <Input>
//                 <InputField
//                   py='$2'
//                   placeholder="Password"
//                 />
//               </Input>
//             </VStack>
//             <VStack space='lg' pt='$4'>
//               <Button
//                 size='sm'
//               >
//                 <ButtonText>
//                  Login
//                 </ButtonText>
//               </Button>
//               <Box flexDirection='row'>
//                 <Button variant='link' p='$0' size='sm'>
//                   {/* ArrowLeftIcon is imported from 'lucide-react-native' */}
//                   <Icon
//                     size='md'
//                     mr='$1'
//                     as={ArrowLeftIcon}
//                   />
//                   <ButtonText
//                   >
//                     Back to Dashboard
//                   </ButtonText>
//                 </Button>
//               </Box>
//             </VStack>
//           </Box>
//         </Center>
      
//     </View>
//   )
// }

// export default login

// const styles = StyleSheet.create({})