# Sablonügynök szabályai

A rendszerek helyi, egyvállalkozásos munkaterek. Az adatbázis az igazság forrása. Az AI csak ellenőrizhető tervezetet készít; nem küld, nem áraz és nem vállal kötelezettséget.

- Olvasd el a START-HERE.md, STATUS.md, docs/BUILD-CONTRACT.md és docs/SYSTEM-SPEC.md fájlokat.
- Őrizd meg a kérésazonosítást, SQLite-tranzakciókat, verzióütközés-védelmet, auditnaplót és forrásidézeteket.
- Ne küldj emailt tesztadatokra. Új email-integráció a BusinessNative projektben MailerLite legyen. A kézi elküldött státusz nem szolgáltatói kézbesítés.
- Ne tárolj kulcsot frontendben, repositoryban vagy naplóban.
- A demóadat legyen egyértelműen szintetikus, example.test email-címmel.
- Node.js >=22.13. Csak indokolt esetben vezess be függőséget; a változást DECISIONS.md-ben indokold.
- Minden változtatás után: npm run check és npm test. UI-változás után mobil és asztali böngészős ellenőrzés is kell.
- Nyilvános hosting többfelhasználós autentikáció, szerveroldali hozzáférés-ellenőrzés és külön biztonsági teszt nélkül tilos.
- Éles weboldali módosítás előtt a célrepository saját szabályai érvényesek. Ez a csomag nem engedély main pushra.
