import { useState } from "react";
import { View, Image, TouchableOpacity, FlatList, Modal, Text } from 'react-native';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/styles/colors';
import { Categories } from '@/components/categories';
import { categories } from "@/utils/categories"
import { Link } from "@/components/link"
import { Option } from "@/components/option"
import { router } from "expo-router"

export default function Index() {
  const [category, setCategory] = useState(categories[0].name)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.7} onPress={() => router.navigate("/add")}>
          <MaterialIcons name='add' size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Categories 
        onChange={setCategory}
        selected={category}
      />

      <FlatList
        data={["1", "2", "3", "4"]}
        keyExtractor={(item) => item}
        renderItem={() => (
          <Link
            name='Portfólio - Lucas Barbosa'
            url='https://lucas-barbosa.vercel.app/'
            onDetails={() => console.log("Clicou!")}
          />
        )}
        style={styles.links}
        contentContainerStyle={styles.linksContent}
        showsVerticalScrollIndicator={false}
      />

      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>
                Lucas Barbosa
              </Text>
              
              <TouchableOpacity>
                <MaterialIcons name='close' size={20} color={colors.gray[400]} />
              </TouchableOpacity>
            </View>

            <Text style={styles.modalLinkName}>
              Portfólio
            </Text>

            <Text style={styles.modalUrl}>
              https://lucas-barbosa.vercel.app/
            </Text>

            <View style={styles.modalFooter}>
              <Option name="Excluir" icon="delete" variant='secondary' />
              <Option name="Abrir" icon="language" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}