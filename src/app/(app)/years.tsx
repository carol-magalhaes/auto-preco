import Input from "@/components/Input";
import ListButton from "@/components/ListButton";
import { FipeYear, getYears } from "@/services/fipe";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft, Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Years = () => {
  const { type, modelName, modelCode, brandCode, brandName } =
    useLocalSearchParams<{
      type?: string;
      modelName?: string;
      modelCode?: string;
      brandName?: string;
      brandCode?: string;
    }>();
  const [years, setYears] = useState<FipeYear[]>([]);
  const [search, setSearch] = useState("");

  const filteredYears = years.filter((year) =>
    year.valor.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    async function loadYears() {
      if (type !== "carros" && type !== "motos" && type !== "caminhoes") {
        return;
      }

      if (!brandCode || !modelCode) {
        return;
      }

      try {
        const data = await getYears(type, brandCode, modelCode);

        setYears(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadYears();
  }, [type, brandCode, modelCode]);

  return (
    <SafeAreaView className="flex-1 m-4 gap-4">
      <View className="flex-row items-center gap-4">
        <Pressable onPress={() => router.back()}>
          <ChevronLeft size={30} />
        </Pressable>
        <Text className="font-bold text-[18px]">{modelName}</Text>
      </View>
      <View className="flex-col gap-4">
        <Text className="font-bold text-[24px]">Escolha o ano</Text>
        <Input
          label="Buscar ano..."
          icon={Search}
          className="w-full focus:border-[#7d31f5]"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView>
        {filteredYears.map((year) => (
          <ListButton
            key={year.codigo}
            name={year.valor}
            onPress={() => router.push("/(app)/details")}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Years;
