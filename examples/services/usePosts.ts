export const usePost = () => {
    const { token } = useAuth()
    const findAll = (filter: string) => {
        // request using {{token}} on headers
        // filter parameter
    }
    return {
        findAll
    }
}