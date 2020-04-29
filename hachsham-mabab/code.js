var GAME_MATRIX = [];
var arrGoastMatrix = [];
var FOOD_SIGN = "f";
var BOARD_SIGN = "b";
var EMPTY_SIGN = "e";
var PLAYER_SIGN = "p";
var QUESTION_SIGN = "q";
var BOARD_SIZE = 1;
var DIR_DIFFERENCE = 40;
var DIR_MAT = [
    [1, 0], // down
    [0, 1], // right
    [-1, 0], // up
    [0, -1] 
]; //left
var MAX_ROW = 13;
var MAX_COL = 11;
var FOOD_SUM = 10;
var EAT_DOTS_TO_ADD = 10;
var arrGameMatrix = [[BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, FOOD_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN ,BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN , BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, FOOD_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, FOOD_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, FOOD_SIGN, EMPTY_SIGN, EMPTY_SIGN,  BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, FOOD_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN]
    ];
var elRows;
var elScore;
var nCurrPacManRow;
var nCurrPacManCol;
var nNewPacManRow;
var nNewPacManCol;
var elGoast;
var elPacman;
var elBoard;

var nLifeCounter;
var nFoodCounter;
var nScoreCounter;
var nQuestionCounter = 0;
var arrayOfNumbers = [];
var counterNumOfQuestions = 0;
var chosenAnswer;
var blsIsTrue;
var feedbackBox;
var grayScreen;
var theQuestionsArea;
var correctAnswerCounter = 0;
var incorrecAnswerCounter = 0;
var buttonCheck;

var nCurrPacPosLeft;
var nCurrPacPosTop;

