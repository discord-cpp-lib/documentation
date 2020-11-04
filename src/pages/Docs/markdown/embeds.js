const embeds = 'index.html:14 ## Embeds\nIn this example we\'re going to create a very simple bot using [embeds](https://discord.com/developers/docs/resources/channel#embed-limits), that responds to simple commands in order to show all the ways of working with embeds\nLet\'s check the code out:\n```cpp\n#include <iostream>\n#include <dpp.h> // "import" discord.cpp\n\nint main()\n{\n  dpp::Client client; // create a client instance\n  \n  // onReady function is not really necessary, but quite usual\n  client.onReady = [&client]() {\n    std::cout << "hello, dpp" << std::endl;\n    std::cout << client.user.id << std::endl;\n  };\n  \n  client.onMessage = [](const dpp::Message& message){\n    if (message.author.bot) return; // checks wheter the message is from a bot\n    \n    if (message.content == "1") {\n	dpp::Embed embed; // instantiate a Embed object\n\tembed.setTitle("Sending only an embed"); // set its title\n\tembed.setDescription("With no plain text content"); // set its description\n\tmessage.channel().send(embed); // send only the embed\n    } else if (message.content == "2") {\n	dpp::Embed embed; \n\tembed.setTitle("Sending an embed"); \n\tembed.setDescription("With plain text content as well");\n\tmessage.channel().send("Hello!!", embed); // send the embed with a message*\n    } else if (message.content == "3") {\n	dpp::Embed embed;\n\tembed.setTitle("Sending an embed");\n\tembed.setDescription("With *COLOUUUR!!!*");\n\tembed.setColour("#21b879"); // "#" is optional, you can also use rgb**\n\tmessage.channel().send(embed);\n    }\n  };\n  \n  const std::string token = "BOT_TOKEN_HERE"; // you might want to get this from another file\n  client.run(token); // actually initializes the bot, everything after this is unreachable\n  \n  return 0;\n}\n```\n### Result:\n<img src="https://i.ibb.co/6rMZZbC/image.png">\n\n### Note\n \n \* It\'s **crucial** that, if you\'re sending an embed and normal text, the **text comes first**. Maybe we\'ll add an overload that enables you to use whatever order you want, but for now this is how you do it.\n ** Check the Embed class section to see how to use rgb.';
export default embeds;