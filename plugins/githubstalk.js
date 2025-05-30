
/*                                   
───────────────────────────────────────────────────────────────────/*                                   
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

const githubStalk = async (m, gss) => {
  try {
    const prefix = config.PREFIX;
    const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
    const text = m.body.slice(prefix.length + cmd.length).trim();
    const args = text.split(' ');

    const validCommands = ['githubstalk', 'ghstalk'];

    if (validCommands.includes(cmd)) {
      if (!args[0]) return m.reply('⚠️ Mention a GitHub username to stalk.');

      const username = args[0];

      try {
        const githubResponse = await axios.get(`https://api.github.com/users/${username}`);
        const userData = githubResponse.data;

        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=stargazers_count&direction=desc`);
        const reposData = reposResponse.data;

        let responseMessage = `╭───────────────༺☆༻───────────────╮
*『 ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ ɢɪᴛʜᴜʙ ꜱᴛᴀʟᴋᴇʀ 』*
╰───────────────༺☆༻───────────────╯

👤 *ᴜꜱᴇʀɴᴀᴍᴇ*: @${userData.login}
📛 *ɴᴀᴍᴇ*: ${userData.name || '⟨N/A⟩'}
🧬 *ʙɪᴏ*: ${userData.bio || '⟨No bio found⟩'}
🆔 *ᴜꜱᴇʀ ID*: ${userData.id}
🧩 *ɴᴏᴅᴇ ID*: ${userData.node_id}

🖼️ *ᴀᴠᴀᴛᴀʀ*: ${userData.avatar_url}
🔗 *ɢɪᴛʜᴜʙ*: [ᴠɪᴇᴡ ᴘʀᴏꜰɪʟᴇ](${userData.html_url})
🛠️ *ᴀᴄᴄᴏᴜɴᴛ ᴛʏᴘᴇ*: ${userData.type}
👑 *ᴀᴅᴍɪɴ*: ${userData.site_admin ? 'ʏᴇꜱ' : 'ɴᴏ'}

🏢 *ᴄᴏᴍᴘᴀɴʏ*: ${userData.company || 'None'}
🕸️ *ʙʟᴏɢ*: ${userData.blog || 'None'}
📍 *ʟᴏᴄᴀᴛɪᴏɴ*: ${userData.location || 'Unknown'}
✉️ *ᴇᴍᴀɪʟ*: ${userData.email || 'Hidden'}

📦 *ᴘᴜʙʟɪᴄ ʀᴇᴘᴏꜱ*: ${userData.public_repos}
📜 *ɢɪꜱᴛꜱ*: ${userData.public_gists}
🧑‍🤝‍🧑 *ꜰᴏʟʟᴏᴡᴇʀꜱ*: ${userData.followers}
🔁 *ꜰᴏʟʟᴏᴡɪɴɢ*: ${userData.following}

⏳ *ᴄʀᴇᴀᴛᴇᴅ*: ${userData.created_at}
♻️ *ᴜᴘᴅᴀᴛᴇᴅ*: ${userData.updated_at}
`;

        if (reposData.length > 0) {
          const topRepos = reposData.slice(0, 5);
          const reposList = topRepos.map(repo => {
            return `╭────『 *${repo.name}* 』────╮
🔗 [ʀᴇᴘᴏ ʟɪɴᴋ](${repo.html_url})
📝 *ᴅᴇꜱᴄ*: ${repo.description || 'N/A'}
⭐ *ꜱᴛᴀʀꜱ*: ${repo.stargazers_count}   🍴 *ꜰᴏʀᴋꜱ*: ${repo.forks}
╰────────────────────────────╯`;
          });

          responseMessage += `\n\n✨ *ᴛᴏᴘ ʀᴇᴘᴏꜱɪᴛᴏʀɪᴇꜱ*\n${reposList.join('\n\n')}`;
        } else {
          responseMessage += `\n⚠️ ɴᴏ ᴘᴜʙʟɪᴄ ʀᴇᴘᴏꜱ ꜰᴏᴜɴᴅ.`;
        }

        responseMessage += `\n\n╭───────────────༺⚡༻───────────────╮
ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ
╰───────────────༺⚡༻───────────────╯`;

        await gss.sendMessage(m.from, {
          image: { url: userData.avatar_url },
          caption: responseMessage
        }, { quoted: m });

      } catch (err) {
        console.error('GitHub fetch error:', err);
        await m.reply('❌ An error occurred while fetching GitHub data.');
      }
    }
  } catch (err) {
    console.error('Command error:', err);
    m.reply('⚠️ Something went wrong while processing your request.');
  }
};

export default githubStalk;