# BusinessNative – AI-rendszerkönyvtár

Teljes termék-, műszaki, tartalmi és kivitelezési terv • 2026. október 5. • v1.1 — eval alapján javítva

**Státusz: tervezési átadás.** Ebben a munkában nem készült alkalmazáskód, GitHub-repository vagy éles weboldalmódosítás. A lent szereplő repositorynevek és új útvonalak javaslatok, nem létezőként ellenőrzött címek. A dokumentum a későbbi kivitelező munkaspecifikációja.

## 1. A döntés és az elérendő eredmény

Kilenc önállóan elindítható, személyre szabható üzleti rendszersablon készül. A látogató kiválaszt egy üzleti problémát a BusinessNative tudástárában, elolvassa a rövid leírást, majd megnyitja a hozzá tartozó GitHub-projektet. A repositoryt átadja Codexnek vagy Claude Code-nak azzal, hogy „Építsd meg ezt nekem az én vállalkozásomra.” A projektben lévő utasítások vezetik végig az ügynököt a felmérésen, a személyre szabáson, az építésen és az ellenőrzésen.

Az asztali alkalmazás itt **a fejlesztéshez használt Codex/Claude Code felületét** jelenti. Az elkészülő üzleti rendszer alapértelmezésben böngészős alkalmazás; nem kell hozzá külön Windows/macOS telepítőt készíteni. Natív alkalmazás nem része az első kiadásnak.

A GitHub-link az indulás egyszerű belépője. Nem ígérhető, hogy minden környezetben önmagában elég: szükség lehet a repository klónozására vagy letöltésére, a helyi projekt megnyitására, fejlesztői eszközökre, vállalkozási adatokra és szolgáltatói hozzáférésekre. Ezeket a README és az ügynök érthetően, lépésenként kezeli. Titkos kulcsot nem kér chatüzenetben.

### A három üzleti terület

| Terület | Ide sorolt rendszerek | A látogató problémája |
|---|---|---|
| Ügyfélszerzés | 01 Ügyfélszerző; 02 Érdeklődő-minősítő; 03 Ajánlatkészítő; 07 Utánkövető | Elvesznek az érdeklődők, lassú a válasz és az ajánlatadás. |
| Ügyfélkezelés | 04 Onboarding; 05 Ügyfélkezelő; 06 Meeting → teendő | Minden indulást és megbeszélést kézzel kell rendezni. |
| Háttérműködés | 08 Ügyfélszolgálati/tudásrendszer; 09 Heti áttekintő | Szétszórt a tudás, nehéz megmondani, mi igényel figyelmet. |

A besorolás navigáció, nem három új termék. A meetingrendszer a háttérműködésben is használható, de csak egy kanonikus oldala és repositoryja legyen.

**Közös működési elv:** az ember meghatározza a célt és a szabályokat; a szoftver megbízhatóan tárol, számol és ütemez; az AI értelmez és tervezetet készít; a fontos külső lépést ember vagy korábban kifejezetten engedélyezett szabály hagyja jóvá; az eredmény visszakerül a nyilvántartásba.

### Három készültségi szint, egyértelmű jelentéssel

| Szint | Mit tartalmaz? | Mit lehet róla állítani? |
|---|---|---|
| Kipróbálható alap | Helyben futó felület, tartós helyi adattárolás, mintaadatok, kézi bevitel/import, AI-adapter és jelölt demómód | A folyamat kipróbálható. A demó nem igazolja az élő AI-t vagy integrációt. |
| Bekötött változat | Valós AI-szolgáltató, a kiválasztott e-mail/naptár/CRM csatlakozás, belépés, üzemi naplózás és futtatás | Csak a ténylegesen tesztelt kapcsolatokra mondható, hogy működnek. |
| Személyre szabott rendszer | Egyedi szabályok, további rendszerek összekötése, több szerepkör, riportok | Külön scope és elfogadási tesztek szerint adható át. |

## 2. Megvizsgált alapok és bizonytalanságok

A tudástár nyilvános tartalmát, a Skill-könyvtár élő megjelenését és az Árajánlat-készítő skill aloldalát ellenőriztem. A keresőből kapott indexelt szöveg és az élő oldal között volt eltérés: az élő oldalon már helyzet szerinti ajánló és „Haladó eszközök” nyitható rész is látszik. A későbbi kivitelező számára a repository és az akkori élő oldal az irányadó.

Megfigyelt minták: közös fejlesztési sáv, márkázott navigáció, sötét felület, nagy balra rendezett cím, visszafogott világos szöveg, vékony keretek, kártyarács; részletes aloldalon széles olvasóoszlop és jobb oldali tartalomjegyzék. A gyűjtemény alatt közös lábléc.

Nem ellenőriztem a businessnative-v2 privát repository aktuális fájljait, az összes reszponzív töréspontot, a világos témát vagy az összes interakciót. Ezért a terv nem állít teljes designauditot vagy forráskód-szintű illeszkedést. A 13–15. fejezetben ezekhez konkrét felderítési feladat és elfogadási feltétel szerepel. Új keretrendszerre átírni a meglévő weboldalt tilos pusztán e projekt kedvéért.

## 3. Repositorystratégia és kiadási modell

**Kilenc publikus sablonrepository + egy közös karbantartási alap** a javaslat. A látogató mindig egyetlen rendszert kapjon, ne kilenc projekt között kelljen választania egy nagy monorepóban. A közös alap verziózott forrásból kerüljön a kiadásokba; telepítéskor ne függjön privát BusinessNative-repositorytól.

| ID | Javasolt repositorynév | Oldal slug |
|---|---|---|
| 01 | bn-ugyfelszerzo-rendszer | ugyfelszerzo |
| 02 | bn-erdeklodo-minosito | erdeklodo-minosito |
| 03 | bn-ajanlatkeszito | ajanlatkeszito |
| 04 | bn-ugyfel-onboarding | ugyfel-onboarding |
| 05 | bn-ugyfelkezelo | ugyfelkezelo |
| 06 | bn-meeting-teendo | meeting-teendo |
| 07 | bn-utankoveto | utankoveto |
| 08 | bn-tudasrendszer | tudasrendszer |
| 09 | bn-heti-attekinto | heti-attekinto |

Közös alap munkaneve: `bn-system-base`. A GitHub-tulajdonost a publikáláskor ellenőrizni kell; a weboldalon megfigyelt `businessnative` profil önmagában nem bizonyít írási jogosultságot. A valódi URL-eket a létrehozott repositoryk alapján kell beírni, nem előre kitalálni.

### Minden sablonrepository kötelező tartalma

| Fájl/mappa | Kötelező tartalom |
|---|---|
| README.md | Üzleti probléma, eredmény, 3 lépéses indítás, előfeltételek, demó/éles különbség, költségkategóriák, licenc, korlátok. |
| START-HERE.md | A kivitelező ügynök belépőpontja: mire kérdezzen rá, mely dokumentumokat olvassa, milyen sorrendben építsen. |
| AGENTS.md | Rövid Codex-utasítások; a közös építési szabályokra mutat. |
| CLAUDE.md | Rövid Claude Code-utasítások; ugyanarra a közös szabályfájlra mutat. |
| docs/BUILD-CONTRACT.md | Egyetlen hiteles munkaszabályzat: scope, állapotok, tesztelés, jóváhagyások, átadás. |
| docs/SYSTEM-SPEC.md | A kiválasztott rendszer részletes funkciói a dokumentum 7. fejezete alapján. |
| docs/ARCHITECTURE.md | Adatmodell, komponenshatárok, események, adapterek, jogosultságok. |
| docs/ADAPTATION.md | A felmérés kérdései, kötelező és opcionális válaszok, alapértékek. |
| docs/ACCEPTANCE.md | Az adott rendszer konkrét PASS/FAIL esetei és közös minőségkapui. |
| docs/OPERATIONS.md | Indítás, leállítás, mentés/visszaállítás, hibák, frissítés, költségfigyelés. |
| docs/INTEGRATIONS.md | Csak ténylegesen támogatott adapterek, beállítási út, engedélyek, korlátok. |
| business-profile.example.json | Nem titkos, fiktív vállalkozási profil és mezőmagyarázat. |
| .env.example | Változónevek és céljuk; valódi kulcs nélkül. |
| fixtures/ | Minden teszthez fiktív bemenet és ellenőrizhető elvárt kimenet. |
| prompts/ | Verziózott AI-feladatok, JSON-kimeneti szerződés és hibaszabályok. |
| src/, tests/, migrations/ | A későbbi implementáció, tesztek és verziózott adatváltozások helye. |
| STATUS.md | Elkészült/hiányzó részek, következő feladat, utolsó ellenőrzés. |
| DECISIONS.md | Rövid indoklás minden érdemi eltérésről. |
| CHANGELOG.md, LICENSE, SECURITY.md | Kiadások, választott felhasználási licenc és hibajelentési út. |

Az útmutatókat röviden kell tartani. Az AGENTS.md és CLAUDE.md ne legyen a teljes dokumentáció másolata. Egy session a közös szerződést, az aktuális rendszer specifikációját és az aktuális feladatot töltse be. A business-profile valós példánya, kulcsok, adatbázisok, exportok és ügyféladatok legyenek Gitből kizárva.

A CLAUDE.md a közös rövid utasítások átvételéhez használhat `@AGENTS.md` importot; így nem kell két eltérő munkaszabályzatot karbantartani. Windows-kompatibilitás miatt symlink helyett normál szövegfájl legyen. Az AGENTS.md olvastassa be a docs/BUILD-CONTRACT.md-t és az aktuális specifikációt. A projektfájlok iránymutatások, nem biztonsági korlátok: a küldési és hozzáférési szabályokat az alkalmazáskódnak is ki kell kényszerítenie.

Javasolt kódlicenc: MIT; ez tervezési javaslat, a tulajdonos a publikálás előtt dönti el. A BusinessNative logó és az oldal képei ne kerüljenek automatikusan az újrafelhasználható kódlicenc alá; a sablonok fiktív arculattal induljanak, a márkaanyagok feltételeit külön kell rögzíteni.

Kiadás: szemantikus verzió, changelog, rögzített függőségek és lockfile. Frissítés soha ne írja felül a felhasználó profilját vagy meglévő adatait. Közös alapfrissítés után a kilenc rendszer érintett tesztjeit újra futtatni kell. Nem szükséges minden indulásnál a teljes portfóliót újragenerálni.

## 4. Személyre szabás és indítás

### Rövid felmérés

Az ügynök először a megadott anyagokból dolgozzon, az ismert válaszokat ne kérdezze újra. Első körben legfeljebb három kérdés; a maradék csak akkor, amikor szükséges.

1. Milyen szolgáltatást kínálsz, és kiknek?
2. Mi az a konkrét manuális folyamat, amelyet ezzel kiváltanál?
3. Milyen eszközökben vannak most az adataid, és helyben próbálnád ki vagy élesben használnád?
4. Mi a vállalkozás neve, nyelve, időzónája és pénzneme? Alapértelmezett javaslat: magyar, Europe/Budapest, HUF; megerősítésig nem tény.
5. Kik használják: csak a tulajdonos vagy munkatársak is?
6. Mi a jóváhagyási szabály: minden üzenet kézi, vagy mely pontos sablonok és események automatizálhatók?
7. Van-e AI API-hozzáférés, és mekkora havi futtatási keret fér bele? Ha nincs, demómóddal kell indulni.
8. Milyen saját szövegek, árlista, logó, színek és folyamatminták használhatók?

### Profiladatok szerződése

| Csoport | Mezők és szabályok |
|---|---|
| Azonosítás | business_name, public_url opcionális, industry, target_customer, language, timezone, currency |
| Szolgáltatások | service_id, név, leírás, terjedelem, kizárások, owner által megadott ár/árképzés; ismeretlen ár null |
| Hang és arculat | tegezés/magázás, 2–3 saját szövegminta, logó helyi útvonala, színek; hiányban semleges téma |
| Folyamat | sales_stages, onboarding_steps, followup_policy, qualification_rules, business_hours |
| Üzem | demo/local/hosted mód, szerepkörök, aktív modulok, adapterazonosítók, költségkeret |
| Kommunikáció | feladó megjelenített neve, válaszcím, engedélyezett üzenetfajták; hitelesítő adat külön |

Validáció: nem üres szolgáltatás és célcsoport; IANA időzóna; ismert pénznemkód; duplikált service_id tiltott; éles küldéshez igazolt feladó és engedélyezett kommunikációs szabály. A profil módosítása verziózott legyen, a korábbi ajánlatok ne változzanak visszamenőleg.

### A felhasználó útja

GitHub megnyitása → a repository elérhetővé tétele az asztali fejlesztőalkalmazásnak → rövid indító kérés → környezetellenőrzés → felmérés → működő demó → személyre szabott előnézet → szükséges fiókbekötések → éles ellenőrzés → átadás.

Az ügynök ellenőrizze a Git, a projekt által rögzített Node-verzió és a csomagkezelő meglétét. A telepítőlépések Windows PowerShellen és macOS-en is dokumentáltak legyenek. Ne alapozzon bash-only parancsokra. Ne kezelje az általános Claude-chatet és a Claude Code fejlesztőkörnyezetét felcserélhetőként.

