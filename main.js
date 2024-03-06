const { Client, AttachmentBuilder, GatewayIntentBits, EmbedBuilder } = require('discord.js');
require('dotenv').config();

const client = new Client( {intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages]} );

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (1=1) { // your condition here
        console.log("sending file...")

        const exampleEmbed = new EmbedBuilder()
	        .setTitle('test message')

        // =======================
        // MAIN PART

        const file1 = new AttachmentBuilder('./examplefile.png');
        const file2 = new AttachmentBuilder('./examplefile.txt');
        await message.channel.send({ embeds: [exampleEmbed] , files: [file1, file2] }); // embeds are optional

        // =======================
    }
});

client.login(process.env.TOKEN);