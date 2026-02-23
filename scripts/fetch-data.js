import PocketBase from 'pocketbase';
import fs from 'fs';

// 1. Double check: Use http for local, 127.0.0.1 for Node stability
const pb = new PocketBase('http://127.0.0.1:8090');

async function exportCollection() {
    try {
        console.log('Fetching from PocketBase...');

        // 2. Await the records
        const records = await pb.collection('items').getFullList({
            sort: 'name',
        });

        // 3. Debug check: If records is undefined, something is wrong with the SDK call
        if (!records) {
            console.error('❌ Error: Records returned undefined. Check your collection name.');
            return;
        }

        console.log(`Successfully fetched ${records.length} items.`);

        const mergedData = records.reduce((acc, item) => {
            const existing = acc.find(r => r.name === item.name);

            if (existing) {
                existing.sources.push({
                    source: item.source,
                    url: item.url
                })
            } else {
                acc.push({
                    ...item,
                    sources: [{ source: item.source, url: item.url }]
                });
            }
            return acc;
        }, []);


        // 4. Ensure directory exists
        const dir = 'src/lib/data';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // 5. Explicitly stringify and check result
        const jsonData = JSON.stringify(mergedData, null, 2);

        if (jsonData) {
            fs.writeFileSync(`${dir}/items.json`, jsonData);
            console.log('✅ Items exported to src/lib/data/items.json');
        } else {
            console.error('❌ Error: JSON.stringify produced no data.');
        }

    } catch (error) {
        console.error("❌ Critical Error during export:", error);
    }
}

exportCollection();
