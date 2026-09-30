import type { FardName } from "./prayer";

export const ADHAN_SRC = "/audio/adhan.mp3";
export const ADHAN_FAJR_SRC = "/audio/adhan-fajr.mp3";
export const REMINDER_SRC = "/audio/reminder.wav";

export const ADHAN_FALLBACK = "https://github.com/AalianKhan/adhans/raw/master/adhan.mp3";
export const ADHAN_FAJR_FALLBACK = "https://github.com/AalianKhan/adhans/raw/master/adhan_fajr.mp3";

export function adhanSrc(name: FardName) {
  return name === "Fajr" ? ADHAN_FAJR_SRC : ADHAN_SRC;
}

export function adhanFallback(name: FardName) {
  return name === "Fajr" ? ADHAN_FAJR_FALLBACK : ADHAN_FALLBACK;
}

export type AdhanLine = { ar: string; tr: string; en: string; fajrOnly?: boolean };

export const ADHAN_LINES: AdhanLine[] = [
  { ar: "اللَّهُ أَكْبَرُ", tr: "Allahu Akbar", en: "Allah is Greater — four times." },
  { ar: "أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ", tr: "Ashhadu an la ilaha illallah", en: "I bear witness that there is no god but Allah — twice." },
  { ar: "أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ", tr: "Ashhadu anna Muhammadan Rasulullah", en: "I bear witness that Muhammad is the Messenger of Allah — twice." },
  { ar: "حَيَّ عَلَى الصَّلَاةِ", tr: "Hayya 'ala-s-salah", en: "Come to the prayer — twice." },
  { ar: "حَيَّ عَلَى الفَلَاحِ", tr: "Hayya 'ala-l-falah", en: "Come to success — twice." },
  {
    ar: "الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ",
    tr: "As-salatu khayrun mina-n-nawm",
    en: "Prayer is better than sleep — twice, in the Fajr adhan only.",
    fajrOnly: true,
  },
  { ar: "اللَّهُ أَكْبَرُ", tr: "Allahu Akbar", en: "Allah is Greater — twice." },
  { ar: "لَا إِلٰهَ إِلَّا اللَّهُ", tr: "La ilaha illallah", en: "There is no god but Allah." },
];

export const IQAMAH_NOTE =
  "The iqamah uses the same phrases, said more quickly, with ‘qad qamati-s-salah’ (the prayer is established) twice after hayya ‘ala-l-falah.";
