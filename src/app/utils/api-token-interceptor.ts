import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from 'src/environments/environment';

export const apiTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = environment.API_KEY;
  if (!token) {
    return next(req);
  }

  const authorizedRequest = req.clone({
    setHeaders: {
      'x-api-key': token,
    },
  });

  return next(authorizedRequest);
};
