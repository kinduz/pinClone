/* eslint-disable no-unused-vars */

export enum AppRoutes {
  AUTHORIZATION = 'authorization',
  REGISTRATION = 'registration',
  VERIFICATION_EMAIL = 'verification_email',
  RESET_PASSWORD = 'reset_password',

  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.AUTHORIZATION]: '/auth',
  [AppRoutes.REGISTRATION]: '/registration',
  [AppRoutes.VERIFICATION_EMAIL]: '/verification',
  [AppRoutes.RESET_PASSWORD]: '/reset-password',

  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '/*',
  [AppRoutes.MAIN]: '/',
};
