import { ObjectId } from "mongodb";

import {connect} from '../../helper/db/connect.js';

export class paises extends connect{
    static instance;

    db
    constructor(){
        super();


        this.db = this.conexion.db(this.getDbName);
        if(typeof paises.instance === 'object'){
            return paises.instance;

        }
        paises.instance = this;
        return this;        

    }
    async functionName(){
        const collection = this.db.collection('paises');
        const data = await collection.insertOne({
            "nombre": "Japan"
        }).toArray();
        await this.conexion.close();
        return data;
    }

}