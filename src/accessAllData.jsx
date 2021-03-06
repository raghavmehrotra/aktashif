export function getFirebaseReference(path) {
  var config = {
    apiKey: "AIzaSyC-SPQf0ZOOqy82uzjlf-MrtlsBm3An7K4",
    authDomain: "aktashif.firebaseapp.com",
    databaseURL: "https://aktashif.firebaseio.com",
    storageBucket: "aktashif.appspot.com",
    messagingSenderId: "284535194669"
  };
  var firebase = new Firebase("https://aktashif.firebaseio.com/"+path);
  return firebase
}

export function getClusters(hub) {
  return [{name: "الصحة", imageURL: "health", description: ""}, {name: "تربية الأطفال", imageURL: "nurture", description: ""}, {name: "النساء", imageURL: "women", description: ""}]
}

export function getBooks() {
    return [{id: 1, name:"Pride and Prejudice", author:"Jane Austen", image:"book-images/p.jpg", pages: 543},{id: 2, name:"Alice in Wonderland", author:"Lewis Caroll", image:"book-images/a.jpg"},{id: 3, name:"Frankenstein", author:"Mary Shelley",image:"book-images/f.jpg"},{id: 4, name:"Sherlock Holmes", author: "Arthur Conan Doyle", image:"book-images/s.jpg"}]
}

export function getUser(user) {
  return {name: "Sample User", image: "moon.png", books: [{id: 1, bookmarks:[1,4,10], progress: "64%"}, {id: 2, progress:"43%"}], trophies: [{id: 1, image:"trophy.png", name: "cluster"}]}
}

export function getClusterDescription(clusterName) {
    const mapping = ["هذا وصف للموضوع. قد يستبدل هذا الوصف بمقطع فيديو، مقطع صوتي، أو أي شيء آخر."]
    return mapping[0]
}
