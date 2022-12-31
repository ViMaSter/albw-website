import * as fs from 'node:fs/promises';

const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
};

const input = JSON.parse(await fs.readFile("spoiler.json"));
let regions = [];
let subregions = [];
let items = [];
console.log(input);
Object.entries(input.layout).forEach(([region, mapping]) => {
    Object.entries(mapping).forEach(([subregion, entries]) => {
        Object.entries(entries).forEach(([region, item]) => {
            regions.push(region);
            subregions.push(subregion);
            items.push(item);
        });
    });
});

regions = regions.filter(onlyUnique).sort();
subregions = subregions.filter(onlyUnique).sort();
items = items.filter(onlyUnique).sort();
fs.writeFile("regions.json",    JSON.stringify(regions,    null, 4));
fs.writeFile("subregions.json", JSON.stringify(subregions, null, 4));
fs.writeFile("items.json",      JSON.stringify(items,      null, 4));