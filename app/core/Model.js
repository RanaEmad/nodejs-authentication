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

    create(data){
        let keys=Object.keys(data);
        let values=[];
        keys.forEach((key) => {
            values.push(`'${data[key]}'`);
        });
        const sql=`INSERT INTO ${this.table} (${keys.join(",")}) VALUES(${values.join(",")});`;
        return this.excecute(sql);
    }

    update(id,data){
        let keys=Object.keys(data);
        let set="";
        keys.forEach((key) => {
            set +=`${key}='${data[key]}',`;
        });
        set= set.substr(0,set.length-1);
        const sql=`UPDATE ${this.table} SET ${set} WHERE id='${id}';`;
        return this.excecute(sql);
    }

    delete(id){
        const sql=`DELETE FROM ${this.table} WHERE id='${id}';`;
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

module.exports=Model;