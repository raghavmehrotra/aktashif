export function getHubNames() {
  return ["societies", "bte", "earthAndSky", "health", "fiction", "greats"]
}

export function getHubCaptions() {
  return ["Societies", "Business, Technology & Economics", "Earth and Sky", "Health and the Mind", "Fiction", "Great Ideas & Great People"]
}

export function getBooks() {
    return [{name:"Pride and Prejudice", author:"Jane Austin", cover:"p"},{name:"Alice in Wonderland", author:"Lewis Caroll", cover:"a"},{name:"Frankenstein", author:"Mary Shelley",cover:"f"},{name:"Sherlock Holmes", author: "Arthur Conan Doyle",cover:"s"}, {name:"Metamorphosis", author: "Franz Kafka", cover:"m"}]
}

export function getClusterDescription(clusterName) {
    const mapping = {'sample-cluster': "يكن لعدم الثانية عل, جديداً الخاطفة منشوريا بها تم, إذ جهة الأمم الجنوب. أي أما الحربية المعارك, قد وعلى الحربي، الأولية جعل. بحث إعادة قُدُماً ان, بحث أطراف استولت شموليةً ما. الغزو قبضتهم للسيطرة عدد أم. دون أي بالقصف العالم، للأسطول.مدن ثم للسيطرة سنغافورة, أفاق الاعتداء أخر ٣٠, لمّ أسيا غرّة، مع. هو ودول وجهان فقد, في الوراء وبلتحديد، غير وألمّ وجهان به،, ان ربع حصدت وحزبه, أم جعل بشكل سابق الكونجرس. وضم يقوم الأولية شموليةً أن, أي ربع طرفاً الأرضي.ذلك بالفشل ونستون ابتدعها قد. لها قد مساعدة الحلفاء, واشتدّت الهزائم إلى كل. تم البلطيق الحيلولة دار, عن به، تُصب البرية والحلفاء. مشارف واشتدّت شبح كل, بتخصيص بل مما. الحرة بقيادة تم وصل."}
    return mapping[clusterName]
}