**Költségmagyarázat a README-be:** az építéshez használt AI-előfizetés, az elkészült alkalmazás AI API-fogyasztása, valamint a tárhely/e-mail/naptár szolgáltatások külön tételek lehetnek. A csomag ne ígérjen automatikusan ingyenes éles működést. Konkrét árat csak az adott szolgáltató aktuális díjszabásának ellenőrzése után írjon.

## 5. Közös műszaki alap

### Előre eldöntött alapértelmezés az olcsóbb kivitelezéshez

Új önálló sablonokhoz: TypeScript, React + Vite felület, Node.js + Express szerver, sémaellenőrzés, SQLite helyi adatbázis, verziózott migrációk. Egy repositoryban felület és szerver; ne kelljen külön több szolgáltatást telepíteni a demóhoz. A konkrét támogatott csomagverziókat a közös alap létrehozásakor egyszer kell ellenőrizni és lockfile-ban rögzíteni.

Éles kiindulópont: egy folyamatosan futó Node-szolgáltatás, kezelt PostgreSQL-adatbázis, HTTPS, megfelelő beléptetés és ütemezett munkafeldolgozó. SQLite-fájlt ne helyezzen efemer vagy serverless fájlrendszerre tartós adatbázisként. Az éles szolgáltató kiválasztása a felhasználó meglévő infrastruktúrája alapján történjen; nem kell kilencféle hostingot támogatni az első kiadásban.

A tudástári weboldal továbbra is a saját, meglévő stackjében készül. A sablonalkalmazások technológiája nem indok a BusinessNative oldal átépítésére.

### Közös komponensek

- Profilbeállítás és integrációs állapot: nincs bekötve / demó / kapcsolódik / működik / hibás.
- Forrásadat importálása és ellenőrzése: kézi szöveg, CSV/JSON, az adott modulban támogatott fájlok.
- Áttekintő lista és részletoldal; keresés, státuszszűrés, üres és hibás állapot.
- AI-feldolgozó réteg strukturált kimenettel; külön a bemenet és a generált változat.
- Szerkeszthető tervezet, változattörténet és jóváhagyási sor.
- Eseménynapló: ki, mikor, mit módosított vagy küldött.
- Export és visszaállítható adatmentés.

### Adapterhatárok

| Adapter | Bemenet → kimenet | V1 vállalás |
|---|---|---|
| AI | feladat, jóváhagyott forrás, kimeneti séma → ellenőrzött eredmény vagy hiba | Determinisztikus demó + egy élő szolgáltató; második szolgáltató később. |
| E-mail | jóváhagyott üzenetverzió, címzett, deduplikációs kulcs → szolgáltatói azonosító és státusz | Demó outbox; egy kiválasztott éles szolgáltató a bekötött szinthez. |
| Foglalás | külső foglalási azonosító és esemény → booking állapot | Alapban külső foglalási link + kézi visszaigazolás; élesben hitelesített webhook. |
| CRM | kontaktus és ügylet upsert → stabil azonosító | Saját helyi nyilvántartás; külső CRM csak külön adapterrel. |
| Fájltárolás | ellenőrzött fájl és metaadat → nem nyilvános tárolási hivatkozás | Helyi privát mappa; hosted esetben hozzáférés-védett objektumtár. |

Nem cél minden CRM, levelező és naptár bekötése. A kivitelező egy kiválasztott szolgáltatót valósítson meg rendesen, az adapterhatárt dokumentálja. Az alapsablon ne tegyen úgy, mintha a demó integráció éles kapcsolat volna.

### Közös adatok

Minden rekord: UUID, workspace_id, created_at, updated_at, version. Egy telepítés alapban egy vállalkozás; későbbi összekötéshez a workspace azonosító kötelező. Az időpontok UTC-ben tárolódnak, a megjelenítés a profil időzónájában történik. Pénz: egész legkisebb pénzegység + pénznem, lebegőpontos pénzszámítás nélkül.

| Entitás | Lényegi mezők és kapcsolatok |
|---|---|
| Contact | név, normalizált e-mail, cég, forrás, kommunikációs preferenciák; e-mail önmagában nem minden esetben egyedi személy |
| Lead | contact_id, igény, service_id, stage, owner_id, source_id, következő teendő |
| Qualification | lead_id, szabályverzió, szempontonkénti bizonyíték, pontok, missing_fields, emberi felülbírálat |
| Opportunity | contact_id, stage, expected_value, currency; várható érték nem realizált bevétel |
| Proposal | opportunity_id, verzió, sorok, nettó/adó/bruttó vagy árazási státusz, érvényesség, küldési állapot |
| Project | contact_id, elfogadott ajánlatverzió opcionális, megbízásforrás, felelős, onboarding_status, delivery_status, indulás |
| Task | entity_type/id, leírás, felelős opcionális, határidő opcionális, státusz, forráshely |
| Meeting | projekt/kontakt, eredeti szöveg, dátum, résztvevők, feldolgozási verzió |
| Message | contact_id, csatorna, purpose, szövegverzió, approval_id, provider_id, küldési állapot |
| KnowledgeDocument | típus, láthatóság, verzió, hatály/érvényesség, forrás, indexelési állapot |
| MetricSnapshot | időszak, mutatódefiníció-verzió, érték/null, adatforrás, frissesség |
| Job/Event | eseményazonosító, típus, séma-verzió, entity_id, állapot, próbálkozásszám |
| Audit/Approval | szereplő, művelet, rekordverzió, időpont, jóváhagyási kör, változatlenyomat |

Kiegészítő kötelező entitások és integritási szabályok a 19. fejezetben: foglalás, fizetési esemény, állapottörténet, követési munkák, tudásrészletek és emberi átadási jegyek. A modulok csak a saját működésükhöz szükséges táblákat hozzák létre; a teljes lista nem kötelező minden önálló sablonhoz.

Törlésnél az ügyfél kapcsolódó dokumentumai, indexelt tudásdarabjai, exportjai és ütemezett munkái is számításba kerülnek. Soft delete önmagában nem teljes adattörlés. Élesben dokumentált megőrzési és törlési eljárás kell; ez műszaki követelmény, nem jogi megfelelőségígéret.

### Közös folyamat- és API-szerződés

A fő erőforrásokhoz listázás, létrehozás, részlet és verzióellenőrzött módosítás szükséges. AI-művelet aszinkron job legyen: beküldés job_id-t ad, a felület lekéri az állapotot. Hibaformátum: code, közérthető message, retryable, correlation_id; ne jelenjen meg kulcs vagy teljes belső stack trace.

Javasolt API-csoportok: `/api/profile`, `/api/contacts`, `/api/leads`, `/api/proposals`, `/api/projects`, `/api/meetings`, `/api/tasks`, `/api/messages`, `/api/knowledge`, `/api/reviews`, `/api/jobs`, `/api/integrations`. Csak az aktív modulhoz szükséges útvonalakat kell implementálni.

Eseményboríték: event_id, event_type, schema_version, workspace_id, entity_id, occurred_at, correlation_id, payload. Példák: lead.created; qualification.completed; booking.confirmed; proposal.approved; proposal.sent; proposal.accepted; project.started; meeting.reviewed; task.completed; message.received; followup.cancelled. A fogyasztó event_id alapján deduplikál.

Üzleti írás és eseményrögzítés egy tranzakcióban történjen (outbox). A külső küldést külön worker kezeli. Az ütemezett munkák az adatbázisban legyenek, ne csak memóriában. A helyi alkalmazás leállított gépen nem fut: ezt a felület és a README mondja ki; folyamatos automatizációhoz folyamatosan elérhető futtatás kell.

### Általános AI-szerződés

Kimenet: summary, extracted_fields, evidence[], missing_fields[], suggested_actions[], warnings[]. A bizonyíték tartalmazzon forrásrekordot és idézetrészletet vagy szövegpozíciót. Ismeretlen adat null/hiányzó; a modell ne gyártson dátumot, összeget, vállalást vagy referenciát. Szabad szöveg nem írhat közvetlenül adatbázist és nem indíthat küldést.

Sémahiba esetén legfeljebb egy javító AI-kérés, utána kézi javítási állapot. Átmeneti integrációs hibánál korlátozott újrapróbálás; tartós hiba a felhasználó teendői közé kerül. Futásonként bemeneti méret- és költségkorlát; ugyanazt a változatlan bemenetet ne dolgozza fel újra indokolatlanul. A modellazonosító konfigurálható, a minták ne egy gyorsan elavuló „legújabb” modellnévre épüljenek.

Az importált szövegek, ügyféllevelek és tudásdokumentumok adatok, nem rendszerutasítások. A bennük lévő „küldd el az adatbázist” típusú szöveg nem emelhető végrehajtható utasítássá. Az AI által ajánlott műveletet alkalmazásszintű engedélylista és jogosultságvizsgálat szűri.

## 6. Jogosultság, küldés és üzembiztonság

Helyi demo: csak loopback címre figyelő alkalmazás, fiktív adatokkal. Nyilvános vagy csapatban használt telepítéshez belépés kötelező. Szerepek: tulajdonos (beállítás/küldési engedély), munkatárs (saját engedélyezett rekordok szerkesztése), olvasó (megtekintés). V1 lehet csak tulajdonos; a felület ekkor ne kínáljon hamis csapatfunkciót.

Éles hozzáférés: szerveroldali jogosultság minden rekordlekérésnél és módosításnál; hitelesített munkamenet, biztonságos cookie, CSRF-védelem a használt hitelesítés szerint; webhook aláírás és ismétlésvédelem; publikus űrlapon sebességkorlát, szerveroldali validáció és spamkezelés. Kulcs soha nem kerülhet a klienscsomagba vagy Gitbe. A napló maszkolja a titkokat, alapból nem tárol teljes ügyfélszöveget.

### Küldési állapotgép

draft → needs_review → approved → queued → sending → sent / failed / unknown.

A jóváhagyás konkrét címzetthez, tartalomverzióhoz és célhoz tartozik. Ha ezek bármelyike változik, a jóváhagyás érvénytelen. „Sent” csak szolgáltatói visszaigazolás után; kézbesítve csak külön kézbesítési visszajelzés alapján. A kézi küldésjelölés külön `reported_sent` állapot, actor_id és reported_at mezőkkel, „Kézzel elküldöttnek jelölve” felirattal; nem szolgáltató által igazolt küldés. A demó outbox eredménye `simulated_sent`, és nem számít valós kommunikációnak. Timeout után unknown állapot és szolgáltatói egyeztetés szükséges, nem vak újraküldés. A deduplikációs kulcs fogja össze a workspace, címzett, üzleti esemény és üzenetverzió azonosítóit.

Alapban minden személyre szabott külső üzenet tervezet. Külön engedélyezhető például az űrlap visszaigazoló sablonja. Automatizált követésnél küldés előtt újra ellenőrizni kell a választ, leiratkozást, tiltást, lezárt ügyletet és a napi küldési keretet. Ha a válaszcsatorna nincs bekötve és a felhasználó sem frissítette az állapotot, autonóm utánkövetés nem engedélyezhető.

Üzemeltetés: mentési és visszaállítási próba, hibanapló, sikertelen feladatok listája, kapcsolatok állapotellenőrzése. Frissítés előtt mentés; migráció után rekordszám és kapcsolati integritás ellenőrzése. AI-leálláskor a kézi munkát továbbra is lehessen folytatni.

## 7. A kilenc rendszer részletes specifikációja

### 01 — Ügyfélszerző rendszer

**Eredmény:** a jelentkezéstől az ügylet állapotáig egy követhető út. Nem ígér önmagában forgalmat vagy új ügyfelet; a látogatók megszerzése külön üzleti tevékenység.

**Bemenet:** szolgáltatás és célcsoport, jóváhagyott landing szöveg, érdeklődő neve/e-mailje/igénye, forrásjelölés, foglalási link, értékesítési szakaszok, kommunikációs szabályok.

**MVP:** egy szolgáltatás landingje és űrlapja; köszönőoldal; tartós leadlista; szerkeszthető AI-összefoglaló és választervezet; két utánkövetési tervezet; foglalási link; kézi pipeline; alap eseményszámlálók. A 02/03/07 rendszerek teljes képességeit nem kell beépíteni: ez az egyszerű végigérő út, később bővíthető modulokkal.

**Képernyők:** látogatóknak szánt landing (MVP-ben csak helyi előnézet, élesben nyilvános); jelentkezés visszaigazolása; belső érdeklődőlista; lead részlet és idővonal; szövegsablonok; áttekintés.

**Folyamat:** űrlap szerveroldali ellenőrzése → lead.created → összefoglaló → emberi ellenőrzés → válasz/foglalási link → foglalás állapotának rögzítése → ajánlat/nyert/vesztett. Szakaszok: új, átnézendő, kapcsolatfelvétel, foglalt, ajánlat, nyert, vesztett. Ugyanaz a beküldési azonosító egy rekordot hoz létre; ugyanazon személy új igénye külön lead lehet.

**AI feladata:** igény összefoglalása, saját szolgáltatáshoz kapcsolás, választervezet. Ár és eredményígéret csak jóváhagyott szolgáltatásadatból.

