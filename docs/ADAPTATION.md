# Személyre szabás olcsóbb kódoló modellel

Kis lépésekben haladj; egyszerre egy üzleti folyamat és annak tesztje változzon.

1. Profil és nyelvezet: név, szolgáltatások, pénznem, időzóna, saját árak. A mintaár nem BusinessNative ajánlat és nem árajánlás. Minden pénzösszeg unitMinor/amountMinor mezője 1/100 pénzegység.
2. Modulonként docs/CAPABILITIES.md alapján válaszd ki az első hiányzó funkciót. Rögzíts bemenetet, kimenetet, hibát és konkrét PASS/FAIL példát.
3. src/core.mjs tartalmazza a tranzakciós üzleti szabályokat. src/server.mjs a HTTP/hozzáférési határ. web/app.js és style.css a felület. src/ai.mjs az egyetlen külső AI-hívás helye.
4. Ne helyezz át üzleti engedélyezést kizárólag a frontendbe. Frissítéskor küldj id + version értéket. Állapotváltozás a Store.execute útvonalon történjen.
5. AI-kimenet legyen ellenőrizhető, forrással; hiányzó adat null. Az idézet megléte nem bizonyítja az összefoglaló helyességét: emberi ellenőrzés kell.
6. Integrációkhoz adapter és visszajátszható szerződésteszt kell. Az éles eredményt külön ellenőrizd; a mock teszt nem igazolja a szolgáltató működését.
7. Futtasd npm run check, npm test, majd a saját kritikus folyamatodat asztali és mobil nézetben. Ne módosíts más modult szükségtelenül.

Folytatási prompt: „Olvasd el a STATUS.md fájlt. Válaszd az első még nyitott, hozzáférés nélkül elvégezhető feladatot. Írj rá PASS/FAIL feltételeket, valósítsd meg, teszteld, majd frissítsd a státuszt. Ne nevezz teljesnek egy részleges integrációt.”
