import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './UseAxiosSecure'
import UseAuth from './UseAuth'

const useCart = () => {
    const token = localStorage.getItem("access-token")
    const { user, loading } = UseAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            return response.data
        },
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        //         headers:{
        //             authorization : `bearer ${token} `
        //         }
        //     })
        //     return response.json()
        // },

    })
    return [cart, refetch]
}
export default useCart