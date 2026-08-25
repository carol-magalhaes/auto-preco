import Input from "@/components/Input";
import ListButton from "@/components/ListButton";
import { FipeModel, getModels } from "@/services/fipe";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft, Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Models = () => {
  const { type, brandCode, brandName } = useLocalSearchParams<{
    type?: string;
    brandCode?: string;
    brandName?: string;
  }>();
  const [models, setModels] = useState<FipeModel[]>([]);
  const [search, setSearch] = useState("");

  const filterModel = models.filter((models) =>
    models.modelo.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    async function loadModels() {
      if (type !== "carros" && type !== "motos" && type !== "caminhoes") {
        return;
      }

      if (!brandCode) {
        return;
      }

      try {
        const data = await getModels(type, brandCode);
        setModels(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadModels();
  }, [type, brandCode]);

  return (
    <SafeAreaView className="flex-1 m-4 gap-4">
      <View className="flex-row items-center gap-4">
        <Pressable onPress={() => router.back()}>
          <ChevronLeft size={30} />
        </Pressable>
        <Text className="font-bold text-[18px]">{brandName}</Text>
      </View>
      <View className="flex-col gap-4">
        <Text className="font-bold text-[24px]">Escolha o modelo</Text>
        <Input
          label="Buscar modelo..."
          icon={Search}
          className="w-full focus:border-[#7d31f5]"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView>
        {filterModel.map((model) => (
          <ListButton
            key={model.valor}
            name={model.modelo}
            onPress={() =>
              router.push({
                pathname: "/years",
                params: {
                  type,
                  brandCode, 
                  brandName,
                  modelName: model.modelo,
                  modelCode: model.valor,
                },
              })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Models;
