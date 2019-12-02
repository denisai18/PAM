import {Room} from './room.model';
export interface User
{
    username: string;
    password: string;
    rooms: Room[];
}