var questions = [{
    "subject": "מבוא ללמידה",
    "question": "מהי ההגדרה ללמידה יעילה?",
    "answer1": "שינוי בתהליך הלמידה עקב התנסות חוזרת",
    "answer2": "שינוי יציב בהתנהגות עקב התנסויות חוזרות",
    "answer3": "שינוי יציב בהתנהגות עקב התנסות מחוזקת",
    "answer4": "שינוי בתהליך של החניך עקב התנסות מחוזקת",
    "correctAnswer": "3"
}, {
    "subject": "מבוא ללמידה",
    "question": "על מה חשוב שנקפיד כשאנחנו מחזקים חניכים?",
    "answer1": "גיוון בחיזוקים, לדאוג לתת גם חיובי וגם שלילי, לדעת להכחיד כשצריך",
    "answer2": "גיוון בחיזוקים, שהחיזוק יהיה פרופורציונלי ומיידי",
    "answer3": "שימוש באותו החיזוק עדי לא לבלבל את החניך, שהחיזוק יהיה מיידי ",
    "answer4": "גיוון בחיזוקים, לדאוג לתת גם חיובי וגם שלילי, לתת חיזוקים תוך כדי הפעלה",
    "correctAnswer": "2"
}, {
    "subject": "זיכרון",
    "question": "אילו 2 תקלות יכולות להיות בשליפה?",
    "answer1": "חוסר מוטיבציה, קושי בלמידה",
    "answer2": "הסתגלות לסביבה, מידע מפוזר",
    "answer3": "אי שימוש במידע זמן רב, חוסר מוטיבציה",
    "answer4": "אי שימוש במידע זמן רב, חוסר התאמה למדריך",
    "correctAnswer": "3"
}, {
    "subject": "זיכרון",
    "question": "תהליך הזיכרון בנוי מארבעה שלבים, מהו הסדר הנכון?",
    "answer1": "אחסון, עיבוד, קליטה, שליפה",
    "answer2": "קליטה, עיבוד, אחסון, שליפה",
    "answer3": "קרינה, איבוד, חיסון, שליפה",
    "answer4": "קליפה, לימוד, אפסון, הקאה",
    "correctAnswer": "2"
}, {
    "subject": "מטרות בהדרכה",
    "question": "ציין 2 כללים לניסוח מטרות שנלמדו בשיעור מטרות בהדרכה:",
    "answer1": "ריאלי, פועל ברמת חשיבה- תפעול",
    "answer2": "איכותי, מאתגרות את הלומד ",
    "answer3": "כמותי, חד משמעי וברור",
    "answer4": "תוצר למידה, אופי התפקיד",
    "correctAnswer": "3"
}, {
    "subject": "מטרות בהדרכה",
    "question": "מהי מטרת העל?",
    "answer1": "תוצאת הלמידה שלא ידועה ללמוד",
    "answer2": "התוצר הסופי שיושג בסוף תהליכי הלמידה",
    "answer3": "המאמץ הנדרש מהלומד ברמת ידע",
    "answer4": "התנהגות רצויה של הלומד תוך כדי הלמידה",
    "correctAnswer": "2"
}, {
    "subject": "רמות חשיבה",
    "question": "ביצוע הערכה במספר נקודות זמן הינה שיטה יעילה להימנע בעיקר ממוקש: ",
    "answer1": "ציפיות",
    "answer2": "ראשוניות",
    "answer3": "פיגמליון",
    "answer4": "ייחוס",
    "correctAnswer": "2"
}, {
    "subject": "רמות חשיבה",
    "question": " הנך מדריך בהכשרה, נכנסת לכיתה באיחור של 30 דקות לכן האשמת את מכונת הצילום שלא עובדת ובכך דרכתי על מוקש:",
    "answer1": "ייחוס",
    "answer2": "ציפיות",
    "answer3": "סטריאוטיפ",
    "answer4": "שמרנות בתפיסה",
    "correctAnswer": "1"
}, {
    "subject": 'מבנה יח״ל',
    "question": "במהלך השיעור רמת הקשב של החניכים הייתה ירודה, לפי אילו מרכיבים בגוף המדריך יכול למנוע זאת?",
    "answer1": "חלוקה לשלבים, סיכום ביניים, וידוא הבנה, קישור בין שלבים ",
    "answer2": "חזרה על נק' עיקריות, חלוקה לשלבים, סיכום ביניים, וידוא הבנה ",
    "answer3": "המחשת צורך, חזרה על נק' עיקריות, וידוא הבנה , קישור בין שלבים ",
    "answer4": " הצגת מטרות, קישור בין שלבים, חזרה על נק' עיקריות, וידוא הבנה",
    "correctAnswer": "1"
}, {
    "subject": 'מבנה יח״ל',
    "question": "מהלך השיעור יוסי החניך ישב מהורהר ולא הבין למה הוא צריך ללמוד את השיעור הזה. איך המפקד יכול למנוע את תחושותיו של יוסי בתחילת השיעור?",
    "answer1": "להציג את מטרת העל בצורה מפורשת ",
    "answer2": "להשתמש ביצירת ענין יעילה ",
    "answer3": "לעשות התאמת רמה ",
    "answer4": "לתת הנעה והנמקה",
    "correctAnswer": "4"
}, {
    "subject": "עזרי אימון",
    "question": "מהם סוגי עזרי האימון?",
    "answer1": "שקף, מצגת, מבחן",
    "answer2": "שיקוף מילולי, שיקוף בלתי מילולי, תיאור, המחשה",
    "answer3": "שיקוף מילולי, המחשה ותיאור, תרגול/בחינה",
    "answer4": "תיאור, המחשה, תרגול, בחינה",
    "correctAnswer": "3"
}, {
    "subject": "עזרי אימון",
    "question": "מהם העקרונות בהכנת שיעור עם מצגת?",
    "answer1": "קלות העריכה, זמינות למספר משתמשים, בקיאות, מקצועיות",
    "answer2": "לחסוך בזמן, בנייה על פי מבנה יחל, וידוא טכני",
    "answer3": "עיצוב פשוט, לגוון באמצעים, בקיאות ומקצועיות",
    "answer4": "בנייה על פי מבנה יחל, עיצוב פשוט ומתון, בקיאות ומקצועיות, וידוא טכני",
    "correctAnswer": "4"
}, {
    "subject": "הפעלות",
    "question": "מהי ההגדרה להפעלה?",
    "answer1": "פעולה יזומה של הפעלת כוח בדרך מבצעית",
    "answer2": "פעולה יזומה שמטרתה להביא את החניכים להתנסות על ידי למידה",
    "answer3": "יזימת פעילות הווי וגיבוש בזמן שיעור",
    "answer4": "פעולה יזומה של המדריך שמטרתה להביא את החניכים לידי עשייה והתנסות לשם למידה",
    "correctAnswer": "4"
}, {
    "subject": "הפעלות",
    "question": "מהו שב׳ש?",
    "answer1": "שבת שלום",
    "answer2": "שבירת שמירה",
    "answer3": "שובר שגרה",
    "answer4": "שיעור בשעת שיא",
    "correctAnswer": "3"
}, {
    "subject": "הצגות ביצוע",
    "question": "איזה משפט הוא הנכון מבין המשפטים הבאים?",
    "answer1": "בהצגה שלילית נציג ביצוע שגוי של הפעולה תוך הסבר מה לא נכון בהצגה",
    "answer2": "הצגה שלילית צריכה להתבצע באופן מוגזם ומוקצן, כדי שהחניך יבין מה שגוי",
    "answer3": "הצגה שלילית היא הצגה הגורמת לחניך לא לרצות להשתתף בשיעור",
    "answer4": "הצגה שלילית היא דרך הצגת הביצוע הטובה ביותר ",
    "correctAnswer": "2"
}, {
    "subject": "הצגות ביצוע",
    "question": "מתי נרצה להשתמש בתצוגת תכלית?",
    "answer1": " כשנרצה לרדת לעומק הפרטים של ביצוע הפעולה",
    "answer2": "כשנרצה להראות ביצוע לא נכון של הפעולה",
    "answer3": "כשנרצה להדגים איך מבצעים את הפעולה בקצב איטי",
    "answer4": " כשנרצה להציג את ביצוע הפעולה כפי שהוא צריך להיות",
    "correctAnswer": "4"
}, {
    "subject": 'טכמ״ס',
    "question": 'מהי ההגדרה לטכמ״ס?',
    "answer1": "טכניקות מסירה",
    "answer2": "כה׳ן תקת׳ק + ב׳",
    "answer3": "שיטה להעלאת המוטיבציה לחניך ולהקל על המדריך בשיעור",
    "answer4": "דרך מבוססת להעביר חומר בצורה הכי יעילה",
    "correctAnswer": "4"
}, {
    "subject": 'טכמ״ס',
    "question": "מהו ההבדל בין בקיאות למקצועיות?",
    "answer1": "מקצועיות היא ידיעת החומר המקצועי של השיעור. בקיאות – לדעת מה בא אחרי מה ומתי בשיעור",
    "answer2": " אין הבדל, מילים נרדפות שמשמעותן זהה",
    "answer3": " מקצועיות- להיות מקצועי בשיעור ולדעת מה בא אחרי מה ומתי. בקיאות- להיות בקיא בחומר של השיעור",
    "answer4": "מקצועיות- מתקשר רק למערכת נשק ולסוללה. בקיאות- כל מה שקשור בהדרכה פרונטלית",
    "correctAnswer": "1"
}, {
    "subject": "התמודדות עם חניכים",
    "question": "איך נמנע הפרעות חניכים התלויות במדריך?",
    "answer1": " מבט, קרבה פיזית, שתיקה",
    "answer2": "הנמקה והנעה, הגדרת נהלים, בנייה נכונה של השיעור",
    "answer3": "הנמקה והנעה, דף רץ, כניסה עם נוכחות",
    "answer4": "הגדרת נהלים, עונשים, מבט",
    "correctAnswer": "2"
}, {
    "subject": "התמודדות עם חניכים",
    "question": "מהם העקרונות לשימוש והתאמת התגובות בהתמודדות עם חניכים?",
    "answer1": "ביטחון עצמי, ניסוח נכון, עקביות, אחידות, רגישות",
    "answer2": "שיקול דעת, קשר עין, ניסוח, עקביות ואחידות, גיוון",
    "answer3": "החלטיות, עקביות, אחידות, רגישות, חזרה על נהלים, שיקול דעת",
    "answer4": "שיקול דעת, גיוון, עקביות ואחידות, הדרגתיות, החלטיות, רגישות",
    "correctAnswer": "4"
}, {
    "subject": "שיעור שטח",
    "question": "מדוע סביבת השטח אינה נוחה להדרכה?",
    "answer1": "זוהי סביבה רצופה בלתמ׳ים, ללא עזרים, בעלת מאפיינים לא נוחים שלא ניתן לשלוט בהם",
    "answer2": "זוהי סביבה שאין בה עזרים להדרכה",
    "answer3": "זוהי סביבה חברתית המעלה את הרצון ללמידה",
    "answer4": "השטח הפראי מקשה על החניכים להתרכז בגלל העצמים שמסביב",
    "correctAnswer": "1"
}, {
    "subject": "שיעור שטח",
    "question": "מהם 5 העקרונות להעברת תכנים מחוץ לכיתה?",
    "answer1": "הגדלת ראש, אופטימיות, עירור מוטיבציה, שליטה וסדר, ססגוניות",
    "answer2": "התמודדות עם היסחים, פיקוד ושליטה, תכנון ודינמיות, אינטראקציה, פו׳ש",
    "answer3": "פו׳ש, התמודדות עם היסחים, יצירתיות, בטיחות, מוטיבציה",
    "answer4": "מוטיבציה, התמודדות עם היסחים, פו׳ש, תכנון ודינמיות, בטיחות",
    "correctAnswer": "4"
}, {
    "subject": "הקניית מיומנות",
    "question": "מהי ההגדרה להקניית מיומנות?",
    "answer1": "ביצוע פעולה באופן המדויק ביותר ובזמן המהיר ביותר",
    "answer2": "ביצוע אוטומטי של הפעולה",
    "answer3": "ביצוע פעולה עם ביטחון, באופן מהיר ומדויק ככל האפשר",
    "answer4": "ביצוע פעולה באופן מהיר, מדויק ואוטומטי ",
    "correctAnswer": "4"
}, {
    "subject": "הקניית מיומנות",
    "question": "מהו השלב ראשון בתהליך רכישת המיומנות?",
    "answer1": "להכיר את כלל הפעולות על פי הסדר שלהן",
    "answer2": "לימוד מושגים, שמות, חלקים ומצבים",
    "answer3": "תרגול באופן עצמאי עד הבחינה",
    "answer4": "תרגול בשלבים של סדר הפעולות",
    "correctAnswer": "2"
}, {
    "subject": "שיעור תיאום",
    "question": "מה  נרצה להקנות לחניך בשיעור תיאור?",
    "answer1": "זיהוי בסיסי, הכרת שמות, חלקים ומצבים",
    "answer2": "תיאור סדר הפעולות בביצוע אקט",
    "answer3": "בקיאות מלאה בביצוע אקט או בהתמודדות עם סיטואציה",
    "answer4": "תפעול מושלם של אקט על ידי החניך שמתרחש באופן אוטומטי",
    "correctAnswer": "1"
}, {
    "subject": "שיעור תיאום",
    "question": " מני ממטרה העביר שיעור הת׳ת M-16 לטירונים עליהם הוא מפקד. מני הסביר על חלקי הנשק לפי הסדר הבא: ידית האחיזה, קת, ידית נשיאה וכוונת החרירית, קנה, ולאחר מכן עבר לחלקים הפנימיים של הנשק. באיזה עיקרון להעברת שיעור תיאור השתמש מני?",
    "answer1": "חלוקה למערכות פונקציונליות",
    "answer2": " חלוקה לשעות",
    "answer3": "וידוא הבנה יישומי",
    "answer4": "תשובות א' וב' נכונות",
    "correctAnswer": "4"
}, {
    "subject": 'מת״י',
    "question": "כאשר ישנה בעיה בתפישה, היא תנבע ככל הנראה מ:",
    "answer1": "פער במשמעות או בהבנה",
    "answer2": "פער בקליטה או במדיניות",
    "answer3": "פער בקליטה או בביצוע",
    "answer4": "פער במשמעות או במדיניות",
    "correctAnswer": "4"
}, {
    "subject": 'מת״י',
    "question": "במידה וחייל מבין את החשיבות שבביצוע פעולה אך לא ידע איך לבצע אותה בזמן ההתנסות שלו, מה נגיד לו בשיחת המשוב?",
    "answer1": "נלמד ונסביר לו איך לעשות אותה",
    "answer2": "נשאל אותו איך לדעתו הוא יכול לבצע את הפעולה וניתן לו חיזוק",
    "answer3": "נשקף לו את הפער ונשפיל אותו כדי שיבין",
    "answer4": "נגיד לו ׳לא נורא׳ וננחם אותו עם שוקולד",
    "correctAnswer": "2"
}];

