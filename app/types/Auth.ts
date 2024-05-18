/**
 * Предоставляет информацию о токена доступа.
 */
export type Tokens = {
  /**
   * Токен доступа.
   */
  access_token: string;
  /**
   * Токен для обновления токена доступа.
   */
  refresh_token: string;
  /**
   * Тип токена. По умолчанию - Bearer.
   */
  token_type: string;
}
