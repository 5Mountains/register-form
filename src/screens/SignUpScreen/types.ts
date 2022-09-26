export type SignUpData = {
  nickname: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export enum ValueType {
  'nickname',
  'email',
  'phoneNumber',
  'password',
  'confirmPassword',
}

export type ValuePassedProps = {
  isPassed: boolean;
  passedValue: string;
  passedError: string | undefined;
  valueType: ValueType;
};
