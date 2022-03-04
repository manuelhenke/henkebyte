import Dexie from 'dexie'

export const db = new Dexie('minesweeper-database')
db.version(1).stores({
  games: '++id, gamemode, gameDuration, gameCompletionTimestamp', // Primary key and indexed props
})
