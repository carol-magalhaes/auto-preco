import Input from "@/components/Input";
import ListButton from "@/components/ListButton";
import { FipeBrand, getBrands, VehicleType } from "@/services/fipe";
import { router, useLocalSearchParams } from "expo-router";
import { ChevronLeft, Search } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Brands = () => {
  const { type } = useLocalSearchParams();
  const [brands, setBrands] = useState<FipeBrand[]>([]);
  const [search, setSearch] = useState("");

  const vehicleTypeLabels: Record<VehicleType, string> = {
    carros: "Carros",
    motos: "Motos",
    caminhoes: "Caminhões",
  };

  if (type !== "carros" && type !== "motos" && type !== "caminhoes") {
    return null;
  }
  const title = vehicleTypeLabels[type];

  const filterBrands = brands.filter((brand) =>
    brand.nome.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    async function loadBrands() {
      if (type !== "carros" && type !== "motos" && type !== "caminhoes") {
        return null;
      }

      try {
        const data = await getBrands(type);

        setBrands(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadBrands();
  }, [type]);

  return (
    <SafeAreaView className="flex-1 m-4 gap-4">
      <View className="flex-row items-center gap-4">
        <Pressable onPress={() => router.back()}>
          <ChevronLeft size={30} />
        </Pressable>
        <Text className="font-bold text-[18px]">{title}</Text>
      </View>
      <View className="flex-col gap-4">
        <Text className="font-bold text-[24px]">Escolha a marca</Text>
        <Input
          label="Buscar marca..."
          icon={Search}
          className="w-full focus:border-[#7d31f5]"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <ScrollView>
        {filterBrands.map((brand) => (
          <ListButton
            key={brand.valor}
            name={brand.nome}
            onPress={() =>
              router.push({
                pathname: "/models",
                params: {
                  type,
                  brandCode: brand.valor,
                  brandName: brand.nome,
                },
              })
            }
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Brands;
