// العد التنازلي لرمضان (1 مارس 2025)
function updateCountdown() {
    const ramadanDate = new Date('March 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = ramadanDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = "رمضان مبارك!";
    }
}

const interval = setInterval(updateCountdown, 1000);

// جدول أوقات الصلاة
const prayerTimes = [
    { day: "1 (سبت)", suhur: "05:19", fajr: "05:34", sunrise: "07:13", zuhr: "12:47", asr: "15:39", maghrib: "18:19", iftar: "18:19", isha: "19:48" },
    { day: "2 (أحد)", suhur: "05:17", fajr: "05:32", sunrise: "07:11", zuhr: "12:47", asr: "15:40", maghrib: "18:21", iftar: "18:21", isha: "19:50" },
    { day: "3 (إثنين)", suhur: "05:15", fajr: "05:30", sunrise: "07:09", zuhr: "12:47", asr: "15:41", maghrib: "18:22", iftar: "18:22", isha: "19:51" },
    { day: "4 (ثلاثاء)", suhur: "05:13", fajr: "05:28", sunrise: "07:07", zuhr: "12:47", asr: "15:42", maghrib: "18:24", iftar: "18:24", isha: "19:53" },
    { day: "5 (أربعاء)", suhur: "05:11", fajr: "05:26", sunrise: "07:04", zuhr: "12:47", asr: "15:44", maghrib: "18:26", iftar: "18:26", isha: "19:54" },
    { day: "6 (خميس)", suhur: "05:08", fajr: "05:23", sunrise: "07:02", zuhr: "12:46", asr: "15:45", maghrib: "18:27", iftar: "18:27", isha: "19:56" },
    { day: "7 (جمعة)", suhur: "05:06", fajr: "05:21", sunrise: "07:00", zuhr: "12:46", asr: "15:46", maghrib: "18:29", iftar: "18:29", isha: "19:58" },
    { day: "8 (سبت)", suhur: "05:04", fajr: "05:19", sunrise: "06:58", zuhr: "12:46", asr: "15:47", maghrib: "18:31", iftar: "18:31", isha: "19:59" },
    { day: "9 (أحد)", suhur: "05:02", fajr: "05:17", sunrise: "06:56", zuhr: "12:46", asr: "15:48", maghrib: "18:32", iftar: "18:32", isha: "20:01" },
    { day: "10 (إثنين)", suhur: "05:00", fajr: "05:15", sunrise: "06:54", zuhr: "12:45", asr: "15:49", maghrib: "18:34", iftar: "18:34", isha: "20:02" },
    { day: "11 (ثلاثاء)", suhur: "04:58", fajr: "05:13", sunrise: "06:52", zuhr: "12:45", asr: "15:50", maghrib: "18:36", iftar: "18:36", isha: "20:04" },
    { day: "12 (أربعاء)", suhur: "04:56", fajr: "05:11", sunrise: "06:49", zuhr: "12:45", asr: "15:51", maghrib: "18:37", iftar: "18:37", isha: "20:06" },
    { day: "13 (خميس)", suhur: "04:53", fajr: "05:08", sunrise: "06:47", zuhr: "12:45", asr: "15:53", maghrib: "18:39", iftar: "18:39", isha: "20:07" },
    { day: "14 (جمعة)", suhur: "04:51", fajr: "05:06", sunrise: "06:45", zuhr: "12:44", asr: "15:54", maghrib: "18:41", iftar: "18:41", isha: "20:09" },
    { day: "15 (سبت)", suhur: "04:49", fajr: "05:04", sunrise: "06:43", zuhr: "12:44", asr: "15:55", maghrib: "18:42", iftar: "18:42", isha: "20:11" },
    { day: "16 (أحد)", suhur: "04:47", fajr: "05:02", sunrise: "06:41", zuhr: "12:44", asr: "15:56", maghrib: "18:44", iftar: "18:44", isha: "20:12" },
    { day: "17 (إثنين)", suhur: "04:45", fajr: "05:00", sunrise: "06:38", zuhr: "12:44", asr: "15:57", maghrib: "18:46", iftar: "18:46", isha: "20:14" },
    { day: "18 (ثلاثاء)", suhur: "04:42", fajr: "04:57", sunrise: "06:36", zuhr: "12:43", asr: "15:58", maghrib: "18:47", iftar: "18:47", isha: "20:16" },
    { day: "19 (أربعاء)", suhur: "04:40", fajr: "04:55", sunrise: "06:34", zuhr: "12:43", asr: "15:59", maghrib: "18:49", iftar: "18:49", isha: "20:17" },
    { day: "20 (خميس)", suhur: "04:38", fajr: "04:53", sunrise: "06:32", zuhr: "12:43", asr: "16:00", maghrib: "18:51", iftar: "18:51", isha: "20:19" },
    { day: "21 (جمعة)", suhur: "04:35", fajr: "04:50", sunrise: "06:30", zuhr: "12:42", asr: "16:01", maghrib: "18:52", iftar: "18:52", isha: "20:21" },
    { day: "22 (سبت)", suhur: "04:33", fajr: "04:48", sunrise: "06:27", zuhr: "12:42", asr: "16:02", maghrib: "18:54", iftar: "18:54", isha: "20:22" },
    { day: "23 (أحد)", suhur: "04:31", fajr: "04:46", sunrise: "06:25", zuhr: "12:42", asr: "16:03", maghrib: "18:55", iftar: "18:55", isha: "20:24" },
    { day: "24 (إثنين)", suhur: "04:29", fajr: "04:44", sunrise: "06:23", zuhr: "12:41", asr: "16:04", maghrib: "18:57", iftar: "18:57", isha: "20:26" },
    { day: "25 (ثلاثاء)", suhur: "04:26", fajr: "04:41", sunrise: "06:21", zuhr: "12:41", asr: "16:05", maghrib: "18:59", iftar: "18:59", isha: "20:28" },
    { day: "26 (أربعاء)", suhur: "04:24", fajr: "04:39", sunrise: "06:19", zuhr: "12:41", asr: "16:06", maghrib: "19:00", iftar: "19:00", isha: "20:29" },
    { day: "27 (خميس)", suhur: "04:22", fajr: "04:37", sunrise: "06:16", zuhr: "12:41", asr: "16:06", maghrib: "19:02", iftar: "19:02", isha: "20:31" },
    { day: "28 (جمعة)", suhur: "04:19", fajr: "04:34", sunrise: "06:14", zuhr: "12:40", asr: "16:07", maghrib: "19:04", iftar: "19:04", isha: "20:33" },
    { day: "29 (سبت)", suhur: "04:17", fajr: "04:32", sunrise: "06:12", zuhr: "12:40", asr: "16:08", maghrib: "19:05", iftar: "19:05", isha: "20:34" },
    { day: "30 (أحد)", suhur: "04:14", fajr: "04:29", sunrise: "06:10", zuhr: "12:40", asr: "16:09", maghrib: "19:07", iftar: "19:07", isha: "20:36" },
    { day: "31 (إثنين)", suhur: "04:12", fajr: "04:27", sunrise: "06:07", zuhr: "12:39", asr: "16:10", maghrib: "19:08", iftar: "19:08", isha: "20:38" },
];

