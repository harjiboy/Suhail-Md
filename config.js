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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349158455906";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_02_11_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDg4LFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA4MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2LFxuICAgICAgICA2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQzLFxuICAgICAgICA5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEsXG4gICAgICAgIDMxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDcwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQwLFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDg3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDU4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDczLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpUU3ZtUENrTTFjZUNmTm9hQ1VQaWc0VVhQcDZCYi82T25yQytKcmhXblk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk04UFFtYURSUVlpdzEwUk50MEVxNEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWYwY2IxYjYtYWEwZi00NGU4LWIyOWMtY2JhYTBjNmFiZjZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzOSxcbiAgICAgIDg1LFxuICAgICAgMzYsXG4gICAgICAxNzksXG4gICAgICA5NyxcbiAgICAgIDM3LFxuICAgICAgOTQsXG4gICAgICAzMSxcbiAgICAgIDE1MCxcbiAgICAgIDE5NSxcbiAgICAgIDgxLFxuICAgICAgNzgsXG4gICAgICAyNTEsXG4gICAgICA2NCxcbiAgICAgIDE3NixcbiAgICAgIDk1LFxuICAgICAgMTg0LFxuICAgICAgMjA1LFxuICAgICAgODcsXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjA3LFxuICAgICAgNTksXG4gICAgICA0NixcbiAgICAgIDcyLFxuICAgICAgOTUsXG4gICAgICAxOTUsXG4gICAgICA5NyxcbiAgICAgIDE4NSxcbiAgICAgIDIwOSxcbiAgICAgIDMzLFxuICAgICAgMjYsXG4gICAgICAxMjgsXG4gICAgICAxMjIsXG4gICAgICAyMjIsXG4gICAgICAxMTEsXG4gICAgICAxMjUsXG4gICAgICAxOTIsXG4gICAgICAyMCxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTNXWEZCUkxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxNTg0NTU5MDY6NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MjQ3OTIxMTA2NTUwNTo3N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJak5nR29RdytpR3RRWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInR3Njd1blRXYjdTR1dQMzIzc3o0N2dMMGdrbWJEckRGNzF6M21aQUl6M0U9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOSsrWlFFUEJNQ0VmdjdyREZYWmlEb29jMUY2c1VxM1ZtcEhBZ0Z6RlRQN1k4Y1h5OGVWSVZlLzdoTWFyZS9kN3Y5cFFPSjZUWG9pWkluanA4TWNOQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTEROZk5GWXBmKzU0bVIzVHZwdXg4bWt1NGpoajlEa255NXcrV1lFQ1J6MzVFdTErZVJhQzBEdmp0ZW8zWjhDSUIyLzFKTTk4L0g0WDR3cnBNdUdzQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTE1ODQ1NTkwNjo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTg3MzQ3OFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "*",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "마이클",
  packname: process.env.PACK_NAME || "🤖",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
