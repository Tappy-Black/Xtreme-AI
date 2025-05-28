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





import fs from 'fs';
import moment from 'moment-timezone';
import config from '../../config.cjs';

const rank = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix)
    ? m.body.slice(prefix.length).split(' ')[0].toLowerCase()
    : '';

  if (cmd === "rank") {
    await m.React('💭'); // React with a thinking icon
    
    // Sample data: You can replace this with your actual leaderboard data
    const leaderboard = [
      { name: "User1", points: 1000 },
      { name: "User2", points: 900 },
      { name: "User3", points: 800 },
      { name: "User4", points: 700 },
      { name: "User5", points: 600 },
    ];

    // Sort the leaderboard by points (descending)
    leaderboard.sort((a, b) => b.points - a.points);

    // Find the rank of the user who sent the command
    const userRank = leaderboard.findIndex(user => user.name === m.pushName) + 1;
    const userPoints = leaderboard[userRank - 1] ? leaderboard[userRank - 1].points : 0;

    let rankMessage = `👑 *Rank Information*\n\n`;
    rankMessage += `*Your Rank*: ${userRank} / ${leaderboard.length}\n`;
    rankMessage += `*Your Points*: ${userPoints}\n\n`;

    rankMessage += `╭──❍ 「 *Leaderboard* 」❍\n`;

    // Display top 5 users (or all, if you prefer)
    leaderboard.slice(0, 5).forEach((user, index) => {
      rankMessage += `│ ${index + 1}. ${user.name} - ${user.points} points\n`;
    });

    rankMessage += `╰─────────────────❍`;

    await m.React('✔️'); // React with a success icon

    // Send the rank message
    sock.sendMessage(
      m.from,
      {
        text: rankMessage,
        contextInfo: {
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363369453603973@newsletter',
            newsletterName: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
            serverMessageId: -1,
          },
          forwardingScore: 999, // Score to indicate it has been forwarded
          externalAdReply: {
            title: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
            body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ",
            thumbnailUrl: 'https://files.catbox.moe/3hrxbh.jpg', // Add thumbnail URL if required
            sourceUrl: 'https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10', // Add source URL if necessary
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m }
    );
  }
};

//© Powered by Ⴊl𐌀Ꮳk𐌕𐌀ႲႲჄ😇
export default rank;
