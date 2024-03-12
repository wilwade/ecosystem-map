import fs from 'fs';
import { parse } from 'yaml';



const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("USAGE: pass yaml file or folder as an argument");
}

const res: any = [];

args.forEach((p) => {
    const stats = fs.statSync(p);
    let files: string[] = [];
    if (stats.isFile()) {
        files.push(p);
    } else if (stats.isDirectory()) {
        files = (fs.readdirSync(p).filter((f) => f.toLowerCase().match('ya?ml$')).map((f) => `${p}${f}`));
    }
        
    files.forEach((f) => {
        const content = fs.readFileSync(f, { encoding: 'utf8', flag: 'r' });
        res.push(parse(content));
    });
});

console.log(JSON.stringify(res));
