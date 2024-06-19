import { DiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry> //Forzar a dariyData (Data importada) a tratar su array de lo que nosotros configuramos en types.d

export const getEntries = () => diaries


