import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloText}>Merhaba!</Text>
      <Text style={styles.nameSurnameText}>We are YAZTEM!</Text>
      <Text style={styles.bottomText}>Bu yazı renkli bir yazı.</Text>
    </View>
  );
}
/* Bu çözüm flex yapısıyla gerçekleştirilmiştir. absolute bir pozisyonda top,left,right,bottom değerleriyle de istenilen görevi
gerçekleştirebilirdik. Ancak stil kısmını bu çözümden uzun tutmamızla sonuçlanırdı. Flex yapısıyla cihazımızın ekranını belirli parçalara bölebiliriz. 
Flex ile sarmalanan bir yapı ekranda kaplayabildiği kadar alan kaplar. Kendi bünyesi dışında olan her şeyi ekranda itebildiği kadar iter.
Bu çözümde dıştaki container'ın flex:1 olmasının nedeni tüm ekranımızı kaplamamız gerektiğindendir. Çünkü arkaplan rengini ekranın tamamına uygulamamız gerekir.
nameSurnameText ekranın yarısını helloText ise ekranın diğer yarısını alarak 2 parçaya böldü. Ve textAlign propuyla textler task'te istenildiği gibi ortalandı.
Son olarak alt kısımda da bir text oluşturduk. nameSurnameText flex:1'e sahip olduğundan bu yazımız ekranın en alt kısmına itilmiş oldu. Tabii bu yazıyı da task'te
istenildiği gibi ortaladık.*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
    padding: 10,
  },
  nameSurnameText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    flex: 1,
  },
  helloText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    flex: 1,
  },
  bottomText: {
    color: "#FF47F8",
    textAlign: "center",
    fontSize: 20,
  },
});
