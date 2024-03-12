import fs from 'fs';
import { stringify } from 'yaml'
import { ProjectInfo } from '../types'

if (process.argv.length < 4) {
    console.log("USAGE: pass json file and an output folder as an arguments");
}

const [jsonFile, outFolder] = process.argv.slice(2);

if (jsonFile === undefined || outFolder === undefined ) {
    process.exit(1);
}

const projects = JSON.parse(fs.readFileSync(jsonFile, { encoding: 'utf8', flag: 'r' })) as ProjectInfo[];

fs.stat(outFolder, (err, stats) => {
    if (err) {
        console.error(err);
        return;
      }
    if (stats.isDirectory()) {
        projects.forEach((data: ProjectInfo) => {
            const yml = stringify(data);
            const name = data.name.replaceAll("/", "-").replace(/\s+/g, ' ');
            fs.writeFileSync(`${outFolder}/${name}.yaml`, yml);
        })
    }
});
