export type Mood = 'good' | "bad" | "well"

export interface DiaryEntry {
    id: number,
    msj: string,
    mood: Mood
}