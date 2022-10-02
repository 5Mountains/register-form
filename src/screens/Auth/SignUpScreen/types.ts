export type SignUpData = {
  nickname: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export enum ValueType {
  nickname = 'nickname',
  email = 'email',
  phoneNumber = 'phoneNumber',
  password = 'password',
  confirmPassword = 'confirmPassword',
}

export type ValuePassedProps = {
  isPassed: boolean;
  passedValue: string;
  passedError: string | undefined;
  valueType: ValueType;
};

export type PassedProps = {
  email: boolean;
  nickname: boolean;
  phoneNumber: boolean;
  password: boolean;
  confirmPassword: boolean;
};
