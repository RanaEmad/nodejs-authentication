const dbConfig= require("../config/database");
const mysql= require("mysql");

class Database{
    dbConfig;
    db;
    constructor(){
        this.dbConfig=dbConfig;
    }
    connect(){
        const conn= mysql.createConnection({
            host:this.dbConfig.host,
            port:this.dbConfig.port,
            user:this.dbConfig.user,
            password:this.dbConfig.password,
            database:this.dbConfig.database
        });
        conn.connect((err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("connected!");
            }
        });
        this.db= conn;
    }
    getDb(){
        if(!this.db){
            this.connect();
        }
        return this.db;
    }
}

module.exports= new Database().getDb();