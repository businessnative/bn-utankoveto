# Tényleges képességek, 0.1.0

| Modul | Megvalósított helyi folyamat | Még hiányzó tervezett képesség |
|---|---|---|
| ugyfelszerzo | Érdeklődés rögzítés, CSV import, státuszok, választervezet, kapcsolt ajánlat és utánkövetés | Nyilvános landing/űrlap, szolgáltatói booking, email automatizáció, attribúció |
| erdeklodo-minosito | Súlyozott kézi minősítés, ismertadat-arány, indok és audit | Szabad szöveges AI-adatkivonás és profilalapú automatikus rubrika |
| ajanlatkeszito | Tételszerkesztő űrlap, egész alapegységes árak, nettó/adó/bruttó, változatok, jóváhagyás, nyomtatható HTML | Szolgáltatói kézbesítés |
| ugyfel-onboarding | Megrendelés megerősítése, kötelező ellenőrzőlista, indulási kapu, welcome-tervezet | Ügyfél adatbekérő link, fájlfeltöltés |
| ugyfelkezelo | Kapcsolatok, jegyzetek, projektfeladatok, késés/hiány jelzés, elkészülés | Ügyféltörténet külön nézete, automatikus heti figyelmeztető |
| meeting-teendo | Leirat, kézi vagy opcionális AI-tervezet, idézetellenőrzés, jóváhagyás, feladatok, JSON/MD export | Hang/leirat-szolgáltató |
| utankoveto | 3/7 napos tervezetek, munkanap/időzóna, válasz/leiratkozás stop, kézi elküldött jelzés | Megbízható válaszkövetés, MailerLite küldés, háttérütemező |
| tudasrendszer | Szöveges tudásforrás, láthatóság, idézetes kulcsszókeresés, hiány esetén ticket, törlés | Generatív forrásos válasz, külön dokumentumjóváhagyás, nyilvános chat |
| heti-attekinto | Helyi auditból pillanatkép, nyitott feladatok, pénzmozgások, pénznemek, visszatérítés | Általános CRM-eseményimport, teljességi jelzések forrásonként |

A táblázat szándékosan elválasztja a kész helyi magot a még meg nem valósított funkcióktól. A kilenc csomag induló alkalmazás, jelenleg nem teljes terjedelmű éles kiadás.

## Közös AI-előkészítés

Minden modulban külön gomb kérhet forrásidézeteket, legfeljebb három következőlépés-javaslatot és – ahol értelmes – üzenettervezetet. A forrásazonosítót, verziót és idézetet a szerver ellenőrzi. A javaslat és üzenet emberi ellenőrzésre vár; nem módosít üzleti rekordot és nem küld semmit. A tudásmodulban a generált válasz helyett kizárólag idézetek és tisztázási javaslatok jelennek meg. Az AI szolgáltatói bekötés élő kulccsal még nincs tesztelve.

## A kezdeti lista óta elkészült helyi bővítések

- Ajánlati ütemezés és feltételek a szerkesztőben és nyomtatható változatban.
- Testre szabható onboarding ellenőrzőlista.
- Kapcsolatok és feladatok szerkesztése, verzióellenőrzéssel.
- Meetingfeladatok CSV exportja.
- Utánkövetési üzenet szerkesztése és kézi leállítása.
- Tudásforrás új változata; emberi válaszra váró kérdés lezárása.
- Pénzmozgások atomikus CSV importja.

## 0.2.0 további bővítések

- Profilverzió és ütközésvédelem, módosítható minősítési súlyok/kritikus szempontok, megőrzött értékelési szabályverzió. Az AI-adatkivonás továbbra is külön hiány.
- Munkanapos utánkövetés, állítható kétlépéses szabály; ünnepnaptár nélkül.
- Lead CSV újrapróbálás és mentésből helyreállítás után sem duplikál.
- Egy ajánlatból egy projekt; induláskori ajánlati snapshot; lejárt ajánlat védelme.
- TXT/MD leiratbetöltés, UTF-8 ellenőrzés, 200 kB és 50 000 karakter korlát.
- Teljesített feladatok megjelenítése; heti riport JSON export.
- Pénzmozgás-hivatkozás ismétlésvédelme és ütközésellenőrzése.
- Parancssori mentés és helyreállítás.

A teljes eredeti helyi MVP még további munkát igényel: például forráshoz kötött minősítési adatkivonás, privát onboarding fájlkezelés, heti importmező-párosítás és előző heti összehasonlítás, tudásforrás-konfliktusok kezelése. A 57 automatikus teszt ezek meglétét nem bizonyítja.
