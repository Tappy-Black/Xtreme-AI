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

import axios from 'axios';
import config from '../../config.cjs';

const quranMedia = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  const videoCommands = ['quranvid', 'qvid', 'quranvideo'];
  const imageCommands = ['quraimage', 'qimg'];

  // ─── 『 Quran Video Command 』 ─── //
  if (videoCommands.includes(cmd)) {
    const videoUrl = 'https://bk9.fun/Islam/quranvid';
    await m.React('🌙');

    await gss.sendMessage(
      m.from,
      {
        video: { url: videoUrl },
        caption:
`┏━━━━━━━━━━━━━━━━━━━┓
┃  *📖 ǫᴜʀᴀɴ ᴠɪᴅᴇᴏ ᴇxᴘᴇʀɪᴇɴᴄᴇ*  
┃━━━━━━━━━━━━━━━━━━━
┃  *“A sound heart starts with divine verses.”*
┃
┃  🌀 *Xtreme-Tech_X Exclusive Drop*
┃  🧠 Mind • ✨ Soul • ❤️ Peace
┗━━━━━━━━━━━━━━━━━━━┛`,
      },
      { quoted: m }
    );
  }

  // ─── 『 Quran Image Command 』 ─── //
  if (imageCommands.includes(cmd)) {
    const imageUrl = 'https://bk9.fun/Islam/din';
    await m.React('🕋');

    await gss.sendMessage(
      m.from,
      {
        image: { url: imageUrl },
        caption:
`┏━━━━━━━━━━━━━━━━━━━┓
┃  *🖼️ ǫᴜʀᴀɴ ɪᴍᴀɢᴇ ᴠɪʙᴇ*
┃━━━━━━━━━━━━━━━━━━━
┃  *“Faith isn't seen, it's felt.”*
┃
┃  ⚡ *Coded by Black-Tappy*
┃  ☁️ Reflect • ☀️ Rise • 🕊️ Glow
┗━━━━━━━━━━━━━━━━━━━┛`,
      },
      { quoted: m }
    );
  }
};

export default quranMedia;
