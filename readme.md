# Timestamp Manager

I'm new to typescript, I would like to make it clear if I still don't know enough but I want to learn more and more, this is my first external LIB that I leave open. If you want to help me join my discord.
- [Discord](https://discord.gg/FA8feuXEmE)

Library made for timestamp conversion and formatting (under development)

- Simple to use.

## Installation

- Requires [Node.js](https://nodejs.org/)
```sh
> npm i timestamp-manager
```
## Examples
```javascript
StringFormat('You are in the day DD/MM/YYYY hr:mn:ss'); 
StringFormat('you are in the day DD/MM/YYYY hr:mn:ss', {monthName: true, date: new Date(47865378525837)}) // day = DD, month = MM, year = YYYY, hour = hr, minutes = mn, seconds = ss
AddTimeToDate('1d'); //add 1 day in timestamp -> return in milliseconds
AddTimeToDate('1d', true); //add 1 day in timestamp -> return in seconds
MillisToSeconds(1660871309001); //return in seconds
SecondsToMillis(1660871597); //return in Milliseconds
```
## License
MIT

**Free Library**


