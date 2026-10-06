# Integrációk tényleges állapota

| Kapcsolat | Állapot | Ellenőrzés |
|---|---|---|
| Helyi SQLite | Implementált | Újraindítás és mentés/visszaállítás teszt |
| OpenAI strukturált tervezet | Opcionális adapter | Mock szerződés és hibatesztek; élő próba nincs |
| Foglalás | Profilban HTTPS link és kézi státusz | Nincs naptár-webhook |
| CSV | Érdeklődő és pénzmozgás | Tranzakciós validáció; leadimport lenyomat alapján ismétlésvédett |
| Email/MailerLite | Nincs bekötve | Nem küld levelet |
| CRM | Saját helyi adatok | Külső rendszer nem csatlakozik |
| Hangfelvétel/átírás | Nincs | Szöveges bemenet használható |

.env.example változóneveket tartalmaz. Titkos kulcsot a felhasználó helyi .env-be tesz, nem chatbe. A fejlesztői AI-előfizetés, az alkalmazás API-fogyasztása és az esetleges hosting külön költség. Pontos díjat a választott szolgáltatónál kell ellenőrizni.
