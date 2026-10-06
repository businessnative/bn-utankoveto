# Kivitelezési eval – előre rögzített kapuk

2026-10-05. A PASS kizárólag a megadott bizonyíték megszerzése után adható.

| ID | PASS feltétel | Baseline |
|---|---|---|
| E1 | A 9 modul önálló csomagja indítható; adatbázis és forrás tartozik hozzá | FAIL – csak terv |
| E2 | Modulonként legalább egy végigvezetett üzleti folyamat automatikus tesztje sikeres | FAIL |
| E3 | Újraindítás megőrzi az adatokat; export-visszaállítás veszteségmentes | FAIL |
| E4 | Ismételt kérés nem duplikál; ütköző szerkesztés 409; jóváhagyás verzióhoz kötött | FAIL |
| E5 | Hibás bemenet, ismeretlen AI-állítás, nem helyi hozzáférés és aktív HTML tesztelve | FAIL |
| E6 | Codex és Claude Code belépőfájlok, profil, működtetés és személyre szabási útmutató mind a 9 csomagban | FAIL |
| E7 | 1 gyűjtő + 9 aloldal a meglévő tudástár vázából, a főoldali AI részbe kapcsolva | FAIL |
| E8 | Asztali és mobil nézet böngészőben ellenőrizve; működő műveletek és nincs konzolhiba | FAIL |
| E9 | Valódi, célközönség számára hozzáférhető GitHub-linkek; teljes site build és regressziós kapuk sikeresek | FAIL |
| E10 | Éles AI/email/hosting eredmények elkülönülnek a helyi tesztektől; titok és éles tesztküldés nincs | FAIL |

E1–E10 kritikus a teljes feladat késznek nyilvánításához. A részleges eredmény külön átadható, de nem teljes kiadás.

## Ellenőrzési jegyzőkönyv – 2026-10-06

Vizsgált forrás: 1a2f4235313db5ef68950ec95e7c8b1b62eaa708; a további CSV-javítást helyben újratesztelve. A feltételek változatlanok.

| ID | Eredmény | Bizonyíték / korlát |
|---|---|---|
| E1 | PASS | Kilenc exportált csomag, kilenc önálló szerverindítás és HTTP állapotellenőrzés; saját SQLite munkatér |
| E2 | PASS | 01–09 üzleti folyamat teszt; összesen 48/48 sikeres Node teszt |
| E3 | PASS | Újraindításos tartósság és byte-equivalent export/visszaállítás teszt |
| E4 | PASS | Idempotencia, párhuzamos AI-kérés, 409, jóváhagyás-verzió tesztek |
| E5 | PASS | HTTP Host/Origin/CSRF, hibás bemenet, AI-forrásidézet, elavult és törölt forrás, böngészős XSS és CSV regresszió |
| E6 | PASS | Csomagonként START-HERE, AGENTS, CLAUDE, profil, működtetés és adaptációs útmutató; csomagellenőrző futás |
| E7 | PASS | Gyűjtő és kilenc aloldal generálva a tdShell-ből; AI főszakaszba kapcsolva; Vercel build és gyűjtő böngészőben ellenőrizve |
| E8 | FAIL – részben igazolt | Helyi alkalmazások Playwright tesztje sikeres 390/768/1440 szélességen, három végigkattintott üzleti folyamat, konzolhiba nélkül. A tudástár teljes mobil vizuális regressziója még nincs igazolva |
| E9 | FAIL | Nyilvános modulrepositoryk még nincsenek létrehozva. A Vercel teljes build sikeres, a GitHub Actions website job a meglévő VAPI_API_KEY hiánya miatt elbukott |
| E10 | PASS | Éles AI próba NOT RUN; email/webhook/hosting NOT IMPLEMENTED; forrásos mock tesztek külön jelölve, éles tesztküldés nem történt |

Összesen: 8 PASS, 2 FAIL. A teljes kiadás NEM KÉSZ. A helyi alapfolyamatok igazolt működése nem igazolja az eredeti terv valamennyi fejlett vagy integrált képességét; ezek tételesen a docs/CAPABILITIES.md fájlban szerepelnek.

### Futások

