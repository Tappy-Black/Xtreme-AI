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







// joel XD bot
import axios from 'axios';
import config from '../../config.cjs';

const screenshotCommand = async (m, gss) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  // Only respond to the 'ss' command with the correct prefix
  if (cmd === 'ss') {
    const url = m.body.split(" ").slice(1).join(" ");

    // Check if URL is provided
    if (!url) {
      await gss.sendMessage(
        m.from,
        { text: "🔒 Please provide a valid URL after the command. Example: *!ss https://google.com*" },
        { quoted: m }
      );
      return;
    }

    const ssApiUrl = `https://api.siputzx.my.id/api/tools/ssweb?url=${encodeURIComponent(url)}`;

    try {
      // Fetch the screenshot
      const response = await axios.get(ssApiUrl, { responseType: "arraybuffer" });

      if (!response || response.status !== 200) {
        console.error('API Response Error:', response);
        await gss.sendMessage(
          m.from,
          { text: "💬 Unable to capture screenshot for the given URL. Please check the link and try again." },
          { quoted: m }
        );
        return;
      }

      // Send the screenshot as an image to the user
      await gss.sendMessage(
        m.from,
        {
          image: Buffer.from(response.data, "binary"),
          caption: `*ᴘᴏᴡᴇʀᴇᴅ ʙʏ xᴛʀᴇᴍᴇ-ᴛᴇᴄʜ_x ʙᴏᴛ*`,
        },
        { quoted: m }
      );
    } catch (error) {
      console.error('Screenshot Command Error:', error.message || error);

      await gss.sendMessage(
        m.from,
        { text: "❌ Failed to capture a screenshot. Please try again later." },
        { quoted: m }
      );
    }
  }
};

export default screenshotCommand;

// Sʜᴀᴅᴏᴡ-Xᴛᴇᴄʜ Screenshot Command
