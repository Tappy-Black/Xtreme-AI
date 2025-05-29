import config from '../../config.cjs';

const leaveGroup = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
  const isCreator = [botNumber, config.OWNER_NUMBER + '@s.whatsapp.net'].includes(m.sender);
    const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();
    
    const validCommands = ['leave', 'exit', 'left'];

    if (!validCommands.includes(cmd)) return;
    
    if (!m.isGroup) return m.reply("*ιт ιѕ gяσυρ ¢σммαη∂ вιт¢н*");

    if (!isCreator) return m.reply("*σηℓу 𝐱Եґ℮м℮-Ե℮𝖈𝖍__𝐱 ʝѕєя ¢αη υѕє тнιѕ ¢σммαη∂*");

    await gss.groupLeave(m.from);
  } catch (error) {
    console.error('Error:', error);
  }
};

export default leaveGroup;
