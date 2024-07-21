export interface ApiError {
  erros?: {
    array: { message: string }[];
  };
  message?: string;
}