window.addEventListener("load", function(){
    loadElements();
    initGame();
});

function loadElements(){
    elRows = document.getElementById("rowArea");
    elScore = document.getElementById("score");
    elBoard = document.getElementById("boardArea");
}

function initGame(){
    //inits the game board.
    arrGameMatrix = [[BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, FOOD_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN ,BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN , BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, FOOD_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, FOOD_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, FOOD_SIGN, EMPTY_SIGN, EMPTY_SIGN,  BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, FOOD_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, EMPTY_SIGN, FOOD_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN, BOARD_SIGN, EMPTY_SIGN, EMPTY_SIGN, EMPTY_SIGN, BOARD_SIGN],
                    [BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN, BOARD_SIGN]
    ];
    var newRow;
    var newFood;
    var newBoard;

    var nRandomNumber;
    // draws 15 different numbers
    for(var i = 1; i <= 15; i++){
        nRandomNumber = Math.floor(Math.random() * (27 - 0) + 0);
        while(findMyNum(nRandomNumber)){
            nRandomNumber = Math.floor(Math.random() * (27 - 0) + 0);
        }
        arrayOfNumbers.push(nRandomNumber);
    }
    
    //init the rows.
    elRows.innerHTML = "";

    //adds the food and bord to the html
    for(var nRow = BOARD_SIZE; nRow < MAX_ROW - BOARD_SIZE; nRow++){
        newRow = document.createElement("div");
        newRow.className = "allRow";
        newRow.setAttribute("id", String(nRow));
        elRows.appendChild(newRow);
        for(var nCol = BOARD_SIZE; nCol < MAX_COL - BOARD_SIZE; nCol++){
            if(arrGameMatrix[nRow][nCol] === FOOD_SIGN){
                newFood = document.createElement("img");
                newFood.setAttribute("src", "dot-3.png");
                newFood.setAttribute("alt", "food");
                newFood.setAttribute("id", String(nRow+ ", "+nCol));
                newFood.className += "food";
                newRow.appendChild(newFood);
            } else{
                newBoard = document.createElement("div");
                newRow.appendChild(newBoard);
                newBoard.className += "space";
            }
        }
    }

    // add packman 
    elPacman = document.createElement("img");
    elPacman.setAttribute("src", "player.png");
    elPacman.className = "packman";
    elBoard.appendChild(elPacman);

    //init the backgroung image
    elBoard.style.backgroundImage = "url('newBoard.png')";

    //inits the variables
    arrGameMatrix[5][5] = EMPTY_SIGN;
    nFoodCounter = 0;
    nScoreCounter = 0;
    nCurrPacManRow = 5;
    nCurrPacManCol = 5;
    console.log(window.innerWidth);

    if((window.innerWidth >= "319") && (window.innerWidth <= "460")){
        nCurrPacPosLeft = 33;
        nCurrPacPosTop = 23;
        LEFT_DIFFERENCE = 7.3;
        TOP_DIFFERENCE = 5.3;
    } else if((window.innerWidth >= "460") && (window.innerWidth <= "736")){
        nCurrPacPosLeft = 23;
        nCurrPacPosTop = 31;
        LEFT_DIFFERENCE = 5.1;
        TOP_DIFFERENCE = 7;
    } else if((window.innerWidth >= "737") && (window.innerWidth <= "768")){
        nCurrPacPosLeft = 29;
        nCurrPacPosTop = 26;
        LEFT_DIFFERENCE = 6.5;
        TOP_DIFFERENCE = 5.9;
    } else if((window.innerWidth >= "768") && (window.innerWidth <= "992")){
        nCurrPacPosLeft = 32;
        nCurrPacPosTop = 28;
        LEFT_DIFFERENCE = 7;
        TOP_DIFFERENCE = 6.3;
    } else if(window.innerWidth >= "992"){
        nCurrPacPosLeft = 23.5;
        nCurrPacPosTop = 28.5;
        LEFT_DIFFERENCE = 5.2;
        TOP_DIFFERENCE = 6.5;
    }    
    //inits the score
    elScore.innerHTML = "ניקוד : 0";

    //add the listener to the arrows
    document.getElementById("n37").addEventListener("click", onClick);
    document.getElementById("n38").addEventListener("click", onClick);
    document.getElementById("n39").addEventListener("click", onClick);
    document.getElementById("n40").addEventListener("click", onClick);
}

