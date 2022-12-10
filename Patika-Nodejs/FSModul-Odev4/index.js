import { readFile,writeFile,appendFile,unlink, mkdir,rmdir, read } from 'fs'
setTimeout(() => {
    writeFile('employees.json', '{"name":"Employee 1 Name","salary":2000}', 'utf8', (err)=>{
        if(err) console.log(err);
        console.log('Dosya başarılı bir şekilde oluşturuldu');
    });
}, 1000);

setTimeout(() => {
    readFile('employees.json',"utf-8",(err,data)=>{
        if(err) console.log(err);
        console.log(data);
        console.log("Dosya okuma başarılı..!");
    })
}, 2000);

setTimeout(() => {
    appendFile('employees.json',',\n{"name":"Employee 2 Name" , "salary":3500}',"utf-8",(err)=>{
        if(err) console.log(err);
        console.log("Dosya güncellemesi başarılı bir şekilde gerçekleştirildi");
    })
}, 3000);


setTimeout(() => {
    unlink('employees.json',(err)=>{
        if (err) {
            console.log(err);
        }
        console.log("Dosya başarıyla silindi..!");
    })
}, 3500);
// sonra bi göz at