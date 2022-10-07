export type NewPasswordData = {
  password: string;
  confirmPassword: string;
};

export enum ValueType {
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
  password: boolean;
  confirmPassword: boolean;
};