function fillPrayerTable() {
    const tableBody = document.getElementById('prayer-table');
    prayerTimes.forEach(time => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${time.day}</td>
            <td>${time.suhur}</td>
            <td>${time.fajr}</td>
            <td>${time.sunrise}</td>
            <td>${time.zuhr}</td>
            <td>${time.asr}</td>
            <td>${time.maghrib}</td>
            <td>${time.iftar}</td>
            <td>${time.isha}</td>
        `;
        tableBody.appendChild(row);
    });
}

fillPrayerTable();

// دعاء اليوم
const duas = [
    "اللهم أعني على صيامه وقيامه، وتقبله مني.",
    "اللهم اجعل صيامي فيه صيام الصائمين، وقيامي فيه قيام القائمين.",
    "اللهم ارزقني فيه الذكر والخشوع، واغفر لي ذنوبي يا عزيز.",
    "اللهم ارزقني فيه الرحمة والمغفرة، واجعلني من عتقائك من النار.",
    "اللهم ارزقني فيه الصبر والثبات، واغفر لي ذنوبي يا غفور.",
    "اللهم ارزقني فيه القرب منك، واجعلني من أوليائك الصالحين.",
    "اللهم ارزقني فيه الفوز بالجنة، ونجني من النار.",
    "اللهم ارزقني فيه الخير كله، واصرف عني الشر كله.",
    "اللهم ارزقني فيه الهدى والتقى، والعفاف والغنى.",
    "اللهم ارزقني فيه الصحة والعافية، واجعلني من الشاكرين.",
    "اللهم ارزقني فيه القوة والنشاط، واجعلني من العابدين.",
    "اللهم ارزقني فيه السعادة والفرح، واجعلني من المقبولين.",
    "اللهم ارزقني فيه البركة والرزق، واجعلني من المتقين.",
    "اللهم ارزقني فيه العلم النافع، واجعلني من العالمين.",
    "اللهم ارزقني فيه العمل الصالح، واجعلني من الصالحين.",
    "اللهم ارزقني فيه الإخلاص في القول والعمل، واجعلني من المخلصين.",
    "اللهم ارزقني فيه التوفيق في كل أموري، واجعلني من الفائزين.",
    "اللهم ارزقني فيه الرضا والقناعة، واجعلني من الراضين.",
    "اللهم ارزقني فيه العفو والعافية، واجعلني من المعافين.",
    "اللهم ارزقني فيه الجود والكرم، واجعلني من الكرماء.",
    "اللهم ارزقني فيه الصدق والإخلاص، واجعلني من الصادقين.",
    "اللهم ارزقني فيه الحلم والصبر، واجعلني من الحلماء.",
    "اللهم ارزقني فيه القوة والإرادة، واجعلني من العازمين.",
    "اللهم ارزقني فيه السكينة والطمأنينة، واجعلني من المطمئنين.",
    "اللهم ارزقني فيه الرفق واللين، واجعلني من الرفقاء.",
    "اللهم ارزقني فيه العزة والكرامة، واجعلني من المعززين.",
    "اللهم ارزقني فيه النجاح والفلاح، واجعلني من الناجحين.",
    "اللهم ارزقني فيه السداد في القول والعمل، واجعلني من المهتدين.",
    "اللهم ارزقني فيه الرشاد في الأمور كلها، واجعلني من الراشدين.",
    "اللهم ارزقني فيه الخشية منك، واجعلني من الخاشعين.",
];

function updateDailyDua() {
    const today = new Date().getDate() - 1; // اليوم الحالي (يبدأ من 0)
    document.getElementById('daily-dua').innerText = duas[today % duas.length];
}

updateDailyDua();
