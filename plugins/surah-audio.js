/*                                   
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
made by Black-Tappy
contact owner +254759000340

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Shadow-Xtech-V1 
   * @author : Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ
   * @youtube : https://www.youtube.com/@Black-Tappy
   * @infoription : Shadow-Xtech-V1 ,A Multi-functional whatsapp user bot.
   * @version 10 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By Black-Tappy tech info.
   * © 2025 Shadow-Xtech-V1 ✭ ⛥.
   * plugin date : 16/5/2025
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
*/




import config from "../../config.cjs";
import axios from "axios";

const surahCmd = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(" ")[0].toLowerCase()
    : "";
  const query = m.body.slice(prefix.length + cmd.length).trim(); // Extract query

  if (cmd === "surahaudio" || cmd === "surahurdu") {
    if (!query || isNaN(query) || query < 1 || query > 114) {
      return gss.sendMessage(
        m.from,
        { text: "⚠️ براہ کرم 1 سے 114 کے درمیان کوئی نمبر درج کریں۔\nمثال: `!surahaudio 1` یا `!surahurdu 1`" },
        { quoted: m }
      );
    }
  }

  // ✅ --- SURAH AUDIO COMMAND --- ✅
  if (cmd === "surahaudio") {
    await m.React("⏳");
    try {
      const response = await axios.get(`https://api.nexoracle.com/islamic/quran-surah?q=${query}/ur`);
      const data = response.data?.result;
      if (!data || !data.surah_details) throw new Error("Invalid API response");

      const { title_en, title_ar, verses, place, type } = data.surah_details;
      const audioUrl = data.audio_ar;
      const caption = `📖 *${title_en}* (${title_ar})\n🕌 *Place:* ${place}\n📜 *Type:* ${type}\n🔢 *Verses:* ${verses}\n\n🚀 *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ*`;

      await gss.sendMessage(m.from, {
        audio: { url: audioUrl },
        mimetype: "audio/mp4",
        caption: caption,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363369453603973@newsletter",
            newsletterName: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
            serverMessageId: -1,
          },
          externalAdReply: {
            title: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
            body: "Listen to Surah Audio",
            thumbnailUrl: "https://files.catbox.moe/2cq1ns.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      }, { quoted: m });
      await m.React("✅");
    } catch (error) {
      console.error(error);
      await m.React("❌");
      gss.sendMessage(m.from, { text: "⚠️ معاف کیجیے، آڈیو حاصل کرنے میں مسئلہ ہوا۔ دوبارہ کوشش کریں۔" }, { quoted: m });
    }
  }

  // ✅ --- SURAH URDU MEANING COMMAND --- ✅
  if (cmd === "surahurdu") {
    await m.React("⏳");
    try {
      const response = await axios.get(`https://api.nexoracle.com/islamic/quran-surah?q=${query}/ur`);
      const data = response.data?.result;
      if (!data || !data.surah_details || !data.data?.chapter) throw new Error("Invalid API response");

      const { title_en, title_ar, verses } = data.surah_details;
      const chapterText = data.data.chapter.map(v => `📖 *آیت ${v.verse}:* ${v.text}`).join("\n\n");
      const messageText = `📖 *${title_en}* (${title_ar})\n🔢 *Verses:* ${verses}\n\n${chapterText}\n\n🚀 *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ*`;

      await gss.sendMessage(m.from, {
        text: messageText,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363369453603973@newsletter",
            newsletterName: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
            serverMessageId: -1,
          },
          externalAdReply: {
            title: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
            body: "Read Surah with Urdu Translation",
            thumbnailUrl: "https://files.catbox.moe/2cq1ns.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      }, { quoted: m });
      await m.React("✅");
    } catch (error) {
      console.error(error);
      await m.React("❌");
      gss.sendMessage(m.from, { text: "⚠️ معاف کیجیے، اردو ترجمہ حاصل کرنے میں مسئلہ ہوا۔ دوبارہ کوشش کریں۔" }, { quoted: m });
    }
  }

  // ✅ --- ASMA UL HUSNA COMMAND --- ✅
  if (cmd === "asmaulhusna") {
    await m.React("⏳");
    try {
      const response = await axios.get("https://api.nexoracle.com/islamic/asma-ul-husna");
      const data = response.data?.result;

      if (!data || !data.name) throw new Error("Invalid API response");

      const messageText = `💫 *Asma Ul Husna* 💫\n\n✨ *Allah's Name:* ${data.name}\n\n🚀 *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ*`;

      await gss.sendMessage(m.from, {
        text: messageText,
        contextInfo: {
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: {
            newsletterJid: "120363369453603973@newsletter",
            newsletterName: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
            serverMessageId: -1,
          },
          externalAdReply: {
            title: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
            body: "Get Random Asma Ul Husna",
            thumbnailUrl: "https://files.catbox.moe/2cq1ns.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      }, { quoted: m });
      await m.React("✅");
    } catch (error) {
      console.error(error);
      await m.React("❌");
      gss.sendMessage(m.from, { text: "⚠️ معاف کیجیے، نام حاصل کرنے میں مسئلہ ہوا۔ دوبارہ کوشش کریں۔" }, { quoted: m });
    }
  }
  
  // ✅ --- PROPHET NAME COMMAND --- ✅
  if (cmd === "prophetname") {
    await m.React("⏳");
    try {
      const response = await axios.get("https://api.nexoracle.com/islamic/prophet-names");
      const data = response.data?.result;

      if (!data || !data.name) throw new Error("Invalid API response");

      const messageText = `🌟 *Prophet's Name* 🌟\n\n📜 *Name:* ${data.name}\n\n🚀 *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ*`;

    await gss.sendMessage(m.from, {
      text: messageText,
      contextInfo: {
        isForwarded: true,
        forwardingScore: 999,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363369453603973@newsletter",
          newsletterName: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
          serverMessageId: -1,
        },
        externalAdReply: {
          title: "xᴛʀᴇᴍᴇ-ᴛᴇᴄʜ_x sᴜʀᴀʜ ᴍᴇɴᴜ",
          body: "Get Surah Details",
          thumbnailUrl: "https://files.catbox.moe/2cq1ns.jpg",
          sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
          mediaType: 1,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });

    await m.React("✅");
  } catch (error) {
    console.error(error);
    await m.React("❌");
    gss.sendMessage(m.from, { text: "⚠️ معاف کیجیے، سورہ تفصیل حاصل کرنے میں مسئلہ ہوا۔ دوبارہ کوشش کریں۔" }, { quoted: m });
  }
}
};

export default surahCmd;
