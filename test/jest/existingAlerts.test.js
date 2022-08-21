import path from "path";
import fs from "fs";
import * as CAP_1_2 from "../../dist/node/CAP-1-2";

it("validates real-life Alerts", async (done) => {
    for (let i = 1; i < 14; i++) {
        const filepath = `./mock_data/BC/${i}/WEPA41/PAAQCAP.xml`;
        const testXMLPath = path.resolve(__dirname, filepath);

        let alert, err;
        try {
            const xml = fs.readFileSync(testXMLPath, { encoding: "utf-8" });

            alert = await CAP_1_2.Alert.fromXML(xml);
        } catch (e) {
            err = new Error(`Error on filepath '${testXMLPath}': ${e}`);
        }
        expect(err).toBeUndefined();
        expect(alert?.validate()).toBeUndefined();
    }
    done();
});

