const arguments = process.argv.slice(2);
cemberAlan = (yarıCap)=>{
const alan = Math.PI*(Math.pow(yarıCap,2))


console.log(`Yarıcapı ${yarıCap} olan çemberin alanı ${alan} `);
}



//
cemberAlan(arguments[0] *1);
