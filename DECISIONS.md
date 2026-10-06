# Döntések

- 2026-10-05: a tervezett React/Vite/Express/TypeScript helyett függőségmentes Node ESM, natív SQLite, HTML/CSS/JavaScript. Indok: a jelen környezetben a csomagregiszter elérése akadályozott; a helyi telepítés és a kisebb modellel végzett személyre szabás így kevesebb mozgó elemet igényel. Ez dokumentált eltérés, nem a teljes eredeti technológiai terv megvalósítása.
- A meglévő businessnative.hu weboldal továbbra is saját statikus generátorláncát használja. Nem cserélünk keretrendszert és nem írjuk át a globális designrendszert.
- Az önálló sablonokhoz közös magot csomagolunk; minden export tartalmazza a mag SHA256 azonosítóját. Nem igényel futásidejű hozzáférést privát repositoryhoz.
- A kapcsolódó nyilvántartások az önálló modulokban is elérhetők. A modulválasztás navigációs egyszerűsítés, nem biztonsági határ.
- Az AI adapter opcionális, modellnevét a felhasználó adja meg. A helyi kivonat/keresés nem nevezhető AI válasznak.
- Az email, a nyilvános ügyfélportál, a PostgreSQL migráció és a felhős ütemező külön, még nem kész integrációs szint. Sem fiktív szolgáltatói siker, sem fiktív GitHub URL nem kerül ki.
