import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {LoadingService} from '../services/loading-service/loading.service';
import {finalize, mergeMap, tap, timer} from 'rxjs';

// An Interceptor will intercept all HTTP Requests, so also our /api/users request or /api/users/delayed
export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  let showLoading = false;

  // Delay showing the loading spinner by 500ms
  return timer(500).pipe(
    tap(() => {
      showLoading = true;
      loadingService.showLoading();
    }),
    mergeMap(() => next(req).pipe(
      finalize(() => {
        if(showLoading) {
         loadingService.hideLoading();
        }
      })
    ))
  )
};
