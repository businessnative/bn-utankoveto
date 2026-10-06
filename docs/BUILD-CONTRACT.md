# Közös kivitelezési szerződés

A kiadott csomag helyi, egyvállalkozásos böngészős alkalmazás. A kiválasztott modul leírását a SYSTEM-SPEC.md tartalmazza. STATUS.md és CAPABILITIES.md mondja meg, mi ténylegesen kész; a PLAN.md követelmény, nem készültségi bizonyíték.

1. Meglévő adatot és működő részt őrizz meg. Változtatás előtt mentés.
2. Rögzíts PASS/FAIL követelményt; tesztelj valós műveletet, hibás bemenetet és újrapróbálást.
3. Az AI tervezetet ad. Küldés és vállalás emberi ellenőrzést igényel. Árat kizárólag megadott adatból számolj.
4. Módosítás után npm run check és npm test. UI után npm run test:e2e, Chromium szükséges.
5. Adatok a .data könyvtárban; titok a .env fájlban. Ezek soha nem kerülhetnek Gitbe.
6. Nyilvános hosting önálló fejlesztési feladat. Ne kapcsold ki a localhost védelmét.
7. Jelentsd külön: helyi bizonyíték, mock AI-próba, élő szolgáltatói próba, fennmaradt hiány.

Nincs TypeScript, ezért typecheck parancs nincs; ezt ne helyettesítsd hamis sikerrel. A build és lint jelenleg szintaxisellenőrzés, nem típus- vagy stíluselemzés. Nincs bundle-fordítás: a futtatott forrás az átadott forrás.
