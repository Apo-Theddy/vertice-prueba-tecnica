export interface Result<T, E> {
  data: T | null;
  error: E | null;
  isOk: boolean;
  isFailure: boolean;
}

export const Ok = <T, E>(data: T): Result<T, E> => ({
  isOk: true,
  isFailure: false,
  data,
  error: null,
});

export const Fail = <T, E>(error: E): Result<T, E> => ({
  isOk: false,
  isFailure: true,
  data: null,
  error,
});