function findMyNum(nRandomNumber){
    var blsIsExist = false;

    // check if the number is already taken
    for(var nLength = 0; nLength < 15; nLength++){
        if(nRandomNumber === arrayOfNumbers[nLength]){
            blsIsExist = true;
        }
    }
    return blsIsExist;
}

function onClick(event){
    //check which dir key was pressd
    var nMyDir = DIR_DIFFERENCE - event.currentTarget.id.substring(1,3);
    movePacman(nMyDir);
}

function movePacman(dirToMove){
    // saves the location according to the direction recived
    nNewPacManRow = nCurrPacManRow+DIR_MAT[dirToMove][0];
    nNewPacManCol = nCurrPacManCol+DIR_MAT[dirToMove][1];

    //if new location is valid
    if(arrGameMatrix[nNewPacManRow][nNewPacManCol] !== BOARD_SIGN){
        //updates pacman location - inner rep
        nCurrPacManRow = nNewPacManRow;
        nCurrPacManCol = nNewPacManCol;

        //updates pacman location -outer rep
        nCurrPacPosLeft += DIR_MAT[dirToMove][1]*LEFT_DIFFERENCE;
        nCurrPacPosTop += DIR_MAT[dirToMove][0]*TOP_DIFFERENCE;
        elPacman.style.left = nCurrPacPosLeft + "vw";
        elPacman.style.top = nCurrPacPosTop + "vh";

        // if the location has food
        if(arrGameMatrix[nCurrPacManRow][nCurrPacManCol] === FOOD_SIGN){
            nScoreCounter += EAT_DOTS_TO_ADD;
            elScore.innerHTML = "ניקוד : " + nScoreCounter;

            //inner rep
            arrGameMatrix[nCurrPacManRow][nCurrPacManCol] = EMPTY_SIGN;

            //getting the current row
            var elCurrRow = document.getElementById(String(nCurrPacManRow));

            //creates new elemt and inserts it before the img
            var newEmpty = document.createElement("div");
            elCurrRow.insertBefore(newEmpty, elCurrRow.children[nCurrPacManCol]);
            newEmpty.className += "space";

            //removes the img
            document.getElementById(nCurrPacManRow + ", "+ nCurrPacManCol).remove();

            // opens the question
            stepedOnQuestion();

            console.log(nFoodCounter);
        } 
    }
}

