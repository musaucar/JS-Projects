const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDay(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()


let months =[
    'Ocak',
    'Şubat',
    'Mart',
    'Nisan',
    'Mayıs',
    'Haziran',
    'Temmuz',
    'Ağustos',
    'Eylül',
    'Ekim',
    'Kasım',
    'Aralık'
]   

let days = [
    'Pazar',
    'Pazartesi',
    'Salı',
    'Çarşamba',
    'Perşembe',
    'Cuma',
    'Cumartesi'
] 


// months[month]
//${months[month]}
let humanReadableDate =`${day} ${months[month]} ${year}, ${days[dayNumber]} ,${hour}:${minute}:${second}`

// 26 Şubat 2022, Cumartesi, 22:15:14

console.log(humanReadableDate)