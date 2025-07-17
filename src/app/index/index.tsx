import { 
  View,
  Image,
  TouchableOpacity,
 } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { Categories } from '@/components/categories';
import { Link } from "@/components/link"

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.7}>
          <MaterialIcons name='add' size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>
      
      <Categories />
      <Link 
        name='Portfólio - Lucas Barbosa' 
        url='https://lucas-barbosa.vercel.app/' 
        onDetails={() => console.log("Clicou!")}
      />
    </View>
  )
}