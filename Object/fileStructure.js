const fileStructure = {
  name: 'root',
  type: 'folder',
  contents: [
    {
      name: 'folder1',
      type: 'folder',
      contents: [
        { name: 'file1.txt', type: 'file' },
        { name: 'file2.txt', type: 'file' }
      ]
    },
    {
      name: 'folder2',
      type: 'folder',
      contents: [
        {
          name: 'subfolder1',
          type: 'folder',
          contents: [
            { name: 'file3.txt', type: 'file' }
          ]
        }
      ]
    },
    { name: 'file4.txt', type: 'file' }
  ]
};

// Updated getPath function
const getPath = (obj, oldPath = 'root') =>
  (obj?.contents ?? []).flatMap(item => {
    const newPath = `${oldPath}/${item.name}`;
    return item.type === 'file' ? newPath : getPath(item, newPath);
  });

console.log(getPath(fileStructure, fileStructure.name));
// Output: ['root/folder1/file1.txt', 'root/folder1/file2.txt', 'root/folder2/subfolder1/file3.txt', 'root/file4.txt']






// [
//   'root/folder1/file1.txt',
//   'root/folder1/file2.txt',
//   'root/folder2/subfolder1/file3.txt',
//   'root/file4.txt'
// ]