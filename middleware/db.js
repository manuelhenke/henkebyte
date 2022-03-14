import Dexie from 'dexie'

export const db = new Dexie('minesweeper-database')
db.version(1).stores({
  games: '++id, gamemode, gameDuration, gameCompletionTimestamp', // Primary key and indexed props
})

db.version(2)
  .stores({
    games: '++id, gamemode, gameDuration, gameCompletionTimestamp, gameIsWon',
  })
  .upgrade((trans) => {
    return trans.games.toCollection().modify((game) => {
      if (!('gameIsWon' in game)) {
        game.gameIsWon = true
      }
      if (typeof game.gameDuration === 'string') {
        const parts = game.gameDuration.split(':')

        // take a 12:32 string which should be in the format mm:ss an transform it into milliseconds
        game.gameDuration = (Number(parts[0]) * 60 + Number(parts[1])) * 1000
      }
    })
  })