// Component interface
interface FileSystemItem {
  getName(): string;
  getSize(): number;
}

// Leaf: File
class File implements FileSystemItem {
  constructor(private name: string, private size: number) {}

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }
}

// Composite: Folder
class Folder implements FileSystemItem {
  private children: FileSystemItem[] = [];

  constructor(private name: string) {}

  add(item: FileSystemItem): void {
    this.children.push(item);
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.children.reduce((total, item) => total + item.getSize(), 0);
  }
}

// Usage
const file1 = new File("file1.txt", 100);
const file2 = new File("file2.txt", 200);

const subFolder = new Folder("SubFolder");
subFolder.add(file1);

const rootFolder = new Folder("Root");
rootFolder.add(subFolder);
rootFolder.add(file2);

console.log(`${rootFolder.getName()} size: ${rootFolder.getSize()} bytes`);
// Output: Root size: 300 bytes