function stepedOnQuestion(){
    //opens gray screen
    grayScreen = document.createElement("div");
    grayScreen.className += "grayScreen";
    document.body.appendChild(grayScreen);  
    //opens question
    theQuestionsArea = document.createElement("div");
    theQuestionsArea.innerHTML = "<div class='subjectTitle'>" + questions[arrayOfNumbers[nFoodCounter]]["subject"] + "</div><br>" + 
                                "<div class='quesionTitle'>" + questions[arrayOfNumbers[nFoodCounter]]["question"] + "</div>" +
                                "<input type='radio' class='answers' id='answer1' name='answer' value='answer1'><label>" + questions[arrayOfNumbers[nFoodCounter]]["answer1"] + "</label><br>" + 
                                "<input type='radio' class='answers' id='answer2' name='answer' value='answer2'><label>" + questions[arrayOfNumbers[nFoodCounter]]["answer2"] + "</label><br>" + 
                                "<input type='radio' class='answers' id='answer3' name='answer' value='answer3'><label>" + questions[arrayOfNumbers[nFoodCounter]]["answer3"] + "</label><br>" + 
                                "<input type='radio' class='answers' id='answer4' name='answer' value='answer4'><label>" + questions[arrayOfNumbers[nFoodCounter]]["answer4"] + "</label><br>" +
                                "<button type='submit' id='checkBtn' class='submitBtn'>בדיקה</button>";
    theQuestionsArea.className += "questionsArea";
    document.body.appendChild(theQuestionsArea);
    buttonCheck = document.getElementById("checkBtn");     
    buttonCheck.addEventListener("click", checkChosenAnswer);            
}

