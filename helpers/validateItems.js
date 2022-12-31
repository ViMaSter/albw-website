import * as fs from 'node:fs/promises';

const sprites = await fs.readdir("items");
const items = JSON.parse(await fs.readFile("items.json"));
console.log(items.map(item => [item, sprites.includes(item+".png")]).filter(a=>!a[1]))