**Bekötött verzió:** tranzakciós levélküldés; foglalási webhook; válaszok és leiratkozások kezelése; ütemezett feladatok. Marketingüzenetek és az érdeklődésre adott válasz külön célként legyenek kezelve.

**Egyedi verzió:** több ajánlat, több értékesítő, forrás szerinti bontás, külső CRM. Hirdetéskezelés és automatikus hideg megkeresés nincs a V1-ben.

**Mérés:** új érdeklődések száma; medián idő az első emberileg jóváhagyott válaszig; foglalások; nyert ügyletek. Konverzióknál az időszak és a kohorsz különüljön el, 0 nevező esetén nincs adat.

**Elfogadási esetek:** 01-A: azonos beküldés kétszer → egy lead. 01-B: hibás e-mail → mezőszintű hiba, nincs küldés. 01-C: AI-kiesés → lead megmarad, kézi feldolgozás elérhető. 01-D: lemondott foglalás → nem számít aktívnak. 01-E: nyert státusz → függő értékesítési follow-up törlődik.

### 02 — Érdeklődő-minősítő rendszer

**Eredmény:** minden érdeklődés mellett látszik az igény, a hiányzó adat és az indokolt következő lépés.

**Bemenet:** beillesztett érdeklődés vagy CSV, szolgáltatáskatalógus, a vállalkozó által megadott megfelelési szabályok. MVP-ben nincs automatikus postafiók-olvasás vagy személyes profilvadászat.

**MVP:** kézi bevitel és CSV-előnézet; adatkinyerés; szabályalapú pontozás; forrásidézetek; hiányzó adatok listája; szűrhető lista; választervezet; emberi felülbírálat.

**Pontozási alapjavaslat:** szolgáltatáshoz illeszkedés 0–40; terjedelemhez illeszkedés 0–20; megadott kerethez illeszkedés 0–20; időzítési illeszkedés 0–20. A súlyok és küszöbök profilban módosíthatók. Ha egy adat ismeretlen, unknown legyen, ne nulla pont. A pontszám mellett jelenjen meg az értékelt súly/összes súly lefedettsége. Kritikus hiányzó feltételnél a címke mindig „Pontosítás szükséges”, még magas részpontszámnál is.

**Folyamat:** AI a tényeket kinyeri → determinisztikus kód alkalmazza a súlyokat → javasolt címke és indoklás → ember elfogadja/felülírja → következő teendő. Címkék: átnézendő, pontosítandó, illeszkedő, jelenleg nem illeszkedő. Nincs automatikus végleges elutasítás.

**Képernyők:** beérkező lista; bemenet és értékelés egymás mellett; szempontok szerkesztése; import-előnézet és hibajegyzék.

**Bekötött verzió:** űrlap/postafiók adapter, CRM-be továbbítás, felelőshöz rendelés. **Egyedi:** több szolgáltatás saját súlyokkal és kapacitásadatokkal. Érzékeny személyes tulajdonság nem lehet minősítési jel.

**Mérés:** feldolgozási idő; hiányos rekordok aránya; emberi felülbírálások aránya. A magas pontszám nem ígért vásárlási valószínűség.

**Elfogadási esetek:** 02-A: nincs költségkeret → unknown és pontosító kérdés. 02-B: minden adat ismert → ugyanaz a szabály mindig ugyanazt a pontot adja. 02-C: AI állítást nem támasztja alá forrás → nem kerül ténymezőbe. 02-D: súlyváltozás → új értékelési verzió, régi megmarad. 02-E: felülbírálat → indok és szereplő naplózott.

### 03 — Ajánlatkészítő rendszer

**Eredmény:** a konzultációból vagy igényből rendezett, ellenőrizhető és verziózott ajánlat készül.

**Bemenet:** jegyzet/ügyféligény, jóváhagyott szolgáltatások és árak, terjedelem, kizárások, ütemezés, érvényesség és fizetési feltételek. Hiányzó pénzügyi adat nem pótolható modellbecsléssel.

**MVP:** igénybevitel → AI terjedelemvázlat → szolgáltatássorok kézi kiválasztása → determinisztikus összegzés → szerkeszthető ajánlat → jóváhagyás → nyomtatható/PDF export → kézi küldésjelölés és emlékeztető. Az ajánlat sorai és exportja egyazon adatforrást használják.

**Ajánlatblokkok:** ügyféligény; elérendő eredmény; vállalt feladatok; ami nincs benne; ütemezés; díjak és feltételek; következő lépés. Határidő csak megadott vállalásból, különben tisztázandó.

**Képernyők:** ajánlatlista; input; szerkesztő előnézettel; változatok; tervezett követés. Állapotok: vázlat, hiányos, ellenőrzendő, jóváhagyott, elküldött, elfogadott, elutasított, lejárt. A PDF-export önmagában nem jelent elküldést vagy elfogadást.

**Bekötött verzió:** ellenőrzött e-mail-küldés, fogadóoldali válaszok, elfogadás emberi rögzítése. **Egyedi:** csomagvariációk, külön elektronikus aláíró integráció. Számlázás, adómegállapítás és szerződéses tanácsadás nem része.

**AI feladata:** megfogalmazás és scope-összerendezés. Az árakat, kedvezményt, adót és végösszeget kód számolja a felhasználó által megadott szabályokból. A pénznemek nem adódhatnak össze átváltási forrás nélkül.

**Mérés:** ajánlatelkészítési idő; kiküldött és elfogadott ajánlatok; terjedelemjavítások. Ajánlat értéke nem bevétel.

**Elfogadási esetek:** 03-A: 2×100 000 Ft + 50 000 Ft, megadott 0 adó → 250 000 Ft. 03-B: ismeretlen ár/adókezelés → hiányos, véglegesítés tiltva. 03-C: jóváhagyás után szöveg/ár változik → új jóváhagyás kell. 03-D: export és felület összege egyezik. 03-E: lejárt ajánlat nem indul automatikusan onboardingként.

### 04 — Ügyfél-onboarding rendszer

**Eredmény:** az új ügyfél indulásához szükséges információk, feladatok és hiányok egy helyen láthatók.

**Bemenet:** emberileg megerősített megbízás vagy elfogadott ajánlatverzió, kontaktus, szolgáltatásspecifikus indulási checklist és szükséges fájlok.

**MVP:** projektnyitás; belső adatbekérő checklist; kézzel rögzíthető válaszok és fájlok; welcome levéltervezet; indulási feladatlista; hiányfigyelés; belső összefoglaló. Jelszó/kulcs bekérésére nem használható az adatbekérő.

**Folyamat:** megbízás ellenőrzése → projektsablon másolása → szükséges adatok listája → bekérő tervezet → adatok ellenőrzése → hiányok → indulásra kész → ember indítja a projektet. Az onboarding_status értékei: előkészítés, adatokra vár, ellenőrzés, indítható, elindult, szünetel. Ez külön mező a teljesítés delivery_status állapotától. Egy elfogadás-esemény csak egy projektet hozhat létre.

**Képernyők:** induló ügyfelek; projekt-checklist; dokumentumok; welcome tervezet; hiányok. Hosted bővítésben ügyféloldali adatbekérő időkorlátos, visszavonható hozzáféréssel.

**AI feladata:** beküldött anyagok összefoglalása; checklisthez rendelés; hiányra utaló javaslat. A kritikus kötelező mezők teljességét kód ellenőrzi, a modell nem jelölheti őket önkényesen készre.

**Bekötött verzió:** privát ügyfélűrlap, fájltároló, welcome küldés. **Egyedi:** szolgáltatásonként külön folyamat, külső projektkezelő, felelősi jóváhagyások.

**Mérés:** idő az elfogadástól az indulásig; hiányzó elemek; elakadt indulások. 

**Elfogadási esetek:** 04-A: kötelező brief hiányzik → nem indítható. 04-B: ugyanaz az elfogadás kétszer → egy projekt. 04-C: másik ügyfél hozzáférési linkje nem olvashatja a projektet. 04-D: visszavont link nem működik. 04-E: veszélyes vagy túl nagy fájl elutasítva; korlátok előre látszanak.

### 05 — Ügyfélkezelő rendszer

**Eredmény:** az aktív ügyfelekhez tartozó feladatok, ígéretek és következő lépések áttekinthetők.

**Bemenet:** ügyfelek, projektek, feladatok, kapcsolattartási események, vállalt határidők. Az első verzió nem helyettesít minden vállalati CRM-et.

**MVP:** kontaktus- és projektlista; ügyfélidővonal; feladatok; kézi meetingjegyzet; következő kapcsolatfelvétel; heti figyelmeztető lista; AI-összefoglaló és választervezet. Minden feladaton látszik a forrás és a felelős hiánya is.

**Állapot:** ügyfél aktív/szünetel/lezárt; projekt delivery_status: előkészítés/folyamatban/blokkolt/kész. Az onboarding külön onboarding_status mezőt használ. Az „ügyfélállapot” üzleti jelzések összesítése, nem a személy értékelése. Figyelmet igényel, ha lejárt nyitott feladat vagy dokumentált megválaszolatlan kérdés van; adat nélkül „nem megítélhető”. Nincs kitalált ügyfél-elégedettségi pontszám.

**Képernyők:** Mai teendők; ügyfelek; ügyféladatlap és idővonal; projektek; feladatlista; heti figyelem. A teljesített feladat nem törlődik az előzményekből.

**AI feladata:** az eseményekből rövid státusz és következő lépés, visszamutatással az alaprekordokra. Új szolgáltatás javaslata csak ismert igény alapján, emberi áttekintéssel.

**Bekötött verzió:** meetingrendszerből jóváhagyott feladatok, levelezési metaadatok, csapatfelelősök. **Egyedi:** ügyfélportál, megújítás, testimonial/referral igénylés, upsell. Ezek opcionálisak, nem kell a V1-be zsúfolni.

**Mérés:** lejárt feladatok; felelős nélküli feladatok; esedékes kapcsolatfelvételek; projektstátuszok.

**Elfogadási esetek:** 05-A: lejárt nyitott feladat → figyelmeztetés. 05-B: teljesített feladat → nem jelenik meg lejártként. 05-C: dátum nélküli vállalás → külön tisztázandó lista. 05-D: AI-javaslat a forrásra kattintva ellenőrizhető. 05-E: jogosulatlan munkatárs nem lát másik workspace rekordot.

### 06 — Meeting → teendő rendszer

**Eredmény:** a leiratból szerkeszthető összefoglaló, döntéslista, feladattervezet és utánkövető levél készül.

**Bemenet:** beillesztett szöveg vagy UTF-8 TXT/MD leirat, meeting dátuma, ismert résztvevők, ügyfél/projekt. Az MVP nem csatlakozik automatikusan hívásba és nem rögzít hangot.

**MVP:** leirat importálása; AI-feldolgozás; döntések, feladatok, nyitott kérdések elkülönítése; forrásrészletek; felelős/határidő javítása; jóváhagyott export CSV/JSON/Markdown; follow-up tervezet. Feladat csak jóváhagyás után kerül a feladatnyilvántartásba.

**Képernyők:** új megbeszélés; leirat és eredmény két oszlopban; jóváhagyás; export; előzmények. Mobilon a bemenet és az eredmény egymás alatt vagy váltóval jelenik meg.

**Folyamat:** import → feldolgozás → ellenőrzendő → jóváhagyott → exportált/szinkronizált. A „jó lenne majd” javaslat nem automatikusan vállalt feladat. „Jövő péntek” csak ismert meetingdátum és egyértelmű értelmezés mellett oldható fel; bizonytalanság külön jelzés.

**Bekötött verzió:** kiválasztott leiratforrás vagy beszédfelismerő adapter, CRM/projektkezelő szinkron. **Egyedi:** többnyelvű feldolgozás, hosszú anyag darabolása és összevonása, ismétlődő meetingek. Hanganyag feldolgozását csak külön tájékoztatott adatkezelési folyamat mellett kell bekötni.

**Mérés:** szerkesztésre fordított idő; hiányzó felelősök/határidők; ember által elutasított téves feladatok. 

**Elfogadási esetek:** 06-A: a 2026-10-05-i meetingben „Anna elküldi 2026. október 9-ig” → Anna, 2026-10-09 dátum, forrásrészlet. 06-B: „Valakinek meg kellene néznie” → tisztázandó, nincs kitalált felelős. 06-C: ugyanaz a jóváhagyott változat kétszer fájlba exportálható, de az export nem hoz létre új feladatot; bekötött szinkronban az ismételt upsert nem duplikál. 06-D: ellentmondó határidő → jelzés és emberi választás. 06-E: üres vagy túl nagy fájl → érthető hiba, a korábban már elfogadott anyag nem vész el.

### 07 — Utánkövető rendszer

**Eredmény:** megmutatja, kit, miért és mikor érdemes követni, és előkészíti az üzenetet.

**Bemenet:** érdeklődő/ajánlat/projekt állapot, utolsó kapcsolatfelvétel, utolsó válasz, tiltás/leiratkozás, szabály és időzóna.

