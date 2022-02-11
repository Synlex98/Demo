import { User } from "./user";
import { Level } from "./level";
import { Points } from "./points";
import {storage} from "near-sdk-as"

export function createUser():User{
    let nextUserId=100;
    if (storage.contains("nextId")){
       nextUserId=storage.getPrimitive("nextId",100)
    }
    let level =new Level(nextUserId,1)

    let points=new Points(nextUserId,0)

    let user=new User(nextUserId,level,points)
    storage.set<User>(nextUserId.toString(),user)
    storage.set<i64>("nextId",nextUserId+113)
    return user
}