### 1. Chyba při odeslání otázky:
- **Popis:** Při pokusu o odeslání otázky se zobrazuje chybová zpráva v konzoli: {"error":["We can't post your question right now."]}.
- **Důsledky:** Uživatelé nemohou přidat otázky k produktům, což může snížit jejich interakci se stránkou a důvěru v produkty.

### 2. Nekonzistentní stav odeslání otázky:
- **Popis:** I když se zobrazuje zpráva „Otázka bola uložená“, konzole ukazuje chybu při odeslání otázky. Tento nesoulad může signalizovat problém se synchronizací nebo backendem.
- **Důsledky:** Uživatelé mohou být uvedeni v omyl ohledně stavu své otázky, což může vést k nedůvěře v systém a opakovaným pokusům o odeslání stejné otázky.

### 3. Pomalé načítání stránky:
- **Popis:** V části Network je vidět více requestů s dlouhou dobou načítání, což může indikovat problémy s rychlostí serveru nebo optimalizací stránek.
- **Důsledky:** Pomalé načítání stránky může vést k frustraci uživatelů a zvýšení míry odchodu.