- Helyi Node teszt, 2026-10-06: 48 pass, 0 fail, 0 skipped.
- GitHub Actions run 37370767197: browser 111967024226 SUCCESS; Windows Node 22 és 24 SUCCESS; Ubuntu Node 22 SUCCESS; Ubuntu Node 24 CANCELLED. A törölt futás nem sikeres teszt.
- Ugyanennek a runnak a website jobja 111967024505 FAILURE: a meglévő időpontfoglalási voice elem buildjéhez hiányzik a VAPI_API_KEY a CI környezetből. Nem került megkerülésre a buildkapu.
- Vercel dpl_J5vk565YButnBqzHgziizsJxzV1D, ugyanazon 1a2f423 commit: READY. A buildparancs végén site teszt, verify-pairs és coverage kapu szerepel. A napló mintavételezett, ezért külön ellenőrzésenkénti darabszám nem állítható belőle.
- GitHub browser artifact 11370067188: desktop.png és mobile.png letöltve, vizuálisan megvizsgálva.
- Read-only evaluator által feltárt hibák javítva: önálló csomag függő moduljai; onboarding adatvisszavonás; tudásforrás láthatóság; review önbeszámítás; AI-idempotencia és célrekord-átirányítás; elavult forrás; CSV képlet. Ezekhez regressziós tesztek tartoznak.

### Következő kiadási kapuk

1. Nyilvános GitHub célok létrehozása és tényleges hozzáférésük ellenőrzése; registry frissítése csak ezután.
2. Tudástár mobil/asztali vizuális regresszió a kiadandó forráson, valamennyi új link ellenőrzésével.
3. Meglévő site CI környezet jogosult tulajdonosi konfigurálása; titkot nem szabad forrásba másolni.
4. Hiányzó tervezett funkciók fejlesztése és külön integrációs ellenőrzése.
5. Production csak a repository szabálya szerinti explicit jóváhagyás után.

## 0.2.0 újraellenőrzés – 2026-10-06, jelen munkamenet

Baseline: a korábbi 8 PASS / 2 FAIL jegyzőkönyv; a helyi első futás 48/48 teszt sikeres. E1–E10 feltételei nem változtak.

- Végső helyi eredmény: 57/57 teszt, 9/9 önálló csomag, szintaxisellenőrzés; parancssori migrate/backup/restore sikeres.
- Igazolt implementáció: eb86a0f0a4e7e44cf7d0ed4b7943f196f9b2c167; GitHub Actions run 37435577201. Mind a négy Windows/Linux × Node22/24 job sikeres. Browser 112176437982 sikeres. Artifact 11398836123: desktop.png és mobile.png letöltve és vizuálisan ellenőrizve.
- E1–E6 és E10: PASS a meghatározott helyi scope-ban. E7: a meglévő előnézetben PASS; az új sidebar kiadandó buildje még külön ellenőrzendő.
- E8: továbbra sem teljes PASS; az alkalmazás reszponzív és működési tesztje sikeres, a tudástár teljes mobil regressziója nincs igazolva.
- E9: FAIL. A publikus GitHub-létrehozás auto-review által blokkolt; a website CI 37435264765/112175404815 a VAPI_API_KEY hiányán elbukott. Nem módosítottuk a kaput a hiba elfedésére.
- A tíz kapu sem helyettesíti a részletes eredeti terv összes L/C/H elfogadási esetét. A hiányzó MVP-funkciók CAPABILITIES.md-ben szerepelnek, ezért a teljes feladat NEM KÉSZ.

Új regressziók: kritikus terjedelem, állítható súlyok és profilverzió, stale profilmentés, CSV-import ismétlés helyreállítás után, ajánlat→projekt ismétlés és snapshot, valódi munkanapok/DST, visszavont foglalás, nem támogatott pénznem és ismételt szolgáltatásazonosító, lejárt ajánlat, pénzmozgás-duplikáció. A korábbi naptári napokat elváró tesztet a terv munkanapos szerződésének megfelelően javítottuk.

## Nyilvános kiadás ellenőrzése – 2026-10-06

A korábbi napló történeti eredmény, nem az aktuális publikálási állapot. Attila azóta engedélyezte a businessnative fiók alatti nyilvános sablonkiadást, a weboldali #77 módosítás pedig élesbe került (merge: 3a21058cdc6485e0bc8e8890137e15fe3e60826b; Vercel dpl_GGUHTrTSHisegrHe4SZ272LBGnio READY).

Új kiadási feltételek: P1 a kilenc csomag szintaxis-, üzleti és indítási ellenőrzése sikeres; P2 kizárólag az exportált csomagfájlok kerülnek ki, titok/adatbázis/ügyféladat nélkül; P3 kilenc valódi, nyilvános businessnative repository, visszaolvasott fájlokkal; P4 működő GitHub és ZIP linkek a gyűjtőn és aloldalakon; P5 a weboldali preview és éles ellenőrzés sikeres. Ezek eredménye csak a tényleges ellenőrzés után rögzíthető. A teljes eredeti termékfunkciók hiányai továbbra is a CAPABILITIES.md szerint érvényesek.