function checkChosenAnswer(){
    if(document.getElementById('answer1').checked) {
        //first radio button is checked
        chosenAnswer = "1";
    }else if(document.getElementById('answer2').checked) {
        //second radio button is checked
        chosenAnswer = "2";
    } else if(document.getElementById('answer3').checked) {
        //third radio button is checked
        chosenAnswer = "3";
    } else if(document.getElementById('answer4').checked) {
        //fourth radio button is checked
        chosenAnswer = "4";
    }

    //disable all the buttons
    buttonCheck.removeEventListener("click", checkChosenAnswer); 

    //check if the answer is correct
    feedbackBox = document.createElement("div");
    feedbackBox.className += "feedBackBox"; 
    if(chosenAnswer === questions[arrayOfNumbers[nFoodCounter]]["correctAnswer"]){
        correctAnswerCounter++;
        nFoodCounter++;
        feedbackBox.style.backgroundColor = "#1e824c";
        blsIsTrue = true;
        feedbackBox.innerHTML = "תשובתך נכונה! כל הכבוד!" + "<br>" +
                                "<button id='backBtn' class='backBtn'>חזור</button>";
    } else{
        incorrecAnswerCounter++;
        feedbackBox.style.backgroundColor = "#96281b";
        blsIsTrue = false;
        feedbackBox.innerHTML = "טעית. נסה/י שוב!" + "<br>" +
                                "<button id='backBtn' class='backBtn'>חזור</button>";
    }
    document.body.appendChild(feedbackBox);

    //add lidtener to the back button
    var backButton = document.getElementById("backBtn");
    backButton.addEventListener("click", backToQuetsions);
}

