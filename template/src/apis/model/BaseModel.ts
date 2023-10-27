export interface BaseModel<T> {
  data: T;
  retCode: string | number;
  retInfo: string;
  success: boolean;
  timeStamp: number;
}