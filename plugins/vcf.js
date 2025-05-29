import config from '../../config.cjs';

const createVCF = async (m, sock) => {
  const prefix = config.PREFIX;
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';

  if (cmd === "vcf") {
    if (!m.isGroup) {
      return m.reply("This command can only be used in groups.");
    }

    await m.React('⏳');

    try {
      const groupMetadata = await sock.groupMetadata(m.from);
      const participants = groupMetadata.participants;

      // Get the owner id
      const ownerId = groupMetadata.owner.split('@')[0];

      let vcfContent = "BEGIN:VCARD\nVERSION:3.0\n";

      // Adding Group Name for context (optional)
      const groupName = groupMetadata.subject || "Unknown Group";
      vcfContent += `X-Group-Name:${groupName}\n`;

      participants.forEach((participant, index) => {
        const phoneNumber = participant.id.split('@')[0]; // Extract the phone number (WAID)

        // Skip the owner from the VCF
        if (phoneNumber === ownerId) {
          return;
        }

        const username = `Black ${index + 1} 😊`; // Format "Popkid [number] 😊"

        if (phoneNumber) {
          // Add each contact's VCF entry with the sequential "Popkid" naming and emoji
          vcfContent += `FN:${username}\nTEL;type=CELL;waid=${phoneNumber}:+${phoneNumber}\n`;
        }
      });

      vcfContent += "END:VCARD\n";

      await sock.sendMessage(
        m.from,
        {
          document: Buffer.from(vcfContent, 'utf-8'),
          mimetype: 'text/vcard',
          fileName: 'group_contacts.vcf',
        },
        { quoted: m }
      );
      await m.React('✅');
    } catch (error) {
      console.error("Error creating VCF:", error);
      await m.reply("An error occurred while trying to create the VCF.");
      await m.React('❌');
    }
  }
};

export default createVCF;