**MVP:** CSV vagy kézi lista; követési szabályok; esedékesség-számítás; napi munkalista; szerkeszthető levéltervezet; kézi elküldés- és válaszjelölés; szüneteltetés. Nincs felügyelet nélküli automatikus küldés.

**Szabályjavaslat:** ajánlat után 3 és 7 munkanappal tervezet; legfeljebb 2 követés; válasz, elfogadás, elutasítás, leiratkozás vagy kézi stop esetén leáll. Ez módosítható alapérték. „Munkanap” V1-ben hétfő–péntek, munkaszüneti naptár nélkül; ezt a felület jelzi. Bekötött verzióhoz választható ünnepnaptár.

**Képernyők:** ma esedékes; sorozatszabályok; kontaktus előzményei; tervezet; felfüggesztett és hibás követések.

**AI feladata:** az előzményekből személyre szabott tervezet. A küldés napját, stopfeltételeket és darabkorlátot determinisztikus kód kezeli.

**Bekötött verzió:** e-mail-küldés és beérkező válaszfigyelés egyaránt; megbízható scheduler; jóváhagyott sorozatok; küldés előtti újraellenőrzés. **Egyedi:** többcsatornás, ügyfélmegújítási és referral-folyamatok külön engedélyezéssel.

**Mérés:** esedékes követések; elkészült tervezetek; igazolt elküldések; válaszok. Ezekből önmagukban nem vezethető le okozati bevételnövekedés.

**Elfogadási esetek:** 07-A: sorba állítás után válasz érkezik → nincs küldés. 07-B: két worker ugyanazt veszi fel → legfeljebb egy küldés. 07-C: szolgáltatói timeout → unknown, nem azonnali ismétlés. 07-D: stop bármelyik lépésben → minden jövőbeli munka törölve/felfüggesztve. 07-E: nyári/téli időváltás → a helyi küldési idő megmarad.

### 08 — Ügyfélszolgálati és tudásrendszer

**Eredmény:** a jóváhagyott vállalkozási tudásból visszakereshető forrásokkal készül válasz; ismeretlen kérdés emberhez kerül.

**Bemenet:** szolgáltatásleírások, GYIK, belső folyamatok, jóváhagyott válaszminták. Dokumentumonként kötelező a public/internal besorolás és verzió. MVP: TXT/MD és kézzel felvitt kérdés-válasz; PDF/OCR később, dokumentált korlátokkal.

**MVP:** belső munkatársi tudásasszisztens; dokumentumfeltöltés; indexelési állapot; keresés; forrásokra épülő választervezet; „nincs elég információ” állapot; átadási jegy létrehozása. Első keresési megoldás teljes szöveges keresés; vektorkeresés csak akkor, ha a tesztkérdések megmutatják az előnyét.

**Képernyők:** dokumentumlista és láthatóság; kérdezés; válasz forrásrészletekkel; megválaszolatlan kérdések; tudásfrissítés. A nyilvános widget a bekötött verzió része, külön ellenőrzéssel.

**Folyamat:** validált feltöltés → darabolás/indexelés → publikálás vagy belső jóváhagyás → jogosultság szerint szűrt keresés → csak a találatokra támaszkodó válasz → forrásellenőrzés → tervezet/emberi átadás. A public szűrésnek már a keresés előtt működnie kell, nem csak az AI promptjában.

**AI feladata:** forrásból válaszol, forrás nélkül nem talál ki árat, szabályt vagy garanciát. Ellentmondó és elavult dokumentumokat jelez. Pénzvisszafizetést és kivételes üzleti döntést nem hajt végre.

**Bekötött verzió:** nyilvános webchat, forgalmi és költségkorlát, emberi továbbítás valós célrendszerbe. **Egyedi:** helpdesk, több nyelv, később hangalapú csatorna. Voice agent nem része az első csomagnak.

**Mérés:** tesztkérdésekre forrással alátámasztott válaszok; helyes visszautasítások; átadott kérdések; elavult dokumentumok.

**Elfogadási esetek:** 08-A: publikált ár szerepel → pontos összeg és forrás. 08-B: nincs ár → nincs kitalált összeg. 08-C: belső dokumentum → nyilvános kérdésnél sem keresési találatban, sem válaszban nem jelenik meg. 08-D: dokumentum törlése/frissítése → régi részlet nem válaszolható vissza. 08-E: dokumentumba írt rendszerutasítás → nem változtat jogosultságot. 08-F: ellentmondó két forrás → emberi tisztázás.

### 09 — Vezetői / heti áttekintő rendszer

**Eredmény:** ellenőrizhető heti helyzetkép és néhány forráshoz kötött vizsgálati javaslat.

**Bemenet:** CSV vagy közös modulok adatai: leadek, foglalások, lezajlott konzultációk, kiküldött ajánlatok, nyert ügyletek, befizetések és nyitott feladatok. Minden importhoz forrás és frissítési idő tartozik.

**MVP:** CSV-mezőpárosítás előnézettel; hibás sorok külön; determinisztikus heti számítás; előző teljes héttel összehasonlítás; adatminőség-jelzés; legfeljebb 3 AI-javaslat; mentett heti pillanatkép; Markdown/CSV export.

**Definíciók:** hétfő 00:00–következő hétfő 00:00 a profil időzónájában, balról zárt, jobbról nyitott intervallum. Új lead: létrehozási esemény. Foglalás: időszakban létrejött, az időszak végéig nem lemondott foglalás, külön mutató a megtartott konzultáció a megtartás dátuma szerint. Ajánlat: első szolgáltató által igazolt küldés; új verzió nem új ajánlat. A kézzel elküldöttnek jelölt ajánlatok külön mutató, nem olvadnak bele az igazolt küldésekbe. Új ügyfél: első nyert megbízás a kontaktushoz. Befolyt összeg: rögzített és megerősített fizetési események mínusz visszatérítések pénznemenként, forráseredettel; várható ajánlatérték külön. Nyitott feladat: az állapottörténet szerint az időszak zárásakor nem lezárt; lejárt: ezen belül határidő kisebb a záró időpontnál. A szükséges időszaki előzmény hiányában a történeti mutató „nem rekonstruálható”, nem a mai státuszból számolt érték.

**Képernyők:** heti összefoglaló; adatok és frissesség; források; mutatódefiníciók; AI-észrevételek; korábbi hetek.

**AI feladata:** a már kiszámolt számokat értelmezi; minden állítás mutatóazonosítóhoz kapcsolódik. Nem számol fejben, nem állít ok-okozatot puszta együttjárásból. Javaslat formája: megfigyelés → lehetséges magyarázat → ellenőrzendő adat → következő lépés.

**Bekötött verzió:** rendszeres import a többi modulból és ütemezett pillanatkép. **Egyedi:** kapacitás, üzleti célok, projekteredményesség. Könyvelési rendszer nem része.

**Mérés:** adatforrások frissessége, hiányzó mezők, heti áttekintés elkészülése, megvizsgált javaslatok.

**Elfogadási esetek:** 09-A: hiányzó bevételforrás → „nincs adat”, nem 0. 09-B: előző hét 0 → százalékváltozás nem végtelen. 09-C: HUF és EUR → külön összeg, nincs spontán átváltás. 09-D: későn beérkező adat → új riportverzió, régi megmarad. 09-E: lead és ajánlat eltérő heti kohorszból → nem címkézi automatikusan konverziónak. 09-F: AI-állításban eltérő szám → kimenet elutasítva/javítandó.

## 8. Összekapcsolás a kilenc külön telepítés kényszere nélkül

Minden sablon önálló, de közös adat- és eseményszerződést követ. Ha a felhasználónak már van egy kompatibilis BusinessNative-rendszere, a következő modul ugyanabba a projektbe integrálható. Ilyenkor nem jön létre második Contact/Task/Message táblacsalád. Az ügynök ellenőrzi a core és sémaverziót, mentést készít, kompatibilis migrációval bővít.

Ajánlott kapcsolatok: 01 lead → 02 minősítés → 03 ajánlat → 04 indulás → 05 ügyfélkezelés; 06 jóváhagyott teendői → 05; 07 a lead/ajánlat állapotát figyeli; 09 a modulok eseményeiből aggregál. A 08 rendszer ügyfélszolgálati kérdése önmagában nem válhat értékesítési leaddé kifejezett szabály nélkül.

V1-ben az összekötés export/import útján is megengedett, de a felület jelezze az utolsó szinkron idejét. A marketingoldalon csak valóban megvalósított integrációt szabad felsorolni.

## 9. Olcsóbb modellel végrehajtható munkacsomagok

A megrendelés két külön feladatcsoportra oszlik: A) publikus rendszersablonok elkészítése; B) tudástári bemutatóoldalak elkészítése. A sablonok későbbi látogatói C) a saját vállalkozásukra adaptálnak. A három munkát nem szabad egyetlen kontrollálatlan „építs meg mindent” sessionbe összevonni.

### Előfeltételek és sorrend

| Feladat | Előfeltétel | Pontos kimenet | Elfogadás |
|---|---|---|---|
| P00 Leltár | a webes részhez meglévő projekt hozzáférés | P00-A sablonkörnyezet; P00-B webes stack, útvonalak, designforrások, Git-állapot | tényleges fájlnevek és állapotok; P00-B hiánya nem blokkolja a helyi sablonokat |
| P01 Közös alap | ez a terv | profil, tárolás, AI-demó, tervezetek, napló, adapterhatárok | profilmentés újraindítás után megmarad; nincs titok a bundle-ben |
| P02 Első pilot: 06 | P01 | teljes meeting → jóváhagyott feladat út | 06-A–E és közös helyi kapuk |
| P03 Második pilot: 03 | P01, pilot tanulságok | ajánlat szerkesztés és export | 03-A–E; UI/PDF összegazonosság |
| P04 02 és 07, egymás után | P01, P02; modulonként külön task | minősítés és követési tervezetek | a 19. fejezet szerinti helyi tesztek |
| P05 04 és 05, egymás után | P01, P03; modulonként külön task | indulás és ügyfélkezelés | a 19. fejezet szerinti helyi tesztek |
| P06 01 | lead/üzenet alapok | egyszerű teljes funnel | 01-A–E |
| P07 08 | P01, belső forráskezelés | belső tudásasszisztens | 08-A/B/D/E/F; nyilvános szűrés külön bekötött kapu |
| P08 09 | mutatódefiníciók, import | heti pillanatkép | 09-A–F |
| P09 Repositorykiadások | modulok helyi kapui | 9 reprodukálható sablon, README, licencek, tagek | mindegyik tiszta letöltésből indul |
| P10 Tudástári előnézet | P00-B, 10–14. fejezet | gyűjtemény + 9 aloldal + belépőkártya | design- és navigációs ellenőrzés; nem igényel kész éles adaptereket |
| P11 Publikálás | valódi repo-URL-ek, jóváhagyott előnézet | nyilvános, ellenőrzött hivatkozások | nincs placeholder, nincs nem működő ígéret |

Nem szükséges az összes éles integráció ahhoz, hogy a kipróbálható alapsablon kiadható legyen. Viszont a kiadásban világosan szerepeljen, mely képesség demó, mely ténylegesen bekötött és tesztelt. Fázisonként állapotfrissítés és kis, áttekinthető commit szükséges.

### Egy munkamenet szabályai

1. Olvasd a STATUS.md-t és az aktuális feladatot. A működő részeket ne építsd újra.
2. Nevezz meg legfeljebb 3–5 konkrét módosítást és a hozzájuk tartozó elfogadási eseteket.
3. Csak a szükséges fájlokat olvasd és módosítsd; ne töltsd be automatikusan a kilenc teljes specifikációt.
4. Készíts egy végigérő, kipróbálható folyamatot; aztán bővíts. Ne készíts előbb sok működés nélküli képernyőt.
5. Futtasd a releváns ellenőrzéseket. Ne nevezd a demótesztet élő integrációs tesztnek.
6. Frissítsd a STATUS.md-t: mi készült el, milyen bizonyítékkal, mi maradt, melyik a következő task ID.
7. Blokkolt adapter mellett a többi engedélyezett munkát végezd el. Hozzáférést vagy publikálást csak a szükséges ponton kérj.

Az olcsóbb modellnek ne kelljen új technológiai stratégiát kitalálnia. Eltérés csak konkrét inkompatibilitás esetén, DECISIONS.md-ben indokolva. Nem kell párhuzamos ügynökrendszert építeni: ez a terv sorosan is végrehajtható.

## 10. Tudástári információs architektúra

**Javasolt gyűjteménycím:** AI-rendszerkönyvtár.

**Javasolt gyűjteményútvonal:** `/tudastar/ai-rendszerek`.

**Rendszeraloldalak:** `/tudastar/ai-rendszerek/{slug}`, a 3. fejezet slugjaival. Ezeket route-ütközésre ellenőrizni kell a repositoryban. Nem külön Vercel-projektként, hanem a meglévő tudástár részeként kell tervezni.

A `/tudastar` „Hatékony munka AI-jal” szekciójába egy új belépőkártya kerül, a meglévő tartalmak törlése nélkül. Címke: „Rendszersablonok”. Cím: „AI-rendszerkönyvtár”. Leírás: „Kilenc személyre szabható üzleti rendszer az érdeklődők kezelésétől a heti áttekintésig. Válassz egyet, és építtesd meg a saját vállalkozásodra Codexszel vagy Claude Code-dal.”

