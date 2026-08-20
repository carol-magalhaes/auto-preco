import { Pressable, PressableProps, Text } from "react-native";

type ButtonProps = PressableProps & {
  label: string;
  className?: string;
  textClassName?: string;
};

const Button = ({ label, className, textClassName, ...props }: ButtonProps) => {
  return (
    <Pressable
      {...props}
      className={`group p-4 rounded-[10px] items-center justify-center ${className} `}
    >
      <Text className={`font-black text-[14px] ${textClassName}`}>{label}</Text>
    </Pressable>
  );
};

export default Button;
