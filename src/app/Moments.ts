export interface Moment {
    id?: number
    title: string
    descript: string
    image: string
    created_at?: string
    update_at?: string
    comments?: [{ text: string; username: string}]

}