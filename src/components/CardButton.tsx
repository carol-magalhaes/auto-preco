import { ChevronRight, LucideIcon } from "lucide-react-native";
import { Pressable, PressableProps, Text, View } from "react-native";

type CardButtonProps = PressableProps & {
  label: string;
  className?: string;
  icon?: LucideIcon;
  onClick?: () => void;
};

const CardButton = ({
  label,
  className,
  icon: Icon,
  onClick,
  ...props
}: CardButtonProps) => {
  return (
    <Pressable {...props}>
      <View className="border border-[#e4e4e5] rounded-[10px] p-4 flex-row justify-between items-center shadow-sm bg-white">
        <View className="flex-row gap-2 items-center">
          {Icon && <Icon size={35} color="#3d1587" />}
          <Text className="font-bold text-[18px]">{label}</Text>
        </View>
        <ChevronRight size={20} color="#94949d" />
      </View>
    </Pressable>
  );
};

export default CardButton;