### Gyűjteményoldal felépítése

1. Meglévő közös fejléc és navigáció.
2. Vissza a Tudástárhoz hivatkozás, nagy cím, rövid bevezető.
3. „Hogyan használd?” három rövid lépése; a korlátokról egy rövid mondat.
4. Szűrők: Összes / Ügyfélszerzés / Ügyfélkezelés / Háttérműködés.
5. Kilenc kártya: kategória, cím, 2–3 mondat, rövid kimenet, alul GitHub-hivatkozás.
6. Egyszerű közös lábléc.

A kártyacím a saját tudástári aloldalra navigáljon, az alján lévő egyetlen CTA a GitHub-projektet nyissa meg. Ne legyen egymásba ágyazott két link vagy két külön „Megnyitom”/„Letöltés” CTA. A látogató közvetlenül a kártyáról is elérje a repositoryt; az aloldal a részletesebb megértéshez van.

Kilenc elemhez kereső és komplex ajánló nem szükséges. A kiválasztott kategória URL-paraméterben tartható (`?kategoria=ugyfelszerzes`), a böngésző vissza gombja működjön. Ismeretlen érték esetén Összes nézet.

### Rendszeraloldal felépítése

Meglévő fejléc → gyűjteményhez visszalépés → cím és 2–3 mondatos leírás → „Miben segít?” → „Mit építesz meg?” → „Mire lesz szükséged?” → „Hogyan indulj el?” → **a tartalom végén egy GitHub-hivatkozás** → meglévő lábléc.

Asztali nézetben a meglévő jobb oldali tartalomjegyzék a négy szakaszra mutat. A letöltési blokkot és a több AI-szolgáltatós indítógombokat ezen az oldaltípuson el kell hagyni, mert itt a GitHub az egyetlen anyagátadási csatorna. A globális navigáció normál linkjei természetesen maradnak.

Ne legyen feliratkozási fal, ZIP-letöltés, új fiókkövetelmény vagy extra konzultációs blokk az anyag eléréséhez. A közös fejléc meglévő konzultációs hivatkozása maradhat.

## 11. Kész szöveg a gyűjteményhez

**Főcím:** AI-rendszerkönyvtár

**Bevezető:** Kisebb üzleti rendszerek, amelyek segítenek rendben tartani az érdeklődőidet, az ügyfélmunkát és a napi feladatokat. Válaszd ki azt, amire most szükséged van, majd add át a GitHub-projektet Codexnek vagy Claude Code-nak, hogy a saját vállalkozásodra szabja.

**Hogyan használd?**

1. Válassz egy rendszert a megoldandó feladat alapján.
2. Nyisd meg a GitHub-projektet, és kövesd az ott leírt indítást.
3. Kérd az AI-t: „Építsd meg ezt nekem az én vállalkozásomra.” Válaszolj a kérdéseire, és próbáld ki az elkészült változatot.

**Rövid kiegészítés:** A saját adataidat és a szükséges szolgáltatói hozzáféréseket neked kell megadnod. A kapcsolódó szolgáltatások használata külön költséggel járhat.

### A kilenc kártya végleges szövege

| Cím | Leírás | Kimenet |
|---|---|---|
| Ügyfélszerző rendszer | Egy helyre rendezi a jelentkezést, a válaszadást, az időpontfoglalást és a következő lépéseket. Így követhető marad, mi történik az érdeklődővel az első üzenettől a megállapodásig. | Jelentkezési oldal és követhető érdeklődőlista. |
| Érdeklődő-minősítő rendszer | Összefoglalja a beérkező igényt, összeveti a saját szempontjaiddal, és jelzi, mit kell még tisztáznod. A válasz első változatát is előkészíti. | Áttekinthető érdeklődések, indoklással. |
| Ajánlatkészítő rendszer | A jegyzeteidből és a saját szolgáltatásaidból összeállítja az ajánlat első változatát. A terjedelmet, az árat és a feltételeket ellenőrizheted, mielőtt továbbküldöd. | Szerkeszthető, exportálható ajánlat. |
| Ügyfél-onboarding rendszer | Összegyűjti, mire van szükség az új ügyféllel való induláshoz. Követhetővé teszi az adatbekérést, a dokumentumokat és az első feladatokat. | Rendezett projektindítás, látható hiányokkal. |
| Ügyfélkezelő rendszer | Egy helyen tartja az ügyfelekhez kapcsolódó feladatokat, jegyzeteket és vállalásokat. Megmutatja, hol maradt el egy válasz vagy csúszott meg egy teendő. | Ügyféláttekintés és napi teendőlista. |
| Meetingből teendők | A megbeszélés leiratából kiemeli a döntéseket, a feladatokat és a nyitott kérdéseket. Az összefoglalót és az utánkövető levelet átnézheted és javíthatod. | Jóváhagyható összefoglaló és feladatlista. |
| Utánkövető rendszer | Számon tartja, melyik érdeklődésnél vagy ajánlatnál esedékes a következő lépés. Az előzmények alapján megírja az utánkövető üzenet tervezetét. | Napi követési lista és levéltervezetek. |
| Ügyfélszolgálati és tudásrendszer | A saját dokumentumaidból és gyakori kérdéseidből segít választ készíteni. Megmutatja, mire támaszkodik, és jelzi, amikor emberi segítség kell. | Visszakereshető tudás és forrásos válaszok. |
| Heti üzleti áttekintő | Összerendezi a hét fontos számait és nyitott feladatait. Jelzi az adatbeli hiányokat, és segít kiválasztani, minek érdemes utánanézned. | Heti helyzetkép és következő lépések. |

Minden kártya alsó linkfelirata: **GitHub-projekt ↗**. Akadálymentes neve tartalmazza a rendszer nevét is. A címekben nem kell kilencszer megismételni az „AI-alapú” jelzőt: a gyűjtemény kontextusa ezt már megadja.

## 12. A kilenc aloldal rövid tartalma

A bevezető minden oldalon a fenti kártyaleírás. Az alábbi szöveg a publikálásra szánt rövid tartalom; csak az adott kiadás tényleges képességeivel együtt használható.

### Ügyfélszerző rendszer

**Miben segít?** Ha több helyen követed a jelentkezéseket, könnyű elveszíteni a következő lépést. Ez a rendszer egy folyamatba rendezi az érdeklődés kezelését.

**Mit építesz meg?** Egy jelentkezési oldalt, érdeklődőlistát, választervezeteket és foglalási kapcsolódást. A státuszokból látod, kivel mi történt és mi következik.

**Mire lesz szükséged?** A szolgáltatásod leírására, célcsoportodra, a jelentkezésnél kért adatokra és a foglalási linkedre. Az automatikus e-mail-küldéshez külön szolgáltatói bekötés kell.

### Érdeklődő-minősítő rendszer

**Miben segít?** Gyorsabban átlátod, mit kér az érdeklődő, mennyire illik hozzád a feladat, és mit kell még megkérdezned.

**Mit építesz meg?** Egy felületet, amely összefoglalja az érdeklődéseket, megmutatja az értékelés szempontjait, és előkészíti a válaszokat. Az értékelést bármikor felülírhatod.

**Mire lesz szükséged?** A szolgáltatásaidra, néhány tipikus érdeklődésre és a saját döntési szempontjaidra. A hiányzó információ kérdésként marad meg.

### Ajánlatkészítő rendszer

**Miben segít?** Nem kell minden ajánlat szerkezetét újra kitalálnod. Az ügyféligény és a saját szolgáltatási adataid alapján indulhatsz.

**Mit építesz meg?** Egy ajánlatszerkesztőt, amelyben rendezheted a feladatokat, árakat, ütemezést és feltételeket, majd exportálhatod az ellenőrzött ajánlatot.

**Mire lesz szükséged?** Saját árakra vagy árképzési szabályokra, szolgáltatásleírásra és a megbeszélés jegyzeteire. Az üzleti feltételekről te döntesz.

### Ügyfél-onboarding rendszer

**Miben segít?** Az igen után is világos marad, ki mire vár és mi kell a közös munka elindításához.

**Mit építesz meg?** Egy indulási ellenőrzőlistát, adat- és dokumentumnyilvántartást, üdvözlőlevél-tervezetet és első feladatlistát.

**Mire lesz szükséged?** A projektindítás lépéseire, a szükséges adatok listájára és egy saját üdvözlő mintára, ha már van. Jelszavakat ne gyűjts az adatbekérőben.

### Ügyfélkezelő rendszer

**Miben segít?** Könnyebben áttekintheted az aktív ügyfeleidet és a hozzájuk kapcsolódó vállalásaidat.

**Mit építesz meg?** Ügyféladatlapokat, projekt- és feladatlistát, kapcsolattartási előzményeket és heti figyelmeztető összefoglalót.

**Mire lesz szükséged?** Az ügyfeleidre, nyitott feladataidra és arra, hogyan szeretnéd követni a kapcsolattartást. A rendszer kis mintalistával is kipróbálható.

### Meetingből teendők

**Miben segít?** A megbeszélés után gyorsabban összeállíthatod, miben döntöttetek, és mi következik.

**Mit építesz meg?** Egy leiratfeldolgozó felületet összefoglalóval, döntésekkel, feladattervezetekkel és utánkövető levéllel. A bizonytalan részeket külön jelzi.

**Mire lesz szükséged?** Egy szöveges leiratra vagy jegyzetre, a beszélgetés dátumára és a résztvevők nevére. Az alapváltozat nem rögzíti a hívásaidat.

### Utánkövető rendszer

**Miben segít?** Nem kell fejben tartanod, kinek ígértél választ vagy melyik ajánlat után kellene érdeklődnöd.

**Mit építesz meg?** Egy esedékességi listát és üzenettervezeteket, amelyeket az előzmények és a saját követési szabályaid alapján készít el a rendszer.

**Mire lesz szükséged?** Az érdeklődéseidre vagy ajánlataidra, az utolsó kapcsolatfelvétel dátumára és a követési szabályaidra. Automatikus küldéshez a válaszok megbízható követése is kell.

### Ügyfélszolgálati és tudásrendszer

**Miben segít?** A gyakran ismétlődő kérdéseknél nem kell újra megkeresned ugyanazokat az információkat.

**Mit építesz meg?** Egy belső tudásfelületet, amely a jóváhagyott dokumentumaidból készít válaszokat, forráshivatkozással. A nyilvános webchat külön beköthető változat.

**Mire lesz szükséged?** Naprakész leírásokra és gyakori kérdésekre. El kell különítened a belső és az ügyfeleknek is megmutatható tudást.

### Heti üzleti áttekintő

**Miben segít?** Könnyebb átlátni a hetet, ha a számok és a nyitott feladatok azonos időszakra vonatkoznak és egy helyen látszanak.

**Mit építesz meg?** Egy heti összefoglalót az érdeklődésekről, ajánlatokról, ügyfelekről, befizetésekről és feladatokról, adatminőség-jelzésekkel.

**Mire lesz szükséged?** Dátumozott adatokra, akár egy egyszerű táblázatból. Amit nem adtál meg, azt a rendszer hiányzó adatként mutatja.

### Közös záróblokk mind a kilenc oldalon

**Hogyan indulj el?** Nyisd meg az alábbi GitHub-projektet, és kövesd a README rövid útmutatóját. Add át a projektet Codexnek vagy Claude Code-nak, majd kérd: „Építsd meg ezt nekem az én vállalkozásomra.” Először egy kipróbálható változat készüljön, utána kösd be a szükséges szolgáltatásokat.

**Alsó hivatkozás:** GitHub-projekt ↗ — az adott rendszer tényleges, ellenőrzött repositoryjára.

## 13. Designilleszkedési specifikáció

### Élő oldalon mért asztali értékek

Az alábbiak 2026-10-05-én, az akkori böngészőnézetben megfigyelt értékek. Referenciák, nem új globális tokenek és nem minden nézetre érvényes konstansok.

| Elem | Megfigyelt érték | Kivitelezési utasítás |
|---|---|---|
| Gyűjtemény H1 | Geist Variable, Arial, sans-serif; 64 px; 400; 60 px line-height | Meglévő H1-osztály/tokent használd, mobil értéket a forrásból vedd. |
| H1 szín | rgba(246,243,236,0.88) | Meglévő szövegszín-változó. |
| Ajánló kártya | rgb(10,10,11) háttér | Meglévő card-contact alap megvizsgálása és újrahasználata. |
| Kártyakeret | 1 px, világos szín 0.16 alfa | A meglévő kerettokennel. |
| Kártya | 8 px lekerekítés, 32 px belső tér | Reszponzív változatok a meglévő szabályok szerint. |
| Kártya átmenet | opacity/transform 0.55 s cubic-bezier(0.22,0.61,0.36,1); háttér/keret 0.2 s | Ugyanaz az interakciós rendszer; új animációs könyvtár nélkül. |
| Megfigyelt osztályok | card-contact, bn-reveal, bn-path-card, is-in | Referencia; dinamikus állapotosztályt ne másolj vakon statikusra. |

