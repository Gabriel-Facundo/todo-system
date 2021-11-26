interface ITodoContext {
    token: boolean;
    login: (email: string, password: string) => void;
    failLogin: string;
}

export default ITodoContext