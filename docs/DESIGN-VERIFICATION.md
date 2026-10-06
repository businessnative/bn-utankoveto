# Tudástári designellenőrzés

Referencia: a 686d316 commit Vercel előnézetének /tudastar/skill-konyvtar oldala; 2026-10-05, tényleges böngészős vizsgálat.

- H1: Geist Variable, Arial, sans-serif; a tdShell örökített fejlécével és hero szakaszával.
- Referenciakártya: .card-contact.bn-reveal.is-in; háttér rgb(10,10,11), 1 px keret (16% szövegszín), 32 px padding, 24 px gap, 8 px radius, flex-start.
- Örökölt változók: --spacing--32=32px, --spacing--24=24px, --grid--column-gap=16px, background--base=#0a0a0b, background--lift=#121212, border--subtle=color-mix(...16%), general--default=8px.
- Az első új kártya article elemként a régi generikus alapstílust örökölte: border 0, gap64px, padding24px. Ezt tényleges vizuális ellenőrzés találta meg; a generátor saját hatókörű szabálya a referencia tokenjeire javítva.
- A kilenc új kártya és a Meetingből teendők aloldal ténylegesen elérhető volt a preview-ban. Asztali nézetben nem volt vízszintes túlcsordulás (1348px dokumentum, 1363px viewport).
- A konzolban a böngésző bővítményének metadata hibái voltak; a vizsgált nézetben saját oldalhiba nem szerepelt. Ez nem egyenértékű a teljes oldalfolyam hibamentességével.
- Mobil, végleges commit, valamennyi új aloldal: a végső CI/böngészős eredmény szerint értékelendő. A korábbi screenshot nem igazolja a későbbi módosítást.
