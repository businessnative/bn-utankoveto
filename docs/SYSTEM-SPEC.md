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


Tényleges készültség: CAPABILITIES.md. A specifikáció nem készültségi állítás.
