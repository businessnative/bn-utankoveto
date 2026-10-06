# Működtetés

## Indítás
Node.js 22.13 vagy újabb. npm start. A szolgáltatás csak 127.0.0.1-re figyel. A PORT környezeti változóval másik szabad port választható. Nincs felhős fiók, jelszó vagy telepítési csomag szükséglet a helyi módhoz.

## Adatok és mentés
Alapértelmezett adatkönyvtár: .data. BN_DATA_DIR felülírhatja. SQLite WAL tranzakciók és audit események. A bal oldali Biztonsági mentés link JSON-ba exportál minden rekordot, profilt, auditot és idempotenciakulcsot; SHA256 ellenőrzőösszeggel. Az összeg sérülést észlel, nem hiteles aláírás.

Visszaállítás kizárólag üres adatbázisba. Állítsd le a programot, őrizd meg a régi teljes adatkönyvtárat, indítsd új BN_DATA_DIR könyvtárral, majd válaszd ki a mentést a felületen. A visszaállítás jelenlegi HTTP méretkorlátja 2 MiB; nagyobb mentés programozott Store.restore használatot igényel. Adatbázis törlése előtt ellenőrizd a mentés visszaállíthatóságát.

## AI
A .env.example alapján szerveroldali OPENAI_API_KEY és OPENAI_MODEL állítható be. Indítás: node --env-file=.env src/server.mjs (önálló csomagban start.mjs). A meeting AI-előkészítés gomb a kiválasztott teljes leiratot és dátumot küldi az OpenAI-nak. A modulok közös AI-javaslat gombja a modul legfeljebb 20 legfrissebb rekordját, rekordonként legfeljebb 4000 karaktert és a profil nevét, szolgáltatásait, hangnemét küldi tovább. A gomb alatt ez a továbbítás jelezve van. Ezt a gombot csak továbbítható adattal használd. A költség a szolgáltatói fiókot terheli. A szolgáltatói adapter nem kap adatbázis-műveleti jogot. Hibás válasz nem mentődik.

## Email és hosting
Nincs automatikus email, időzített küldés vagy nyilvános hozzáférés. A kézi elküldött jelölés a felhasználó közlését rögzíti. Nincs kézbesítési igazolás. Éles emailhez jóváhagyott szolgáltatói bekötés, webhook hitelesítés, stop-feltételek és tesztfiókos ellenőrzés szükséges. Hostinghoz előbb autentikáció, adatjogosultság, titokkezelés, rate limit, mentés és migráció kell. A Host/Origin védelem kikapcsolása önmagában veszélyes és nem támogatott telepítési mód.

## Verzióváltás
A meta.schema jelenleg 1. Nem támogatott verziónál az alkalmazás leáll. Migráció előtt mentés, tesztmásolaton migráció, rekord/kapcsolat/audit ellenőrzés szükséges. PostgreSQL migráció nincs implementálva. Visszaállás: korábbi program + a hozzá tartozó előzetes mentés, külön adatkönyvtárban.

## Parancssori mentés Windows és macOS alatt

A projekt könyvtárából, álló alkalmazás mellett ugyanazok a parancsok használhatók PowerShellben és terminálban:

```sh
npm run db:migrate
npm run db:backup -- sajat-mentes.json
npm run db:restore -- sajat-mentes.json
```

A restore csak üres adatbázisra engedélyezett. Előbb válassz új adatkönyvtárat: PowerShellben $env:BN_DATA_DIR = "uj-adatok", macOS terminálban export BN_DATA_DIR=uj-adatok. A meglévő mentést a backup nem írja felül. Ezek a parancsok a HTTP 2 MiB korlátjától függetlenek.