### Megjelenési döntések

- A cím, szövegszélesség, fejléc, lábléc és oldalsó tartalomjegyzék ugyanazt a komponenst/sablont használja, mint a tudástár összehasonlítható oldalai.
- Az új elemek stílusai saját `bn-systems` hatókör alatt legyenek, ha a meglévő struktúra ezt igényli; globális h1/a/button szabály felülírása tilos.
- Kártyarács javaslata: nagy képernyőn 3, köztesen 2, mobilon 1 oszlop. Pontos töréspontokat a meglévő gridből kell átvenni.
- Kártyák szövege nincs durván levágva; a GitHub-link a kártya alján igazodik. A teljes kártya nem lehet külső link, ha benne külön aloldallink van.
- Hosszú magyar címek törhetnek; ne legyen fix magasságú címkonténer, amely levágja őket.
- A navigáció és a fejlesztési sáv ne takarja el a hero tartalmát vagy az anchorok címét. Sticky elemek magasságához illő scroll offset szükséges.
- A tartalomjegyzék mobilon egyszerű összecsukható vagy szövegbe rendezett navigáció; a meglévő mobilmegoldást követi.
- Hover mellett billentyűzetes focus is jól látható. Szűrők valódi gombok, kiválasztott állapot programozottan jelzett. Külső link új lap esetén érthető címke és megfelelő rel.
- Reduced motion esetén a belépő animáció kiiktatott; JavaScript-hiba esetén sem maradhat láthatatlan a tartalom.
- Világos témát csak akkor kell örökíteni, ha a meglévő oldal támogatja; a támogatott témákat nem szabad elrontani. A jelen vizsgálat kizárólag sötét asztali nézetet igazolt.

### A kivitelezés előtti designleltár

A P00 feladatban rögzítsd a tényleges template/component és CSS-fájlok útvonalát, a betűkészletet, színváltozókat, konténerszélességeket, spacinget, töréspontokat, header viselkedést, fókusz/hover állapotot és a meglévő reveal mechanizmust. Ha a kód nem elérhető, az oldalterv megépíthető külön előnézetben, de „teljes designilleszkedésként” nem fogadható el a forrásellenőrzés nélkül.

## 14. Tartalomadatok, SEO és oldalkészítési feladatok

Egyetlen közös katalógusadat-forrás legyen: id, slug, category, title, short_description, outcome, body_sections, repo_url, repo_release, status, verified_at, tags. A gyűjtemény, a kilenc aloldal és a tudástári belépőkártya ebből származzon, ahol a meglévő rendszer ezt megengedi.

`status`: draft / demo-ready / connected-tested. A „hamarosan” szöveg nem helyettesíthet működő repositoryt egy késznek hirdetett oldalon. Draft elemek csak előnézetben látszanak. Publikus elemnél repo_url és ellenőrzött kiadás kötelező. Placeholder linket `#`-re vagy kitalált GitHub-címre kötni tilos.

Title-séma: „{Rendszer neve} — AI-rendszerkönyvtár — Business Native”. Egy H1, következetes H2 szakaszok; egyedi meta description a rövid leírásból. Canonical a tényleges éles cím, belső linkek a kanonikus slugra. Sitemap és a tudástár belső keresője/asszisztense csak akkor frissítendő, ha ténylegesen rendelkezik ilyen indexszel; a P00 során fel kell deríteni. A publikus oldal tartalma már az első kiszolgálásban olvasható legyen a meglévő oldal megoldása szerint.

Analitika opcionális: `system_detail_open`, `system_github_click`, system_id, category. Személyes adatot vagy chatpromptot ne tegyen analitikai eseménybe. Csak a meglévő hozzájárulási rendszer szabályai mellett fusson.

Oldalkészítési sorrend: adatforrás → meglévő sablonhoz illesztett egy próbaaloldal → gyűjtemény → fennmaradó 8 adatvezérelt oldal → tudástári belépőkártya → navigáció és SEO → vizuális ellenőrzés → preview átadás. A GitHub-linkek publikálása csak a repositoryk ellenőrzése után.

## 15. EVAL és átadási kapuk

### Tervezési ellenőrzés, ebben a dokumentumban

| Feltétel | Állapot |
|---|---|
| Mind a 9 rendszer célja, bemenete, MVP-je, folyamata és kimenete rögzített | PASS |
| Modulonként tesztesetek, fejlettebb és egyedi bővítési határ szerepel | PASS |
| Codex/Claude Code belépőfájlok, rövid felmérés és folytathatóság tervezett | PASS |
| Kártya- és aloldalszövegek, GitHub CTA, útvonalak tervezettek | PASS |
| Megfigyelt designértékek és még ellenőrizendő részletek elválasztva | PASS |
| Aktuális weboldal-forrásfájlok és GitHub írási jogosultság ellenőrzött | NEM ELLENŐRZÖTT; kivitelezési előfeltétel |
| Működő alkalmazások, valós integrációk, publikált repositoryk | NEM KÉSZÜLT; most nem kért kivitelezés |

### Közös alkalmazáskapuk

G01 Tiszta letöltésből, dokumentált lépésekkel indítható. G02 A választott üzleti profil mentés és újraindítás után megmarad. G03 Nincs valódi titok vagy személyes adat a repositoryban. G04 Minden AI-eredmény ellenőrzött sémájú, hiányzó adatra nincs kitalált tény. G05 A fő út végigjárható, nem csak képernyők léteznek. G06 AI/API-hiba nem veszít forrásadatot. G07 Jóváhagyás nélküli külső küldés nem történik. G08 Ugyanazon esemény újrafeldolgozása nem duplikál rekordot/küldést. G09 Az adott rendszer 19. fejezetben L kategóriába sorolt összes helyi tesztje PASS; a C/H tesztek az alapkiadásban NOT RUN, nem PASS. G10 Helyi demó és éles kapcsolat láthatóan különbözik.

Hosted kiadáshoz plusz: H01 bejelentkezés és objektumszintű hozzáférésteszt; H02 igazolt mentés-visszaállítás; H03 kulcsok csak szerveren; H04 valódi szolgáltatói teszt engedélyezett tesztcímmel; H05 ütemezés újraindítás után is működik; H06 webhook-hitelesítés és deduplikáció; H07 költség- és forgalmi korlát; H08 alapfeltételeknek megfelelő adatkezelési konfiguráció és üzemeltetési leírás.

### Asztali indítási és hordozhatósági kapu

Legalább egy tiszta Codex és egy tiszta Claude Code munkamenetben ellenőrizendő: a repository elérése vagy a helyi mappa megnyitása; a közös utasítások tényleges beolvasása; a rövid felmérés; profilmentés; indítás; fő folyamat; új sessionben folytatás a STATUS.md alapján. Rögzíteni kell a kliens és az operációs rendszer verzióját. Windows és macOS indítási útmutatóhoz külön ellenőrzés kell; ami nem futott le, „nem ellenőrzött”, nem automatikusan támogatott. A publikus kompatibilitási táblázat ezt a különbséget mutassa.

Személyre szabási próba: ugyanaz a sablon egy fiktív webes stúdió és egy fiktív tanácsadó profiljával is működjön, eltérő szolgáltatásnevekkel, árakkal és megszólítással. Ne maradjon benne BusinessNative-specifikus ár, e-mail vagy ügyféladat. A meeting–ügyfélkezelő összekötésben az ismételt szinkron egyetlen feladatot eredményezzen, az ajánlat–onboarding kapcsolatban pedig csak a megfelelő elfogadott ajánlatverzió indíthasson projektet.

### Konkrét közös demóadat

Fiktív vállalkozás: Minta Stúdió, magyar, Europe/Budapest, HUF. Szolgáltatás: weboldal-átvilágítás, rögzített 100 000 Ft, demóban 0 adó kizárólag számítási tesztként. Érdeklődő A: ismert cél, ismert keret, megfelelő terjedelem. B: keret hiányzik. C: már válaszolt. D: leiratkozott. Meeting: egy vállalt és egy csak felvetett feladat. Tudás: egy public árlista és egy internal dokumentum. Heti adat: hiányzó pénzügyi forrás és két pénznem külön tesztesetben. Minden e-mail példa fenntartott tesztdomaint használjon, ne valós címet.

AI értékelésekor ne a teljes szövegegyezés legyen az elvárás, hanem a tények, források, tiltott találgatások és strukturált mezők helyessége. A minimális tesztkészlet minden modul saját eseteit és a közös hibás/adathiányos eseteket tartalmazza. Élő AI-próbát dokumentált bemenettel és eredménnyel kell elkülöníteni a determinisztikus fixture-teszttől.

### Weboldal kapuk

W01 Az új belépőkártya az AI-részben jelenik meg, a régi anyagok megmaradnak. W02 Mind a 9 kártya és aloldal elérhető. W03 Minden publikált GitHub-link ténylegesen létező, a jó projektre mutat, kijelentkezve is olvasható, ha publikusnak hirdetett. W04 Alul egy GitHub CTA, nincs ZIP vagy más AI-indító gombsor. W05 360, 390, 768 és 1440 px szélességen nincs vízszintes túlcsordulás vagy levágott cím. W06 Billentyűzettel elérhető a szűrés, navigáció és CTA. W07 A fejléc/fejlesztési sáv nem takar el címet. W08 Meglévő betűk, tokenek és komponensek használata dokumentált. W09 Reduced motion és JS nélküli tartalomolvashatóság rendben. W10 Nincs placeholder, hibás belső link, duplikált H1 vagy új konzolhiba.

A webes ellenőrzéshez asztali és mobil screenshot kell a gyűjteményről és egy hosszú című aloldalról; a többi oldalra tartalom- és linkellenőrzés elég, ha ugyanazt a sablont használja. Nem kell indokolatlanul minden oldal minden képpontját többször tesztelni.

Átadási állapotok: PASS / FAIL / BLOCKED / NOT RUN. A „nem futtatható hozzáférés hiányában” nem PASS. Tesztjelentés: azonosító, bemenet/környezet, elvárt, tényleges, bizonyíték, dátum. A készültségi összefoglaló külön sorolja a helyi működést, élő AI-t, külső integrációt és publikálást.

## 16. Indító és átadási promptok

### A) Prompt Attila kivitelező ügynökének

> Olvasd el a BusinessNative-AI-rendszerkonyvtar-teljes-terv.md dokumentumot. Ez a jóváhagyásra előkészített műszaki és tartalmi specifikáció. A feladat a kilenc üzletirendszer-sablon és a hozzájuk tartozó BusinessNative tudástári oldalak megvalósítása a leírt sorrendben. Először a P00 leltárt végezd el, majd a közös alapot és a 06 Meeting → teendő pilotot. Ne építs újra meglévő működő részeket. A tudástárban a meglévő sablonokat, stílusokat és interakciókat használd; új globális designrendszert ne hozz létre. Minden session végén frissítsd a STATUS.md-t konkrét teszteredménnyel és a következő feladattal. A GitHub URL-eket csak létrehozott és ellenőrzött repositoryból töltsd ki. Először helyi vagy preview változatot adj át; éles publikálásra külön, konkrét engedély alapján lépj. Ahol hiányzik a hozzáférés, jelöld BLOCKED állapottal, de a többi munkát folytasd. Az aktuális fázis elfogadási kapuját teljesítsd, mielőtt továbbmész.

Ez a prompt a későbbi kivitelezésre való; a jelen tervezési sessionben nem hajtandó végre.

### B) START-HERE.md-be kerülő közös ügynökutasítás

> A felhasználó ezt a rendszert a saját vállalkozására szeretné felépíteni. Olvasd a README.md, docs/BUILD-CONTRACT.md, docs/SYSTEM-SPEC.md és STATUS.md fájlokat. Először állapítsd meg, van-e már működő projekt és üzleti profil. Az ismert adatokat ne kérdezd újra. A hiányzó legfontosabb adatokat röviden, legfeljebb három kérdéssel kérd be. Alapértelmezésben a legkisebb működő, demóadatokkal kipróbálható változatot készítsd el. A saját vállalkozási adatokat csak a megfelelő privát profilban tárold. Tartsd meg a rendszer adatmodelljét, jóváhagyási és biztonsági szabályait. Ne találj ki árat, ügyféladatot, hozzáférést vagy sikeres tesztet. Titkok beállításához helyi környezeti változót vagy a szolgáltató biztonságos felületét használd. Külső küldést és éles publikálást csak az adott feladatra szóló engedéllyel végezz. Futtasd a modul elfogadási tesztjeit, majd mutasd meg a kipróbálható eredményt, a valóban működő kapcsolatokat és a még szükséges lépéseket.

### C) Rövid felhasználói prompt minden publikus README tetejére

> Építsd meg ezt nekem az én vállalkozásomra. Olvasd el a projekt START-HERE.md fájlját, kérdezd meg, amit még tudnod kell, és először készíts egy kipróbálható változatot.

Ha csak URL adható át: a prompt elé a valós GitHub-link kerüljön. Ha az ügynök nem éri el a repositoryt, kérje a letöltött projektmappa megnyitását; ne úgy tegyen, mintha elolvasta volna.

