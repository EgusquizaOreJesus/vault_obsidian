```dataview  
TABLE WITHOUT ID  
file.link as Date,  
choice(ADA > 2, "🟩", choice(ADA > 0, "🟨", "🟥")) as ADA💀,
choice(BDII > 2, "🟩", choice(ADA > 0, "🟨", "🟥")) as "BD II🗄️",  
choice(PC > 2, "🟩", choice(ADA > 0, "🟨", "🟥")) as "PC 🫠",  
choice(Software > 3, "🟩", choice(ADA > 0, "🟨", "🟥")) as "Software 💻"
FROM "Daily_Notes"  
WHERE file.day <= date(now) AND file.day >= date(now) - dur(7days)  
SORT file.day ASC  
```