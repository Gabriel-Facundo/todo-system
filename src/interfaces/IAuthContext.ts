interface IAuthContext {
    token: boolean;
    failLogin: string;
    login: (email: string, password: string) => void;
    logout: () => void;
}

export default IAuthContext