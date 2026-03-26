interface OS {
  version(): void;
  name: string;
}
class MacOS implements OS {
  public name = "MacOS";
  version() {
    console.info(`${this.name} 1.0`);
  }
}

const macOS = new MacOS();
macOS.version();

function getVersion(os: OS) {
  os.version();
}
getVersion(macOS);
