export interface ResponseSuccessful<TData> {
  message: string;
  data: TData;
  status: number;
}
