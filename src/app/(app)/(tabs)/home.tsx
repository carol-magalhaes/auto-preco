import CardButton from "@/components/CardButton";
import { router } from "expo-router";
import { Bell, BellDot, CarFront, Motorbike, Truck } from "lucide-react-native";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [notification, showNotification] = useState<boolean>(false);

  return (
    <SafeAreaView className="flex-1 m-4 gap-4">
      <View className="flex-row items-center justify-between">
        <Image
          source={require("../../../../assets/images/logo-autopreco.png")}
          resizeMode="contain"
          className="w-20 h-20"
        />
        <Text className="font-black text-[27px] text-[#1a028c]">
          Auto
          <Text className="text-[#6a22ec]">Preço</Text>
        </Text>
        <Pressable>
          {notification ? <BellDot size={26} /> : <Bell size={26} />}
        </Pressable>
      </View>
      <View className="flex-col gap-2 items-center justify-center">
        <Text className="font-bold text-[20px]">Quanto vale seu veículo?</Text>
        <Text className="text-[14px] text-gray-500">
          Consulte valores da Tabela FIPE de forma rápida e fácil.
        </Text>
      </View>
      <View className="gap-2">
        <CardButton
          label="Carros"
          icon={CarFront}
          onPress={() =>
            router.push({
              pathname: "/brands",
              params: {
                type: "carros",
              },
            })
          }
        />
        <CardButton
          label="Motos"
          icon={Motorbike}
          onPress={() =>
            router.push({
              pathname: "/brands",
              params: {
                type: "motos",
              },
            })
          }
        />
        <CardButton
          label="Caminhões"
          icon={Truck}
          onPress={() =>
            router.push({
              pathname: "/brands",
              params: {
                type: "caminhoes",
              },
            })
          }
        />
      </View>
      <View>
        <View className="flex-row justify-between">
          <Text className="font-bold text-[16px]">Consultas recentes</Text>
          <Pressable>
            <Text className="font-bold text-[14px] text-[#6a5398]">
              Ver todas
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
