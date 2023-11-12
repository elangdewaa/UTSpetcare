import { Heading, Text, Center, Image, Divider,   } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "@gluestack-ui/themed";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
    <ScrollView>
      <Header title={"News"} withBack={true} />
      <Center flex={1} padding={"$4"}>      
        {/* <Heading>News Detail</Heading> */}
        <Image width="$full"  height={200} borderRadius="$3xl" 
         source={require('../assets/ikan1.jpg')}
       />
        <Text paddingRight={200} fontWeight="$bold" paddingVertical={9}>{params.date}</Text>
        <Text textAlign="justify" paddingRight={30} fontWeight="$extrabold" fontSize={20}>{params.title}
        </Text>
        <Divider marginVertical={10}/>
        <Text>Cupang, ikan laga, atau ikan adu siam (Betta sp.) adalah ikan air tawar yang habitat asalnya adalah beberapa negara di Asia Tenggara, antara lain Thailand, Malaysia, Brunei Darussalam, Singapura, Vietnam, dan Indonesia. Ikan ini mempunyai bentuk dan karakter yang unik dan cenderung agresif dalam mempertahankan wilayahnya. Di kalangan penggemar, ikan cupang umumnya terbagi atas tiga golongan, yaitu cupang hias, cupang aduan, dan cupang liar. Di Indonesia terdapat cupang asli, salah satunya adalah Betta channoides yang ditemukan di Pampang, Kalimantan Timur.</Text>
        <Divider marginVertical={10}/>
        <Text textAlign="justify">{params.content}</Text>
      </Center>
      </ScrollView>
    </>
  );
};

export default NewsDetail;