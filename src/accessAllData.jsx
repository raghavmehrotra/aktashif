export function getHubNames() {
  return ["societies", "bte", "earthAndSky", "health", "fiction", "greats"]
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
  return ["Societies", "Business, Technology & Economics", "Earth and Sky", "Health and the Mind", "Fiction", "Great Ideas & Great People"]
}
