import Button from "@/components/Button";
import Input from "@/components/Input";
import { router } from "expo-router";
import { Eye, EyeClosed } from "lucide-react-native";
import { useState } from "react";
import { Image, View } from "react-native";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="flex-1 items-center justify-center bg-[#fefefe]">
      <Image
        source={require("../../../assets/images/logo-autopreco.png")}
        resizeMode="contain"
        className="h-80 -mb-12"
      />
      <View className="gap-4 w-[80%]">
        <Input label="E-mail" className="w-full focus:border-[#7d31f5]" />
        <Input
          label="Senha"
          className="w-full focus:border-[#7d31f5]"
          secureTextEntry={!showPassword}
          icon={showPassword ? Eye : EyeClosed}
          onPressIcon={() => setShowPassword(!showPassword)}
        />
        <View className="flex-row gap-4 w-full">
          <Button
            label="Login"
            className="bg-[#1c028b] flex-1 active:bg-[#7d31f5]"
            textClassName="text-white"
            onPress={() => router.push("/(app)/(tabs)/home")}
          />
          <Button
            label="Cadastro"
            className="bg-white border border-[#1c028b] flex-1 active:bg-[#1c028b]"
            textClassName="text-[#1c028b] group-active:text-white"
            onPress={() => router.push("/register")}
          />
        </View>
      </View>
    </View>
  );
}
