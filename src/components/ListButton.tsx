import { ChevronRight } from "lucide-react-native";
import { Pressable, PressableProps, Text, View } from "react-native";

type ListButtonProps = PressableProps & {
  name: string;
  onPress?: () => void;
};

const ListButton = ({ name, onPress, ...props }: ListButtonProps) => {
  return (
    <Pressable onPress={onPress} {...props}>
      <View className="border-b border-gray-300 rounded-full p-4 flex-row justify-between items-center">
        <View className="flex-row items-center gap-6">
          <Text className="font-bold text-[16px]">{name}</Text>
        </View>
        <ChevronRight color="#94949d" />
      </View>
    </Pressable>
  );
};

export default ListButton;
