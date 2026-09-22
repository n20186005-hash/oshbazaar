/**
 * Style reminder — 市集田野笔记：真实市场摄影是地点叙事主体；石榴红的索引与纸张纹理服务于长文阅读。
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Accessibility,
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  BedDouble,
  BookOpen,
  BusFront,
  CalendarDays,
  Camera,
  CarFront,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  ExternalLink,
  Fuel,
  HandHeart,
  History,
  Info,
  Landmark,
  Languages,
  MapPin,
  Navigation,
  ParkingCircle,
  Phone,
  Plane,
  Route,
  ShoppingBag,
  Sun,
  Users,
  UtensilsCrossed,
} from "lucide-react";
import WeatherSection from "@/components/WeatherSection";

type Locale = "ky" | "en";

const ASSETS = {
  market: "/assets/osh-bazaar-market.jpg",
  mark: "/assets/osh-bazaar-mark.png",
  textile: "/assets/osh-bazaar-textile.png",
  paper: "/assets/osh-bazaar-paper.png",
};

const MAP_URL = "https://maps.app.goo.gl/Zwu3fXYciWxa9A7ZA";
const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5208.19584640904!2d74.56766707758626!3d42.87496697114973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec86ab8c07f75%3A0xbc52cd6625964fd1!2z5aWl5LuA5be05omO!5e1!3m2!1sky!2skg";
const LAT = 42.874967;
const LON = 74.570242;
const CANONICAL = "https://oshbazaar.org/";

const copy = {
  ky: {
    locale: "Кыргызча",
    localeShort: "KY",
    brandKicker: "ТАЛАА ЖАЗМАЛАРЫ",
    languageLabel: "Тилди тандоо",
    mapAria: "Google Картаны ачуу",
    marketPhotoAlt: "Ош базарындагы татымал сатылган катар",
    marketDisplayAlt: "Ош базарындагы соода катарлары",
    mapTitle: "Ош базарынын картасы",
    nav: ["Базар", "Тарых", "Баруу", "Аба ырайы", "Жетүү", "Керек", "Суроолор"],
    navIds: ["market", "history", "visit", "weather", "know", "amenities", "faq"],
    location: "Бишкек · Кыргызстан",
    eyebrow: "КӨЗ КАРАНДЫСЫЗ КЕЛҮҮЧҮ ЖОЛ КӨРСӨТКҮЧ",
    seoTitle: "Ош базары Бишкек — Туристтик гид",
    seoDescription:
      "Ош базары (Бишкек, Кыргызстан) боюнча көз карандысыз гид: убакыт, жетүү жолу, кызматтар, аба ырайы жана мезгилдик кеңештер.",
    title: "Ош базары",
    deck: "Бишкектин батыш тарабындагы күнүмдүк сооданын, жыттардын жана жолугушуулардын чоң мейкиндиги.",
    mapCta: "Картадан ачуу",
    scrollCta: "Барууну пландаңыз",
    mapNote: "Координат: 42.874967, 74.570242",
    ratingLine: "Эл аралык баа: 3.6 · 39,218 отзыв",
    facts: [
      ["БАЙЛАНЫШ", "+996 700 484 414"],
      ["БАГЫТ", "Батыш Бишкек"],
      ["КИРҮҮ", "Базар аймагына акысыз"],
    ],
    fieldNo: "01 / ЖЕРДЕ",
    fieldTitle: "Бир күндүк шаардын ыргагы",
    fieldBody:
      "Ош базары — Бишкектеги эң ири базарлардын бири. Азык-түлүк катарларынан кийимге, үй-тиричилик буюмдарынан улуттук кол өнөрчүлүккө чейин, бул жер шаардык күнүмдүк жашоону жакындан көрүүгө мүмкүнчүлүк берет.",
    fieldNote:
      "Кыял бөлүгүндө кийиз буюмдары, сандык, төшөк жана белекке ылайыктуу улуттук заттар кездешет. Сатуучулар менен сүйлөшүүдө кыргызча же орусча жөнөкөй сөздөр пайдалуу болушу мүмкүн.",
    photoCaption: "Базардагы татымалдар жана кургатылган азыктар. Сүрөт: Wikimedia Commons, ачык лицензиядагы материал.",
    historyLabel: "02 / ТАРЫХ ЖАНА ЭС",
    historyTitle: "Батыш Бишкектеги базардын изи",
    historyIntro: "Бүгүнкү Ош базары — шаардагы күнүмдүк сатып алуу жайы гана эмес, совет доорунда курулуп, кийин Бишкектин тиричилигинде бекем орун алган архитектуралык жана социалдык түйүн.",
    historyTimeline: [
      ["1982", "Курулуш башталган", "Борбордогу жаңы базардын курулушу ошол жылы башталып, ал батыштагы Ала-Арча дарыясынын оң жээгиндеги жерге пландалган."],
      ["04.06.1983", "Жаңы базар ачылган", "Ал башында «Ала-Арча — Ош» деген ат менен пайдаланууга берилип, кийин «Ош базары» деген ат менен кеңири таанылган."],
      ["БҮГҮН", "Соода жана жолугушуу жайы", "Азык-түлүк катарлары, үй-тиричилик товарлары жана Кыял бөлүгүндөгү улуттук кол өнөрчүлүк базардын ар башка функцияларын көрсөтөт."],
    ],
    historyCaveat: "Бул бөлүм архивдик жана ачык булактардагы маалыматты гана жыйынтыктайт. Далилденбеген уламыштар тарыхый факт катары берилбейт.",
    planLabel: "03 / БАРУУ АЛДЫНДА",
    planTitle: "Кыска план, жай басуу",
    planIntro: "Базар чоң жана үндүү. Кире бериштеги темпти өздөштүргөн соң, бир нече атайын катарды тандап, сумкаңызды жакын кармаңыз.",
    factCards: [
      ["УБАКЫТ", "09:00–17:00", "Иштөө убактысы жана айрым катарлар өзгөрүшү мүмкүн; сапар алдында картадагы актуалдуу маалыматты текшериңиз."],
      ["ЭҢ ЫҢГАЙЛУУ", "Эртең менен", "Жарык жумшагыраак, айрым сатуучулар товарын жайгаштырып жаткан учур."],
      ["СУНУШТАЛГАН УБАКЫТ", "1,5–2 саат", "Азык-түлүк, улуттук буюмдар жана бир тамактануу тыныгуусу үчүн ыңгайлуу аралык."],
      ["ЭСКЕРТҮҮ", "Акча жана документ", "Көп эл топтолгон катарларда баалуулуктарды жабык кармап, негизги документти өзүңүз менен алып жүрбөңүз."],
    ],
    routesLabel: "05 / ЖЕТҮҮ ЖОЛУ",
    routesTitle: "Базарга кайсы жол менен барса болот?",
    routesIntro: "Ош базары шаардын батыш тарабында, мурдагы Батыш автобекетке жакын жайгашкан. Аэропорттон базардын эшигине чейин туруктуу түз каттамды көрсөтпөйбүз: шаарга келип, акыркы бөлүк үчүн жандуу карта менен которулуу жолун тактоо эң коопсуз ыкма.",
    routes: [
      ["АЭРОПОРТ АВТОБУСТУ", "№153 менен шаарга чейин", "Муниципалдык №153 автобус Манас аэропортун 12-кичи район менен байланыштырат. Ал базарга түз барбайт: түшүү жана кийинки каттамды ошол күнкү картадан тактаңыз. Иш убактысы менен жол акысы өзгөрүшү мүмкүн."],
      ["АЭРОПОРТТОН ТАКСИ", "Түз же которулуу менен", "Учуу убагы ыңгайсыз болсо, аэропорттон такси же алдын ала уюштурулган трансфер менен шаарга барыңыз. Базарга жакындаганда түшүү чекитин картадан көрсөтүп, төлөм ыкмасын алдын ала тактаңыз."],
      ["КООМДУК УНАА", "Борбордон автобус жана маршрут", "Шаар борборундагы токтоочу жайлардан базар тарапка каттаган унааларды ошол күнкү маршрут пландоочудан текшериңиз. Каттам номери, убактылуу айланма жол жана токтоо жайы өзгөрүшү мүмкүн."],
      ["ШААР ИЧИНДЕГИ ТАКСИ", "Кыска акыркы бөлүк", "Картада «Ош базары» деп киргизип, түшүү чекитин алдын ала тактаңыз. Эл көп көчөлөрдө күтүп туруу же унаа токтотуу чектелиши мүмкүн; жол менен төлөмдү отурардан мурда сүйлөшүп алыңыз."],
    ],
    amenitiesLabel: "06 / КЕРЕКТҮҮ НЕРСЕЛЕР",
    amenitiesTitle: "Күндөлүк муктаждыкка ылайык",
    amenitiesIntro: "Бул маалымат кызматтын түрүн гана көрсөтөт, конкреттүү соода жайын сунуштабайт. Жеткиликтүүлүк жана иштөө шарттары жерде өзгөрүшү мүмкүн.",
    amenities: [
      ["Тамак-аш", "Нан, татымал, кургатылган мөмө жана даяр тамактар бар азык-түлүк катарлары кездешет. Аллерген же даярдоо тууралуу суроону түз эле сатуучуга бериңиз."],
      ["Дааратканалар", "Базар аймагындагы кызматтык даараткананын багытын келгенде күзөтчүдөн же сатуучудан сураңыз. Кол аарчуу жана майда акча камдап коюу пайдалуу."],
      ["Унаа токтотуу", "Жакын көчөлөрдө жана айрым базар бөлүктөрүндө токтотуу мүмкүнчүлүктөрү бар; орундар тез толушу мүмкүн. Кире беришти же өтмөктү тосуп коюудан алыс болуңуз."],
      ["Турак жай", "Базарга жакын жана борбор жакта конок үйү, батир жана мейманкана өңдүү ар башка типтеги жайлар бар. Коопсуздук, кирүү убактысы жана транспортту өз алдынча салыштырыңыз."],
      ["Күнүмдүк товар", "Үй-тиричилик, кийим, бут кийим жана майда соода товарлары бир нече бөлүктө жайгашат. Буюмдун өлчөмүн, сапатын жана кайтаруу шартын сатып аларда өзүңүз текшериңиз."],
      ["Күйүүчү май / кубаттоо", "Унаа менен келсеңиз, сапар алдында шаардык картадан жакын май куюу же кубаттоо пункттарын караңыз. Алардын түрү жана бош орду өзгөрүп турат."],
      ["АКЧА ЖАНА ТӨЛӨМ", "Майда сатып алуулар үчүн накталай сом ыңгайлуу болушу мүмкүн. Карта, акча алмаштыруу жана банкомат мүмкүнчүлүгү ар бир жерде ар башка; баалуулуктарды ачык кармабаңыз."],
      ["КИРҮҮ ЫҢГАЙЛУУЛУГУ", "Катарлар тар жана кыймылдуу болушу мүмкүн. Балдар арабасы, чоң жүк же кыймылы чектелген адам менен келсеңиз, эл азыраак убакытты тандап, коштоочу менен жүрүңүз."],
      ["СУПЕРМАРКЕТ / ЧАРБА", "Базардан тышкары шаар борборундагы чоң дүкөндөр күнүмдүк азык-түлүк жана белгилүү бренддер үчүн ыңгайлуу. Баа жана ассортимент базардан айырмаланышы мүмкүн."],
      ["ДАРЫКАНА", "Жакынкы коомдук дарыкана негизги дары-дармектер жана гигиена каражаттары үчүн. Көзөтчүдөн же картадан жакын жайды сураңыз."],
    ],
    seasonLabel: "07 / МЕЗГИЛДИК СТРАТЕГИЯ",
    seasonTitle: "Бишкектеги төрт мезгил",
    seasonIntro: "Бишкек — континенталдык климаттагы шаар: күндүн жылуулугу менен түнкү суук ортосундагы айырма чоң. Төмөнкү таблица мезгилди тандоого жардам берет.",
    seasonHeaders: ["Мезгил", "Аба ырайы", "Эмне жакшы", "Кеңеш"],
    seasons: [
      ["Жаз (март–май)", "Эригүү, батышкан жолдор, өзгөрмөлүү", "Кол өнөрчүлүк, жаңы жашылча", "Шамалга жана батышка даярданыңыз; суу өткөрбөгөн бут кийим."],
      ["Жай (июнь–август)", "Жылуу 25–32°, ачык күн", "Эртең менен кыдыруу, суусундук", "Түштөн кийинки ысыктан сактануу; суу жана калпак алыңыз."],
      ["Күз (сентябрь–ноябрь)", "Жумшак, ачык, мол түшүм", "Эң ыңгайлуу мезгил, мөмө-жемиш", "Түнкү салкынга жылуу кийим кошуңуз."],
      ["Кыш (декабрь–февраль)", "Суук −5…−15°, кар, муз", "Ички кол өнөрчүлүк, кийиз буюмдары", "Музда жүрүүгө көңүл бургула; кирүү убактысы кыскараак болушу мүмкүн."],
    ],
    audienceLabel: "08 / АДАМДАР БОЮНЧА",
    audienceTitle: "Үч багыт — кимиңизге жараша",
    audienceIntro: "Базарды ар ким өз ыргагы менен кыдырат. Төмөнкү үч багыт сапарыңызды тез жосунга салууга жардам берет.",
    audiences: [
      ["Үй-бүлө (балдар менен)", "Кыска айлана, тамак-аш көрүү, ачык аянтча. Түшкү элден качыңыз; балдар арабасы үчүн кең катарларды тандаңыз."],
      ["Фотограф / табият", "Эртең менен жумшак жарыкты тартыңыз; кийиз, сандык жана түстүү текстиль бурчтары — деталдар үчүн."],
      ["Аз кыймыл / жеткиликтүүлүк", "Негизги тегиз катарлар, эс алуу жайлары; таксини кире беришке жакын токтотуу, кыска убакыт."],
    ],
    generalLabel: "09 / ЖАЛПЫ МАРШРУТ",
    generalTitle: "Жарым күн жана толук күн",
    generalIntro: "Убактыңызга жараша эки багытты сунуштайбыз. Экөө тең кирүүдөн башталат жана маалымат картасынан такталат.",
    generalRoutes: [
      ["Жарым күн (2,5 саат)", "Кирүү → азык-түлүк катарлары → Кыял кол өнөрчүлүгү → текстиль → чыгуу.", "Базардын негизин тез кармап алат."],
      ["Толук күн (5 саат)", "Базар → жакынкы тамак-аш → Ала-Тоо аянты → Панфилов паркы → шаар музейи.", "Бишкектин борборун бирге кыдыруу."],
    ],
    guideLabel: "10 / БАЗАРДАГЫ ЭТИКА",
    guideTitle: "Байкоо менен, шашпай кыдыруу",
    guideIntro: "Кесипкөй коомдук жол көрсөткүч катары бул бөлүм сатуучуларга, башка конокторго жана өзүңүздүн коопсуздугуңузга урмат менен мамиле кылууга жардам берген жөнөкөй эрежелерди сунуштайт.",
    guideItems: [
      ["КАТАРЛАР ЖАНА БАГЫТ", "Кирген жериңизди же жакынкы таяныч чекитти эстеп коюңуз. Чоң аймакта топтон ажырап калбоо үчүн жолугушуу жерин алдын ала белгилөө ыңгайлуу."],
      ["СҮРӨТ ЖАНА МАМИЛЕ", "Адамдардын бетин же соода ордун жакындан тартардан мурун уруксат сураңыз. Жөнөкөй саламдашуу жана шашпай сүйлөшүү күнүмдүк соода маданиятына урмат көрсөтөт."],
      ["ТАМАК-АШ ЖАНА ЫҢГАЙЛУУЛУК", "Даяр тамакты тандаганда анын сакталуу жана даярдоо шартын байкаңыз. Суу, жеңил баштык жана аба ырайына ылайык кийим узагыраак басууга жардам берет."],
      ["АКЧА ЖАНА ТЕМП", "Майда акчаны өзүнчө, баалуу буюмду жабык кармаңыз. Бааны тактоо жана шашпай салыштыруу сатып алууну түшүнүктүүрөөк кылат."],
    ],
    scienceLabel: "11 / ТАЛАА ИЗИЛДӨӨ",
    scienceTitle: "Базарды окуу жана жоопкерчилик",
    scienceIntro: "Көз карандысыз иликтөөчү катары биз базарды коммерциялык эмес, маалыматтык булак катары гана баяндайбыз.",
    scienceBody: [
      ["Эмне үчүн бул иликтөө объектиси?", "Ош базары — шаардын күнүмдүк чарбасынын тирүү картасы. Ал ар кайсы аймактардын продукциясын, көчмөн маданияттын издерин (кийиз, сандык) жана шаардык соода тарыхын бир жерге алып келет. Этнография, шаар таануу жана экономика үчүн ачык булак катары кызыктуу."],
      ["Келгендердин жоопкерчилиги", "Сатуучулардын эмгегин урматтаңыз: бааны келишүү, сүрөт үчүн уруксат сурау, таштандыны белгиленген жерге таштоо. Базар — адамдардын иш жайы; аны музей эмес, жашоочу мейкиндик катары сыйлаңыз."],
    ],
    exploreLabel: "12 / БАЗАРДАН АРЫ",
    exploreTitle: "Бишкектеги күндү улантуу",
    exploreIntro: "Базардан кийин шаардын борборуна өтүп, аянт, парк жана музей өңдүү коомдук мейкиндиктерди өз ыргагыңыз менен кыдырсаңыз болот.",
    explore: [
      ["Шаар борбору", "Ала-Тоо аянты жана ага жакын коомдук мейкиндиктер — шаарды жөө таанууга ыңгайлуу багыт."],
      ["Жашыл тыныгуу", "Панфилов паркы сыяктуу сейил бактар базардагы ызы-чуудан кийин кыска эс алууга шарт түзөт."],
      ["Маданий багыт", "Шаардык музейлер жана маданий жайлардын учурдагы иш убактысын расмий баракчаларынан текшерип барыңыз."],
    ],
    faqLabel: "13 / СУРООЛОР",
    faqTitle: "Көп берилген суроолор",
    faqs: [
      ["Базарга билет керекпи?", "Жок. Негизги базар аймагына кирүү адатта акысыз. Сатып алуулар жана айрым кызматтар үчүн төлөм өзүнчө жүргүзүлөт."],
      ["Качан барган жакшы?", "Эртең менен баруу агым күчөй электе катарларды көрүүгө ыңгайлуу. Иштөө убактысын жана ачык бөлүктөрдү сапар алдында текшериңиз."],
      ["Картадагы убакытка ишенсем болобу?", "Картадагы маалымат багыт үчүн берилет. Базар бөлүктөрүнүн убактысы, майрам күндөрү жана сезондук иш тартиби өзгөрүшү мүмкүн."],
      ["Карточка менен төлөсө болобу?", "Төлөм ыкмасы ар бир сатуучуга жараша айырмаланат. Майда сатып алуулар үчүн накталай сом алып жүрүү практикалык болушу мүмкүн."],
      ["Аэропорттон базарга түз автобус барбы?", "Аэропортту шаар менен байланыштырган каттамдар бар, бирок бул барак аларды базардын эшигине түз каттам катары көрсөтпөйт. Учкан күнүңүздө акыркы которулуу жолун жандуу картадан текшериңиз."],
      ["Бул барак дүкөн же ресторан сунуштайбы?", "Жок. Бул көз карандысыз, коммерциялык эмес коомдук жол көрсөткүч. Биз кызматтын түрүн гана түшүндүрөбүз жана конкреттүү соода жайын жарнамалабайбыз."],
    ],
    sourceLabel: "МААЛЫМАТ ТУУРАЛУУ",
    sourceBody: "Бул барак Google Maps’теги жер маалыматын жана жалпыга жеткиликтүү саякат булактарын салыштырып түзүлдү. Бул расмий иштөө графиги же соода кызматынын тизмеси эмес.",
    footerLine: "Бул сайт — көз карандысыз, коммерциялык эмес конок маалыматынын демилгеси; ал эч бир мамлекеттик органга же базардын операторуна тиешелүү эмес.",
    footerBody: "Маалымат коомдук карта булактары, Бишкек шаарынын мэриясынын жана Кыргыз Республикасынын туризм боюнча ачык маалыматтарын багыт катары колдонуу менен түзүлөт. Коммерциялык сунуштар берилбейт.",
    photoRights: "Сүрөттөрдүн автордук укугу тиешелүү фотографтарга таандык. Бул барактагы базар сүрөтү Wikimedia Commons аркылуу ачык лицензия менен берилген.",
    legal: ["Купуялык саясаты", "Колдонуу шарттары", "Cookie жөндөөлөрү"],
    copyright: "© 2026 Ош базары: талаа жазмалары.",
  },
  en: {
    locale: "English",
    localeShort: "EN",
    brandKicker: "FIELD NOTES",
    languageLabel: "Language selector",
    mapAria: "Open Google Maps",
    marketPhotoAlt: "A spice stall inside Osh Bazaar",
    marketDisplayAlt: "Market displays at Osh Bazaar",
    mapTitle: "Osh Bazaar map",
    nav: ["Market", "History", "Visit", "Weather", "Getting there", "On site", "FAQ"],
    navIds: ["market", "history", "visit", "weather", "know", "amenities", "faq"],
    location: "Bishkek · Kyrgyzstan",
    eyebrow: "INDEPENDENT VISITOR FIELD GUIDE",
    seoTitle: "Osh Bazaar Bishkek — Visitor Guide",
    seoDescription:
      "An independent visitor guide to Osh Bazaar in Bishkek, Kyrgyzstan — opening hours, how to get there, on-site services, weather, and seasonal tips.",
    title: "Osh Bazaar",
    deck: "A vast western-Bishkek meeting ground for everyday trade, scents, and city life.",
    mapCta: "Open the map",
    scrollCta: "Plan your visit",
    mapNote: "Coordinates: 42.874967, 74.570242",
    ratingLine: "Public rating: 3.6 · 39,218 reviews",
    facts: [
      ["CONTACT", "+996 700 484 414"],
      ["DIRECTION", "West Bishkek"],
      ["ENTRY", "Free to enter the market area"],
    ],
    fieldNo: "01 / ON THE GROUND",
    fieldTitle: "The rhythm of a city in one day",
    fieldBody:
      "Osh Bazaar is one of Bishkek’s largest markets. From food aisles to clothing, household goods, and Kyrgyz crafts, it offers a close look at the city’s ordinary, working-day life.",
    fieldNote:
      "In the Kyyal section, look for felt goods, wooden chests, bedding, and other national crafts. A few simple Kyrgyz or Russian phrases may be useful when speaking with vendors.",
    photoCaption: "Spices and dried goods at the bazaar. Photo: Wikimedia Commons, open-licence material.",
    historyLabel: "02 / HISTORY & MEMORY",
    historyTitle: "A market’s trace in western Bishkek",
    historyIntro: "Today’s Osh Bazaar is not only a place for everyday purchases. It is an architectural and social node built in the Soviet period and subsequently woven into the working life of Bishkek.",
    historyTimeline: [
      ["1982", "Construction begins", "Work on the capital’s new market began that year, with the site planned on the right bank of the Ala-Archa River in western Frunze."],
      ["04.06.1983", "The new market opens", "It entered service under the original name “Ala-Archa–Osh”, before the shorter name “Osh Bazaar” became widely established."],
      ["TODAY", "Trade and social exchange", "Food aisles, household goods, and the national crafts in the Kyyal section illustrate the market’s distinct practical roles."],
    ],
    historyCaveat: "This section synthesises archival and publicly available sources only. Unverified stories are not presented as historical fact.",
    planLabel: "03 / BEFORE YOU GO",
    planTitle: "A short plan; a slow walk",
    planIntro: "The market is expansive and lively. Once you find your rhythm at the entrance, choose a few focused lanes and keep bags close.",
    factCards: [
      ["HOURS", "09:00–17:00", "Market-wide hours and individual sections can vary; check the current map listing before leaving."],
      ["BEST TIME", "Morning", "Softer light, and a chance to see some vendors setting out their goods."],
      ["ALLOW", "1.5–2 hours", "A useful window for food aisles, national goods, and a short food break."],
      ["KEEP IN MIND", "Cash & documents", "In crowded lanes, keep valuables closed and leave non-essential documents where you are staying."],
    ],
    routesLabel: "05 / GETTING THERE",
    routesTitle: "How to reach the bazaar",
    routesIntro: "Osh Bazaar sits in western Bishkek near the former Western Bus Station. We do not present a fixed airport-to-door public route: arrive in the city, then verify the final transfer in a live map on the day you travel.",
    routes: [
      ["AIRPORT BUS", "Route 153 into the city", "Municipal route 153 links Manas Airport and the 12th microdistrict. It does not serve the bazaar door-to-door; check the day’s alighting point and onward connection in a live map. Hours and fares can change."],
      ["FROM THE AIRPORT", "Taxi or transfer", "For an awkward flight time, use a taxi or pre-arranged transfer into the city. Near the bazaar, show the map destination and confirm the payment method before departure."],
      ["PUBLIC TRANSPORT", "Bus and marshrutka from the centre", "Use a current route planner for services heading towards the market from central stops. Route numbers, temporary diversions, and stop positions can change."],
      ["CITY TAXI", "A short final approach", "Enter “Osh Bazaar” in your map app and confirm the drop-off point. Crowded streets can limit waiting or parking; agree the route and payment before boarding."],
    ],
    amenitiesLabel: "06 / USEFUL ON SITE",
    amenitiesTitle: "For everyday practicalities",
    amenitiesIntro: "These notes identify service types only; no individual businesses are endorsed. Availability and operating conditions can change on site.",
    amenities: [
      ["Food", "Food aisles can include bread, spices, dried fruit, and prepared-meal options. Ask vendors directly about allergens or preparation where relevant."],
      ["Toilets", "Ask a guard or vendor for the nearest service toilet on arrival. Carrying tissues and small change can be useful."],
      ["Parking", "Street-side and market-adjacent parking options exist, but spaces can fill quickly. Avoid blocking entrances or pedestrian access."],
      ["Stay", "Guesthouses, apartment stays, and hotels of different types can be found nearer the bazaar and in the city centre. Compare security, access hours, and transport independently."],
      ["Daily goods", "Household goods, clothing, footwear, and small trade items are distributed across several sections. Check size, condition, and return arrangements yourself before a purchase."],
      ["Fuel / charging", "If arriving by car, use a live city map to locate nearby fuel or charging points before your trip. Service type and availability vary."],
      ["CASH & PAYMENT", "Cash in Kyrgyz som can be practical for smaller purchases. Card, exchange, and cash-machine availability varies by location; do not display valuables openly."],
      ["ACCESS & COMPANIONS", "Aisles can be narrow and busy. If travelling with a pushchair, larger luggage, or someone with reduced mobility, choose a quieter time and consider going with a companion."],
      ["Supermarket / grocery", "Larger stores in the city centre suit everyday groceries and known brands beyond the bazaar. Prices and range differ from the market."],
      ["Pharmacy", "A nearby public pharmacy covers basic medicine and hygiene needs. Ask a guard or map for the closest one."],
    ],
    seasonLabel: "07 / SEASONAL STRATEGY",
    seasonTitle: "Four seasons in Bishkek",
    seasonIntro: "Bishkek has a continental climate: the gap between warm days and cool nights is wide. The table below helps you pick a season.",
    seasonHeaders: ["Season", "Conditions", "Best for", "Tips"],
    seasons: [
      ["Spring (Mar–May)", "Thaw, slushy lanes, changeable", "Crafts, early produce", "Prepare for wind and mud; wear waterproof shoes."],
      ["Summer (Jun–Aug)", "Warm 25–32°, sunny", "Morning visits, hydration", "Avoid midday heat; carry water and a hat."],
      ["Autumn (Sep–Nov)", "Mild, clear, abundant harvest", "Best overall window, fruit", "Add a warm layer for cool evenings."],
      ["Winter (Dec–Feb)", "Cold −5…−15°, snow, ice", "Indoor crafts, felt goods", "Watch for ice; opening hours may be shorter."],
    ],
    audienceLabel: "08 / BY TRAVELLER",
    audienceTitle: "Three routes — by who you are",
    audienceIntro: "Everyone walks the bazaar at their own pace. The three routes below help shape your visit quickly.",
    audiences: [
      ["Families (with children)", "A short loop, food tasting, open spaces. Avoid the midday crowd; choose wider lanes for pushchairs."],
      ["Photographers / nature", "Shoot in the soft morning light; felt chests and colourful textile corners reward detail work."],
      ["Low mobility / accessible", "Main level lanes and rest spots; have a taxi drop you near the entrance for a shorter visit."],
    ],
    generalLabel: "09 / SUGGESTED ROUTES",
    generalTitle: "Half-day and full-day",
    generalIntro: "Two routes by available time. Both start at the entrance and are confirmed against a live map.",
    generalRoutes: [
      ["Half-day (2.5 hrs)", "Entrance → food aisles → Kyyal crafts → textile → exit.", "Grasps the market’s core quickly."],
      ["Full-day (5 hrs)", "Bazaar → nearby meal → Ala-Too Square → Panfilov Park → city museum.", "Pairs the market with central Bishkek."],
    ],
    guideLabel: "10 / MARKET ETIQUETTE",
    guideTitle: "Observe closely; move slowly",
    guideIntro: "As a public-interest guide, this section offers simple practices that respect vendors, other visitors, and your own safety without promoting any individual business.",
    guideItems: [
      ["LANES & ORIENTATION", "Remember your entrance or a nearby reference point. In a large area, agree on a meeting place in advance so your group can reconnect easily."],
      ["PHOTOS & CONVERSATION", "Ask before making close photographs of people or a trading space. A simple greeting and an unhurried exchange show respect for everyday market life."],
      ["FOOD & COMFORT", "When choosing prepared food, observe storage and preparation conditions. Water, a light bag, and weather-appropriate clothing make a longer visit easier."],
      ["MONEY & PACE", "Keep small notes separate and valuables closed. Confirming a price and comparing without rushing makes purchases easier to understand."],
    ],
    scienceLabel: "11 / FIELD NOTES",
    scienceTitle: "Reading the bazaar & responsibility",
    scienceIntro: "As an independent observer, we describe the bazaar only as a non-commercial, informational source.",
    scienceBody: [
      ["Why it is a field subject", "Osh Bazaar is a living map of the city’s everyday economy. It gathers produce from many regions, traces of nomadic culture (felt, chests), and the history of urban trade in one place — a useful open source for ethnography, urban studies, and economics."],
      ["Visitor responsibility", "Respect the vendors’ work: agree prices, ask before photographing, and bin waste in marked spots. The bazaar is a workplace, not a museum — treat it as a living space."],
    ],
    exploreLabel: "12 / BEYOND THE BAZAAR",
    exploreTitle: "Continue your Bishkek day",
    exploreIntro: "After the market, move towards the centre for public squares, parks, and museums at your own pace.",
    explore: [
      ["City centre", "Ala-Too Square and the public spaces around it offer a straightforward route for exploring the centre on foot."],
      ["A green pause", "Parks such as Panfilov Park provide a quieter break after the sound and pace of the market."],
      ["Culture", "Check current official pages for opening information at city museums and cultural spaces before setting out."],
    ],
    faqLabel: "13 / FAQ",
    faqTitle: "Frequently asked questions",
    faqs: [
      ["Do I need a ticket?", "No. Entry to the main market area is generally free. Purchases and some services are paid for separately."],
      ["When is the best time to go?", "Morning is useful before the flow peaks. Check current opening information and which sections are active before you travel."],
      ["Can I rely on map hours?", "Map information is a useful guide. Market sections, public holidays, and seasonal arrangements can change."],
      ["Can I pay by card?", "Payment methods vary by vendor. Carrying some cash in Kyrgyz som can be practical for smaller purchases."],
      ["Is there a direct airport bus to the bazaar?", "Airport-city services exist, but this guide does not describe them as a fixed door-to-door market route. Verify your final connection in a live map on the day you travel."],
      ["Does this guide recommend shops or restaurants?", "No. This is an independent, non-profit public-interest guide. It explains service types only and does not promote individual businesses."],
    ],
    sourceLabel: "ABOUT THIS GUIDE",
    sourceBody: "This page compares place information on Google Maps with publicly available travel references. It is not an official timetable or a directory of market services.",
    footerLine: "This is an independent, non-profit visitor information project. It is not affiliated with any public authority or market operator.",
    footerBody: "Information is compiled with public mapping sources and open reference material from Bishkek City Hall and the Kyrgyz Republic’s tourism bodies as directional references. No commercial recommendations are included.",
    photoRights: "Image rights remain with the relevant photographers. The market photograph on this page is supplied via Wikimedia Commons under an open licence.",
    legal: ["Privacy policy", "Terms of use", "Cookie settings"],
    copyright: "© 2026 Osh Bazaar: field notes.",
  },
} as const;





function buildFaqSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy[locale].faqs.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  };
}

function useLocale() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "ky";
    return window.localStorage.getItem("osh-bazaar-locale") === "en" ? "en" : "ky";
  });
  const selectLocale = (next: Locale) => {
    setLocale(next);
    window.localStorage.setItem("osh-bazaar-locale", next);
  };
  return { locale, selectLocale };
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  if (typeof document === "undefined") return;
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function LanguageToggle({ locale, label, selectLocale }: { locale: Locale; label: string; selectLocale: (next: Locale) => void }) {
  return (
    <div className="language-toggle" aria-label={label}>
      <Languages size={15} aria-hidden="true" />
      {(["ky", "en"] as Locale[]).map((item) => (
        <button key={item} className={locale === item ? "is-active" : ""} onClick={() => selectLocale(item)} aria-pressed={locale === item}>
          {item === "ky" ? "KY" : "EN"}
        </button>
      ))}
    </div>
  );
}

export default function Home() {
  const { locale, selectLocale } = useLocale();
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.seoTitle;
    setMeta("name", "description", t.seoDescription);
    setMeta("property", "og:title", t.seoTitle);
    setMeta("property", "og:description", t.seoDescription);
    setMeta("property", "og:locale", locale === "ky" ? "ky_KG" : "en_US");
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = CANONICAL;
  }, [locale, t.seoDescription, t.seoTitle]);

  const amenities = [UtensilsCrossed, Accessibility, ParkingCircle, BedDouble, ShoppingBag, Fuel, Banknote, HandHeart, ShoppingBag, Info];
  const routeIcons = [Plane, CarFront, BusFront, CarFront];
  const guideIcons = [Navigation, Camera, UtensilsCrossed, Banknote];
  const audienceIcons = [Users, Camera, Accessibility];
  const generalIcons = [Route, Navigation];

  return (
    <main className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqSchema(locale)) }} />

      <header className="site-header">
        <a href="#top" className="brand" aria-label={t.title}>
          <img src={ASSETS.mark} alt="" />
          <span>{t.title}<small>{t.brandKicker}</small></span>
        </a>
        <nav aria-label="Primary navigation">
          {t.nav.map((item, index) => <a href={`#${t.navIds[index]}`} key={item}>{item}</a>)}
        </nav>
        <LanguageToggle locale={locale} label={t.languageLabel} selectLocale={selectLocale} />
      </header>

      <section className="hero" id="top">
        <div className="hero-index" aria-hidden="true"><span>42° 52′ 30″ N</span><span>74° 34′ 12″ E</span></div>
        <div className="hero-copy">
          <p className="eyebrow"><span />{t.eyebrow}</p>
          <p className="hero-location"><MapPin size={16} /> {t.location}</p>
          <h1>{t.title}</h1>
          <p className="hero-deck">{t.deck}</p>
          <div className="hero-actions">
            <a className="button button-primary" href={MAP_URL} target="_blank" rel="noreferrer">{t.mapCta}<ArrowUpRight size={18} /></a>
            <a className="button button-quiet" href="#visit">{t.scrollCta}<ArrowDownRight size={18} /></a>
          </div>
          <p className="coordinate-note">{t.mapNote}</p>
        </div>
        <div className="hero-photo-wrap">
          <div className="hero-arc" />
          <img className="hero-photo" src={ASSETS.market} alt={t.marketPhotoAlt} />
          <div className="photo-stamp"><Camera size={16} /><span>WIKIMEDIA<br />COMMONS</span></div>
        </div>
        <div className="hero-rail">
          {t.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
        </div>
      </section>

      <section className="field-section" id="market">
        <div className="section-number">{t.fieldNo}</div>
        <div className="field-grid">
          <div className="field-title"><Landmark size={26} /><h2>{t.fieldTitle}</h2></div>
          <div className="field-copy"><p>{t.fieldBody}</p><p className="pull-note">{t.fieldNote}</p></div>
          <figure className="field-image"><img src={ASSETS.market} alt={t.marketDisplayAlt} /><figcaption>{t.photoCaption}</figcaption></figure>
        </div>
      </section>

      <section className="history-section" id="history">
        <div className="history-heading">
          <div className="section-number">{t.historyLabel}</div>
          <div><History size={27} /><h2>{t.historyTitle}</h2></div>
          <p>{t.historyIntro}</p>
        </div>
        <div className="history-timeline">
          {t.historyTimeline.map(([year, title, description], index) => <article key={`${year}-${title}`}><span>{year}</span><div><small>0{index + 1}</small><h3>{title}</h3><p>{description}</p></div></article>)}
        </div>
        <p className="history-caveat"><Info size={17} />{t.historyCaveat}</p>
      </section>

      <section className="plan-section" id="visit" style={{ backgroundImage: `url(${ASSETS.paper})` }}>
        <div className="section-number">{t.planLabel}</div>
        <div className="section-heading heading-split"><div><h2>{t.planTitle}</h2></div><p>{t.planIntro}</p></div>
        <div className="fact-grid">
          {t.factCards.map(([label, value, description], index) => <article className="fact-card" key={label}><span className="fact-index">0{index + 1}</span><p>{label}</p><h3>{value}</h3><small>{description}</small></article>)}
        </div>
      </section>

      <WeatherSection locale={locale} lat={LAT} lon={LON} />

      <section className="route-section" id="know">
        <div className="route-image" style={{ backgroundImage: `url(${ASSETS.textile})` }}><p>Бишкек<br /><span>BISHKEK</span></p></div>
        <div className="route-content">
          <div className="section-number">{t.routesLabel}</div>
          <h2>{t.routesTitle}</h2>
          <p className="section-intro">{t.routesIntro}</p>
          <div className="route-list">
            {t.routes.map(([label, title, description], index) => {
              const Icon = routeIcons[index];
              return <article key={label}><div className="route-icon"><Icon size={21} /></div><div><span>{label}</span><h3>{title}</h3><p>{description}</p></div></article>;
            })}
          </div>
        </div>
      </section>

      <section className="amenity-section" id="amenities">
        <div className="section-number">{t.amenitiesLabel}</div>
        <div className="section-heading heading-split"><h2>{t.amenitiesTitle}</h2><p>{t.amenitiesIntro}</p></div>
        <div className="amenity-grid">
          {t.amenities.map(([title, description], index) => {
            const Icon = amenities[index];
            return <article key={title}><Icon size={22} /><h3>{title}</h3><p>{description}</p></article>;
          })}
        </div>
      </section>

      <section className="season-section" id="season">
        <div className="section-number">{t.seasonLabel}</div>
        <div className="section-heading heading-split"><h2>{t.seasonTitle}</h2><p>{t.seasonIntro}</p></div>
        <div className="season-table">
          <div className="season-row season-head">
            {t.seasonHeaders.map((h) => <span key={h}>{h}</span>)}
          </div>
          {t.seasons.map((row) => (
            <div className="season-row" key={row[0]}>
              {row.map((cell) => <span key={cell}>{cell}</span>)}
            </div>
          ))}
        </div>
      </section>

      <section className="audience-section" id="audience">
        <div className="section-number">{t.audienceLabel}</div>
        <div className="section-heading heading-split"><h2>{t.audienceTitle}</h2><p>{t.audienceIntro}</p></div>
        <div className="audience-grid">
          {t.audiences.map(([title, description], index) => {
            const Icon = audienceIcons[index];
            return <article key={title}><Icon size={24} /><h3>{title}</h3><p>{description}</p></article>;
          })}
        </div>
      </section>

      <section className="general-section" id="general">
        <div className="section-number">{t.generalLabel}</div>
        <div className="section-heading heading-split"><h2>{t.generalTitle}</h2><p>{t.generalIntro}</p></div>
        <div className="general-grid">
          {t.generalRoutes.map(([title, duration, description], index) => {
            const Icon = generalIcons[index];
            return (
              <article key={title}>
                <Icon size={24} />
                <h3>{title}</h3>
                <span className="general-duration"><CalendarDays size={14} />{duration}</span>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="guide-section">
        <div className="guide-heading"><div className="section-number">{t.guideLabel}</div><h2>{t.guideTitle}</h2><p>{t.guideIntro}</p></div>
        <div className="guide-grid">
          {t.guideItems.map(([label, description], index) => {
            const Icon = guideIcons[index];
            return <article key={label}><span>0{index + 1}</span><Icon size={22} /><h3>{label}</h3><p>{description}</p></article>;
          })}
        </div>
      </section>

      <section className="science-section" id="science">
        <div className="science-heading"><div className="section-number">{t.scienceLabel}</div><div><BookOpen size={27} /><h2>{t.scienceTitle}</h2></div><p>{t.scienceIntro}</p></div>
        <div className="science-grid">
          {t.scienceBody.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="map-section">
        <div className="map-note">
          <MapPin size={21} />
          <div><span>VHFC+X3</span><strong>{t.location}</strong></div>
          <a href={MAP_URL} target="_blank" rel="noreferrer"><Navigation size={18} /><span>{t.mapCta}</span></a>
          <p className="map-rating"><Sun size={14} />{t.ratingLine}</p>
        </div>
        <iframe title={t.mapTitle} src={MAP_EMBED_URL} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </section>

      <section className="explore-section">
        <div className="section-number">{t.exploreLabel}</div>
        <div className="explore-header"><h2>{t.exploreTitle}</h2><p>{t.exploreIntro}</p></div>
        <div className="explore-list">{t.explore.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight size={20} /></article>)}</div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-heading"><div className="section-number">{t.faqLabel}</div><h2>{t.faqTitle}</h2></div>
        <div className="faq-list">{t.faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown size={20} /></summary><p>{answer}</p></details>)}</div>
      </section>

      <aside className="source-card"><Info size={21} /><div><span>{t.sourceLabel}</span><p>{t.sourceBody}</p></div><a href={MAP_URL} target="_blank" rel="noreferrer" aria-label={t.mapAria}><ExternalLink size={18} /></a></aside>

      <footer className="site-footer">
        <div className="footer-brand"><img src={ASSETS.mark} alt="" /><p>{t.title}<br /><span>{t.brandKicker}</span></p></div>
        <div className="footer-statement"><p>{t.footerLine}</p><small>{t.footerBody}</small></div>
        <div className="footer-meta"><p>{t.photoRights}</p><div><Link href="/privacy">{t.legal[0]}</Link><Link href="/terms">{t.legal[1]}</Link><Link href="/cookies">{t.legal[2]}</Link></div><small>{t.copyright}</small></div>
      </footer>
    </main>
  );
}
