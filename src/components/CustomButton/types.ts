export interface ICustomButton {
  text?: string;
  onPress?: () => void;
  type?: 'PRIMARY' | 'TERTIARY' | 'SECONDARY';
  bgColor?: string;
  fgColor?: string;
  disabled?: boolean;
}