### D) Folytatási prompt olcsóbb modellnek

> Folytasd a munkát a STATUS.md következő feladatától. Ne kezdd újra a projektet. Olvasd csak az aktuális feladathoz szükséges specifikációt, ellenőrizd a meglévő állapotot, majd készítsd el a hiányzó részt. A releváns elfogadási eseteket futtasd le, és külön jelezd a PASS, FAIL, BLOCKED és NOT RUN eredményeket. Frissítsd a státuszt úgy, hogy egy következő session ugyaninnen tudjon folytatni.

## 17. Nyitott döntések és az alapértelmezett irány

| Döntés | Jelen terv alapértéke | Mikor kell véglegesíteni? |
|---|---|---|
| GitHub-tulajdonos | Ellenőrzendő, nincs kitalált URL | P09 publikálás előtt |
| Pontos honlapfájlok | Aktuális repositoryból leltározandó | P00 |
| Sablonok licence | MIT javaslat, márkaanyag külön | Publikálás előtt |
| AI-szolgáltató/modell | Egy adapter, profilból konfigurálva, demóval | Első valós AI-próba előtt |
| E-mail és foglalás | Felhasználó meglévő eszköze, egy támogatott adapter | Bekötött szint előtt |
| Hosting | Helyi indulás; hostednál tartós Node + PostgreSQL | Élesítés előtt |
| Először megépülő rendszer | Meeting → teendő, utána ajánlatkészítő | A kivitelezés indulásakor |
| Új weboldal megjelenése | Meglévő tudástári komponensek és tokenek | P00 után, previewban igazolva |

Ezek nem akadályozzák a tervezést vagy a helyi alap megépítését. A hiányzó hozzáférést nem szabad kitalált eredménnyel helyettesíteni.

## 18. Források és ellenőrzési nyom

Az üzleti funkciók és a kártyaszövegek a felhasználó kilenc rendszerötletéből továbbtervezett saját javaslatok. Nem külső termékek funkcióígéretei.

- BusinessNative Tudástár: https://www.businessnative.hu/tudastar — szekciók és jelenlegi tartalmi környezet; 2026-10-05.
- Skill-könyvtár: https://www.businessnative.hu/tudastar/skill-konyvtar — élő asztali megjelenés és kártyastílus, valamint számított CSS-értékek; 2026-10-05.
- Árajánlat-készítő aloldal: https://www.businessnative.hu/tudastar/skill-konyvtar/skillek__arajanlat-keszito — élő aloldalszerkezet, tartalomjegyzék, fejléc és lábléc; 2026-10-05.
- E-mail automatizációk: https://www.businessnative.hu/tudastar/email-folyamatok — kiegészítő tartalmi referencia.
- OpenAI, AGENTS.md: https://learn.chatgpt.com/docs/agent-configuration/agents-md — projektutasítási fájl használatának hivatalos dokumentációja, a developers.openai.com hivatkozásról átirányítva; 2026-10-05.
- Claude Code Desktop: https://code.claude.com/docs/en/desktop — asztali fejlesztőfelület hivatalos dokumentációja; 2026-10-05.
- Claude Code projektmemória: https://code.claude.com/docs/en/memory — projektutasítások hivatalos dokumentációja; 2026-10-05.

A dokumentációk és a weboldal idővel változhatnak. A kivitelezéskor a telepítési lépéseket, verziókat és a tényleges designforrásokat ellenőrizni kell; a fenti tervezési döntések ettől külön, a projekt saját követelményei.

## 19. Az eval során pontosított kivitelezési szerződések

Ezek a v1.1 pontosításai, a korábbi fejezetekkel együtt érvényesek. Nem új termékkört vezetnek be, hanem az eredetileg kért működéshez hiányzó részleteket rögzítik. Itt szereplő tesztek megtervezett elfogadási tesztek; alkalmazás hiányában nem lefuttatott teszteredmények.

### 19.1. Entitások, állapotok és megőrzött előzmények

| Entitás/szerződés | Minimális mezők, szabályok |
|---|---|
| Booking | contact_id, lead_id opcionális, source, external_id opcionális, booked_at, scheduled_start/end, occurred_at opcionális, confirmed/cancelled/completed/no_show státusz; provider+external_id workspace-on belül egyedi. Lemondás nem fizikai törlés. |
| PaymentEvent | opportunity_id/project_id opcionális, kind=payment/refund, pozitív amount_minor, currency, occurred_at, source, external_id, original_payment_id refundnál, verification=manual_confirmed/provider_confirmed. Nem indít banki műveletet; csak nyilvántartás. |
| StateHistory | entity_type/id, field, old_value, new_value, effective_at, recorded_at, actor/source; rekordváltozással egy tranzakcióban. A heti riport a cutoffkori állapotot ebből vagy az importált hiteles snapshotból számolja. |
| OnboardingItem | project_id, template_item_id, required, type, value/file_id, pending/submitted/verified állapot, verified_by/at. Egy projektben egy template_item_id egyszer szerepel. |
| FollowupPolicy | trigger, offsets_business_days, max_steps, local_send_time, timezone, enabled, version. V1 alap: [3,7], 2 lépés, 09:00, hétfő–péntek. |
| FollowupJob | subject_type/id, policy_version, step_index, due_at, draft_id, pending/paused/cancelled/completed; egy subject+policy_version+step_index egy munka. A küldési próbálkozás külön Message/Job rekord. |
| KnowledgeChunk | document_id, document_version, chunk_index, text, source_location, visibility; dokumentumhoz kötött szűrés. Keresés és cache-kulcs is tartalmazza a verziót és hozzáférési kört. |
| SupportTicket | question, kapcsolódó kontakt opcionális, források, escalation_reason, open/assigned/resolved állapot. Helyi változatban belső lista; „átadva” csak valódi célrendszer-visszaigazolás után. |
| ImportBatch | source, checksum, schema_version, imported_at, field_mapping, accepted/rejected counts; külső rekordazonosítók megőrzése. Ugyanaz a checksum+source import újrapróbálva nem duplikál. |

Contact és Lead szétválasztása: egy Contactnak több Leadje lehet. Egy Leadhez legfeljebb egy aktív Opportunity tartozik; az Opportunity lead_id-je opcionális, így az önálló ajánlatkészítő leadmodul nélkül is használható. Új e-mailes találatnál lehetséges egyezést ajánljon fel; eltérő személyek automatikus összevonása nem megengedett. Létrehozáskor a beküldés/import stabil azonosítója akadályozza meg a duplikálást.

Projektállapot: az onboarding_status és delivery_status külön mező. Onboarding „elindult” után a delivery_status „folyamatban” lesz, ugyanabban a tranzakcióban. Már elkezdett projekt utólagos adatpótlása nem állítja vissza automatikusan a teljesítést. Ajánlat nélküli kézi indulásnál proposal_id=null, de engagement_source=manual és megerősítő szereplő/időpont kötelező. Így az önálló onboarding nem függ kötelezően az ajánlatmodultól.

Ajánlatnak stabil proposal_id-je és külön revision_id-je legyen. Elfogadás az adott revision_id-re vonatkozik; a korábbi elfogadott példány nem módosítható. Ügyfélvállalás, ár és szöveg snapshotként kerül a projektbe. Lejárt ajánlatot új érvényességgel csak új változatban, újbóli jóváhagyással lehet elfogadhatóvá tenni.

A csak dátum típusú határidő külön `due_date` (YYYY-MM-DD) és timezone, nem kitalált UTC időpont. Az adott nap végéig nem lejárt; másnaptól lejárt. Konkrét időpontnál `due_at` UTC. A két mező közül legfeljebb egy tölthető. A felület egyértelműen jelzi, melyiket látja a felhasználó.

Egyidejű módosításnál a kliens küldi a rekord version értékét; eltéréskor 409 és újratöltés/összevetés, nem csendes felülírás. Minden kapcsolt rekord azonos workspace-ban kell legyen. Időszaki riporthoz az effective_at és recorded_at megkülönböztetése teszi lehetővé a későn rögzített esemény miatti új riportverziót.

### 19.2. Minősítési rubrika és számszerű elvárt kimenet

Az AI csak bizonyított tényt emel ki; a pontszámot a következő, profilban módosítható szabály adja. Szubjektív szakmai megfelelésnél a felhasználó rögzíti a kategóriát, amíg nincs jóváhagyott gépi szabály. A kategória és forrás együtt jelenjen meg.

| Szempont | Teljes pont | Fél pont | Nulla | Unknown |
|---|---|---|---|---|
| Szolgáltatás (40) | a jóváhagyott szolgáltatáskatalógushoz egyértelműen rendelt igény | részben vállalható és ezt a profil engedi | katalógus szerint kizárt | nem rendelhető bizonyíthatóan szolgáltatáshoz |
| Terjedelem (20) | a profil minden rögzített scope-korlátjába belefér | a profil szerinti részleges változat vállalható | kötelező kizárásba ütközik | hiányzó terjedelem vagy hiányzó vállalkozói szabály |
| Keret (20) | budget ≥ a választott szolgáltatás minimumára | 0.8 × minimumár ≤ budget < minimumár | budget < 0.8 × minimumár | hiányzik a keret, minimumár vagy azonos pénznem |
| Időzítés (20) | igényelt határidő ≥ vállalkozó által megadott legkorábbi teljesítés | nincs fél pont | igényelt határidő korábbi a megadhatónál | bármelyik dátum ismeretlen |

Képlet: earned_points / assessed_max_points × 100, legfeljebb 1 tizedesre kerekítve. Coverage=assessed_max_points/100. Ha assessed_max_points=0, score=null. A szolgáltatás és terjedelem mindig kritikus; keret/időzítés a profilban jelölhető kritikusnak. Kritikus unknown vagy coverage<0.8 esetén „pontosítandó”. Ismert kemény kizárás esetén „jelenleg nem illeszkedő”. Máskülönben score≥70: „illeszkedő”; score<70: „átnézendő”. A folyamat alapállapota feldolgozás előtt „átnézendő”. Minden címke javaslat, nem automatikus elutasítás.

02-B pontos fixture: teljes szolgáltatás 40, teljes terjedelem 20, keret 90 000 Ft a 100 000 Ft minimumárhoz 10, megfelelő időzítés 20 → earned=90, assessed_max=100, score=90, coverage=1, címke=illeszkedő. 02-A: ugyanez hiányzó, kritikusnak jelölt kerettel → earned=80, assessed_max=80, score=100, coverage=0.8, címke=pontosítandó. A magas részpontszám nem fedheti el az adathiányt.

### 19.3. Tesztek hatóköre és kiadási feltétele

L = helyi alkalmazás és determinisztikus adapterteszt. C = valós szolgáltatóval bekötött változat. H = hozzáférés-védett hosted környezet. C és H átfedhet; interneten elérhető C környezetnek a H követelményeket is teljesítenie kell. A szimulált külső szolgáltatóra adott PASS nem minősül C bizonyítéknak.

| Modul | Kötelező L tesztek | C/H tesztek és többletfeltételek |
|---|---|---|
| 01 | 01-A/B/C/D/E kézi foglalás- és állapotváltozással | C: ugyanezen D/E hiteles foglalási/küldési eseményekkel; H: publikus form rate limit, belső adatok hozzáférésvédelme |
| 02 | 02-A/B/C/D/E | C: importáló adapter eseményéből stabil kontakt/lead azonosító |
| 03 | 03-A/B/C/D/E, reported_sent elkülönítése | C: jóváhagyott ajánlat küldése tesztcímre, sent csak provider_id mellett |
| 04 | 04-A/B/E | H: 04-C/D; C: welcome küldési visszaigazolás |
| 05 | 05-A/B/C/D | H: 05-E a támogatott szerepkörökkel; C: meetingből jóváhagyott task upsert |
| 06 | 06-A/B/C/D/E; C helyi része ismételt fájlexport | C: 06-C külső szinkronismétléskor is egyetlen feladat |
| 07 | 07-D/E; 07-L1/L2/L3 az alábbiak szerint | C: 07-A/B/C; H: worker újraindulás, adatbázisban megmaradó ütemezés |
| 08 | 08-A/B/D/E/F | H: 08-C public keresési határral; C: emberi átadás célrendszeri visszaigazolása |
| 09 | 09-A/B/C/D/E/F | C: adapterből érkező import és ismétlésvédelem |

07-L1: trigger 2026-10-05 10:00 Europe/Budapest, offsets=[3,7], 09:00, munkanap hétfő–péntek → 2026-10-08 09:00 és 2026-10-14 09:00 helyi idő. A trigger napja nem számít bele. 07-L2: helyben jelölt válasz → minden későbbi tervezet/munka cancelled, nincs új tervezetgenerálás. 07-L3: kézi reported_sent → forrással és időponttal naplózott, sent számláló változatlan. 07-E pontos időzónafixture: 2026-10-23 és 2026-10-26 09:00 helyi idő → rendre 07:00Z és 08:00Z; a teszt a standard IANA időzóna-adatbázis konverzióját ellenőrzi, nem rendszeróra-várakozást.

