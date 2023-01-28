import jwt_decode from "jwt-decode";

export interface TokenData {
    user: string;
    username: string;
}
export function getToken(): TokenData | null {
    const jwt = window.localStorage.getItem('token');
    if (jwt) {
        return jwt_decode<TokenData>(jwt as string)
    }

    return null;
}