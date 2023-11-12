import { Center, Heading } from "@gluestack-ui/themed";
import { FormControl, FormControlLabel, FormControlLabelText, Input, InputField, FormControlHelper,FormControlHelperText } from '@gluestack-ui/themed';
import { Header } from "../../components";

const reservation = () => {
  return (
    <>
      <Header title={"Reservation"} />
      <Center flex={1}>
        
      
        
      <FormControl minWidth='$80'>
          <FormControlLabel>
            <FormControlLabelText>
              Name
            </FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField />
          </Input>
        </FormControl>
      
      
      
      </Center>
    </>
  );
};

export default reservation;
