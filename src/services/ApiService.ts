import { ApiResponse } from "../types/ApiResponse"

export const getComments = async () => {
    try {
        const res = await fetch("data.json")
        const data: ApiResponse = await res.json()
        return data
    } catch (error) {
        console.error(error)
        return undefined
    }
}