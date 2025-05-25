const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254745829177";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "0SUHAIL_14_21_05_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxODIsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OCxcbiAgICAgICAgNDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzksXG4gICAgICAgIDIxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgMixcbiAgICAgICAgNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzIsXG4gICAgICAgIDM3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA3MixcbiAgICAgICAgMTMwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgNixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDgxLFxuICAgICAgICA3MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQzLFxuICAgICAgICA3NCxcbiAgICAgICAgNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI3LFxuICAgICAgICA2NixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNixcbiAgICAgICAgMTUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVKSXpaSEJpcS9raGxJQ1BqRE85WDdFY2w1VkhaVkZ5Q3JWWEZXd3F1Ulk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInN2d1B0MFRzUTdhbmFWMXFaVjZOOVFcIixcbiAgXCJwaG9uZUlkXCI6IFwiODY5ZGMyNDMtY2E2Yy00YTI5LWFlMGUtNjAzNzYzNWQ0NjlhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyLFxuICAgICAgMTUxLFxuICAgICAgNTgsXG4gICAgICAyMzYsXG4gICAgICAxNzEsXG4gICAgICAxMTcsXG4gICAgICAyOCxcbiAgICAgIDgxLFxuICAgICAgNTUsXG4gICAgICAxNSxcbiAgICAgIDE3OCxcbiAgICAgIDEzNSxcbiAgICAgIDExLFxuICAgICAgMTYsXG4gICAgICAxOTQsXG4gICAgICAyNDIsXG4gICAgICAxOTMsXG4gICAgICAyMjAsXG4gICAgICAxNDgsXG4gICAgICAyMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgMjE2LFxuICAgICAgNTQsXG4gICAgICAxNDMsXG4gICAgICA2NixcbiAgICAgIDIxLFxuICAgICAgMjU1LFxuICAgICAgNzIsXG4gICAgICA5NyxcbiAgICAgIDk3LFxuICAgICAgMjI0LFxuICAgICAgNTgsXG4gICAgICAzMyxcbiAgICAgIDE1OSxcbiAgICAgIDExMSxcbiAgICAgIDEyOCxcbiAgICAgIDE3MSxcbiAgICAgIDI0NCxcbiAgICAgIDE5LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXl4ME5rR0VNTE96TUVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqZlFyOVJDcm5OTzZwNytoakRUTDZUSEhoWFBHQTV2dXJrMFFmTmE3cmdzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRSOTQrK2ZvTDRienhEOFlweXlaVGtmK1N6SkpXSE9uSm1wMktQWXhGRlA0VTE5bkhYMUlPa1hLMittYURSZUh3RExLQi9Lenl4T0MyT0JDSXY5T0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkc3U1RTa2ljZXZET0U3SVNvdGVUaW1pNkdEWHg3QWxtZmtNNFJham15a2RVdXZRTXN4ZjErWGFrVHE0TDYwSngyMHluTldBSEw4c09hY2pRMzgwZWl3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQ1ODI5MTc3Ojg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiT3h5Z2VuXCIsXG4gICAgXCJsaWRcIjogXCI2MjYwNDA2NDA2MzU1NDo4NkBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0NTgyOTE3Nzo4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTc0ODE4Mjg1NVxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Suhail:Shy<3",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
