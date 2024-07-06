const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://null:<password>@cluster0.oits7wa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349158455906";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "2349158455906";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2349158455906";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_26_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYwLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDYzLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzLFxuICAgICAgICA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNDksXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICA3NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgOTksXG4gICAgICAgIDkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzksXG4gICAgICAgIDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTY3LFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5LFxuICAgICAgICA5MixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjUsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMixcbiAgICAgICAgNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZG9UT2J1SUpqL2dNRHY0L2xVdnllR05JUXJlRG1EbzJjWDdYajdzQ3h5VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSm5rMWlEZWVUVzJ4OWFvcHB2QnFaZ1wiLFxuICBcInBob25lSWRcIjogXCI4NGJlNTViYy0yZDQ2LTRhYmQtOTc0Ny04ZmY4NzBiNTBiZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxNjEsXG4gICAgICAyMTAsXG4gICAgICAxNTIsXG4gICAgICAxMjcsXG4gICAgICAyNDQsXG4gICAgICAxNjYsXG4gICAgICAyMDksXG4gICAgICAyMzEsXG4gICAgICAyMzQsXG4gICAgICAxMTIsXG4gICAgICAyMzAsXG4gICAgICAyMDksXG4gICAgICAwLFxuICAgICAgMTAxLFxuICAgICAgMTEyLFxuICAgICAgOSxcbiAgICAgIDIsXG4gICAgICA2LFxuICAgICAgMTEwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4OSxcbiAgICAgIDE4MyxcbiAgICAgIDY4LFxuICAgICAgMTgzLFxuICAgICAgMTY4LFxuICAgICAgMjIxLFxuICAgICAgMjI0LFxuICAgICAgMTMzLFxuICAgICAgNjEsXG4gICAgICA0NyxcbiAgICAgIDIwMCxcbiAgICAgIDc0LFxuICAgICAgNDUsXG4gICAgICAxOTMsXG4gICAgICAxNDUsXG4gICAgICA4MSxcbiAgICAgIDI0MCxcbiAgICAgIDgsXG4gICAgICAxNjEsXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSzhOREpYREZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTg0NTU5MDY6NzNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MjQ3OTIxMTA2NTUwNTo3M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJZk5nR29Relp1a3RBWVlDaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInR3Njd1blRXYjdTR1dQMzIzc3o0N2dMMGdrbWJEckRGNzF6M21aQUl6M0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVTdkcnQzWXRub0dPYm85K0FRUldWZkpETzVNUGpRbzdBRklNcDFUeW1qVy9RTmJVdzFmZzQ2dzFPTTc4b0o3YktCTHMxS2FEU3Vpa3VNaDFpcVVDRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNzJKRHA2Yko5a1hDSkU3YjVXNUcyNGFWSUlYL28yeEthekdJanRYaExWN2s0WjB0d0wrUFNONlhReU15UTlubWV1YWpPUEFLbXdkQy9CYUtPZVQ1Q0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1ODQ1NTkwNjo3M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI1ODAwMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "마이클🖤",
  packname: process.env.PACK_NAME || "🤖😤",
  botname : process.env.BOT_NAME  || "fhëmzy 🌹",
  ownername:process.env.OWNER_NAME|| "마이클🖤",


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
