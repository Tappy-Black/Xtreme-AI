import config from '../../config.cjs';

// ⚙️ Module Configuration ⚙️
const tagEveryoneInGroup = async (message, sock) => {
  // 🔑 Retrieve Command Prefix 🔑
  const trigger = config.PREFIX;

  // 🔍 Identify User's Intention 🔍
  const userCommand = message.body.startsWith(trigger)
    ? message.body.slice(trigger.length).trim().split(' ')[0].toLowerCase()
    : '';

  // ✅ Execute 'tagall' Command Logic ✅
  if (userCommand === 'tagall') {
    // 🛡️ Group Contextual Check 🛡️
    if (!message.isGroup) {
      return await sock.sendMessage(
        message.from,
        { text: '🚫 Command applicable within groups only.' },
        { quoted: message }
      );
    }

    try {
      // 📡 Fetch Real-time Group Data 📡
      const groupData = await sock.groupMetadata(message.from);
      const groupParticipants = groupData.participants;

      // 🎯 Prepare User Mentions 🎯
      const targets = groupParticipants.map(({ id }) => id);

      // 🎨 Craft the Notification Message 🎨
      const announcementHeader = `📢 🔔 Paging All Members! 🔔 📢\n\n`;
      let announcementBody = '';
      for (const member of groupParticipants) {
        const userName = member.id.split('@')[0];
        announcementBody += `👤 🔗 @${userName} is here!\n`; // Emphasizing presence
      }
      const announcementFooter = `\n✨ ${groupParticipants.length} members have been notified. ✨`;

      const broadcastMessage = announcementHeader + announcementBody + announcementFooter;

      // 🚀 Dispatch the Tagging Notification 🚀
      await sock.sendMessage(
        message.from,
        { text: broadcastMessage, mentions: targets },
        { quoted: message }
      );
    } catch (error) {
      // 🚨 Handle Potential Issues 🚨
      console.error('🔥 Action Failed: Unable to tag all members:', error);
      await sock.sendMessage(
        message.from,
        {
          text:
            '⚠️ Alert: Tagging operation encountered an issue. Ensure necessary permissions are granted.',
        },
        { quoted: message }
      );
    }
  }
};

export default tagEveryoneInGroup;
