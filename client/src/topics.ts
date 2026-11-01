// Central registry of long-tail topic pages for the Osh Bazaar visitor guide.
// Bilingual (Kyrgyz default + English). Russian is a planned later phase.
// Content follows the SEO brief: distinguish the supplied map listing from
// verified current status, cite dated municipal/Kabar sources, and never
// present planned relocation dates as completed moves or open-new-market facts.

export type Locale = "ky" | "en";
export type TopicGroup = "status" | "transport" | "shopping" | "food" | "nearby" | "routes";
export type Priority = "P0" | "P1" | "P2";

export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
  faq: [string, string][];
}

export interface Topic {
  slug: string;
  group: TopicGroup;
  priority: Priority;
  ky: TopicContent;
  en: TopicContent;
  related: string[];
}

export const TOPICS: Topic[] = [
  // ───────────────────────── A. Status, relocation, history ─────────────────────────
  {
    slug: "status",
    group: "status",
    priority: "P0",
    related: ["relocation-timeline", "old-vs-new-osh-bazaar", "new-osh-bazaar-2027", "hours-and-holidays"],
    ky: {
      metaTitle: "Ош базары бүгүн иштейби? Бишкекте абалы",
      metaDescription:
        "Ош базарынын Бишкектеги азыркы иштөө абалы, көчүрүү жана жаңы базар жөнүндө маалымат. Текшерилген булактар жана сапар алдында кылуучу эскертүүлөр.",
      h1: "Ош базары бүгүн иштейби?",
      lead: "Бул гид базардын берилген карта белгисиненин азыркы абалын бөлүп көрсөтөт. Көчүрүү жүрүп жатканы маалым, бирок ал аяктаганын же жаңы комплекстин ачылганын бул гид ырастабайт.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Азыркы абал",
          body: [
            "2026-жылдын 30-октябрына карата жаңы Ош базарынын негизги курулушу аяктаган, бирок анын айланасындагы жолдор, инженердик тармактар жана чөйрөнү жакшыртуу иштери дагы эле уланууда.",
            "Жаңы базар 2027-жылдын жазында (март–апрель) ишке киргизилмекчи. Бул — пландалган дата; ал ачылды же эски базар жабылды дегенди билдирбейт.",
          ],
        },
        {
          heading: "Эмнени тактаңыз",
          body: [
            "Сапар алдында сатуучуну же шаардык расмий каналды көрүп, керектүү соода ордунүн жана кирүүнүн азыркы абалын белгилеңиз.",
            "Кабардын (Kabar) 4-сентябрдагы жана 26-октябрдагы билдирүүлөрү көчүрүүгө даярдык жөнүндө; алар бүгүнкү толук иштөөнү аныктабайт.",
          ],
        },
      ],
      faq: [
        ["Ош базары бүгүн иштейби?", "Бул гид бүгүнкү иштөөнү так ырастабайт. Көчүрүү жөнүндө 2026-жылдагы билдирүүлөр жана картадагы 09:00 белгиси бардык катарлардын ачылышын билдирбейт; расмий канал же сатуучу аркылуу текшериңиз."],
        ["Жаңы базар ачылдыбы?", "Жок. Жаңы комплекстин курулушу негизинен аяктаган, бирок айланадагы иштер уланып жатат; ачылышы 2027-жылдын жазына пландалган."],
        ["Эски базар жабылдыбы?", "Бул гид эски базардын жабылганын ырастабайт. Көчүрүү жүрүп жатканы үчүн, бара турган жериңизди алдын ала тактаңыз."],
        ["Кайсы булактарга таянуу керек?", "Мэриянын (bishkek.gov.kg) жана Kabarдын кабарларын кошуп караңыз; ар бир булактын датасын жана кайсы жай жөнүндө экенин салыштырыңыз."],
      ],
    },
    en: {
      metaTitle: "Is Osh Bazaar open today? Bishkek current status",
      metaDescription:
        "Current operating status of Osh Bazaar in Bishkek, relocation and the new market. Dated municipal and Kabar sources plus what to verify before travel.",
      h1: "Is Osh Bazaar open today?",
      lead: "This guide separates the supplied map listing from verified current status. A transfer is under way, but this guide does not confirm it is finished or that the new complex has opened.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Current situation",
          body: [
            "As of 30 October 2026 the main construction of the new Osh market is reported complete, while surrounding roads, utility networks and environmental works are still ongoing.",
            "The new market is planned to open in spring 2027 (March–April). That is a planned date; it does not mean the new market is open or that the old market has closed.",
          ],
        },
        {
          heading: "What to confirm",
          body: [
            "Before travel, check the intended trading area and access with the trader or official city channels.",
            "Kabar’s 4 September and 26 October 2026 reports describe preparations for transfer; they do not establish full trading today.",
          ],
        },
      ],
      faq: [
        ["Is Osh Bazaar open today?", "This guide cannot confirm today’s operation. The 2026 transfer announcements and a Maps 09:00 cue do not establish that every area is open; check with official channels or the trader."],
        ["Has the new market opened?", "No. The new complex’s construction is largely done but surrounding works continue; opening is planned for spring 2027."],
        ["Has the old market closed?", "This guide does not confirm the old market is closed. Because a transfer is in progress, confirm your destination before going."],
        ["Which sources should I use?", "Cross-check the municipal (bishkek.gov.kg) and Kabar notices; compare each source’s date and the location it describes."],
      ],
    },
  },
  {
    slug: "relocation-timeline",
    group: "status",
    priority: "P0",
    related: ["status", "old-vs-new-osh-bazaar", "new-osh-bazaar-2027", "market-meat-trade", "osh-bazaar-history"],
    ky: {
      metaTitle: "Ош базарынын көчүрүү тарыхы: 2026–2027",
      metaDescription:
        "Ош базарынын көчүрүлүшү жөнүндө 2026–2027-жылдардагы расмий билдирүүлөрдүн хронологиясы. Даталар, булактар жана тактап көрүү керек болгон нерселер.",
      h1: "Көчүрүү боюнча хронология",
      lead: "Бул бет көчүрүү жөнүндө маалым болгон расмий кабарларды хронологиялык тартипте чогултат. Пландалган даталарды бүткөн факты катары албаңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "2026-жыл",
          body: [
            "4-сентябрь 2026: Kabar жаңы базардын курулушу жана сатуучуларды көчүрүүгө даярдык жөнүндө билдирди.",
            "26-октябрь 2026: Кабар жаңы комплекстин негизги курулушу аяктагандыгын, бирок жолдор менен инженердик тармактардын дагы улантылып жаткандыгын жазды.",
            "30-октябрь 2026: жаңы базардын 2027-жылдын жазында (март–апрель) ишке киргизилмекчи экендиги белгиленди.",
          ],
        },
        {
          heading: "Эмнени эске алыш керек",
          body: [
            "Көчүрүү бөлүп-бөлүп жүргүзүлүшү мүмкүн; «жарыяланды» деген «бүттү» дегенди билдирбейт.",
            "Ар бир булактын датасын, анын кайсы бөлүктөр жөнүндө экенин жана ал базардын кайсы жайына тиешелүү экенин текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Көчүрүү качан башталды?", "2026-жылдын сентябрынан бери көчүрүүгө даярдык жана айрым кадамдар жарыяланды; толук аякташы бул гидде ырасталган эмес."],
        ["Жаңы базар качан ачылат?", "Пландалган дата — 2027-жылдын жазы (март–апрель). Бул ачылды дегенди эмес, пландаштырылгандыгын билдирет."],
        ["Мэриянын билдирүүсү эмнени айтат?", "Мэрия Ош базары аймагындагы текшерүүлөр жөнүндө билдирет; аны жаңы базардын толук иштөөсү менен чаташтырбаңыз."],
        ["Эң акыркы текшерүү качан?", "Бул бет 2026-жылдын 30-октябрында жаңыланды; жаңы кабарлар үчүн булактарды көзөмөлдөңүз."],
      ],
    },
    en: {
      metaTitle: "Osh Bazaar relocation timeline: 2026–2027",
      metaDescription:
        "A chronology of official announcements about the Osh Bazaar transfer in 2026–2027. Dates, sources and what still needs verification.",
      h1: "Relocation timeline",
      lead: "This page collects official announcements about the transfer in chronological order. Treat planned dates as plans, not completed facts.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "2026",
          body: [
            "4 September 2026: Kabar reported construction of the new market and preparations to move traders.",
            "26 October 2026: Kabar noted the new complex’s main construction is complete but roads and utility works continue.",
            "30 October 2026: the new market was indicated for spring 2027 (March–April).",
          ],
        },
        {
          heading: "What to keep in mind",
          body: [
            "Transfer may happen in stages; an announcement is not the same as completion.",
            "Check each source’s date and which part of the market it describes before treating it as current.",
          ],
        },
      ],
      faq: [
        ["When did relocation start?", "Preparations and some steps were announced from September 2026; full completion is not confirmed by this guide."],
        ["When does the new market open?", "The planned date is spring 2027 (March–April). That is a plan, not confirmation of opening."],
        ["What does the municipal notice say?", "The municipality describes inspections at the Osh Bazary area; do not conflate it with full operation of the new market."],
        ["When was this last checked?", "This page was updated 30 October 2026; monitor sources for newer notices."],
      ],
    },
  },
  {
    slug: "old-vs-new-osh-bazaar",
    group: "status",
    priority: "P0",
    related: ["status", "relocation-timeline", "new-osh-bazaar-2027", "getting-to-osh-bazaar"],
    ky: {
      metaTitle: "Эски жана жаңы Ош базары: айырма жана карта",
      metaDescription:
        "Эски Ош базары менен жаңы комплекс кайда жайгашканы жана алардын айырмасы. Карта белгилери, булактар жана сапар алдында кылуучу эскертүүлөр.",
      h1: "Эски жана жаңы базар: эмнени айырмалаңыз",
      lead: "Берилген карта белгиси эски базарга тиешелүү координаталарды гана көрсөтөт. Жаңы комплекстин дарегин бөлүп, алдын ала тактаңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эски базар",
          body: [
            "Бул гид колдонгон карта белгиси: Бишкек, Кыргызстан; 42.874967, 74.570242. Бул — эски базардын берилген белгиси, жаңы комплекстин ырасталган координатасы эмес.",
            "Эски базардын азыркы иштөө абалын жана кирүүнү сапар алдында тактаңыз; көчүрүү жүрүп жатканы үчүн анын толук ачылышын кепилдебейт.",
          ],
        },
        {
          heading: "Жаңы базар",
          body: [
            "Жаңы комплекс 2027-жылдын жазында ишке киргизилмекчи; анын так дарегин жана кирүү жолун ачылышына чейин тактабай туруңуз.",
            "Бул гид жаңы базардын координаталарын азырынча бербейт, анткени алар расмий түрдө белгиленген эмес.",
          ],
        },
      ],
      faq: [
        ["Картадагы белги эмнени көрсөтөт?", "Ал эски базардын берилген координаталарын (42.874967, 74.570242) көрсөтөт; жаңы комплекстин ырасталган дареги эмес."],
        ["Эски базарга барууга болобу?", "Көчүрүү жүрүп жатканы үчүн, бара турган жериңизди жана кирүүнү алдын ала расмий каналдан тактаңыз."],
        ["Жаңы базар кайда?", "Жаңы комплекстин так орду ачылышына чейин такталбаган; булактарды көзөмөлдөңүз."],
        ["Экөөнү чаташтырбоо үчүн эмне кылам?", "Карта белгисин жаңы базарды пайдалануу деп албаңыз; «эски» же «жаңы» деп ачык көрсөткөн булактарды гана колдонуңуз."],
      ],
    },
    en: {
      metaTitle: "Old vs new Osh Bazaar: difference and map",
      metaDescription:
        "Where the old Osh Bazaar and the new complex are located and how they differ. Map pins, sources and what to verify before travel.",
      h1: "Old and new market: what to distinguish",
      lead: "The supplied map pin shows coordinates for the old market only. Keep the new complex separate and confirm it before relying on it.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Old market",
          body: [
            "The map reference used by this guide is Bishkek, Kyrgyzstan; 42.874967, 74.570242. That is the supplied old-market pin, not verified coordinates for a new complex.",
            "Confirm the old market’s current operation and access before travel; a transfer in progress does not guarantee it is fully open.",
          ],
        },
        {
          heading: "New market",
          body: [
            "The new complex is planned for spring 2027; do not treat its exact address and access as fixed until it opens.",
            "This guide does not yet publish new-market coordinates because they are not officially fixed.",
          ],
        },
      ],
      faq: [
        ["What does the map pin show?", "It shows the supplied old-market coordinates (42.874967, 74.570242); not a verified address for the new complex."],
        ["Can I visit the old market?", "Because a transfer is under way, confirm your destination and access through official channels before going."],
        ["Where is the new market?", "The new complex’s exact location is not finalised until opening; follow sources."],
        ["How do I avoid confusion?", "Do not read the map pin as the new market; rely only on sources that explicitly say old or new."],
      ],
    },
  },
  {
    slug: "new-osh-bazaar-2027",
    group: "status",
    priority: "P0",
    related: ["status", "relocation-timeline", "old-vs-new-osh-bazaar"],
    ky: {
      metaTitle: "Жаңы Ош базары 2027: курулуш жана пландалган ачылыш",
      metaDescription:
        "Жаңы Ош базарынын курулуш абалы, пландалган ишке киргизүү убактысы жана шарттары. Ачылыш пландалган, бүткөн эмес.",
      h1: "Жаңы Ош базары (2027)",
      lead: "Жаңы комплекстин негизги курулушу 2026-жылдын октябрына карата аяктаган, бирок ал ачылды дегенди билдирбейт. Ачылышы 2027-жылдын жазына пландалган.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Курулуш абалы",
          body: [
            "Kabarдын 26-октябрдагы кабарына ылайык, жаңы базардын негизги курулушу аяктаган, бирок анын айланасындагы жолдор, инженердик тармактар жана чөйрөнү жакшыртуу иштери дагы уланууда.",
            "Ички жабдуулар, байланыш жана тейлөө шарттары ачылышка чейин такталбаган мүмкүн.",
          ],
        },
        {
          heading: "Пландалган ачылыш",
          body: [
            "Жаңы базар 2027-жылдын жазында (март–апрель) ишке киргизилмекчи. Бул дата план; расмий ачылыш билдирүүсүн күтүңүз.",
            "Ачылышка чейин жаңы базарга барууну пландабаңыз; аны менен эски базарды чаташтырбаңыз.",
          ],
        },
      ],
      faq: [
        ["Жаңы базар ачылдыбы?", "Жок. Курулуш негизинен аяктаган, бирок айланадагы иштер уланып жатат."],
        ["Качан ачылат?", "Пландалган дата — 2027-жылдын жазы (март–апрель); ал ачылды дегенди эмес."],
        ["Жаңы базарга азыр барууга болобу?", "Бул гид аны сунуштабайт; ачылыш расмий жарыяланганга чейин күтүңүз."],
        ["Эски базар менен эмнени салыштыруу керек?", "Координаталарды жана булактарды гана салыштырыңыз; «жаңы» деп жазылбаган маалыматты жаңы базарга тиешелүү деп албаңыз."],
      ],
    },
    en: {
      metaTitle: "New Osh Bazaar 2027: construction and planned opening",
      metaDescription:
        "Construction status of the new Osh Bazaar, planned commissioning time and conditions. Planned, not yet open.",
      h1: "New Osh Bazaar (2027)",
      lead: "The new complex’s main construction was reported complete by October 2026, but that is not the same as open. Its launch is planned for spring 2027.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Construction status",
          body: [
            "Per Kabar’s 26 October report, the new market’s main construction is complete, while surrounding roads, utility networks and environmental works continue.",
            "Internal fit-out, connectivity and service conditions may not be final before opening.",
          ],
        },
        {
          heading: "Planned opening",
          body: [
            "The new market is planned to open in spring 2027 (March–April). That is a plan; wait for an official opening announcement.",
            "Do not plan a visit to the new market before it opens, and keep it distinct from the old market.",
          ],
        },
      ],
      faq: [
        ["Is the new market open?", "No. Construction is largely done but surrounding works continue."],
        ["When does it open?", "The planned date is spring 2027 (March–April); planned, not confirmed open."],
        ["Can I go to the new market now?", "This guide does not recommend it; wait for the official opening."],
        ["How do I compare with the old market?", "Compare only coordinates and sources that explicitly say new; do not treat unlabelled information as the new market."],
      ],
    },
  },
  {
    slug: "hours-and-holidays",
    group: "status",
    priority: "P1",
    related: ["status", "market-entrances", "if-osh-bazaar-is-closed"],
    ky: {
      metaTitle: "Ош базарынын иштөө убактысы жана майрам күндөрү",
      metaDescription:
        "Ош базарынын иштөө убактысы, дем алуу жана убактылуу жабылуу шарттары. Толук графикти расмий каналдан тактаңыз.",
      h1: "Иштөө убактысы жана майрам күндөрү",
      lead: "Көчүрүү жүрүп жаткандыктан, бул гид бир күнгө чейинки так графикти кепилдебейт. Картадагы 09:00 белгисин толук апталык график деп албаңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Жалпы кабар",
          body: [
            "Google Maps текшерүүдө 09:00 ачылуу белгисин көрсөткөн; бул жабылуу убактысын же апталык графикти аныктабайт.",
            "Сатуучулардын иштөө убактысы алардын түрүнө жана көчүрүү абалына жараша өзгөрүшү мүмкүн.",
          ],
        },
        {
          heading: "Майрамдар жана убактылуу жабылуу",
          body: [
            "Улуттук майрам күндөрүндө же расмий чараларга байланыштуу айрым катарлар кыскараак иштебесе, кеч ачылышы мүмкүн.",
            "Көчүрүүгө байланыштуу убактылуу жабылуулар болушу ыктымал; сапар алдында расмий каналдан текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Иштөө убактысы 09:00–17:00бү?", "Толук график ырасталган эмес. Maps 09:00 ачылуу белгисин гана көрсөткөн; жабылуу убактысын аныктooго болбойт."],
        ["Майрам күндөрү ачыкпы?", "Бул гид жалпы майрам графигин ырастабайт; сатуучу же расмий канал аркылуу текшериңиз."],
        ["Убактылуу жабылуу болушу мүмкүнбү?", "Көчүрүүгө байланыштуу болушу мүмкүн; сапар күнү тактаңыз."],
        ["Эң ишенимдүү булак кайсы?", "Карта белгисиндеги убакыт бир гана көрсөткүч; расмий шаардык канал же сатуучу так маалыматты бериши мүмкүн."],
      ],
    },
    en: {
      metaTitle: "Osh Bazaar opening hours and holidays",
      metaDescription:
        "Osh Bazaar opening hours, rest days and temporary closures. Confirm the full schedule with official channels.",
      h1: "Opening hours and holidays",
      lead: "Because a transfer is in progress, this guide cannot guarantee a fixed schedule. Do not read a Maps 09:00 cue as a full weekly timetable.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "General note",
          body: [
            "Maps showed an opens-at-09:00 cue when checked; it does not establish a closing time or a weekly schedule.",
            "Traders’ hours vary by type and transfer status.",
          ],
        },
        {
          heading: "Holidays and temporary closures",
          body: [
            "On national holidays, or around official events, some rows may open later or close earlier.",
            "Temporary closures linked to the transfer are possible; verify on the day.",
          ],
        },
      ],
      faq: [
        ["Are the hours 09:00–17:00?", "A full schedule is unverified. Maps showed an opens-at-09:00 cue; a closing time cannot be inferred."],
        ["Open on holidays?", "This guide cannot confirm a general holiday timetable; check with the trader or official channels."],
        ["Could there be a temporary closure?", "Possible, related to the transfer; confirm on the day."],
        ["What is the most reliable source?", "The map time is only one cue; the official city channel or the trader can give exact information."],
      ],
    },
  },
  {
    slug: "market-meat-trade",
    group: "status",
    priority: "P1",
    related: ["status", "old-vs-new-osh-bazaar", "relocation-timeline", "getting-to-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарында эт соодасы: көчүрүү жана жаңы жай",
      metaDescription:
        "Ош базарындагы эт соодасынын көчүрүлүшү жөнүндө 2026-жылдагы маалымат. Altyn-Taka базарына тиешелүү объектилер, булактар жана тактап көрүү.",
      h1: "Эт соодасы кайда?",
      lead: "Бишкек шаардык администрациясынын 2026-жылдагы билдирүүсүндө эски Ош базарындагы эт сатуу жайларынын өзгөргөндүгү айтылган. Аларды жаңы жерге чаташтырбаңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Маалыматтын чеги",
          body: [
            "Мэриянын билдирүүсү эт соодасынын жайлары боюнча болгон; бул базардын бардык катарлары же эски базардын толук жабылышы дегенди билдирбейт.",
            "Эт соодасынын жаңы жайы Altyn-Taka базарына тиешелүү объектилер менен байланыштуу деп көрсөтүлгөн; так даректи расмий булактан тактаңыз.",
          ],
        },
        {
          heading: "Эмнени кылуу керек",
          body: [
            "Эт сатып алууну пландасаңыз, сатуучуну же расмий каналды көрүп, жаңы жайдын азыркы абалын белгилеңиз.",
            "Эски базардагы эт катарларынын жабылган-жабылбаганын алдын ала билүү мүмкүн эмес; күтпөгөн жакка барбоо үчүн текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Эт соодасы көчтүбү?", "Мэрия 2026-жылы эт сатуу жайларынын өзгөргөндүгүн билдирген; бул бардык катарлар көчтү дегенди эмес."],
        ["Altyn-Taka деген эмне?", "Эт соодасына тиешелүү объектилер менен байланыштуу аталган жер; так даректи расмий булактан тактаңыз."],
        ["Эски базарда эт табууга болобу?", "Бул гид ырастабайт; сатуучу же расмий канал аркылуу текшериңиз."],
        ["Кайсы булакка таянуу керек?", "Мэриянын (bishkek.gov.kg) билдирүүсүн колдонуңуз; жалпы көчүрүү кабарларын эт соодасы менен чаташтырбаңыз."],
      ],
    },
    en: {
      metaTitle: "Osh Bazaar meat trade: transfer and new location",
      metaDescription:
        "Information from 2026 about the Osh Bazaar meat trade moving. Altyn-Taka related facilities, sources and verification.",
      h1: "Where is the meat trade?",
      lead: "A 2026 Bishkek municipal notice described changes to meat-selling places at the old Osh Bazaar. Do not treat that as the whole market or as a closed old market.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Limits of the information",
          body: [
            "The municipal notice concerns meat-selling places; it does not mean all rows moved or that the old market is fully closed.",
            "The new meat location was indicated as related to Altyn-Taka market facilities; confirm the exact address from official sources.",
          ],
        },
        {
          heading: "What to do",
          body: [
            "If you plan to buy meat, check the trader or official channels and confirm the current status of the new location.",
            "Whether old-market meat rows have closed cannot be known in advance; verify to avoid an unnecessary trip.",
          ],
        },
      ],
      faq: [
        ["Did the meat trade move?", "The municipality reported changes to meat-selling places in 2026; that is not the same as all rows moving."],
        ["What is Altyn-Taka?", "A name associated with facilities related to the meat trade; confirm the exact address from official sources."],
        ["Can I find meat at the old market?", "This guide cannot confirm; check with the trader or official channels."],
        ["Which source to rely on?", "Use the municipal (bishkek.gov.kg) notice; do not conflate general transfer news with the meat trade."],
      ],
    },
  },
  {
    slug: "osh-bazaar-history",
    group: "status",
    priority: "P1",
    related: ["status", "relocation-timeline", "old-vs-new-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарынын тарыхы: Бишкектеги базар жана шаар",
      metaDescription:
        "Ош базарынын тарыхы, Бишкектеги базар маданияты жана шаардын өнүгүшү. Тарыхый маалымат жана азыркы абалды айырмалоо.",
      h1: "Ош базарынын тарыхы",
      lead: "Ош базары Бишкектин эң чоң соода борборлорунун бири катары узак тарыхка ээ. Тарыхый сүрөттөр азыркы иштөөнү далилдебейт.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Базар маданияты",
          body: [
            "Бишкек Орто Азиядагы базар салттарынын борбору; Ош базары азык-түлүк, кийим жана кол өнөрчүлүк боюнча белгилүү.",
            "Ачык сүрөт (2007-жылы тартылган) базардын көркүн көрсөтөт, бирок бүгүнкү товарларды же иштөөнү далилдебейт.",
          ],
        },
        {
          heading: "Азыркы доор",
          body: [
            "2026-жылы базардын көчүрүлүшү жөнүндө чечимдер кабарланган; бул бет тарыхый контекстти гана берет.",
            "Көчүрүү жөнүндө актуалдуу маалымат үчүн «Көчүрүү тарыхы» бетин караңыз.",
          ],
        },
      ],
      faq: [
        ["Ош базары кайчан негизделген?", "Точный дата бул гидде берилген эмес; расмий шаардык булактарды караңыз."],
        ["Эски сүрөт азыркы абалды көрсөтөбү?", "Жок. 2007-жылдагы сүрөт тарыхый контекст үчүн; азыркы иштөөнү далилдебейт."],
        ["Көчүрүү тарыхый фактыбы?", "Жок, бул — актуалдуу процесс; тарыхый бөлүм аны гана контекст катары көрсөтөт."],
        ["Кайдан көбүрөөк билүүгө болот?", "Шаардык архивдер же мамлекеттик тарыхый булактар тарыхый маалыматты бериши мүмкүн."],
      ],
    },
    en: {
      metaTitle: "History of Osh Bazaar: market and city in Bishkek",
      metaDescription:
        "The history of Osh Bazaar, Bishkek’s market culture and the city’s growth. Historical context distinct from current status.",
      h1: "History of Osh Bazaar",
      lead: "Osh Bazaar is among Bishkek’s largest trading centres with a long history. Historical photographs do not prove current operation.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Market culture",
          body: [
            "Bishkek sits within Central Asia’s bazaar tradition; Osh Bazaar is known for food, clothing and handicrafts.",
            "The open photograph (2007) shows the market’s character but not today’s goods or operation.",
          ],
        },
        {
          heading: "The modern era",
          body: [
            "Decisions about the 2026 transfer were announced; this page provides only historical context.",
            "For current transfer information, see the relocation-timeline page.",
          ],
        },
      ],
      faq: [
        ["When was Osh Bazaar founded?", "An exact date is not given by this guide; consult official city sources."],
        ["Does the old photo show current status?", "No. The 2007 photograph is historical context, not proof of current operation."],
        ["Is the transfer a historical fact?", "No, it is an ongoing process; the history section shows it only as context."],
        ["Where can I learn more?", "City archives or official historical sources may provide more."],
      ],
    },
  },

  // ───────────────────────── B. Transport and access ─────────────────────────
  {
    slug: "getting-to-osh-bazaar",
    group: "transport",
    priority: "P0",
    related: ["status", "bus-43", "taxi-dropoff", "from-ala-too-square", "from-manas-airport", "parking-near-osh-bazaar", "from-bishkek-2-station", "accessible-visit"],
    ky: {
      metaTitle: "Ош базарына кантип баруу: унаа, такси жана башталгыч",
      metaDescription:
        "Ош базарына коомдук унаа, такси жана басып баруу жолдору. Азыркы каттамдарды жана түшүү жерин сапар күнү текшериңиз.",
      h1: "Ош базарына кантип баруу",
      lead: "Ош базары Бишкектин борбордук бөлүгүндө жайгашкан. Көчүрүү жүрүп жаткандыктан, каттамдарды жана түшүү жерин алдын ала тактаңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Коомдук унаа",
          body: [
            "Шаардык автобустар жана маршруттык таксилер (маршрутка) базарга жакын аялдамаларга токтойт.",
            "Каттам номерлери жана аялдамалар көчүрүүгө байланыштуу өзгөрүшү мүмкүн; сапар күнү актуалдуу маалыматты расмий колдонуучулардан текшериңиз.",
          ],
        },
        {
          heading: "Такси жана башталгыч",
          body: [
            "Таксиде так даректи жана коопсуз түшүү жерин айдоочу менен тактаңыз; кайсы базар жайына баратканыңызды айтыңыз.",
            "Көчүрүүгө байланыштуу кирүү жайлары өзгөрүшү мүмкүн; түшө турган жериңизди алдын ала белгилеңиз.",
          ],
        },
      ],
      faq: [
        ["Кайсы автобус барат?", "Точный номерлар көчүрүүгө байланыштуу өзгөрүшү мүмкүн; расмий колдонуучулардан же карта колдонмолорунан текшериңиз."],
        ["Таксиге канча тура?", "Баа аралыкка жана убакытка жараша; бул гид бааны кепилдебейт."],
        ["Басып барууга болобу?", "Базар борборго жакын; так кирүү жолун расмий булактан тактаңыз."],
        ["Эң ишенимдүү булак кайсы?", "Расмий шаардык транспорт маалыматы жана такси колдонуучулары."],
      ],
    },
    en: {
      metaTitle: "Getting to Osh Bazaar: buses, taxi and starting point",
      metaDescription:
        "Buses, taxi and walking routes to Osh Bazaar. Verify current routes and your drop-off point on the day of travel.",
      h1: "Getting to Osh Bazaar",
      lead: "Osh Bazaar sits in central Bishkek. Because a transfer is in progress, confirm routes and drop-off points in advance.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Public transport",
          body: [
            "City buses and minibuses (marshrutka) stop near the bazaar.",
            "Route numbers and stops may change with the transfer; check current information from official apps on the day.",
          ],
        },
        {
          heading: "Taxi and drop-off",
          body: [
            "In a taxi, agree the exact address and a safe drop-off with the driver; state which market site you mean.",
            "Entry points may shift with the transfer; confirm where you will alight.",
          ],
        },
      ],
      faq: [
        ["Which bus goes there?", "Exact numbers may change with the transfer; verify from official apps or maps on the day."],
        ["How much is a taxi?", "Fares depend on distance and time; this guide does not guarantee a price."],
        ["Can I walk?", "The bazaar is near the centre; confirm the exact entry from official sources."],
        ["What is the most reliable source?", "Official city transport information and taxi apps."],
      ],
    },
  },
  {
    slug: "bus-43",
    group: "transport",
    priority: "P0",
    related: ["getting-to-osh-bazaar", "taxi-dropoff", "market-entrances", "status"],
    ky: {
      metaTitle: "43-автобус Ош базарына: 2026-жылдын сентябрынан бери өзгөртүү",
      metaDescription:
        "43-автобустун 2026-жылдын 25-сентябрынан бери өзгөртүлгөн каттамы. Расмий билдирүү, аялдамаларды текшерүү жана базарга байланыш.",
      h1: "43-автобус кандай өзгөрдү?",
      lead: "Бишкек шаардык администрациясы 2026-жылдын 25-сентябрынан бери 43-автобустун каттамын өзгөртүлгөндүгүн жарыялады. Эски аялдамаларга таянбаңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Расмий маалымат",
          body: [
            "Мэриянын билдирүүсүнө ылайык, 43-автобус 2026-жылдын 25-сентябрынан бери башка жол боюнча каттайт.",
            "Жаңы аялдамаларды жана багытты расмий колдонуучулардан же карта колдонмосунан текшериңиз.",
          ],
        },
        {
          heading: "Базарга байланыш",
          body: [
            "43-автобус эски базарга жакын аялдамага токтобосо, базарга баруу үчүн башка каттам же басып баруу керек болушу мүмкүн.",
            "Көчүрүүгө байланыштуу кирүү жайлары өзгөрүшү мүмкүн; түшө турган жериңизди алдын ала белгилеңиз.",
          ],
        },
      ],
      faq: [
        ["43-автобус эмнеге өзгөрдү?", "Мэрия 2026-жылдын 25-сентябрынан бери жаңы каттамды жарыялады."],
        ["Эски аялдама керекпи?", "Жок, жаңы багытты расмий булактан текшериңиз."],
        ["Базарга кантип барам?", "43-автобустун жаңы аялдамасынан кийин башка каттам же басып баруу керек болушу мүмкүн."],
        ["Кайдан текшерүү керек?", "Мэриянын билдирүүсү жана карта колдонмолору; бул гид так графикти кепилдебейт."],
      ],
    },
    en: {
      metaTitle: "Bus 43 to Osh Bazaar: change since September 2026",
      metaDescription:
        "The 43 bus route changed from 25 September 2026. Official notice, stop checks and bazaar connection.",
      h1: "How did bus 43 change?",
      lead: "The Bishkek municipality announced a change to route 43 from 25 September 2026. Do not rely on former stops.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Official information",
          body: [
            "Per the municipal notice, bus 43 has run on a changed route since 25 September 2026.",
            "Confirm the new stops and direction from official apps or map services.",
          ],
        },
        {
          heading: "Connection to the bazaar",
          body: [
            "If bus 43 no longer stops near the old bazaar, another route or a walk may be needed.",
            "Entry points may shift with the transfer; confirm where you will alight.",
          ],
        },
      ],
      faq: [
        ["Why did bus 43 change?", "The municipality announced a new route from 25 September 2026."],
        ["Do I need the old stop?", "No, check the new route from official sources."],
        ["How do I reach the bazaar?", "After the new 43 stop, another route or a walk may be needed."],
        ["Where to verify?", "The municipal notice and map apps; this guide does not guarantee the exact timetable."],
      ],
    },
  },
  {
    slug: "from-ala-too-square",
    group: "transport",
    priority: "P1",
    related: ["getting-to-osh-bazaar", "one-day-bishkek-from-osh-bazaar", "ala-too-square-and-history-museum", "taxi-dropoff"],
    ky: {
      metaTitle: "Ала-Тоо аянтынан Ош базарына баруу",
      metaDescription:
        "Ала-Тоо аянтынан Ош базарына унаа, такси жана басып баруу. Аралык жана каттамдарды расмий колдонуучулардан текшериңиз.",
      h1: "Ала-Тоо аянтынан Ош базарына",
      lead: "Ала-Тоо аянты Бишкектин борбору; андан Ош базарына коомдук унаа же такси менен жетүүгө болот. Так аралык жана каттам күнүмдүк абалга жараша өзгөрөт.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Унаа менен",
          body: [
            "Ала-Тоо аянтынан базарга чейин бир нече автобус же маршрутка каттайт; точный номерларды расмий колдонуучулардан текшериңиз.",
            "Көчүрүүгө байланыштуу каттамдар өзгөрүшү мүмкүн.",
          ],
        },
        {
          heading: "Такси жана басуу",
          body: [
            "Такси үчүн Ала-Тоо аянтынан так даректи көрсөтүңүз; аралык аз эмес, бааны алдын ала сүйлөшүңүз.",
            "Басып баруу узакка созулушу мүмкүн; ыңгайлуу убакытты тандаңыз.",
          ],
        },
      ],
      faq: [
        ["Канча убакыт кетет?", "Трафикке жараша өзгөрөт; бул гид так убакытты кепилдебейт."],
        ["Кайсы автобус?", "Расмий колдонуучулардан же картадан текшериңиз."],
        ["Басып барууга болобу?", "Аралык борбордук; бирок точный жолду расмий булактан тактаңыз."],
        ["Такси баасы?", "Аралыкка жараша; алдын ала сүйлөшүңүз."],
      ],
    },
    en: {
      metaTitle: "From Ala-Too Square to Osh Bazaar",
      metaDescription:
        "Bus, taxi and walking from Ala-Too Square to Osh Bazaar. Distance and routes vary; verify with official apps.",
      h1: "From Ala-Too Square to Osh Bazaar",
      lead: "Ala-Too Square is the city centre; from there you can reach Osh Bazaar by public transport or taxi. Exact distance and routes change with daily conditions.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "By transport",
          body: [
            "Several buses or minibuses run from near Ala-Too Square to the bazaar; confirm exact numbers from official apps.",
            "Routes may change with the transfer.",
          ],
        },
        {
          heading: "Taxi and walking",
          body: [
            "For a taxi, give the driver the exact address from Ala-Too Square; the distance is not trivial, agree the fare first.",
            "Walking can take a while; choose a comfortable time.",
          ],
        },
      ],
      faq: [
        ["How long does it take?", "Varies with traffic; this guide does not guarantee a time."],
        ["Which bus?", "Verify from official apps or maps."],
        ["Can I walk?", "The distance is central but confirm the exact path from official sources."],
        ["Taxi fare?", "Depends on distance; agree in advance."],
      ],
    },
  },
  {
    slug: "from-manas-airport",
    group: "transport",
    priority: "P1",
    related: ["getting-to-osh-bazaar", "taxi-dropoff", "one-day-bishkek-from-osh-bazaar"],
    ky: {
      metaTitle: "Манас аэропортунан Ош базарына баруу",
      metaDescription:
        "Манас эл аралык аэропортунан Ош базарына такси, автобус жана башка унаа. Аралык жана бааны расмий булактардан текшериңиз.",
      h1: "Манас аэропортунан Ош базарына",
      lead: "Манас аэропорту Бишкектен тышкары жайгашкан. Базарга такси же шаардык унаа менен жетүүгө болот; аралык чоң, убакытты эсептеңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Такси",
          body: [
            "Аэропорттон такси менен базарга чейин түз барууга болот; бааны алдын ала сүйлөшүңүз же таксиметрди колдонуңуз.",
            "Айдоочуга кайсы базар жайына баратканыңызды так айтыңыз.",
          ],
        },
        {
          heading: "Коомдук унаа",
          body: [
            "Аэропорттон шаар борборуна чейин автобус же башка унаа бар; андан базарга экинчи каттам керек.",
            "Каттамдарды расмий колдонуучулардан текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Канча убакыт кетет?", "Трафикке жараша; бул гид так убакытты кепилдебейт."],
        ["Такси баасы?", "Аралык чоң; алдын ала сүйлөшүңүз же таксиметрди колдонуңуз."],
        ["Автобус барбы?", "Шаар борборуна чейин; андан базарга экинчи каттам."],
        ["Эң ишенимдүү булак?", "Расмий такси колдонуучулары жана шаардык транспорт маалыматы."],
      ],
    },
    en: {
      metaTitle: "From Manas Airport to Osh Bazaar",
      metaDescription:
        "Taxi, bus and other transport from Manas International Airport to Osh Bazaar. Distance and fares vary; verify officially.",
      h1: "From Manas Airport to Osh Bazaar",
      lead: "Manas Airport lies outside Bishkek. Reach the bazaar by taxi or city transport; the distance is large, so budget time.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Taxi",
          body: [
            "A taxi can go directly from the airport to the bazaar; agree the fare in advance or use the meter.",
            "Tell the driver exactly which market site you mean.",
          ],
        },
        {
          heading: "Public transport",
          body: [
            "From the airport there is transport to the city centre; from there a second route is needed to the bazaar.",
            "Verify routes from official apps.",
          ],
        },
      ],
      faq: [
        ["How long?", "Varies with traffic; this guide does not guarantee a time."],
        ["Taxi fare?", "The distance is large; agree in advance or use the meter."],
        ["Is there a bus?", "To the centre first; then a second route to the bazaar."],
        ["Most reliable source?", "Official taxi apps and city transport information."],
      ],
    },
  },
  {
    slug: "from-bishkek-2-station",
    group: "transport",
    priority: "P2",
    related: ["getting-to-osh-bazaar", "from-manas-airport", "taxi-dropoff"],
    ky: {
      metaTitle: "Бишкек-2 вокзалынан Ош базарына баруу",
      metaDescription:
        "Бишкек-2 темир жол вокзалынан Ош базарына унаа жана такси. Аралык жана каттамдарды расмий колдонуучулардан текшериңиз.",
      h1: "Бишкек-2 вокзалынан Ош базарына",
      lead: "Бишкек-2 — шаардын темир жол вокзалы. Базарга коомдук унаа же такси менен жетүүгө болот; аралыкты жана каттамды расмий булактардан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Унаа менен",
          body: [
            "Вокзалдан шаар борборуна чейин автобус же маршрутка бар; андан базарга экинчи каттам керек.",
            "Каттам номерлерин расмий колдонуучулардан текшериңиз.",
          ],
        },
        {
          heading: "Такси",
          body: [
            "Такси менен вокзалдан базарга түз барууга болот; бааны алдын ала сүйлөшүңүз.",
            "Айдоочуга кайсы базар жайына баратканыңызды так айтыңыз.",
          ],
        },
      ],
      faq: [
        ["Канча убакыт?", "Трафикке жараша; бул гид так убакытты кепилдебейт."],
        ["Кайсы автобус?", "Расмий колдонуучулардан текшериңиз."],
        ["Такси баасы?", "Алдын ала сүйлөшүңүз."],
        ["Эң ишенимдүү булак?", "Шаардык транспорт маалыматы жана такси колдонуучулары."],
      ],
    },
    en: {
      metaTitle: "From Bishkek-2 railway station to Osh Bazaar",
      metaDescription:
        "Transport and taxi from Bishkek-2 railway station to Osh Bazaar. Distance and routes vary; verify officially.",
      h1: "From Bishkek-2 station to Osh Bazaar",
      lead: "Bishkek-2 is the city’s railway station. Reach the bazaar by public transport or taxi; verify distance and routes from official sources.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "By transport",
          body: [
            "From the station there is a bus or minibus to the centre; from there a second route reaches the bazaar.",
            "Confirm route numbers from official apps.",
          ],
        },
        {
          heading: "Taxi",
          body: [
            "A taxi can go directly from the station to the bazaar; agree the fare first.",
            "Tell the driver exactly which market site you mean.",
          ],
        },
      ],
      faq: [
        ["How long?", "Varies with traffic; this guide does not guarantee a time."],
        ["Which bus?", "Verify from official apps."],
        ["Taxi fare?", "Agree in advance."],
        ["Most reliable source?", "City transport information and taxi apps."],
      ],
    },
  },
  {
    slug: "taxi-dropoff",
    group: "transport",
    priority: "P1",
    related: ["getting-to-osh-bazaar", "bus-43", "market-entrances", "parking-near-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарына такси: түшүү жерин келишүү",
      metaDescription:
        "Ош базарына такси менен барганда түшүү жерин жана даректи тактоо. Көчүрүүгө байланыштуу кирүү жайларын текшериңиз.",
      h1: "Таксиде түшүү жерин келишүү",
      lead: "Такси айдоочусу менен так даректи жана коопсуз түшүү жерин алдын ала келишүү зарыл. Көчүрүү жүрүп жаткандыктан, кирүү жайлары өзгөрүшү мүмкүн.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Даректи тактоо",
          body: [
            "Базардын атын гана айтпай, так даректи же белгилүү чекитти көрсөтүңүз.",
            "Көчүрүүгө байланыштуу эски дарек жаңы жайга дал келбеши мүмкүн.",
          ],
        },
        {
          heading: "Түшүү жерин тандоо",
          body: [
            "Кирүү жайларын расмий каналдан алдын ала тактаңыз; жабык аймакка барбоо үчүн.",
            "Таксиден түшкөндөн кийин базарга кирүү жолун сураңыз.",
          ],
        },
      ],
      faq: [
        ["Таксиге эмне айтуу керек?", "Так дарек же белгилүү чекит; «Ош базары» деген жетишсиз болушу мүмкүн."],
        ["Түшүү жерин кайдан билүүгө болот?", "Расмий канал же карта колдонмосу; бул гид так жайды кепилдебейт."],
        ["Бааны кантип келишүү?", "Баруудан мурун сүйлөшүңүз же таксиметрди колдонуңуз."],
        ["Көчүрүү түшүү жерин өзгөрттүбү?", "Өзгөртүшү мүмкүн; расмий булактан текшериңиз."],
      ],
    },
    en: {
      metaTitle: "Osh Bazaar taxi: agreeing the drop-off",
      metaDescription:
        "Agreeing the address and drop-off when taking a taxi to Osh Bazaar. Check entry points, which may shift with the transfer.",
      h1: "Agreeing the taxi drop-off",
      lead: "Agree the exact address and a safe drop-off with the driver. Because a transfer is in progress, entry points may change.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Setting the address",
          body: [
            "Give the exact address or a known landmark, not just the market name.",
            "With the transfer, an old address may not match the new site.",
          ],
        },
        {
          heading: "Choosing the drop-off",
          body: [
            "Confirm entry points from official channels to avoid a closed area.",
            "Ask for the market entrance after you alight.",
          ],
        },
      ],
      faq: [
        ["What to tell the driver?", "An exact address or landmark; «Osh Bazaar» alone may be insufficient."],
        ["Where to learn the drop-off?", "Official channels or map apps; this guide does not guarantee a spot."],
        ["How to agree the fare?", "Discuss before the trip or use the meter."],
        ["Did the transfer change drop-offs?", "It may; verify from official sources."],
      ],
    },
  },
  {
    slug: "parking-near-osh-bazaar",
    group: "transport",
    priority: "P2",
    related: ["getting-to-osh-bazaar", "taxi-dropoff", "market-entrances", "status"],
    ky: {
      metaTitle: "Ош базарынын жанында токтотуу: унаа коюу жана чектөөлөр",
      metaDescription:
        "Ош базарынын жанында унаа токтотуу жайлары, жолдор жана чектөөлөр. Так маалыматты расмий каналдан текшериңиз.",
      h1: "Ош базарынын жанында токтотуу",
      lead: "Базардын айланасында унаа токтотуу кыйла кыйын болушу мүмкүн. Так жайларды жана чектөөлөрдү расмий каналдан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Токтотуу жайлары",
          body: [
            "Базардын жанындагы расмий же коммерциялык токтотуу жайларынын абалы күнүмдүк өзгөрөт.",
            "Так жайларды жана акысын расмий булактардан текшериңиз.",
          ],
        },
        {
          heading: "Жолдор жана чектөөлөр",
          body: [
            "Көчүрүүгө байланыштуу айрым жолдор же кирүү жолдору жабык/өзгөргөн болушу мүмкүн.",
            "Унаа коюуну пландаганда расмий каналдан текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Базардын жанында токтотууга болобу?", "Мүмкүн, бирок так жайларды расмий булактан текшериңиз."],
        ["Акы канча?", "Бул гид бааны кепилдебейт; расмий булактардан билүү керек."],
        ["Жолдор жабыкпы?", "Көчүрүүгө байланыштуу болушу мүмкүн; текшериңиз."],
        ["Эң ишенимдүү булак?", "Расмий шаардык канал жана базардын оператору."],
      ],
    },
    en: {
      metaTitle: "Parking near Osh Bazaar: where to leave the car",
      metaDescription:
        "Parking near Osh Bazaar, roads and restrictions. Confirm exact spots and limits from official channels.",
      h1: "Parking near Osh Bazaar",
      lead: "Parking around the bazaar can be difficult. Confirm exact spots and restrictions from official channels.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Parking spots",
          body: [
            "The status of official or commercial parking near the bazaar changes day to day.",
            "Confirm exact spots and fees from official sources.",
          ],
        },
        {
          heading: "Roads and restrictions",
          body: [
            "Some roads or entries may be closed or changed with the transfer.",
            "If you plan to drive, verify with official channels.",
          ],
        },
      ],
      faq: [
        ["Can I park nearby?", "Possibly, but confirm exact spots from official sources."],
        ["How much is the fee?", "This guide does not guarantee a price; check official sources."],
        ["Are roads closed?", "Possible with the transfer; verify."],
        ["Most reliable source?", "Official city channel and the market operator."],
      ],
    },
  },
  {
    slug: "market-entrances",
    group: "transport",
    priority: "P2",
    related: ["getting-to-osh-bazaar", "taxi-dropoff", "parking-near-osh-bazaar", "hours-and-holidays"],
    ky: {
      metaTitle: "Ош базарынын кирүү жайлары жана бөлүктөрү",
      metaDescription:
        "Ош базарынын кирүү жайлары, чыгуу жана бөлүктөрдү таануу. Көчүрүүгө байланыштуу өзгөрүүлөрдү расмий каналдан текшериңиз.",
      h1: "Кирүү жайлары жана бөлүктөр",
      lead: "Базардын кирүү жайларын жана бөлүктөрүн таануу сапарды жеңилдетет. Көчүрүү жүрүп жаткандыктан, алар өзгөрүшү мүмкүн.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Бөлүктөрдү таануу",
          body: [
            "Базар тамак-аш, кийим, кол өнөрчүлүк жана башка бөлүктөргө бөлүнөт.",
            "Сатып алууну пландаган нерсени тактап, тиешелүү бөлүккө баруу жакшы.",
          ],
        },
        {
          heading: "Кирүү жайлары",
          body: [
            "Кирүү жайлары көчүрүүгө байланыштуу өзгөрүшү мүмкүн; расмий каналдан текшериңиз.",
            "Жабык аймакка барбоо үчүн бара турган жериңизди алдын ала белгилеңиз.",
          ],
        },
      ],
      faq: [
        ["Кирүү жайлары канча?", "Так санын бул гид бербейт; расмий булактан текшериңиз."],
        ["Кайсы бөлүк керек?", "Тамак-аш, кийим же кол өнөрчүлүк бөлүктөрүнө бөлүнөт; сунушуңузга жараша тандаңыз."],
        ["Көчүрүү кирүү жайын өзгөрттүбү?", "Өзгөртүшү мүмкүн; расмий булактан текшериңиз."],
        ["Эң ишенимдүү булак?", "Расмий канал жана базардын оператору."],
      ],
    },
    en: {
      metaTitle: "Osh Bazaar entrances and sections",
      metaDescription:
        "Osh Bazaar entrances, exits and recognising sections. Verify transfer-related changes from official channels.",
      h1: "Entrances and sections",
      lead: "Knowing the bazaar’s entrances and sections makes a visit easier. Because a transfer is in progress, they may change.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Recognising sections",
          body: [
            "The bazaar is divided into food, clothing, handicrafts and other sections.",
            "Know what you want to buy and head to the relevant section.",
          ],
        },
        {
          heading: "Entrances",
          body: [
            "Entrances may change with the transfer; verify from official channels.",
            "Confirm your destination in advance to avoid a closed area.",
          ],
        },
      ],
      faq: [
        ["How many entrances?", "This guide does not give an exact count; verify from official sources."],
        ["Which section do I need?", "Food, clothing or handicrafts; choose by what you want."],
        ["Did the transfer change entrances?", "It may; verify from official sources."],
        ["Most reliable source?", "Official channels and the market operator."],
      ],
    },
  },
  {
    slug: "accessible-visit",
    group: "transport",
    priority: "P2",
    related: ["market-entrances", "hours-and-holidays", "getting-to-osh-bazaar", "status"],
    ky: {
      metaTitle: "Ош базарына тоскоолдуксуз баруу",
      metaDescription:
        "Ош базарына арабанада же жардам менен баруу, кирүү жана жардам. Так шарттарды расмий каналдан текшериңиз.",
      h1: "Тоскоолдуксуз баруу",
      lead: "Арабанчан же жардамга муктаж адамдар үчүн кирүү жана жардам шарттары базардын бөлүгүнө жараша ар башка. Такты расмий каналдан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Кирүү шарттары",
          body: [
            "Базардын айрым бөлүктөрүндө жайыңкы кирүү же арабаналуу жүрүү кыйлаар жолу болушу мүмкүн.",
            "Так шарттарды бара турган жериңизден расмий каналдан текшериңиз.",
          ],
        },
        {
          heading: "Жардам",
          body: [
            "Даараткана, токтотуу жана жардам кызматтары бөлүккө жараша ар башка; бул гид аларды кепилдебейт.",
            "Керектүү нерсени алдын ала сураңыз.",
          ],
        },
      ],
      faq: [
        ["Арабаналуу кирүүгө болобу?", "Бөлүккө жараша; расмий булактан текшериңиз."],
        ["Даараткана барбы?", "Бул гид кепилдебейт; расмий каналдан билүү керек."],
        ["Жардам кызматы?", "Бөлүккө жараша; алдын ала сураңыз."],
        ["Эң ишенимдүү булак?", "Расмий канал жана базардын оператору."],
      ],
    },
    en: {
      metaTitle: "Accessible visit to Osh Bazaar",
      metaDescription:
        "Visiting Osh Bazaar by wheelchair or with assistance: entry and help. Verify exact conditions with official channels.",
      h1: "Accessible visit",
      lead: "For wheelchair users or those needing assistance, entry and help vary by section. Confirm exact conditions with official channels.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Entry conditions",
          body: [
            "Some bazaar sections may have step-free or wheelchair-friendly access; others may not.",
            "Confirm conditions for your destination from official channels.",
          ],
        },
        {
          heading: "Assistance",
          body: [
            "Toilets, rest and assistance services vary by section; this guide does not guarantee them.",
            "Ask in advance for what you need.",
          ],
        },
      ],
      faq: [
        ["Wheelchair access?", "Depends on the section; verify from official sources."],
        ["Are there toilets?", "This guide does not guarantee it; check official channels."],
        ["Assistance service?", "Varies by section; ask in advance."],
        ["Most reliable source?", "Official channels and the market operator."],
      ],
    },
  },

  // ───────────────────────── C. Shopping and culture ─────────────────────────
  {
    slug: "first-time-shopping-guide",
    group: "shopping",
    priority: "P1",
    related: ["status", "prices-and-bargaining", "cash-atms-and-cards", "safety-and-photography", "dried-fruit-and-nuts"],
    ky: {
      metaTitle: "Ош базарына биринчи жолу баруу: сатып алуу көрсөтмөсү",
      metaDescription:
        "Ош базарына биринчи жолу барганда эмнени билип алыңыз. Бөлүктөр, баа жана коопсуздук боюнча кеңештер.",
      h1: "Биринчи жолу сатып алуу көрсөтмөсү",
      lead: "Ош базары — чоң соода аймагы. Эмнени издеп жатканыңызды тактап, убакытты жана бааны алдын ала билиңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Даярдык",
          body: [
            "Сатып алууну пландаган бөлүктү тандаңыз: тамак-аш, кийим, кол өнөрчүлүк же башкалар.",
            "Баа жана төлөм ыкмасын алдын ала тактаңыз; колдо наличный акча көбүрөөк колдонулат.",
          ],
        },
        {
          heading: "Кеңештер",
          body: [
            "Суук же ысык абага карата кийим жана суу алыңыз; базар ачык асман астында болушу мүмкүн.",
            "Бааны белгилеп, бир нече дүкөндөн сураңыз.",
          ],
        },
      ],
      faq: [
        ["Канча убакыт керек?", "Бөлүктөргө жараша; бул гид так убакытты кепилдебейт."],
        ["Наличный керекпи?", "Колдо наличный акча көбүрөөк колдонулат; ATMден алүү жөнүндө башка бетти караңыз."],
        ["Эмне алыңыз?", "Кургак мөмө-жемиш, жаңгак, кийим же кол өнөрчүлүк; бөлүктөр беттерин караңыз."],
        ["Коопсуздук?", "Буларды «Коопсуздук жана сүрөт» бетинен окуңуз."],
      ],
    },
    en: {
      metaTitle: "First-time shopping at Osh Bazaar: a guide",
      metaDescription:
        "What to know before your first visit to Osh Bazaar. Sections, prices and safety tips.",
      h1: "First-time shopping guide",
      lead: "Osh Bazaar is a large trading area. Know what you are looking for, and check time, prices and payment in advance.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Preparation",
          body: [
            "Choose the section you plan to shop: food, clothing, handicrafts or others.",
            "Confirm price and payment method in advance; cash is used more on the ground.",
          ],
        },
        {
          heading: "Tips",
          body: [
            "Bring weather-appropriate clothing and water; part of the bazaar may be open-air.",
            "Note prices and ask at several stalls.",
          ],
        },
      ],
      faq: [
        ["How much time?", "Depends on sections; this guide does not guarantee a time."],
        ["Do I need cash?", "Cash is used more on the ground; see the ATM page."],
        ["What to buy?", "Dried fruit, nuts, clothing or handicrafts; see the section pages."],
        ["Safety?", "Read the safety and photography page."],
      ],
    },
  },
  {
    slug: "dried-fruit-and-nuts",
    group: "shopping",
    priority: "P1",
    related: ["first-time-shopping-guide", "spices-and-tea", "prices-and-bargaining", "what-to-eat-at-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарында кургак мөмө-жемиш жана жаңгак",
      metaDescription:
        "Ош базарындагы кургак мөмө-жемиш, жаңгак жана жергиликтүү кургатылган азыктар. Тандоо, сактоо жана сатып алуу боюнча кеңештер.",
      h1: "Кургак мөмө-жемиш жана жаңгак",
      lead: "Орто Азияда кургак мөмө-жемиш менен жаңгак — базардын классикалык бөлүгү. Түрлөрүн, сапатын жана сактоону билип алыңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эмнелер бар",
          body: [
            "Кургак кайса, алча, жүзүм, алмурут жана жаңгактар (жаңгак, бадам, күнжүт) кездешет.",
            "Жергиликтүү кургатылган азыктар да сатылат; так аттарын сатуучудан сураңыз.",
          ],
        },
        {
          heading: "Тандоо кеңештери",
          body: [
            "Түсү, жайы жана жыты боюнча сапатын баалаңыз; күмүшүү же нымдуу болбосун.",
            "Сатып алган соң сактоо шарттарын — кургак, жарыксыз жерде — сураңыз.",
          ],
        },
      ],
      faq: [
        ["Кандай түрлөр бар?", "Кайса, алча, жүзүм, алмурут, жаңгак; так тизмени сатуучудан сураңыз."],
        ["Баа канча?", "Бул гид бааны кепилдебейт; сатуучудан сураңыз."],
        ["Кантип сактоо керек?", "Кургак жана жарыксыз жерде; так шарттарды сатуучудан сураңыз."],
        ["Эң ишенимдүү булак?", "Базардын сатуучулары жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "Dried fruit and nuts at Osh Bazaar",
      metaDescription:
        "Dried fruit, nuts and local dried foods at Osh Bazaar. Choosing, storage and buying tips.",
      h1: "Dried fruit and nuts",
      lead: "In Central Asia, dried fruit and nuts are a classic part of the bazaar. Learn the varieties, quality and storage.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "What is available",
          body: [
            "Dried apricot, plum, raisin, pear and nuts (walnut, almond, sesame) are common.",
            "Local dried foods are also sold; ask the trader for exact names.",
          ],
        },
        {
          heading: "Choosing tips",
          body: [
            "Judge quality by colour, texture and smell; avoid mouldy or damp items.",
            "After buying, ask about storage — dry and away from light.",
          ],
        },
      ],
      faq: [
        ["What varieties?", "Apricot, plum, raisin, pear, nuts; ask the trader for the full list."],
        ["How much?", "This guide does not guarantee a price; ask the trader."],
        ["How to store?", "Dry and dark; confirm exact conditions with the trader."],
        ["Most reliable source?", "Bazaar traders and official information."],
      ],
    },
  },
  {
    slug: "spices-and-tea",
    group: "shopping",
    priority: "P2",
    related: ["dried-fruit-and-nuts", "first-time-shopping-guide", "prices-and-bargaining", "kyrgyz-russian-shopping-phrases"],
    ky: {
      metaTitle: "Ош базарында азыктык кошумчалар жана чай",
      metaDescription:
        "Ош базарындагы туздар, азыктык кошумчалар жана чай. Тандоо жана сатып алуу боюнча маалымат.",
      h1: "Азыктык кошумчалар жана чай",
      lead: "Базардын тамак-аш бөлүгүндө азыктык кошумчалар, туздар жана чайлар сатылат. Түрлөрүн жана сапатын билип алыңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эмнелер бар",
          body: [
            "Жергиликтүү жана импорттолгон азыктык кошумчалар, туздар жана кара/жашыл чайлар кездешет.",
            "Так аттарын жана пайдаланууны сатуучудан сураңыз.",
          ],
        },
        {
          heading: "Тандоо",
          body: [
            "Жыт жана түс боюнча сапатын баалаңыз; герметикалык идиште сактоону сураңыз.",
            "Аллергия же диета үчүн курамын тактаңыз.",
          ],
        },
      ],
      faq: [
        ["Кандай түрлөр бар?", "Азыктык кошумчалар, туздар, кара/жашыл чай; так тизмени сатуучудан сураңыз."],
        ["Баа канча?", "Бул гид бааны кепилдебейт; сураңыз."],
        ["Кантип сактоо керек?", "Герметикалык идиште; так шарттарды сураңыз."],
        ["Эң ишенимдүү булак?", "Сатуучулар жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "Spices and tea at Osh Bazaar",
      metaDescription:
        "Spices, seasonings and tea at Osh Bazaar. Choosing and buying information.",
      h1: "Spices and tea",
      lead: "The food section sells spices, seasonings and teas. Learn the varieties and quality.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "What is available",
          body: [
            "Local and imported spices, seasonings and black/green teas are common.",
            "Ask the trader for exact names and uses.",
          ],
        },
        {
          heading: "Choosing",
          body: [
            "Judge quality by smell and colour; ask about airtight storage.",
            "For allergies or diet, confirm the composition.",
          ],
        },
      ],
      faq: [
        ["What varieties?", "Spices, seasonings, black/green tea; ask the trader for the list."],
        ["How much?", "This guide does not guarantee a price; ask."],
        ["How to store?", "Airtight; confirm exact conditions."],
        ["Most reliable source?", "Traders and official information."],
      ],
    },
  },
  {
    slug: "felt-and-kalpak",
    group: "shopping",
    priority: "P1",
    related: ["clothing-and-textiles", "first-time-shopping-guide", "kyrgyz-russian-shopping-phrases", "safety-and-photography"],
    ky: {
      metaTitle: "Ош базарында кийиз буюмдары жана калпак",
      metaDescription:
        "Ош базарындагы жергиликтүү кийиз буюмдары, калпак жана кол өнөрчүлүк. Тандоо жана сатып алуу боюнча маалымат.",
      h1: "Кийиз буюмдары жана калпак",
      lead: "Калпак — кыргыз элинин салттуу баш кийими. Кийизден жасалган буюмдар жана калпак базардын кол өнөрчүлүк бөлүгүндө кездешет.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эмнелер бар",
          body: [
            "Калпак, кийизден жасалган аяк-капчык, килем жана башка кол өнөрчүлүк буюмдары сатылат.",
            "Так аттарын жана материалын сатуучудан сураңыз.",
          ],
        },
        {
          heading: "Тандоо кеңештери",
          body: [
            "Кол менен жасалганына, тигилүүсүнө жана материалына көңүл бургула.",
            "Эскичелик же сапат боюнча сатуучудан сураңыз.",
          ],
        },
      ],
      faq: [
        ["Калпак деген эмне?", "Кыргыздардын салттуу баш кийими; кол өнөрчүлүк бөлүгүндө."],
        ["Баа канча?", "Бул гид бааны кепилдебейт; сураңыз."],
        ["Кандай кийиз буюмдары бар?", "Аяк-капчык, килем; так тизмени сатуучудан сураңыз."],
        ["Эң ишенимдүү булак?", "Сатуучулар жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "Felt items and kalpak at Osh Bazaar",
      metaDescription:
        "Traditional Kyrgyz felt items, kalpak and handicrafts at Osh Bazaar. Choosing and buying information.",
      h1: "Felt items and kalpak",
      lead: "The kalpak is the traditional Kyrgyz headwear. Felt goods and kalpaks appear in the bazaar’s handicraft section.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "What is available",
          body: [
            "Kalpaks, felt bags, rugs and other handicrafts are sold.",
            "Ask the trader for exact names and materials.",
          ],
        },
        {
          heading: "Choosing tips",
          body: [
            "Look at handwork, stitching and material.",
            "Ask the trader about age or quality.",
          ],
        },
      ],
      faq: [
        ["What is a kalpak?", "The traditional Kyrgyz headwear; in the handicraft section."],
        ["How much?", "This guide does not guarantee a price; ask."],
        ["What felt items?", "Bags, rugs; ask the trader for the list."],
        ["Most reliable source?", "Traders and official information."],
      ],
    },
  },
  {
    slug: "clothing-and-textiles",
    group: "shopping",
    priority: "P2",
    related: ["felt-and-kalpak", "first-time-shopping-guide", "prices-and-bargaining", "kyrgyz-russian-shopping-phrases"],
    ky: {
      metaTitle: "Ош базарында кийим жана кездеме",
      metaDescription:
        "Ош базарындагы кийим, кездеме жана салттуу токулма буюмдар. Тандоо жана сатып алуу боюнча маалымат.",
      h1: "Кийим жана кездеме",
      lead: "Базардын кийим бөлүгүндө күндөлүк кийим, кездеме жана салттуу токулма буюмдары сатылат. Сапатын жана өлчөмүн текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эмнелер бар",
          body: [
            "Күндөлүк кийим, кездеме жана токулма буюмдары кездешет.",
            "Так аттарын жана материалын сатуучудан сураңыз.",
          ],
        },
        {
          heading: "Тандоо",
          body: [
            "Өлчөмүн, тигилүүсүн жана материалын текшериңиз.",
            "Жуунуу шарттарын сураңыз.",
          ],
        },
      ],
      faq: [
        ["Кандай кийим бар?", "Күндөлүк кийим, кездеме; так тизмени сатуучудан сураңыз."],
        ["Баа канча?", "Бул гид бааны кепилдебейт; сураңыз."],
        ["Өлчөм кантип тандоо?", "Үлгүнү кийип көрүп, сатуучудан сураңыз."],
        ["Эң ишенимдүү булак?", "Сатуучулар жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "Clothing and textiles at Osh Bazaar",
      metaDescription:
        "Clothing, fabric and traditional woven goods at Osh Bazaar. Choosing and buying information.",
      h1: "Clothing and textiles",
      lead: "The bazaar’s clothing section sells everyday wear, fabric and woven goods. Check quality and size.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "What is available",
          body: [
            "Everyday clothing, fabric and woven goods are common.",
            "Ask the trader for exact names and materials.",
          ],
        },
        {
          heading: "Choosing",
          body: [
            "Check size, stitching and material.",
            "Ask about washing instructions.",
          ],
        },
      ],
      faq: [
        ["What clothing?", "Everyday wear, fabric; ask the trader for the list."],
        ["How much?", "This guide does not guarantee a price; ask."],
        ["How to choose size?", "Try the sample and ask the trader."],
        ["Most reliable source?", "Traders and official information."],
      ],
    },
  },
  {
    slug: "prices-and-bargaining",
    group: "shopping",
    priority: "P1",
    related: ["first-time-shopping-guide", "cash-atms-and-cards", "kyrgyz-russian-shopping-phrases", "dried-fruit-and-nuts"],
    ky: {
      metaTitle: "Ош базарында баа жана сүйлөшүү",
      metaDescription:
        "Ош базарында баа, сүйлөшүү жана соода этикети. Баа динамикалык; так бааны сатуучудан сураңыз.",
      h1: "Баа жана сүйлөшүү",
      lead: "Баа базарда динамикалык жана бөлүккө жараша ар башка. Бул гид так бааны кепилдебейт; сатуучудан сураңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Баа боюнча",
          body: [
            "Баа сатуучудан сатуучуга жана мезгилге жараша өзгөрөт; бул гид аны кепилдебейт.",
            "Бир нече дүкөндөн сурап, орточо бааны билиңиз.",
          ],
        },
        {
          heading: "Сүйлөшүү этикети",
          body: [
            "Сүйлөшүү салттуу, бирок сый-урмат менен болушу керек.",
            "Ачууланбоо жана так суроо — ийгиликтүү сатып алуунун негизи.",
          ],
        },
      ],
      faq: [
        ["Баа канча?", "Бул гид кепилдебейт; сатуучудан сураңыз."],
        ["Сүйлөшсө болобу?", "Салттуу, бирок сый-урмат менен."],
        ["Валюта кайсы?", "Кыргыз сому; бааны сатуучудан тактаңыз."],
        ["Эң ишенимдүү булак?", "Сатуучулар жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "Prices and bargaining at Osh Bazaar",
      metaDescription:
        "Prices, bargaining and shopping etiquette at Osh Bazaar. Prices are dynamic; ask the trader for exact figures.",
      h1: "Prices and bargaining",
      lead: "Prices at the bazaar are dynamic and vary by section. This guide does not guarantee a price; ask the trader.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "About prices",
          body: [
            "Prices vary from trader to trader and by season; this guide does not guarantee them.",
            "Ask at several stalls to learn the average.",
          ],
        },
        {
          heading: "Bargaining etiquette",
          body: [
            "Bargaining is traditional but should be respectful.",
            "Stay calm and ask clearly — the basis of a good purchase.",
          ],
        },
      ],
      faq: [
        ["How much?", "This guide does not guarantee it; ask the trader."],
        ["Can I bargain?", "Traditional, but do it respectfully."],
        ["Which currency?", "Kyrgyz som; confirm the price with the trader."],
        ["Most reliable source?", "Traders and official information."],
      ],
    },
  },
  {
    slug: "cash-atms-and-cards",
    group: "shopping",
    priority: "P1",
    related: ["prices-and-bargaining", "first-time-shopping-guide", "status"],
    ky: {
      metaTitle: "Ош базарында акча, банкомат жана карта",
      metaDescription:
        "Ош базарында наличный акча, банкоматтар жана карта менен төлөө. Колдо наличный көбүрөөк колдонулат.",
      h1: "Акча, банкомат жана карта",
      lead: "Базарда наличный акча көбүрөөк колдонулат. Банкоматтардын абалын расмий булактардан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Төлөм ыкмалары",
          body: [
            "Колдо наличный акча көбүрөөк колдонулат; айрым жерлерде карта менен төлөө мүмкүн.",
            "Карта менен төлөө мүмкүнчүлүгүн сатуучудан алдын ала сураңыз.",
          ],
        },
        {
          heading: "Банкоматтар",
          body: [
            "Базардын жанындагы банкоматтардын иштөө абалы күнүмдүк өзгөрөт.",
            "Акчаны алүү үчүн жакын жердеги банкоматты расмий булактардан текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Карта менен төлөсө болобу?", "Айрым жерлерде; сатуучудан сураңыз."],
        ["Банкомат барбы?", "Жанында бар; иштөө абалын текшериңиз."],
        ["Валюта кайсы?", "Кыргыз сому."],
        ["Эң ишенимдүү булак?", "Расмий банк маалыматы жана сатуучулар."],
      ],
    },
    en: {
      metaTitle: "Cash, ATMs and cards at Osh Bazaar",
      metaDescription:
        "Cash, ATMs and card payment at Osh Bazaar. Cash is used more on the ground; verify ATM status.",
      h1: "Cash, ATMs and cards",
      lead: "Cash is used more at the bazaar. Confirm nearby ATM status from official sources.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Payment methods",
          body: [
            "Cash is used more on the ground; some places may take cards.",
            "Ask the trader in advance about card payment.",
          ],
        },
        {
          heading: "ATMs",
          body: [
            "The operating status of nearby ATMs changes day to day.",
            "To withdraw, verify a nearby ATM from official sources.",
          ],
        },
      ],
      faq: [
        ["Can I pay by card?", "Some places; ask the trader."],
        ["Is there an ATM?", "Nearby; check operating status."],
        ["Which currency?", "Kyrgyz som."],
        ["Most reliable source?", "Official bank information and traders."],
      ],
    },
  },
  {
    slug: "kyrgyz-russian-shopping-phrases",
    group: "shopping",
    priority: "P1",
    related: ["prices-and-bargaining", "first-time-shopping-guide", "cash-atms-and-cards", "felt-and-kalpak"],
    ky: {
      metaTitle: "Ош базарында сатып алуу үчүн кыргызча жана орусча сөздөр",
      metaDescription:
        "Базарда сатып алуу үчүн пайдалуу кыргызча жана орусча сөздөр жана айтымдар. Жөнөкөй суроолор жана баа.",
      h1: "Сатып алуу үчүн сөздөр",
      lead: "Кыргызча же орусча негизги сөздөрдү билип алуу сатуучу менен сүйлөшүүнү жеңилдетет. Төмөнкү айтымдар жардам берет.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Негизги суроолор",
          body: [
            "«Бул канча турат?» — Сколько это стоит? — How much is this?",
            "«Баасын төмөндөтө аласызбы?» — Можно дешевле? — Can you lower the price?",
          ],
        },
        {
          heading: "Пайдалуу сөздөр",
          body: [
            "«Рахмат» — Спасибо — Thank you; «Канча?» — Сколько — How many/much.",
            "«Наличный» — наличные — cash; «Карта» — карта — card.",
          ],
        },
      ],
      faq: [
        ["Кыргызча «баа» эмне?", "«Баа» — price; орусча «цена»."],
        ["«Рахмат» эмне деген?", "«Рахмат» — thank you."],
        ["Карта деген эмне?", "«Карта» — card (орусча «карта»)."],
        ["Эң пайдалуу сөз?", "«Бул канча турат?» — суроосу."],
      ],
    },
    en: {
      metaTitle: "Kyrgyz and Russian shopping phrases for Osh Bazaar",
      metaDescription:
        "Useful Kyrgyz and Russian phrases for shopping at the bazaar. Simple questions and prices.",
      h1: "Shopping phrases",
      lead: "Knowing basic Kyrgyz or Russian helps talk to traders. These expressions help.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Basic questions",
          body: [
            "«Бул канча турат?» — Сколько это стоит? — How much is this?",
            "«Баасын төмөндөтө аласызбы?» — Можно дешевле? — Can you lower the price?",
          ],
        },
        {
          heading: "Useful words",
          body: [
            "«Рахмат» — Спасибо — Thank you; «Канча?» — Сколько — How many/much.",
            "«Наличный» — наличные — cash; «Карта» — карта — card.",
          ],
        },
      ],
      faq: [
        ["Kyrgyz for price?", "«Баа» — price; Russian «цена»."],
        ["What does Rahmat mean?", "«Рахмат» — thank you."],
        ["Word for card?", "«Карта» — card (Russian «карта»)."],
        ["Most useful phrase?", "«Бул канча турат?» — the question."],
      ],
    },
  },
  {
    slug: "safety-and-photography",
    group: "shopping",
    priority: "P1",
    related: ["first-time-shopping-guide", "cash-atms-and-cards", "status"],
    ky: {
      metaTitle: "Ош базарында коопсуздук жана сүрөт тартуу",
      metaDescription:
        "Ош базарында киши жана мүлк коопсуздугу, сүрөт тартуу этикети. Сый-урмат менен жүрүү жана уруксат сураңыз.",
      h1: "Коопсуздук жана сүрөт",
      lead: "Базарда коопсуздук жана сүрөт тартуу боюнча жөнөкөй эрежелер бар. Адамдарды жакындан тартуудан мурун уруксат сураңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Мүлк жана киши коопсуздугу",
          body: [
            "Базарда көп адам; баалуу буюмдарды жана капчыкты көзөмөлдөңүз.",
            "Кошумча кеңештерди «Биринчи жолу» бетинен окуңуз.",
          ],
        },
        {
          heading: "Сүрөт тартуу",
          body: [
            "Жалпы көрүнүштөрдү тартууга болот, бирок адамдарды жакындан тартуудан мурун уруксат сураңыз.",
            "Сатуучулардын товарларын тартууда сый-урмат менен жүрүңүз.",
          ],
        },
      ],
      faq: [
        ["Адамдарды тартууга болобу?", "Жакындан — уруксат сураңыз."],
        ["Баалуу буюмдар?", "Көзөмөлдөңүз; базарда көп адам."],
        ["Товарды тартуу?", "Сый-урмат менен; сатуучудан сураңыз."],
        ["Эң ишенимдүү булак?", "Расмий коопсуздук кеңештери."],
      ],
    },
    en: {
      metaTitle: "Safety and photography at Osh Bazaar",
      metaDescription:
        "Personal and property safety and photography etiquette at Osh Bazaar. Be respectful and ask before close photos.",
      h1: "Safety and photography",
      lead: "There are simple rules for safety and photography at the bazaar. Ask before close photographs of people.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Personal and property safety",
          body: [
            "The bazaar is crowded; keep valuables and bags under control.",
            "More tips are on the first-time guide page.",
          ],
        },
        {
          heading: "Photography",
          body: [
            "General views are fine, but ask before close photographs of people.",
            "Be respectful when photographing traders’ goods.",
          ],
        },
      ],
      faq: [
        ["Can I photograph people?", "For close shots, ask permission."],
        ["Valuables?", "Keep control; the bazaar is crowded."],
        ["Goods?", "Respectfully; ask the trader."],
        ["Most reliable source?", "Official safety guidance."],
      ],
    },
  },

  // ───────────────────────── D. Food and nearby dining ─────────────────────────
  {
    slug: "what-to-eat-at-osh-bazaar",
    group: "food",
    priority: "P1",
    related: ["samsa-and-bread", "lagman-and-plov", "kurut-and-local-drinks", "restaurants-near-osh-bazaar", "first-time-shopping-guide"],
    ky: {
      metaTitle: "Ош базарында эмнени жеген керек",
      metaDescription:
        "Ош базарындагы тамак-аш: сатып алууга жана даяр тамакка татыктуу нерселер. Samsa, lagman, plov жана жергиликтүү азыктар.",
      h1: "Ош базарында эмнени жеген керек",
      lead: "Базар — тамак-аш жана даяр тагамдар үчүн мыкты жер. Samsa, lagman, plov жана жергиликтүү сусундуктарды билип алыңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эмнелер бар",
          body: [
            "Сатып алууга арналган жаңы азыктар, майда таттуулар жана даяр тамактар (samsa, lagman, plov) кездешет.",
            "Так жайларды жана ачылышын расмий каналдан текшериңиз.",
          ],
        },
        {
          heading: "Эмнени тандоо",
          body: [
            "Жаңылыгына жана тазалыгына көңүл бургула; даяр тамактарды ишенимдүү жерден алыңыз.",
            "Аллергия үчүн курамын сураңыз.",
          ],
        },
      ],
      faq: [
        ["Samsa деген эмне?", "Куурулган калта түрүндөгү кампир бөтөйү; базарда сатылат."],
        ["Даяр тамак барбы?", "Samsa, lagman, plov; так жайларды текшериңиз."],
        ["Баа канча?", "Бул гид кепилдебейт; сатуучудан сураңыз."],
        ["Эң ишенимдүү булак?", "Сатуучулар жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "What to eat at Osh Bazaar",
      metaDescription:
        "Food at Osh Bazaar: things worth buying and ready meals. Samsa, lagman, plov and local foods.",
      h1: "What to eat at Osh Bazaar",
      lead: "The bazaar is good for food and ready meals. Learn about samsa, lagman, plov and local drinks.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "What is available",
          body: [
            "Fresh food to buy, snacks and ready meals (samsa, lagman, plov) are found.",
            "Confirm spots and opening from official channels.",
          ],
        },
        {
          heading: "What to choose",
          body: [
            "Look at freshness and cleanliness; buy ready meals from a trusted place.",
            "Ask about composition for allergies.",
          ],
        },
      ],
      faq: [
        ["What is samsa?", "A baked stuffed pastry; sold at the bazaar."],
        ["Are there ready meals?", "Samsa, lagman, plov; verify spots."],
        ["How much?", "This guide does not guarantee a price; ask the trader."],
        ["Most reliable source?", "Traders and official information."],
      ],
    },
  },
  {
    slug: "samsa-and-bread",
    group: "food",
    priority: "P1",
    related: ["what-to-eat-at-osh-bazaar", "lagman-and-plov", "kyrgyz-russian-shopping-phrases"],
    ky: {
      metaTitle: "Ош базарында samsa жана нан",
      metaDescription:
        "Ош базарындагы samsa, нан жана жергиликтүү бышыруу маданияты. Тандоо жана сатып алуу боюнча маалымат.",
      h1: "Samsa жана нан",
      lead: "Samsa — Орто Азиядагы куурулган кампир бөтөйү. Нан жана бышыруу салты базардын тамак-аш бөлүгүндө кездешет.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эмнелер бар",
          body: [
            "Samsa (эт, картөшкө же сүттүү), жергиликтүү нан түрлөрү сатылат.",
            "Так аттарын жана даярдоону сатуучудан сураңыз.",
          ],
        },
        {
          heading: "Тандоо",
          body: [
            "Ысыктыгына жана сырткы көрүнүшүнө көңүл бургула.",
            "Аллергия үчүн курамын тактаңыз.",
          ],
        },
      ],
      faq: [
        ["Samsa деген эмне?", "Куурулган калта түрүндөгү тамак."],
        ["Кандай нан бар?", "Жергиликтүү түрлөрү; так аттарын сураңыз."],
        ["Баа канча?", "Бул гид кепилдебейт; сураңыз."],
        ["Эң ишенимдүү булак?", "Сатуучулар жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "Samsa and bread at Osh Bazaar",
      metaDescription:
        "Samsa, bread and local baking culture at Osh Bazaar. Choosing and buying information.",
      h1: "Samsa and bread",
      lead: "Samsa is a Central Asian baked stuffed pastry. Bread and baking tradition appear in the bazaar’s food section.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "What is available",
          body: [
            "Samsa (meat, potato or milky filling) and local bread varieties are sold.",
            "Ask the trader for exact names and preparation.",
          ],
        },
        {
          heading: "Choosing",
          body: [
            "Note freshness and appearance.",
            "Confirm composition for allergies.",
          ],
        },
      ],
      faq: [
        ["What is samsa?", "A baked stuffed pastry."],
        ["What bread?", "Local varieties; ask for names."],
        ["How much?", "This guide does not guarantee a price; ask."],
        ["Most reliable source?", "Traders and official information."],
      ],
    },
  },
  {
    slug: "lagman-and-plov",
    group: "food",
    priority: "P1",
    related: ["what-to-eat-at-osh-bazaar", "samsa-and-bread", "restaurants-near-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарында lagman жана plov",
      metaDescription:
        "Ош базарындагы lagman, plov жана жергиликтүү тамактардын өзгөчөлүктөрү. Тандоо жана сатып алуу боюнча маалымат.",
      h1: "Lagman жана plov",
      lead: "Lagman — Орто Азиялык кесме тамагы, plov — палау сымалгы күрүч тамагы. Экөө тең базардын тамак-аш бөлүгүндө кездешет.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эмнелер бар",
          body: [
            "Lagman (эт же өсүмдүк), plov (күрүч, эт, сабиз) сатылат.",
            "Так рецептин жана курамын сатуучудан сураңыз.",
          ],
        },
        {
          heading: "Тандоо",
          body: [
            "Тазалыгына жана даярдоо шарттарына көңүл бургула.",
            "Аллергия үчүн курамын тактаңыз.",
          ],
        },
      ],
      faq: [
        ["Lagman деген эмне?", "Орто Азиялык кесме тамагы."],
        ["Plov деген эмне?", "Күрүч тамагы."],
        ["Баа канча?", "Бул гид кепилдебейт; сураңыз."],
        ["Эң ишенимдүү булак?", "Сатуучулар жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "Lagman and plov at Osh Bazaar",
      metaDescription:
        "Lagman, plov and local dish traits at Osh Bazaar. Choosing and buying information.",
      h1: "Lagman and plov",
      lead: "Lagman is a Central Asian noodle dish; plov is a rice dish. Both appear in the bazaar’s food section.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "What is available",
          body: [
            "Lagman (meat or vegetable) and plov (rice, meat, carrot) are sold.",
            "Ask the trader for the exact recipe and composition.",
          ],
        },
        {
          heading: "Choosing",
          body: [
            "Note cleanliness and preparation conditions.",
            "Confirm composition for allergies.",
          ],
        },
      ],
      faq: [
        ["What is lagman?", "A Central Asian noodle dish."],
        ["What is plov?", "A rice dish."],
        ["How much?", "This guide does not guarantee a price; ask."],
        ["Most reliable source?", "Traders and official information."],
      ],
    },
  },
  {
    slug: "kurut-and-local-drinks",
    group: "food",
    priority: "P2",
    related: ["what-to-eat-at-osh-bazaar", "samsa-and-bread", "lagman-and-plov"],
    ky: {
      metaTitle: "Ош базарында kurut жана жергиликтүү сусундуктар",
      metaDescription:
        "Ош базарындагы kurut, maksym, chalap жана жергиликтүү сусундуктар. Тандоо жана сатып алуу боюнча маалымат.",
      h1: "Kurut жана жергиликтүү сусундуктар",
      lead: "Kurut — кургатылган сүт азыгы; maksym жана chalap — жергиликтүү сусундуктар. Базардын тамак-аш бөлүгүндө кездешет.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Эмнелер бар",
          body: [
            "Kurut (кургатылган сүт), maksym (ферменттелген сусундук), chalap (сүт негизиндеги сусундук) сатылат.",
            "Так аттарын жана даярдоону сатуучудан сураңыз.",
          ],
        },
        {
          heading: "Тандоо",
          body: [
            "Сапатын жана сактоо шарттарын текшериңиз.",
            "Аллергия үчүн курамын сураңыз.",
          ],
        },
      ],
      faq: [
        ["Kurut деген эмне?", "Кургатылган сүт азыгы."],
        ["Maksym деген эмне?", "Ферменттелген сусундук."],
        ["Баа канча?", "Бул гид кепилдебейт; сураңыз."],
        ["Эң ишенимдүү булак?", "Сатуучулар жана расмий маалымат."],
      ],
    },
    en: {
      metaTitle: "Kurut and local drinks at Osh Bazaar",
      metaDescription:
        "Kurut, maksym, chalap and local drinks at Osh Bazaar. Choosing and buying information.",
      h1: "Kurut and local drinks",
      lead: "Kurut is dried dairy; maksym and chalap are local drinks. They appear in the bazaar’s food section.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "What is available",
          body: [
            "Kurut (dried dairy), maksym (fermented drink) and chalap (milk-based drink) are sold.",
            "Ask the trader for exact names and preparation.",
          ],
        },
        {
          heading: "Choosing",
          body: [
            "Check quality and storage conditions.",
            "Ask about composition for allergies.",
          ],
        },
      ],
      faq: [
        ["What is kurut?", "Dried dairy food."],
        ["What is maksym?", "A fermented drink."],
        ["How much?", "This guide does not guarantee a price; ask."],
        ["Most reliable source?", "Traders and official information."],
      ],
    },
  },
  {
    slug: "restaurants-near-osh-bazaar",
    group: "food",
    priority: "P1",
    related: ["coffee-near-osh-bazaar", "what-to-eat-at-osh-bazaar", "things-to-do-near-osh-bazaar", "from-ala-too-square"],
    ky: {
      metaTitle: "Ош базарынын жанындагы ресторандар",
      metaDescription:
        "Ош базарынын жанындагы тамактануу жайлары, ылайыктуу убакыт жана маршрут. Текшерилген кандидаттарды расмий булактардан белгилеңиз.",
      h1: "Базардын жанындагы тамактануу",
      lead: "Базардын жанында тамактануу жайлары бар, бирок алардын азыркы абалын, дарегин жана маршрутту тактаңыз. Бул гид ар бир жайды кепилдебейт.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Кандидаттар",
          body: [
            "Базардын жанындагы аймакта жергиликтүү тамактануу жайлары жана чайкана (маселен, Bereke Teahouse сыяктуу) кездешет.",
            "Аталган жайлар — изилдөө үчүн кандидаттар; так дарегин, иштөөсүн жана маршрутту расмий булактардан текшериңиз.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Жай базардын жанындабы же борборго жакынбы; бул аралыкты өзгөртөт.",
            "Тамактануу убактысын жана баруу жолун алдын ала белгилеңиз.",
          ],
        },
      ],
      faq: [
        ["Базардын жанында ресторан барбы?", "Аймакта жайлар бар; так дарегин расмий булактардан текшериңиз."],
        ["Bereke Teahouse деген эмне?", "Кандидат чайкана; так абалын текшериңиз."],
        ["Качан баруу жакшы?", "Тамактануу убактысын расмий булактан тактаңыз."],
        ["Эң ишенимдүү булак?", "Расмий шаардык маалымат жана жайдын өзү."],
      ],
    },
    en: {
      metaTitle: "Restaurants near Osh Bazaar",
      metaDescription:
        "Dining near Osh Bazaar, suitable times and routes. Verify candidates from official sources.",
      h1: "Dining near the bazaar",
      lead: "There are eateries near the bazaar, but verify each one’s current status, address and route. This guide does not guarantee any single place.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Candidates",
          body: [
            "The area near the bazaar has local eateries and teahouses (for example, Bereke Teahouse as a candidate).",
            "Named places are candidates to investigate; confirm exact address, operation and route from official sources.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Whether the place is near the bazaar or closer to the centre; that changes the distance.",
            "Confirm dining time and the way to get there in advance.",
          ],
        },
      ],
      faq: [
        ["Are there restaurants nearby?", "There are places in the area; confirm exact addresses from official sources."],
        ["What is Bereke Teahouse?", "A candidate teahouse; verify its status."],
        ["When to go?", "Confirm dining time from official sources."],
        ["Most reliable source?", "Official city information and the place itself."],
      ],
    },
  },
  {
    slug: "coffee-near-osh-bazaar",
    group: "food",
    priority: "P2",
    related: ["restaurants-near-osh-bazaar", "from-ala-too-square", "things-to-do-near-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарынын жанындагы кофейнялер",
      metaDescription:
        "Ош базарынын жанындагы кофейнялер жана борборго барганда эс алуу. Текшерилген кандидаттарды расмий булактардан белгилеңиз.",
      h1: "Базардын жанындагы кофе",
      lead: "Базардан борборго баратканда кофейнялар кездешет. Алардын азыркы абалын жана дарегин расмий булактардан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Кандидаттар",
          body: [
            "Борборго бараткан жолдо кофейнялар (маселен, Manas Avenue боюнча SIERRA Coffee сыяктуу) кездешет.",
            "Аталган жайлар — изилдөө үчүн кандидаттар; так абалын расмий булактардан текшериңиз.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Жай базардын жанындабы же борбордо бу; маршрутту тактаңыз.",
            "Иштөө убактысын алдын ала белгилеңиз.",
          ],
        },
      ],
      faq: [
        ["Базардын жанында кофейня барбы?", "Борборго жакын жайлар бар; так дарегин текшериңиз."],
        ["SIERRA Coffee деген эмне?", "Кандидат кофейня; так абалын текшериңиз."],
        ["Качан баруу жакшы?", "Иштөө убактысын расмий булактан тактаңыз."],
        ["Эң ишенимдүү булак?", "Расмий маалымат жана жайдын өзү."],
      ],
    },
    en: {
      metaTitle: "Coffee near Osh Bazaar",
      metaDescription:
        "Cafés near Osh Bazaar and a rest on the way to the centre. Verify candidates from official sources.",
      h1: "Coffee near the bazaar",
      lead: "Heading from the bazaar toward the centre you find cafés. Verify their current status and address from official sources.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Candidates",
          body: [
            "On the way to the centre there are cafés (for example, SIERRA Coffee along Manas Avenue as a candidate).",
            "Named places are candidates to investigate; verify exact status from official sources.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Whether the place is near the bazaar or in the centre; confirm the route.",
            "Check opening time in advance.",
          ],
        },
      ],
      faq: [
        ["Is there a café nearby?", "Places near the centre; verify exact address."],
        ["What is SIERRA Coffee?", "A candidate café; verify its status."],
        ["When to go?", "Confirm opening time from official sources."],
        ["Most reliable source?", "Official information and the place itself."],
      ],
    },
  },

  // ───────────────────────── E. Nearby attractions and city culture ─────────────────────────
  {
    slug: "things-to-do-near-osh-bazaar",
    group: "nearby",
    priority: "P0",
    related: ["status", "panfilov-park-from-bazaar", "ala-too-square-and-history-museum", "philharmonic-from-bazaar", "chuy-avenue-walk", "quick-90-minute-visit"],
    ky: {
      metaTitle: "Ош базарынын жанында эмне кылуу керек",
      metaDescription:
        "Ош базарынын жанындагы кызыктарлык жерлер жана аралык боюнча бөлүштүрүү. Панфилов багы, Ала-Тоо аянты жана башкалар.",
      h1: "Базардын жанында эмне кылуу керек",
      lead: "Базар — шаарды кыдыруунун башталгычы. Жакын жердеги баг, аянт жана маданий жайларды аралык боюнча бөлүштүрүңүз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Жакын аралык",
          body: [
            "Базардын айланасында тамактануу, чайкана жана базардын өзү — бул жергиликтүү тажрыйба.",
            "Так аралыкты жана маршрутту расмий булактардан текшериңиз.",
          ],
        },
        {
          heading: "Шаар борборуна чейин",
          body: [
            "Ала-Тоо аянты, тарыхый музей, филармония жана Панфилов багы — борбордук бөлүктө.",
            "Алар базардан белгилүү аралыкта; такты расмий булактардан текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Жакын жерде эмне бар?", "тамактануу, чайкана жана базар; аралыкты текшериңиз."],
        ["Борборго эмне бар?", "Ала-Тоо аянты, музей, филармония, баг; такты текшериңиз."],
        ["Канча убакыт керек?", "Аралыкка жараша; бул гид кепилдебейт."],
        ["Эң ишенимдүү булак?", "Расмий шаардык маалымат."],
      ],
    },
    en: {
      metaTitle: "Things to do near Osh Bazaar",
      metaDescription:
        "Attractions near Osh Bazaar and a distance-based split. Panfilov Park, Ala-Too Square and more.",
      h1: "Things to do near the bazaar",
      lead: "The bazaar is a starting point to explore the city. Split nearby parks, squares and cultural spots by distance.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Close range",
          body: [
            "Around the bazaar are eateries, teahouses and the bazaar itself — the local experience.",
            "Confirm distance and route from official sources.",
          ],
        },
        {
          heading: "Toward the centre",
          body: [
            "Ala-Too Square, the history museum, the philharmonic and Panfilov Park are central.",
            "They are a known distance from the bazaar; verify exact figures officially.",
          ],
        },
      ],
      faq: [
        ["What is close?", "Eateries, teahouses and the bazaar; verify distance."],
        ["What is in the centre?", "Ala-Too Square, museum, philharmonic, park; verify."],
        ["How much time?", "Depends on distance; this guide does not guarantee it."],
        ["Most reliable source?", "Official city information."],
      ],
    },
  },
  {
    slug: "philharmonic-from-bazaar",
    group: "nearby",
    priority: "P1",
    related: ["things-to-do-near-osh-bazaar", "ala-too-square-and-history-museum", "one-day-bishkek-from-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарынан филармонияга баруу",
      metaDescription:
        "Ош базарынан Токтогул Сатылганов атындагы филармонияга баруу жана шаардык маданий маршрут. Аралык жана каттамды расмий булактардан текшериңиз.",
      h1: "Филармонияга базардан баруу",
      lead: "Токтогул Сатылганов атындагы филармония — Бишкектин маданий жайы. Базардан ага баруу маршрутун расмий булактардан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Маданий маршрут",
          body: [
            "Филармония — концерт залы жана маданий борбор; базардан белгилүү аралыкта.",
            "Аны менен базарды бир күндүк маршрутка бириктирүү мүмкүн.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Филармониянын азыркы абалын, дарегин жана каттамды расмий булактардан текшериңиз.",
            "Концерт графигин расмий булактан билүү керек.",
          ],
        },
      ],
      faq: [
        ["Филармония деген эмне?", "Токтогул Сатылганов атындагы маданий жай."],
        ["Базардан канча аралык?", "Белгилүү аралык; такты расмий булактардан текшериңиз."],
        ["Концерт барбы?", "Графикти расмий булактан билүү керек."],
        ["Эң ишенимдүү булак?", "Расмий маданий маалымат."],
      ],
    },
    en: {
      metaTitle: "From Osh Bazaar to the Philharmonic",
      metaDescription:
        "From Osh Bazaar to the Toktogul Satylganov Philharmonic and a city culture route. Verify distance and routes officially.",
      h1: "To the Philharmonic from the bazaar",
      lead: "The Toktogul Satylganov Philharmonic is a Bishkek cultural venue. Verify the route from the bazaar from official sources.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Culture route",
          body: [
            "The Philharmonic is a concert hall and cultural centre; a known distance from the bazaar.",
            "It can be combined with the bazaar in a one-day route.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Verify the Philharmonic’s current status, address and route from official sources.",
            "Check the concert schedule from official sources.",
          ],
        },
      ],
      faq: [
        ["What is the Philharmonic?", "The Toktogul Satylganov cultural venue."],
        ["How far from the bazaar?", "A known distance; verify exact figures officially."],
        ["Are there concerts?", "Check the schedule officially."],
        ["Most reliable source?", "Official cultural information."],
      ],
    },
  },
  {
    slug: "panfilov-park-from-bazaar",
    group: "nearby",
    priority: "P1",
    related: ["things-to-do-near-osh-bazaar", "ala-too-square-and-history-museum", "half-day-market-and-parks"],
    ky: {
      metaTitle: "Ош базарынан Панфилов багына баруу",
      metaDescription:
        "Ош базарынан Панфилов багына баруу жана маршрут. Багдын абалын, дарегин жана каттамды расмий булактардан текшериңиз.",
      h1: "Панфилов багына базардан баруу",
      lead: "Панфилов багы — Бишкектеги дем алуу багы. Базардан ага баруу маршрутун расмий булактардан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Баг жана маршрут",
          body: [
            "Панфилов багы — дем алуу жана сейил үчүн жашыл аймак; базардан белгилүү аралыкта.",
            "Аны базар менен бир маршрутка бириктирүү мүмкүн.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Багдын азыркы абалын, дарегин жана кирүү акысын расмий булактардан текшериңиз.",
            "Иштөө убактысын расмий булактан билүү керек.",
          ],
        },
      ],
      faq: [
        ["Панфилов багы деген эмне?", "Бишкектеги дем алуу багы."],
        ["Базардан канча аралык?", "Белгилүү аралык; такты расмий булактардан текшериңиз."],
        ["Кирүү акысы барбы?", "Расмий булактан текшериңиз."],
        ["Эң ишенимдүү булак?", "Расмий шаардык маалымат."],
      ],
    },
    en: {
      metaTitle: "From Osh Bazaar to Panfilov Park",
      metaDescription:
        "From Osh Bazaar to Panfilov Park and a route. Verify the park’s status, address and routes from official sources.",
      h1: "To Panfilov Park from the bazaar",
      lead: "Panfilov Park is a green leisure area in Bishkek. Verify the route from the bazaar from official sources.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Park and route",
          body: [
            "Panfilov Park is a green area for rest and walks; a known distance from the bazaar.",
            "It can be combined with the bazaar in one route.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Verify the park’s current status, address and entry fee from official sources.",
            "Check opening time from official sources.",
          ],
        },
      ],
      faq: [
        ["What is Panfilov Park?", "A leisure park in Bishkek."],
        ["How far from the bazaar?", "A known distance; verify exact figures officially."],
        ["Entry fee?", "Verify from official sources."],
        ["Most reliable source?", "Official city information."],
      ],
    },
  },
  {
    slug: "ala-too-square-and-history-museum",
    group: "nearby",
    priority: "P1",
    related: ["things-to-do-near-osh-bazaar", "from-ala-too-square", "panfilov-park-from-bazaar", "one-day-bishkek-from-osh-bazaar"],
    ky: {
      metaTitle: "Ала-Тоо аянты жана тарыхый музей",
      metaDescription:
        "Ош базарынан Ала-Тоо аянты менен тарыхый музейге маданий маршрут. Аралык, дарек жана графикти расмий булактардан текшериңиз.",
      h1: "Ала-Тоо аянты жана тарыхый музей",
      lead: "Ала-Тоо аянты — Бишкектин борбордук аянты, жанында тарыхый музей бар. Базардан ага баруу маршрутун расмий булактардан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Маданий маршрут",
          body: [
            "Ала-Тоо аянты — шаардын белгилүү чекити; андан тарыхый музейге жөнөкөй барууга болот.",
            "Экөө тең базардан белгилүү аралыкта.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Музейдин азыркы абалын, дарегин жана кирүү акысын расмий булактардан текшериңиз.",
            "Көргөзмө графигин расмий булактан билүү керек.",
          ],
        },
      ],
      faq: [
        ["Ала-Тоо аянты деген эмне?", "Бишкектин борбордук аянты."],
        ["Музей кайда?", "Аянттын жанында; такты расмий булактардан текшериңиз."],
        ["Кирүү акысы барбы?", "Расмий булактан текшериңиз."],
        ["Эң ишенимдүү булак?", "Расмий маданий маалымат."],
      ],
    },
    en: {
      metaTitle: "Ala-Too Square and the History Museum",
      metaDescription:
        "A culture route from Osh Bazaar to Ala-Too Square and the History Museum. Verify distance, address and schedule officially.",
      h1: "Ala-Too Square and the History Museum",
      lead: "Ala-Too Square is Bishkek’s central square, next to the History Museum. Verify the route from the bazaar from official sources.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Culture route",
          body: [
            "Ala-Too Square is the city’s well-known point; from there the History Museum is an easy walk.",
            "Both are a known distance from the bazaar.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Verify the museum’s current status, address and entry fee from official sources.",
            "Check exhibition schedule from official sources.",
          ],
        },
      ],
      faq: [
        ["What is Ala-Too Square?", "Bishkek’s central square."],
        ["Where is the museum?", "Next to the square; verify exactly officially."],
        ["Entry fee?", "Verify from official sources."],
        ["Most reliable source?", "Official cultural information."],
      ],
    },
  },
  {
    slug: "osh-bazaar-vs-dordoi",
    group: "nearby",
    priority: "P1",
    related: ["things-to-do-near-osh-bazaar", "getting-to-osh-bazaar", "status"],
    ky: {
      metaTitle: "Ош базары же Дордой: эмнени тандоо",
      metaDescription:
        "Ош базары менен Дордой базарынын салыштырмасы жана тандоо. Дордой базары базардын жанындагы басып баруу жери эмес.",
      h1: "Ош базары же Дордой?",
      lead: "Дордой базары — башка чоң базар, ал Ош базарынын жанындагы басып баруу жери эмес. Экөөнүн айырмасын билип алыңыз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Айырма",
          body: [
            "Ош базары — шаар борборундагы базар; Дордой — шаардын четиндеги ири базар.",
            "Дордой базары базардын жанындагы басып баруу жери катары сүрөттөлбөшү керек.",
          ],
        },
        {
          heading: "Тандоо",
          body: [
            "Эмнени издеп жатканыңызды тактаңыз: шаар борбору же чет жактагы ири базар.",
            "Аралык жана каттамды расмий булактардан текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Дордой базары жакынбы?", "Жок, ал четте; базардын жанындагы жер эмес."],
        ["Кайсысын тандоо?", "Издеген нерсенизге жараша; аралыкты текшериңиз."],
        ["Канча аралык?", "Белгилүү аралык; такты расмий булактардан текшериңиз."],
        ["Эң ишенимдүү булак?", "Расмий шаардык маалымат."],
      ],
    },
    en: {
      metaTitle: "Osh Bazaar or Dordoi: which to choose",
      metaDescription:
        "Comparison and choice between Osh Bazaar and Dordoi Bazaar. Dordoi is not a walkable spot next to Osh Bazaar.",
      h1: "Osh Bazaar or Dordoi?",
      lead: "Dordoi is another large bazaar, not a walkable spot next to Osh Bazaar. Know the difference before choosing.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Difference",
          body: [
            "Osh Bazaar is a central-city market; Dordoi is a large market on the city edge.",
            "Dordoi should not be described as a walkable spot next to Osh Bazaar.",
          ],
        },
        {
          heading: "Choosing",
          body: [
            "Know what you want: central city or edge mega-bazaar.",
            "Verify distance and routes from official sources.",
          ],
        },
      ],
      faq: [
        ["Is Dordoi nearby?", "No, it is on the edge; not a spot next to the bazaar."],
        ["Which to choose?", "Depends on what you want; verify distance."],
        ["How far?", "A known distance; verify exact figures officially."],
        ["Most reliable source?", "Official city information."],
      ],
    },
  },
  {
    slug: "chuy-avenue-walk",
    group: "nearby",
    priority: "P2",
    related: ["things-to-do-near-osh-bazaar", "from-ala-too-square", "one-day-bishkek-from-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарынан Чүй проспекти боюнча баруу",
      metaDescription:
        "Ош базарынан Чүй проспекти боюнча шаарды изилдөө. Маршрутту жана белгилүү жерлерди расмий булактардан текшериңиз.",
      h1: "Чүй проспекти боюнча сейил",
      lead: "Чүй проспекти — Бишкектин негизги көчөсү. Базардан башталган бул маршрутту расмий булактардан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Маршрут",
          body: [
            "Чүй проспекти боюнча борбордук көчөлөр жана магазиндер жайгашкан.",
            "Маршрутту жана белгилүү жерлерди расмий булактардан текшериңиз.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Проспект боюндагы жайлардын абалын жана дарегин расмий булактардан текшериңиз.",
            "Басуу убактысын жана аралыкты текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Чүй проспекти деген эмне?", "Бишкектин негизги көчөсү."],
        ["Базардан канча аралык?", "Белгилүү аралык; такты расмий булактардан текшериңиз."],
        ["Эмне көрүүгө болот?", "Борбордук көчөлөр жана магазиндер; расмий булактан текшериңиз."],
        ["Эң ишенимдүү булак?", "Расмий шаардык маалымат."],
      ],
    },
    en: {
      metaTitle: "Walk along Chuy Avenue from Osh Bazaar",
      metaDescription:
        "Exploring the city along Chuy Avenue from Osh Bazaar. Verify route and landmarks from official sources.",
      h1: "Walk along Chuy Avenue",
      lead: "Chuy Avenue is Bishkek’s main street. This route starting at the bazaar should be verified from official sources.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Route",
          body: [
            "Along Chuy Avenue are central streets and shops.",
            "Verify the route and landmarks from official sources.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Verify the status and address of places along the avenue from official sources.",
            "Check walking time and distance.",
          ],
        },
      ],
      faq: [
        ["What is Chuy Avenue?", "Bishkek’s main street."],
        ["How far from the bazaar?", "A known distance; verify exact figures officially."],
        ["What to see?", "Central streets and shops; verify officially."],
        ["Most reliable source?", "Official city information."],
      ],
    },
  },

  // ───────────────────────── F. Routes and alternatives ─────────────────────────
  {
    slug: "quick-90-minute-visit",
    group: "routes",
    priority: "P1",
    related: ["status", "first-time-shopping-guide", "things-to-do-near-osh-bazaar"],
    ky: {
      metaTitle: "Ош базарына 90 мүнөттүк тез баруу",
      metaDescription:
        "Ош базарына 90 мүнөттүк тез маршрут: эмнени көрүү жана кантип пландаштыруу. Абалды расмий каналдан текшериңиз.",
      h1: "90 мүнөттүк тез баруу",
      lead: "Аз убакытта базардын негизги бөлүктөрүн көрүү үчүн тез маршрут. Абалды расмий каналдан алдын ала текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Маршрут",
          body: [
            "Кирүү → тамак-аш бөлүгү → кийим/кол өнөрчүлүк → эс алуу. Убакытты бөлүктөргө бөлүңүз.",
            "Көчүрүүгө байланыштуу кирүү жайлары өзгөрүшү мүмкүн.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Маршрутту баштоодон мурун абалды расмий каналдан текшериңиз.",
            "Ачык асман астында болгондуктан, аба ырайын эске алыңыз.",
          ],
        },
      ],
      faq: [
        ["90 мүнөт жетиштүүбү?", "Негизги бөлүктөр үчүн; такты сиздин ылдамдыгыңызга жараша."],
        ["Эмне көрүү керек?", "Тамак-аш, кийим, кол өнөрчүлүк; бөлүктөр беттерин караңыз."],
        ["Көчүрүү планы маршрутка таасир этет?", "Көчүрүү жүрүп жатканы үчүн кирүү жайлары жана аймактар өзгөрүшү мүмкүн; сапар алдында расмий каналдан текшериңиз."],
      ],
    },
    en: {
      metaTitle: "Quick 90-minute visit to Osh Bazaar",
      metaDescription:
        "A 90-minute Osh Bazaar route: what to see and how to plan. Verify the current situation from official channels before travel.",
      h1: "Quick 90-minute visit",
      lead: "A short route to see the main parts of the bazaar. Verify the current situation from official channels before you start.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Route",
          body: [
            "Entrance → food section → clothing/crafts → a short rest. Divide your time between the parts.",
            "Entry points may shift because of the ongoing transfer.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Before starting the route, confirm the current situation from official channels.",
            "Because it is open-air, keep the weather in mind.",
          ],
        },
      ],
      faq: [
        ["Is 90 minutes enough?", "For the main parts; exact time depends on your pace."],
        ["What to see?", "Food, clothing, crafts; see the section pages."],
        ["Does the transfer affect the route?", "Entry points and areas may shift because of the ongoing transfer; verify from official channels before travel."],
      ],
    },
  },

  // ───────────────────────── F. Routes and alternatives ─────────────────────────
  {
    slug: "half-day-food-shopping",
    group: "routes",
    priority: "P1",
    related: ["what-to-eat-at-osh-bazaar", "first-time-shopping-guide", "restaurants-near-osh-bazaar", "coffee-near-osh-bazaar"],
    ky: {
      metaTitle: "Эртеңкы жарым: тамак-аш жана соода",
      metaDescription:
        "Ош базарында эртеңкы жарымды тамак-аш жана соода үчүн пландаштыруу. Абалды расмий каналдан текшериңиз.",
      h1: "Эртеңкы жарым: тамак-аш жана соода",
      lead: "Тамак-аш катары жана соода үчүн жарым күндүк маршрут. Абалды сапар алдында расмий каналдан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "План",
          body: [
            "Эртең менен кирип, тамак-аш бөлүгүн жана кол өнөрчүлүк/кийимди айкалыштырыңыз.",
            "Көчүрүү жүрүп жатканы үчүн кирүү жайлары өзгөрүшү мүмкүн; расмий каналдан текшериңиз.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Соода ордунүн жана кирүүнүн азыркы абалын сатуучу же шаардык канал аркылуу текшериңиз.",
            "Аба ырайын жана иштөө мүмкүнчүлүгүн эске алыңыз.",
          ],
        },
      ],
      faq: [
        ["Жарым күн жетиштүүбү?", "Тамак-аш жана негизги соода үчүн; так убакыт сиздин ылдамдыгыңызга жараша."],
        ["Эмне көрүү керек?", "Самса, кургатылган мөмө-жемиш, кол өнөрчүлүк; бөлүктөр беттерин караңыз."],
        ["Көчүрүү таасир этет?", "Кирүү жайлары өзгөрүшү мүмкүн; расмий каналдан текшериңиз."],
        ["Эң ишенимдүү булак?", "Расмий шаардык маалымат жана сатуучу."],
      ],
    },
    en: {
      metaTitle: "Half-day: food and shopping",
      metaDescription:
        "Plan a half-day at Osh Bazaar around food and shopping. Verify the current situation from official channels before travel.",
      h1: "Half-day: food and shopping",
      lead: "A half-day route combining the food section with crafts and clothing. Verify the current situation from official channels before travel.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Plan",
          body: [
            "Arrive in the morning and combine the food section with crafts and clothing.",
            "Entry points may shift because of the ongoing transfer; verify from official channels.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Confirm the trading site and access with the trader or official city channels.",
            "Keep the weather and operating possibility in mind.",
          ],
        },
      ],
      faq: [
        ["Is half a day enough?", "For food and main shopping; exact time depends on your pace."],
        ["What to see?", "Samsa, dried fruit, crafts; see the section pages."],
        ["Does the transfer affect it?", "Entry points may shift; verify from official channels."],
        ["Most reliable source?", "Official city information and the trader."],
      ],
    },
  },
  {
    slug: "half-day-market-and-parks",
    group: "routes",
    priority: "P1",
    related: ["panfilov-park-from-bazaar", "things-to-do-near-osh-bazaar", "status"],
    ky: {
      metaTitle: "Эртеңкы жарым: базар жана парктар",
      metaDescription:
        "Ош базарынан башталган базар жана шаардык парктар маршруту. Абалды расмий каналдан текшериңиз.",
      h1: "Эртеңкы жарым: базар жана парктар",
      lead: "Базарды жана жакынкы шаардык парктарды айкалыштырган жарым күндүк маршрут. Абалды расмий каналдан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Маршрут",
          body: [
            "Базардан баштап, жөө Панфилов паркы сыяктуу жакынкы жашыл аймактарга өтүңүз.",
            "Аралык жана абал расмий булактардан текшерилүүгө тийиш.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Парктардын абалын жана ачылышын расмий булактардан текшериңиз.",
            "Базардын кирүү жайлары көчүрүүгө байланыштуу өзгөрүшү мүмкүн.",
          ],
        },
      ],
      faq: [
        ["Паркка жөө барууга болобу?", "Жакынкы парктар жөө жеткиликтүү; аралыкты расмий булактан текшериңиз."],
        ["Канча убакыт керек?", "Базар жана парк үчүн жарым күн; такты текшериңиз."],
        ["Базар жабык болсо эмне кылам?", "Альтернативаларды «эгер Ош базары жабык болсо» бетинен караңыз."],
        ["Эң ишенимдүү булак?", "Расмий шаардык маалымат."],
      ],
    },
    en: {
      metaTitle: "Half-day: market and parks",
      metaDescription:
        "A market-and-parks route starting at Osh Bazaar. Verify the current situation from official channels before travel.",
      h1: "Half-day: market and parks",
      lead: "A half-day route pairing the bazaar with nearby municipal parks. Verify the current situation from official channels before travel.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Route",
          body: [
            "Start at the bazaar, then walk to nearby green spaces such as Panfilov Park.",
            "Distance and status should be verified from official sources.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Verify park status and opening from official sources.",
            "The bazaar’s entry points may shift because of the transfer.",
          ],
        },
      ],
      faq: [
        ["Can I walk to the park?", "Nearby parks are walkable; verify the distance from official sources."],
        ["How long?", "Half a day for the bazaar and park; verify exact figures."],
        ["If the bazaar is closed?", "See alternatives on the “if Osh Bazaar is closed” page."],
        ["Most reliable source?", "Official city information."],
      ],
    },
  },
  {
    slug: "one-day-bishkek-from-osh-bazaar",
    group: "routes",
    priority: "P2",
    related: ["from-ala-too-square", "ala-too-square-and-history-museum", "from-manas-airport"],
    ky: {
      metaTitle: "Ош базарынан Бишкектин бир күнү",
      metaDescription:
        "Ош базарынан башталган Бишкектин бир күндүк маршруту. Абалды жана байланыштарды расмий каналдан текшериңиз.",
      h1: "Бишкектин бир күнү Ош базарынан",
      lead: "Базарды Бишкектин борбордук жерлери менен айкалыштырган бир күндүк маршрут. Абалды расмий каналдан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Маршрут",
          body: [
            "Базардан баштап, Ала-Тоо аянты жана тарыхый музей сыяктуу борбордук жерлерге өтүңүз.",
            "Коомдук унаа жана аралык расмий булактардан текшерилүүгө тийиш.",
          ],
        },
        {
          heading: "Эмнени текшериңиз",
          body: [
            "Коомдук унаанын азыркы абалын жана графигин сапар күнү текшериңиз.",
            "Көчүрүү кирүү жайларын өзгөртүшү мүмкүн.",
          ],
        },
      ],
      faq: [
        ["Бир күн жетиштүүбү?", "Негизги борбордук жерлер үчүн; такты өз убактыңызга жараша."],
        ["Кантип баруу керек?", "Коомдук унаа же такси; расмий булактан текшериңиз."],
        ["Ала-Тоо аянтына чейин канча?", "Белгилүү аралык; расмий булактан текшериңиз."],
        ["Эң ишенимдүү булак?", "Расмий шаардык маалымат."],
      ],
    },
    en: {
      metaTitle: "One day in Bishkek from Osh Bazaar",
      metaDescription:
        "A one-day Bishkek route starting at Osh Bazaar. Verify status and connections from official channels before travel.",
      h1: "One day in Bishkek from Osh Bazaar",
      lead: "A full-day route pairing the bazaar with central Bishkek landmarks. Verify the situation from official channels before travel.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Route",
          body: [
            "Start at the bazaar, then move to central places such as Ala-Too Square and the History Museum.",
            "Public transport and distance should be verified from official sources.",
          ],
        },
        {
          heading: "What to verify",
          body: [
            "Check the current status and schedule of public transport on the day.",
            "The transfer may change entry points.",
          ],
        },
      ],
      faq: [
        ["Is one day enough?", "For the main central landmarks; exact time depends on your pace."],
        ["How to get around?", "Public transport or taxi; verify from official sources."],
        ["How far to Ala-Too Square?", "A known distance; verify from official sources."],
        ["Most reliable source?", "Official city information."],
      ],
    },
  },
  {
    slug: "if-osh-bazaar-is-closed",
    group: "routes",
    priority: "P0",
    related: ["status", "new-osh-bazaar-2027", "things-to-do-near-osh-bazaar", "osh-bazaar-vs-dordoi"],
    ky: {
      metaTitle: "Ош базары жабык болсо: альтернативалар",
      metaDescription:
        "Ош базары жабык же көчүрүү убагында эмне кылуу керек. Абалды расмий каналдан текшериңиз жана альтернативаларды кароо.",
      h1: "Ош базары жабык болсо",
      lead: "Көчүрүү жүрүп жатканы үчүн кээ бир кирүү жайлары же аймактар убактылуу жабык болушу мүмкүн. Абалды расмий каналдан текшериңиз.",
      updated: "Текшерилген күн: 2026-жылдын 30-октябры",
      sections: [
        {
          heading: "Абалды тактаңыз",
          body: [
            "Жаңы базар 2027-жылдын жазында гана пландалган; ал ачылды же эски базар жабылды дегенди билдирбейт.",
            "Сапар алдында сатуучу же шаардык расмий канал аркылуу кирүү жана соода ордун текшериңиз.",
          ],
        },
        {
          heading: "Альтернативалар",
          body: [
            "Жакынкы чоң базарлар (мисалы, Дордой), шаардык супермаркеттер жана Ала-Тоо аянты аймагындагы дүкөндөр колдонууга болот.",
            "Альтернативалардын абалын да расмий булактардан текшериңиз.",
          ],
        },
      ],
      faq: [
        ["Ош базары жабылдыбы?", "Бул гид жабылганын ырастабайт; абалды расмий каналдан текшериңиз."],
        ["Эмне кылуу керек?", "Альтернативаларды кароо же абалды расмий каналдан текшерүү."],
        ["Жаңы базар ачылдыбы?", "Жок; ачылышы 2027-жылдын жазына пландалган."],
        ["Кайда соода кылам?", "Дордой сыяктуу чоң базарлар же шаардык дүкөндөр; расмий булактан текшериңиз."],
      ],
    },
    en: {
      metaTitle: "If Osh Bazaar is closed: alternatives",
      metaDescription:
        "What to do if Osh Bazaar is closed or mid-transfer. Verify the situation from official channels and consider alternatives.",
      h1: "If Osh Bazaar is closed",
      lead: "Because a transfer is under way, some entry points or areas may be temporarily closed. Verify the situation from official channels before travel.",
      updated: "Checked 30 October 2026",
      sections: [
        {
          heading: "Confirm the situation",
          body: [
            "The new market is planned only for spring 2027; that does not mean it is open or that the old market has closed.",
            "Before travel, confirm access and the trading site with the trader or official city channels.",
          ],
        },
        {
          heading: "Alternatives",
          body: [
            "Larger nearby markets (for example Dordoi), municipal supermarkets and shops around Ala-Too Square can be used.",
            "Verify the status of any alternative from official sources as well.",
          ],
        },
      ],
      faq: [
        ["Has Osh Bazaar closed?", "This guide does not confirm closure; verify the situation from official channels."],
        ["What should I do?", "Consider alternatives or verify the situation from official channels."],
        ["Has the new market opened?", "No; its opening is planned for spring 2027."],
        ["Where can I shop?", "Larger markets like Dordoi or municipal shops; verify from official sources."],
      ],
    },
  },
];

export const topicSlugs = TOPICS.map(t => t.slug);

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find(t => t.slug === slug);
}

export function topicPath(locale: Locale, slug: string): string {
  const prefix = locale === "en" ? "/en" : "";
  return `${prefix}/${slug}`;
}