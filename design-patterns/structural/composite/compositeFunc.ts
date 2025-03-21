type FileSystemItem =
  | { type: "file"; name: string; size: number }
  | { type: "folder"; name: string; children: FileSystemItem[] };

const getSize = (item: FileSystemItem): number => {
  if (item.type === "file") return item.size;
  return item.children.reduce((total, child) => total + getSize(child), 0);
};

const root: FileSystemItem = {
  type: "folder",
  name: "Root",
  children: [
    {
      type: "folder",
      name: "SubFolder",
      children: [{ type: "file", name: "file1.txt", size: 100 }],
    },
    { type: "file", name: "file2.txt", size: 200 },
  ],
};

console.log(`${root.name} size: ${getSize(root)} bytes`);
// Output: Root size: 300 bytes
