# Státusz – 0.2.0 nyilvános fejlesztési sablon

2026-10-06. A kilenc rendszer helyben futó, egyvállalkozásos fejlesztési alap. A teljes eredeti rendszerportfólió és a szolgáltatói integrációk NEM KÉSZEK.

## Igazolt működés

- Implementáció: eb86a0f0a4e7e44cf7d0ed4b7943f196f9b2c167.
- 57/57 üzleti és HTTP teszt, 9/9 önálló csomag indítása.
- GitHub Actions 37435577201: Windows és Ubuntu, Node 22 és 24 sikeres; browser job sikeres.
- Helyi böngészős ellenőrzés: érdeklődés/XSS, ajánlatjóváhagyás, leiratból feladat, profilmentés; kilenc modul 390/768/1440 px.
- SQLite sémaellenőrzés, mentés és visszaállítás sikeres.
- A tudástár gyűjtője és kilenc aloldala éles: https://www.businessnative.hu/tudastar/ai-rendszerek. A közös Tudástár hero háttere és a navigáció ellenőrizve.

## Nyilvános kiadás

Attila engedélyezte a kilenc sablon nyilvános, letölthető kiadását a businessnative GitHub-fiókban. Az export csak a helyi alkalmazás forrását, tesztjeit és dokumentációját tartalmazza, a privát honlap forrását nem. A konkrét rendszer nevét és repositorynevét a MODULE.json tartalmazza.

A forrás nyilvánossága nem jelenti, hogy az alkalmazás biztonságosan nyilvános szerverre tehető. Az alkalmazás továbbra is csak helyi címen fut.

## Fennmaradt hiányok

- Forrásos minősítési adatkivonás; onboarding privát fájlkezelése; heti CSV-mezőpárosítás/előző heti összehasonlítás; tudásforrás-konfliktuskezelés. Részletek: docs/CAPABILITIES.md.
- Élő AI teszt NOT RUN. Email, hiteles foglalási webhook, nyilvános ügyfélportál, autentikáció és háttérütemező nincs implementálva.
- A weboldal korábbi GitHub Actions website jobja a VAPI_API_KEY hiánya miatt hibás; a Vercel éles build sikeres. A buildkaput nem lazítottuk.

## Folytatás

1. START-HERE.md alapján helyi próba és személyre szabás.
2. A hiányzó funkciók fejlesztése a docs/PLAN.md elfogadási esetei szerint.
3. A külön engedélyezett szolgáltatói integrációk és biztonságos hosting külön fejlesztési lépés.
