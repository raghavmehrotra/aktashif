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
    "الأفكار الجيدة والشخصيات العظيمة",
    "الصحة والنفس",
    "الأرض والسماء",
    "الروايات"
  ]
}

export function getBooks() {
    return [{name:"Pride and Prejudice", author:"Jane Austen", cover:"p"},{name:"Alice in Wonderland", author:"Lewis Caroll", cover:"a"},{name:"Frankenstein", author:"Mary Shelley",cover:"f"},{name:"Sherlock Holmes", author: "Arthur Conan Doyle",cover:"s"}, {name:"Metamorphosis", author: "Franz Kafka", cover:"m"}]
}

export function getClusterDescription(clusterName) {
    const mapping = {'sample-cluster': "يكن لعدم الثانية عل, جديداً الخاطفة منشوريا بها تم, إذ جهة الأمم الجنوب. أي أما الحربية المعارك, قد وعلى الحربي، الأولية جعل. بحث إعادة قُدُماً ان, بحث أطراف استولت شموليةً ما. الغزو قبضتهم للسيطرة عدد أم. دون أي بالقصف العالم، للأسطول.مدن ثم للسيطرة سنغافورة, أفاق الاعتداء أخر ٣٠, لمّ أسيا غرّة، مع. هو ودول وجهان فقد, في الوراء وبلتحديد، غير وألمّ وجهان به،, ان ربع حصدت وحزبه, أم جعل بشكل سابق الكونجرس. وضم يقوم الأولية شموليةً أن, أي ربع طرفاً الأرضي.ذلك بالفشل ونستون ابتدعها قد. لها قد مساعدة الحلفاء, واشتدّت الهزائم إلى كل. تم البلطيق الحيلولة دار, عن به، تُصب البرية والحلفاء. مشارف واشتدّت شبح كل, بتخصيص بل مما. الحرة بقيادة تم وصل."}
    return mapping[clusterName]
}
