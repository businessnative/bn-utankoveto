# Ellenőrzés

npm run check; npm test; npm run test:e2e. Az utóbbihoz Playwright és Chromium szükséges, csak fejlesztéshez. A futtatókörnyezet eltérését jegyezd fel; nem lefutott teszt nem PASS.

A kilenc modul folyamatát test/core.test.mjs 01–09 esetei ellenőrzik. A HTTP, jogosulatlan eredet, CSRF és AI-cache tesztjeit test/http.test.mjs végzi. Helyreállítás, audit, ismételt kérések és hibás bemenet további regressziós esetek. Élő AI, email és hosted teszt nincs; ezek külön elfogadási kapuk.

A részletes eredeti modulonkénti követelményeket docs/PLAN.md 7. és 19. fejezete tartalmazza. A jelen tesztcsomag nem bizonyítja minden tervezett képesség teljesülését. Az EVAL.md és CAPABILITIES.md alapján folytasd a hiányokat.
