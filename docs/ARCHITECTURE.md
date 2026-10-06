# Műszaki felépítés

Node ESM + natív HTTP + SQLite, függőségmentes alkalmazás. A felület web/app.js és web/style.css; a szerver src/server.mjs; üzleti szabályok src/core.mjs; AI src/ai.mjs. A kiválasztott modul MODULE.json alapján indul. A modulválasztás nem hozzáférési határ.

SQLite meta tárolja a profilt, sémaverziót és importlenyomatokat; records a típusozott JSON rekordokat; events a verziók auditját; requests az idempotenciakulcsokat. Írás és napló egy tranzakció. Rekordmódosítás elavult version esetén 409. Profil szintén verziózott. A profil szabályverziója a minősítésben és utánkövetésben megmarad.

GET /api/state: helyi állapot + folyamatonkénti CSRF token. POST /api/action: action és input, X-BN-CSRF és Idempotency-Key fejlécek. /api/ai/meeting és /api/ai/business előkészítés. GET /api/export, POST /api/restore mentés. Origin és Host csak helyi címet enged. Nincs felhős autentikáció.

Pénz: támogatott két tizedesjegyű pénznemek, egész alapegységek. Dátum: YYYY-MM-DD; időpont UTC. Utánkövetés a profil időzónájában hétfő–péntek, ünnepnaptár nélkül. A SQLite séma 1, nem támogatott verzióval a program leáll.
