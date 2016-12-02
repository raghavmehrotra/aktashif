export function getFirebaseData() {
  var config = {
    apiKey: "AIzaSyC-SPQf0ZOOqy82uzjlf-MrtlsBm3An7K4",
    authDomain: "aktashif.firebaseapp.com",
    databaseURL: "https://aktashif.firebaseio.com",
    storageBucket: "aktashif.appspot.com",
    messagingSenderId: "284535194669"
  };
  var firebase = new Firebase("https://aktashif.firebaseio.com/hubs/");
  console.log(firebase)
  firebase.once("value", function(snapshot) {
    console.log("Inside hub connector")
    console.log(snapshot.val())
  })
}

export function getHubNames() {
  return ["societies", "bte", "greats", "health", "earthAndSky", "fiction"]
}

export function getHubDescriptions(hubName) {
  const mapping = {
    "societies": "This is a description for societies",
    "bte": "This is a description for bte",
    "earthAndSky": "This is a description for earth and sky",
    "health": "This is a description for health",
    "fiction": "This is a description for fiction",
    "greats": "This is a description for greats"
  }
  // return mapping[hubName]
  var str = "يكن لعدم الثانية عل, جديداً الخاطفة منشوريا بها تم, إذ جهة الأمم الجنوب. أي أما الحربية المعارك, قد وعلى الحربي، الأولية جعل. بحث إعادة قُدُماً ان, بحث أطراف استولت شموليةً ما. الغزو قبضتهم للسيطرة عدد أم. دون أي بالقصف العالم، للأسطول."
  return str
}

export function getHubCaptions() {
  // return ["Societies", "Business, Technology & Economics", "Great Ideas & Great People", "Health and the Mind", "Earth and Sky", "Fiction"]
  return [
    "مجتمعات",
    "الأعمال والتكنولوجيا والاقتصاد",
    "أفكار وأشخاص عظماء",
    "الصحة والنفس",
    "الأرض والسماء",
    "الروايات"
  ]
}

export function getClusters(hub) {
  return [{name: "الصحة", imageURL: "health", description: ""}, {name: "تربية الأطفال", imageURL: "nurture", description: ""}, {name: "النساء", imageURL: "women", description: ""}]
}

export function getBooks() {
    return [{id: 1, name:"Pride and Prejudice", author:"Jane Austen", image:"book-images/p.jpg", pages: 543},{id: 2, name:"Alice in Wonderland", author:"Lewis Caroll", image:"book-images/a.jpg"},{id: 3, name:"Frankenstein", author:"Mary Shelley",image:"book-images/f.jpg"},{id: 4, name:"Sherlock Holmes", author: "Arthur Conan Doyle", image:"book-images/s.jpg"}]
}

export function getUser(user) {
  return {name: "Sample User", image: "moon.png", books: [{id: 1, bookmarks:[1,4,10], lastPage: 120}, {id: 2, progress:"43%"}], trophies: [{id: 1, image:"trophy.png", name: "cluster"}]}
}

export function getClusterDescription(clusterName) {
    const mapping = ["يكن لعدم الثانية عل, جديداً الخاطفة منشوريا بها تم, إذ جهة الأمم الجنوب. أي أما الحربية المعارك, قد وعلى الحربي، الأولية جعل. بحث إعادة قُدُماً ان, بحث أطراف استولت شموليةً ما. الغزو قبضتهم للسيطرة عدد أم. دون أي بالقصف العالم، للأسطول.مدن ثم للسيطرة سنغافورة, أفاق الاعتداء أخر ٣٠, لمّ أسيا غرّة، مع. هو ودول وجهان فقد, في الوراء وبلتحديد، غير وألمّ وجهان به،, ان ربع حصدت وحزبه, أم جعل بشكل سابق الكونجرس. وضم يقوم الأولية شموليةً أن, أي ربع طرفاً الأرضي.ذلك بالفشل ونستون ابتدعها قد. لها قد مساعدة الحلفاء, واشتدّت الهزائم إلى كل. تم البلطيق الحيلولة دار, عن به، تُصب البرية والحلفاء. مشارف واشتدّت شبح كل, بتخصيص بل مما. الحرة بقيادة تم وصل."]
    return mapping[0]
}
