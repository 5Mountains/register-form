import {Control, FieldValues, Path} from 'react-hook-form';

export interface IFormInputProps<ContentData extends FieldValues> {
  control: Control<ContentData, object>;
  name: Path<ContentData>;
  register: any;
  placeholder?: string;
  password?: boolean;
  title?: string;
  error?: string;
  iconName?: string;
  passed?: boolean;
}

export interface IStylesProps {
  err?: boolean;
  focused?: boolean;
  password?: boolean;
  passed?: boolean;
}
