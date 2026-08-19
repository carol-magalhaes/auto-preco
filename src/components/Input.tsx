import { LucideIcon } from "lucide-react-native";
import { Pressable, TextInput, TextInputProps, View } from "react-native";

type InputProps = TextInputProps & {
  label: string;
  className?: string;
  icon?: LucideIcon;
  onPressIcon?: () => void;
};

const Input = ({
  label,
  className,
  icon: Icon,
  onPressIcon,
  ...props
}: InputProps) => {
  return (
    <View
      className={`w-80 h-14 flex-row items-center border-2 border-gray-400 px-4 rounded-[10px] ${className}`}
    >
      <TextInput
        {...props}
        className="flex-1 h-full ml-3"
        placeholder={label}
      />
      {Icon && (
        <Pressable onPress={onPressIcon}>
          <Icon size={24} color="#6b7280" />
        </Pressable>
      )}
    </View>
  );
};

export default Input;
