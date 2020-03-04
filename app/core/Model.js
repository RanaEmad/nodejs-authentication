const db=require("../core/Database");
class Model{
    db;
    table;
    constructor(table){
        this.db=db;
        this.table=table;
    }

    findAll(){
        const sql=`SELECT * FROM ${this.table};`;
        return this.excecute(sql);
    }

    findById(id){
        const sql=`SELECT * FROM ${this.table} WHERE id=${id};`;
        return this.excecute(sql);
    }

    excecute(sql){
        return new Promise((resolve,reject)=>{
            this.db.query(sql,(err,results)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(results);
                }
            });
        });  
    }
}