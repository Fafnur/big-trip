import { Observable } from 'rxjs';

export interface ApiError<T = any> {
  message: string;
  error?: T;
}

export type ApiResponse<T = any> = Observable<T | ApiError>;
