export type ConfirmEmailData = {
  email: string;
  code: string;
};

export enum ValueType {
  email = 'email',
  code = 'code',
}

export type ValuePassedProps = {
  isPassed: boolean;
  passedValue: string;
  passedError: string | undefined;
  valueType: ValueType;
};

export type PassedValue = {
  email: boolean;
  code: boolean;
};
