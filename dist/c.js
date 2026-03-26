"use strict";
class MacOS {
    constructor() {
        this.name = "MacOS";
    }
    version() {
        console.info(`${this.name} 1.0`);
    }
}
const macOS = new MacOS();
macOS.version();
function getVersion(os) {
    os.version();
}
getVersion(macOS);
//# sourceMappingURL=c.js.map