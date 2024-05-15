export enum AUTH_ROUTES {
  Login = '/auth/tokens', // Получить токены пользователя GET
  Refresh = '/auth/tokens', // Обновить токены пользователя PUT
  Register = '/auth/register', // Зарегистрировать пользователя POST
  UserInfo = '/auth/me', // Получить информацию об юзере
  
  Logout = '/clients/devices', // Выйти из акк и удалить устройство DELETE
  Devices = '/clients/devices', // Получить список устройств GET
  UpdatePassword = '/clients/password', // Обновить пароль PUT
  Settings = '/clients/settings', // Получить настройки пользователя GET
  UpdateSettings = '/clients/settings', // Обновить настройки пользователя PUT
}