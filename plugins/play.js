const _0x3e21e8 = function () {
  let _0x564f50 = true;
  return function (_0x3cb00a, _0x54c0fb) {
    const _0x16287d = _0x564f50 ? function () {
      if (_0x54c0fb) {
        const _0x435462 = _0x54c0fb.apply(_0x3cb00a, arguments);
        _0x54c0fb = null;
        return _0x435462;
      }
    } : function () {};
    _0x564f50 = false;
    return _0x16287d;
  };
}();
const _0x1b1c32 = _0x3e21e8(this, function () {
  return _0x1b1c32.toString().search("(((.+)+)+)+$").toString().constructor(_0x1b1c32).search("(((.+)+)+)+$");
});
_0x1b1c32();
const _0x566ce1 = function () {
  let _0x1f5bbe = true;
  return function (_0x303f54, _0x31c288) {
    const _0x134781 = _0x1f5bbe ? function () {
      if (_0x31c288) {
        const _0x1dabd6 = _0x31c288.apply(_0x303f54, arguments);
        _0x31c288 = null;
        return _0x1dabd6;
      }
    } : function () {};
    _0x1f5bbe = false;
    return _0x134781;
  };
}();
(function () {
  _0x566ce1(this, function () {
    const _0x3524e7 = new RegExp("function *\\( *\\)");
    const _0x4a3d8c = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x2b92c9 = _0x31ae1a("init");
    if (!_0x3524e7.test(_0x2b92c9 + "chain") || !_0x4a3d8c.test(_0x2b92c9 + "input")) {
      _0x2b92c9('0');
    } else {
      _0x31ae1a();
    }
  })();
})();
const _0x274977 = function () {
  let _0x370782 = true;
  return function (_0x5e5922, _0x4f1c9f) {
    const _0x6dd038 = _0x370782 ? function () {
      if (_0x4f1c9f) {
        const _0x122267 = _0x4f1c9f.apply(_0x5e5922, arguments);
        _0x4f1c9f = null;
        return _0x122267;
      }
    } : function () {};
    _0x370782 = false;
    return _0x6dd038;
  };
}();
const _0x4e1284 = _0x274977(this, function () {
  let _0x52e639;
  try {
    const _0xc9bd0d = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x52e639 = _0xc9bd0d();
  } catch (_0x2c7e91) {
    _0x52e639 = window;
  }
  const _0x7a1f65 = _0x52e639.console = _0x52e639.console || {};
  const _0x2890a8 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x25a0b9 = 0; _0x25a0b9 < _0x2890a8.length; _0x25a0b9++) {
    const _0x4a551c = _0x274977.constructor.prototype.bind(_0x274977);
    const _0x2ecd27 = _0x2890a8[_0x25a0b9];
    const _0x25bbf5 = _0x7a1f65[_0x2ecd27] || _0x4a551c;
    _0x4a551c.__proto__ = _0x274977.bind(_0x274977);
    _0x4a551c.toString = _0x25bbf5.toString.bind(_0x25bbf5);
    _0x7a1f65[_0x2ecd27] = _0x4a551c;
  }
});
(function () {
  const _0x10fb00 = function () {
    let _0x39d6c2;
    try {
      _0x39d6c2 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x229b1c) {
      _0x39d6c2 = window;
    }
    return _0x39d6c2;
  };
  const _0x388fe4 = _0x10fb00();
  _0x388fe4.setInterval(_0x31ae1a, 4000);
})();
_0x4e1284();
import _0x1c824b from 'axios';
import _0x47407c from '../../config.cjs';
const playHandler = async (_0x41eb01, _0x28b5fe) => {
  try {
    if (!_0x41eb01?.["from"] || !_0x41eb01?.["body"] || !_0x28b5fe) {
      console.error("Invalid message or socket object");
      return;
    }
    const _0x11035e = _0x47407c.PREFIX || '!';
    const _0x2ebb08 = _0x41eb01.body || '';
    if (!_0x2ebb08.startsWith(_0x11035e)) {
      return;
    }
    const _0x4efd93 = _0x2ebb08.slice(_0x11035e.length).split(" ")[0].toLowerCase();
    const _0x2bc585 = _0x2ebb08.slice(_0x11035e.length + _0x4efd93.length).trim();
    const _0x5d845c = ["sing", "ytmp3", "song2", "audio", "play", 'p'];
    if (!_0x5d845c.includes(_0x4efd93)) {
      return;
    }
    if (!_0x2bc585) {
      const _0x43280a = {
        text: "🎶 Oops! Please provide a song name or artist! 💖"
      };
      await _0x28b5fe.sendMessage(_0x41eb01.from, _0x43280a, {
        'quoted': _0x41eb01
      });
      if (typeof _0x41eb01.React === "function") {
        await _0x41eb01.React('❌');
      }
      return;
    }
    if (typeof _0x41eb01.React === "function") {
      await _0x41eb01.React('⏳');
    }
    try {
      const _0x1c3ddb = "https://api.vreden.my.id/api/ytplaymp3?query=" + encodeURIComponent(_0x2bc585);
      const _0x58f439 = await _0x1c824b.get(_0x1c3ddb);
      const _0x528eec = _0x58f439.data;
      if (!_0x528eec?.["result"]?.["download"]?.["url"]) {
        const _0x3b9bcd = {
          text: "❌ Uh-oh! No results found for that song! 😔"
        };
        await _0x28b5fe.sendMessage(_0x41eb01.from, _0x3b9bcd, {
          'quoted': _0x41eb01
        });
        if (typeof _0x41eb01.React === "function") {
          await _0x41eb01.React('❌');
        }
        return;
      }
      const {
        title: _0x4f6efd,
        url: _0x7124d8,
        image: _0xacdbf0,
        timestamp: _0x2ae9dc,
        views: _0x239170,
        author: _0x81ca5c
      } = _0x528eec.result.metadata;
      const _0x1b088a = _0x528eec.result.download.url;
      const _0x334449 = {
        url: _0xacdbf0
      };
      await _0x28b5fe.sendMessage(_0x41eb01.from, {
        'image': _0x334449,
        'caption': "╭─❍「 ᴍᴜsɪᴄ ᴅᴇᴛᴀɪʟs 」❍\n│  🎵 *Title:* " + _0x4f6efd + "\n│  ⌛ *Duration:* " + _0x2ae9dc + "\n│  👁 *Views:* " + _0x239170.toLocaleString() + "\n│  🤴 *Artist:* " + _0x81ca5c.name + "\n╰───────────────━⊷\nᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ",
        'contextInfo': {
          'externalAdReply': {
            'title': _0x4f6efd,
            'body': "ᴘʟᴀʏɪɴɢ ᴠɪᴀ xᴛʀᴇᴍᴇ ᴛᴇᴄʜ x",
            'thumbnailUrl': _0xacdbf0,
            'sourceUrl': _0x7124d8,
            'mediaType': 0x1,
            'renderLargerThumbnail': false
          }
        }
      }, {
        'quoted': _0x41eb01
      });
      const _0x141abb = {
        url: _0x1b088a
      };
      const _0x45c820 = {
        audio: _0x141abb,
        mimetype: "audio/mpeg",
        ptt: false,
        caption: "🎶 *Now Playing:* " + _0x4f6efd + "\n⌛ *Duration:* " + _0x2ae9dc + "\n↻ ◁ II ▷ ↺",
        thumbnail: _0xacdbf0,
        contextInfo: {}
      };
      _0x45c820.contextInfo.isForwarded = true;
      _0x45c820.contextInfo.forwardingScore = 0x3e7;
      _0x45c820.contextInfo.forwardedNewsletterMessageInfo = {};
      _0x45c820.contextInfo.externalAdReply = {};
      _0x45c820.contextInfo.forwardedNewsletterMessageInfo.newsletterJid = "120363369453603973@newsletter";
      _0x45c820.contextInfo.forwardedNewsletterMessageInfo.newsletterName = "𝐱Եґ℮м℮-Ե℮𝖈𝖍__𝐱";
      _0x45c820.contextInfo.forwardedNewsletterMessageInfo.serverMessageId = -1;
      _0x45c820.contextInfo.externalAdReply.title = "xᴛʀᴇᴍᴇ ᴛᴇᴄʜ x ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ";
      _0x45c820.contextInfo.externalAdReply.body = "ᴘʟᴀʏɪɴɢ ɴᴏᴡ ↻ ◁ II ▷ ↺";
      _0x45c820.contextInfo.externalAdReply.thumbnailUrl = _0xacdbf0;
      _0x45c820.contextInfo.externalAdReply.sourceUrl = _0x7124d8;
      _0x45c820.contextInfo.externalAdReply.mediaType = 0x1;
      _0x45c820.contextInfo.externalAdReply.renderLargerThumbnail = true;
      await _0x28b5fe.sendMessage(_0x41eb01.from, _0x45c820, {
        'quoted': _0x41eb01
      });
      if (typeof _0x41eb01.React === "function") {
        await _0x41eb01.React('🎵');
      }
    } catch (_0x468fd6) {
      console.error("Error in play command:", _0x468fd6);
      const _0x5e6e79 = _0x468fd6.response?.["data"]?.["message"] || "Oh no! Something went wrong!";
      const _0x310004 = {
        text: "❌ " + _0x5e6e79 + " 😢"
      };
      await _0x28b5fe.sendMessage(_0x41eb01.from, _0x310004, {
        'quoted': _0x41eb01
      });
      if (typeof _0x41eb01.React === "function") {
        await _0x41eb01.React('❌');
      }
    }
  } catch (_0x506e25) {
    console.error("Critical error in playHandler:", _0x506e25);
    const _0x1e7ca0 = {
      text: "❌ Uh-oh! An unexpected error occurred! 😣 Try using *song2* as fallback."
    };
    await _0x28b5fe.sendMessage(_0x41eb01.from, _0x1e7ca0, {
      'quoted': _0x41eb01
    });
    if (typeof _0x41eb01.React === "function") {
      await _0x41eb01.React('❌');
    }
  }
};
export default playHandler;
function _0x31ae1a(_0x2f5d32) {
  function _0x424028(_0x4c6c57) {
    if (typeof _0x4c6c57 === "string") {
      return function (_0x44b2ed) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x4c6c57 / _0x4c6c57).length !== 1 || _0x4c6c57 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x424028(++_0x4c6c57);
  }
  try {
    if (_0x2f5d32) {
      return _0x424028;
    } else {
      _0x424028(0);
    }
  } catch (_0x47740c) {}
}