function backToQuetsions(){
    if(blsIsTrue){
        //remove the gray screen and thequestion screen
        document.body.removeChild(grayScreen);
        document.body.removeChild(theQuestionsArea);
        document.body.removeChild(feedbackBox);
    } else{
        //remove only the feedback box
        document.body.removeChild(feedbackBox);
    }

    // if the player collected all the food
    if(nFoodCounter === FOOD_SUM){
        endScreen(true);
    }

    //disable all the buttons
    buttonCheck.addEventListener("click", checkChosenAnswer); 
}

function endScreen(isWin){
    //show the wanted screen 
    var congrats = document.createElement("div");
    congrats.className += "congrats";
    congrats.innerHTML = "מזל טוב! סיימת את הלומדה";
    document.body.appendChild(congrats);

    var scoreFinale = document.createElement("div");
    scoreFinale.className += "finalScore";
    scoreFinale.innerHTML = "הנסיונות השגויים: " + incorrecAnswerCounter + "<br>" +
                            "הנסיונות הנכונים: " + correctAnswerCounter + "<br>";
    document.body.appendChild(scoreFinale);

    var credits = document.createElement("div");
    credits.className += "credits";
    credits.innerHTML = 'מפקד מסלול נפ״ה : עידן ינובסקי' + "<br>" +
                        'מפקדת מדור טי״ל : שחר מהלל' + "<br>" +
                        'כותבת לומדה : עדן שר שלום' + "<br>" +
                        'מומחה תוכן : שרון כרמלי' + "<br>";
   document.body.appendChild(credits);

    //remove the elemts off the screen
    elRows.innerHTML = "";
    document.body.removeChild(elBoard);
    elBoard.removeChild(elPacman);
    elScore.innerHTML = "";
    document.getElementById("Title").remove();
    document.getElementById("n37").remove();
    document.getElementById("n38").remove();
    document.getElementById("n39").remove();
    document.getElementById("n40").remove();

    //create and add start over button
    //var elStartOver = document.createElement("button");
    //elStartOver.setAttribute("class", "start-over");
    //elStartOver.innerHTML = "start over";
    //elStartOver.addEventListener("click", initGame);
    //document.body.appendChild(elStartOver);
}