# Indulás Codexben vagy Claude Code-ban

A felhasználó a saját szolgáltató vállalkozására szeretné alakítani ezt a rendszert. Először olvasd el az AGENTS.md, CLAUDE.md, STATUS.md, docs/CAPABILITIES.md és docs/ADAPTATION.md fájlokat. A docs/PLAN.md tartalmazza a részletes elfogadott tervet. Először a közös szerződéseket és a kiválasztott modul fejezetét olvasd; a STATUS/CAPABILITIES jelzi az azóta ténylegesen elkészült részeket. A MODULE.json megmutatja a kiválasztott rendszert; ha nincs, a teljes munkatérrel dolgozol.

1. Kérd be egy rövid körben a vállalkozás nevét, szolgáltatásait, tipikus ügyféligényét, meglévő eszközeit, időzónáját és a kívánt folyamatot. A már ismert választ ne kérdezd újra. Kulcsot ne kérj chatüzenetben.
2. Futtasd: node --version, npm test. Ha a Node régi, kérd a támogatott futtatókörnyezet telepítését; ne cserélj technológiát automatikusan.
3. Indítsd el npm start paranccsal. A profil űrlapján állítsd be az ismert adatokat. Ismeretlen ár, név, határidő maradjon üres/null.
4. Egy szintetikus ügyféllel vezesd végig a MODULE.json szerinti folyamatot. A példák nem valós ügyfelek és nem referenciák.
5. A kért eltéréseket kis, külön ellenőrizhető lépésekben valósítsd meg. Minden lépés előtt rögzíts PASS/FAIL feltételeket. A megváltozott művelet tesztje és a teljes helyi tesztcsomag fusson le.
6. Csak ezután kösd be a külön engedélyezett szolgáltatásokat. Kulcsok szerveren, email csak engedélyezett címzettnek. Hosting előtt valódi hitelesítés és jogosultságellenőrzés szükséges; a loopback tiltás egyszerű kikapcsolása nem hosting-megoldás.
7. Add át a működő címet, pontos indítási parancsot, mentési módot és fennmaradó hiányokat. Frissítsd STATUS.md és EVAL.md eredményeit. Sikertelen tesztet ne írj át PASS-ra.

A prompt önmagában nem helyettesíti a vállalkozási adatokat, a szolgáltatói fiókokat vagy az ügyfél által hozandó üzleti döntéseket. A legelső helyi próba ezek nélkül is elindítható.
