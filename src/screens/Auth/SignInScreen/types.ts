export type SignInData = {
  email: string;
  password: string;
};

export enum ValueType {
  password = 'password',
  email = 'email',
}

export type ValuePassedProps = {
  isPassed: boolean;
  passedValue: string;
  passedError: string | undefined;
  valueType: ValueType;
};
