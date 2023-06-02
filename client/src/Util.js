const setLocalStorageObject = (path,dataObject) => {
    let jsonString = JSON.stringify(dataObject)
    localStorage.setItem(path, jsonString);
}

const getLocalStorageObject = (path) => {
  let jsonObject = JSON.parse(localStorage.getItem(path));
  return jsonObject;
}

const removeStorageObjectByPath = (path) => {
    localStorage.removeItem(path);
}

const removeStorageObjects = () => {
    localStorage.clear();
}

const ImagePaths = [
    {
        imageName: "card-1",
        ref: 1,
        flipped: false,
        set: false
    },
    {
        imageName: "card-2",
        ref: 2,
        flipped: false,
        set: false
    },
    {
        imageName: "card-3",
        ref: 3,
        flipped: false,
        set: false
    },
    {
        imageName: "card-4",
        ref: 4,
        flipped: false,
        set: false
    },
    {
        imageName: "card-5",
        ref: 4,
        flipped: false,
        set: false
    },
    {
        imageName: "card-6",
        ref: 5,
        flipped: false,
        set: false
    },
    {
        imageName: "card-7",
        ref: 1,
        flipped: false,
        set: false
    },
    {
        imageName: "card-8",
        ref: 3,
        flipped: false,
        set: false
    },
    {
        imageName: "card-9",
        ref: 2,
        flipped: false,
        set: false
    },
    {
        imageName: "card-10",
        ref: 5,
        flipped: false,
        set: false
    },
]

export {setLocalStorageObject,getLocalStorageObject,removeStorageObjects,removeStorageObjectByPath,ImagePaths};