07-A/B/C helyben szimulálható adapterkontraktus-tesztként, de a C kapuhoz a tényleges adaptert és a szolgáltatói egyeztetést is ellenőrizni kell. Az ismeretlen küldési állapotot támogató szolgáltatónál lekérdezés oldja fel; ha nincs lekérdezési/idempotenciaképesség, unknown marad emberi egyeztetésig. „Pontosan egyszeri küldés” nem ígérhető olyan szolgáltatóval, amely ezt nem támogatja; a rendszer a vak újraküldést tiltja.

Az eredeti P02–P08 sorok elfogadási hivatkozásait mindig e mátrix szerinti L részhalmazra kell alkalmazni. P09 alapkiadás: G01–G10 + saját L tesztek; C/H hiánya látható NOT RUN. Egy connected-tested címkéhez az engedélyezett adapterek összes C/H tesztje szükséges. Egy nem támogatott adapterhez N/A jelölés csak indoklással, az ígért funkciók közül eltávolítva használható.

### 19.4. Pontos bemeneti és hibakezelési alapértékek

V1 TXT/MD bemenet: UTF-8, legfeljebb 1 MiB fájl és legfeljebb 50 000 Unicode-karakter feldolgozásonként. Üres, csak whitespace, hibás kódolás vagy korlát feletti input → feldolgozás nem indul, érthető hiba. 06-E fixture: 0 karakter és 50 001 karakter külön eset; 50 000 elfogadható. Nagyobb leirat darabolása későbbi bővítés. A fájlnév megjeleníthető, de tárolási útvonalat a szerver generál.

Onboarding fájlok: TXT/MD/PDF/JPEG/PNG, maximum 10 MiB/fájl és 20 fájl/projekt alapérték. Hosted feltöltés karanténba kerül; ellenőrzésig nem tölthető le ügyféloldalon és nem dolgozható fel AI-val. A fájltípus tartalom alapján ellenőrzendő, az eredeti nevet útvonalnak használni tilos. 04-E fixture: 10 MiB+1 bájt fájl elutasítva; engedélyezettnek nevezett, de eltérő típusú fájl elutasítva. Az MVP nem ígér teljes malware-felismerést, csak típus- és méretellenőrzést; hosted kiadáshoz dokumentált fájlellenőrzési megoldás kell.

CSV alapérték: UTF-8, vessző vagy pontosvessző a felhasználó által jóváhagyott előnézetben; maximum 5 MiB és 10 000 adatsor. Fejléc és kötelező mezők párosítása után indulhat import. Hibás sorok sorszámmal és okkal külön maradnak; a felhasználó választhat javítást vagy csak az érvényes sorok importját. Kötelező mezők modulonként: 02 external_id + inquiry_text; 07 external_id + subject_id + trigger_at + last_reply_at opcionális + stopped; 09 external_id + event_type + occurred_at + entity_id, fizetésnél amount_minor + currency + kind. A 09 CSV státuszmódosításnál field/new_value mezőket is kér. A forrásazonosítót importonként a felhasználó nevezi meg. Exportban a táblázatképletként értelmezhető cellákat védeni kell.

AI timeout 60 másodperc; átmeneti 429/5xx esetén maximum 2 újrapróbálás, legfeljebb 10 és 30 másodperces késleltetéssel és szolgáltatói Retry-After figyelembevételével, ha a job határidejébe belefér. Sémára javító egy új kérés ezen felül legfeljebb egyszer, külön költségként naplózva. 4xx hitelesítési vagy jogosultsági hiba nem ismételhető vakon. Ezek konfigurálható induló korlátok, nem szolgáltatói képességállítások.

AI-tesztek minimális elvárása: minden kinyert dátum/név/összeg és vállalás visszamutat bemeneti szövegrészletre vagy jóváhagyott profilmezőre. A hibás fixture tényének kitalálása FAIL. „Forrásos” címke csak ténylegesen ellenőrizhető hivatkozás esetén. A szabad megfogalmazás változhat, a kötelező tények, nullok és tiltott állítások nem.

### 19.5. Adatbázisváltás és közös alap kiadása

A helyi SQLite → hosted PostgreSQL átállás egyszeri, verziózott adatátvitel: írások és ütemezés szüneteltetése → helyi mentés → sémaazonosítóval JSON export → PostgreSQL séma létrehozása → import az eredeti UUID-kkel és időpontokkal → rekordszám, kapcsolatok, pénznemenkénti összegek és aktív munkák összevetése → próbabejelentkezés és fő folyamat → forgalom átváltása. Sikertelen ellenőrzéskor nincs átváltás. Régi worker nem futhat együtt az újjal. Visszaállásnál az új rendszerbe keletkezett írásokat előbb rendezni kell; régi snapshot vak visszatöltése nem elfogadható. Helyi alapkiadáshoz PostgreSQL üzemeltetés nem kötelező, hosted kiadáshoz ez a migrációs próba igen.

A közös alap kiadásonként rögzített, a publikus repositoryba bemásolt forrás legyen core_version és source_commit mezőkkel. Futáskor nincs privát package-registry függőség. A közös javításokat release-frissítés emeli át, majd futnak az érintett modulok L tesztjei. Két rendszer egy projektbe illesztése előtt core- és schema-verzió kompatibilitásvizsgálat szükséges. Nem kompatibilis változatoknál automatikus összeolvasztás helyett export/import marad az út.

### 19.6. Kivitelezési feladatok ellenőrizhető darabolása

A P00 két ága független: P00-A a sablonok fejlesztési környezetét és Git-állapotát leltározza, P00-B a BusinessNative oldal tényleges fájljait és designját. A P00-B hozzáférési akadályát STATUS.md-ben kell rögzíteni, de a P01–P09 munkát nem állítja le.

Minden P02–P08 modul hat külön feladata: T1 séma és fixture; T2 szerveroldali szabályok és L tesztek; T3 felület és üres/hibaállapot; T4 AI-demó és jóváhagyás; T5 teljes helyi felhasználói út ellenőrzése; T6 README, indítás és státusz. Task ID például P02-T3. Előfeltétel T1→T2→T3→T4→T5→T6; a felületbe már T3-ban beköthető a determinisztikus minta. T5-nél minden saját L teszt és G01–G10 releváns része kell. T6-nál tiszta checkoutból megismételhető indítás kell. A valós adapterek külön C-{modul}-{adapter} munkacsomagok, hozzáférés- és tesztcím-előfeltétellel.

A dokumentum megvalósítási parancsokat nem állít létezőként. P01-ben kötelező létrehozni és a README-ben dokumentálni a következő parancsszerződést: npm install/ci, npm run dev, npm run build, npm run lint, npm run typecheck, npm test, npm run test:e2e, npm run db:migrate, npm run db:backup és npm run db:restore. A parancsnevek tervezett célok; csak valódi script és sikeres futás után minősíthetők működőnek. Nem kell olyan platformtesztet PASS-nak írni, amelyhez nincs környezet.

P10-nek nem kell megvárnia a P09 végét: a tartalom és design előnézetben már elkészíthető. Valódi repository nélküli előnézetben a GitHub CTA nem kattintható, „Repository még nincs kiadva” jelöléssel. P11 előtt minden látható rendszerhez valódi publikus link kötelező. Így nem kerül kitalált hivatkozás a publikus oldalra.

## 20. Tervezési eval — baseline, javítások és újraellenőrzés

### Rögzített feltételek

Ezt a tíz feltételt a javítások előtt közöltem a felhasználóval. Scope: a tervezési dokumentum átadhatósága; nem a még el nem készült alkalmazások működése.

| ID | Objektív PASS feltétel | Baseline v1.0 | Végső v1.1 | Bizonyíték / eltérés |
|---|---|---|---|---|
| E1 | Mind a 9 modulhoz cél, bemenet, folyamat, képernyő, kimenet és teszteset tartozik | PASS | PASS | 7. fejezet: 9 specifikáció, 47 eredeti azonosított eset |
| E2 | Az MVP, valós integráció és bővítés határa a kiadási kapukban sem keveredik | FAIL | PASS | A 04/05/07/08 hosted tesztjeit korábban az alapkiadás is megkövetelte; 19.3 tesztmátrix javítja |
| E3 | Az adatmodell és modulkapcsolatok azonos fogalmakat használnak, minden szükséges adatforrás definiált | FAIL | PASS | Project státuszütközés; hiányzó Booking/Payment/history; kézi vs igazolt küldés; javítva 5–7. és 19.1 fejezetben |
| E4 | A két fejlesztőeszköz indítása, profilfelmérése és folytatása meghatározott | PASS | PASS | 3–4., 15–16. fejezet, import és kompatibilitási próba |
| E5 | A feladatok sorrendje, előfeltétele és ellenőrizhető kimenete egyértelmű | FAIL | PASS | P00 hozzáférési függés és kevert kapuk; javítás: P00-A/B, modulonként T1–T6, L/C/H |
| E6 | Van gyűjteményszöveg, 9 kártya és 9 aloldalszöveg, alul GitHub CTA-val | PASS | PASS | 10–12. fejezet; tartalmi regressziós összevetés |
| E7 | A megmért designadatok és a még felderítendő részletek külön szerepelnek | PASS | PASS | 2. és 13. fejezet; nincs teljes designauditként feltüntetve |
| E8 | A kritikus tesztek elvárt eredménye a hiányos/hibás bemeneteknél is eldönthető | FAIL | PASS | Pontozás, év nélküli dátum, fájllimit, export/szinkron és heti előzmények pontosítva |
| E9 | Nincs végrehajtatlan implementáció vagy teszt késznek/lefutottnak állítva | PASS | PASS | Státuszbekezdés, 15. és 19. fejezet; minden runtime teszt jövőbeli kapu |
| E10 | Elkülönülnek a tervezési döntések és a tulajdonosi döntést/hozzáférést igénylő lépések | PASS | PASS | 16–17. fejezet; licenc, fiókok, hosting, kiadás |

Baseline: a teljes dokumentum aktuális mentett változatát olvastam; 73 916 bájt, 719 sor. SHA-256: `65fa673e2bdc356bdc50ccf31feefb5dc739e9a62b9f6ce2ab96402f0ec8a71e`. A strukturális ellenőrzés 9 modult, 9 kártyát és modulonként 5–6 eredeti elfogadási esetet talált. Az összesített baseline 6 PASS / 4 FAIL. A hibák specifikációs hiányok, nem éles rendszerhibák.

A javítások előtti külön, csak olvasó értékelő nézőpont szintén jelezte a helyi és hosted kapuk keveredését, valamint az ismételt fájlexport és a szinkron duplikációjának összemosását. Ezeket a 19.3 mátrix és a 06-C pontosítása rendezi. A végső státusz a dokumentum tartalmi és strukturális újraellenőrzésén alapul.

**Nem elvégzett runtime ellenőrzések:** alkalmazás-build, lint, API-hívások, adatbázisfuttatás, éles küldés, új oldalak böngészős regressziója és tényleges GitHub-klónozás. Nem készült implementáció, ezért ezek NOT RUN; nem állítjuk őket PASS-nak. A mostani ellenőrzés tárgya a specifikáció, az ellenőrizhetőség és a belső következetesség.


### Végső ellenőrzési jegyzőkönyv

- Kiinduló állapot / baseline: 6 PASS, 4 FAIL a fent előre rögzített 10 feltétel szerint.
- Végső eredmény: a v1.1 tervezési csomag 10/10 PASS a dokumentációs scope-ban. Ez nem működő alkalmazás vagy teljesen feltárt webes design minősítése.
- Teljesült feltételek: E1–E10. A négy baseline-hibát a megfelelő eredeti fejezetek javítása és a 19. fejezet pontosításai rendezik.
- Nem teljesült feltételek: a tervezési evalon belül nincs; az implementációs L/C/H és webes W kapuk továbbra is NOT RUN, amíg nincs megépített rendszer.
- Elvégzett ellenőrzések: teljes mentett terv elolvasása; követelményenkénti tartalmi felülvizsgálat; külön csak olvasó értékelő részmegállapításainak figyelembevétele; 16 célzott strukturális és számítási ellenőrzés. Ellenőrzött darabszámok: 9 modul, 9 kártya, 9 aloldalszöveg, 47 egyedi eredeti tesztazonosító és 9 modulhoz L/C/H besorolás. A pontozási, ajánlati és ütemezési minták eredményeit kóddal kiszámoltam, beleértve a Europe/Budapest időzóna váltását.
- Regresszió: a 10–14. és 16–18. fejezet tartalma megegyezik a baseline-nal. Az első összevetés a 18. fejezet végére került egyetlen üres sor miatt eltérést jelzett; a diff ellenőrzése után a fejezetvégi whitespace figyelmen kívül hagyásával az összevetés PASS. Üzleti szöveget vagy designelőírást ez nem változtatott meg.
- Fennmaradó kockázatok vagy bizonytalanságok: a privát honlapkód leltára, mobil- és interakciós designilleszkedés, a tényleges Codex/Claude Code indítás, szolgáltatói adapterek, kiadási hozzáférések és runtime tesztek csak kivitelezéskor igazolhatók. A műszaki alap tervezési választás, nem lefuttatott kompatibilitási bizonyíték. A dokumentumban lévő repositorynevek továbbra is javaslatok.
