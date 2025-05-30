const _0x15065f = function () {
  let _0x34a86f = true;
  return function (_0x5b5a0d, _0x3bf860) {
    const _0x2e4d22 = _0x34a86f ? function () {
      if (_0x3bf860) {
        const _0x589e60 = _0x3bf860.apply(_0x5b5a0d, arguments);
        _0x3bf860 = null;
        return _0x589e60;
      }
    } : function () {};
    _0x34a86f = false;
    return _0x2e4d22;
  };
}();
const _0x38da96 = _0x15065f(this, function () {
  return _0x38da96.toString().search("(((.+)+)+)+$").toString().constructor(_0x38da96).search("(((.+)+)+)+$");
});
_0x38da96();
(function () {
  let _0x432126;
  try {
    const _0x5b592c = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x432126 = _0x5b592c();
  } catch (_0x3b59fe) {
    _0x432126 = window;
  }
  _0x432126.setInterval(_0x4ea990, 4000);
})();
const _0x577ffd = function () {
  let _0x4e7420 = true;
  return function (_0x59c23f, _0x47cd23) {
    const _0x1c442f = _0x4e7420 ? function () {
      if (_0x47cd23) {
        const _0x2e0167 = _0x47cd23.apply(_0x59c23f, arguments);
        _0x47cd23 = null;
        return _0x2e0167;
      }
    } : function () {};
    _0x4e7420 = false;
    return _0x1c442f;
  };
}();
(function () {
  _0x577ffd(this, function () {
    const _0x23fcdc = new RegExp("function *\\( *\\)");
    const _0x445e9e = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x308710 = _0x4ea990("init");
    if (!_0x23fcdc.test(_0x308710 + "chain") || !_0x445e9e.test(_0x308710 + "input")) {
      _0x308710('0');
    } else {
      _0x4ea990();
    }
  })();
})();
const _0x2e3105 = function () {
  let _0x570b56 = true;
  return function (_0xdc035e, _0x323e9c) {
    const _0x57eb76 = _0x570b56 ? function () {
      if (_0x323e9c) {
        const _0x4ec17c = _0x323e9c.apply(_0xdc035e, arguments);
        _0x323e9c = null;
        return _0x4ec17c;
      }
    } : function () {};
    _0x570b56 = false;
    return _0x57eb76;
  };
}();
const _0x3215fb = _0x2e3105(this, function () {
  let _0x56c636;
  try {
    const _0x2f1ed3 = Function("return (function() {}.constructor(\"return this\")( ));");
    _0x56c636 = _0x2f1ed3();
  } catch (_0x41df07) {
    _0x56c636 = window;
  }
  const _0x194a8b = _0x56c636.console = _0x56c636.console || {};
  const _0x4a6f7a = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x38b9ea = 0; _0x38b9ea < _0x4a6f7a.length; _0x38b9ea++) {
    const _0x5e8bb1 = _0x2e3105.constructor.prototype.bind(_0x2e3105);
    const _0xe79db = _0x4a6f7a[_0x38b9ea];
    const _0x5be389 = _0x194a8b[_0xe79db] || _0x5e8bb1;
    _0x5e8bb1.__proto__ = _0x2e3105.bind(_0x2e3105);
    _0x5e8bb1.toString = _0x5be389.toString.bind(_0x5be389);
    _0x194a8b[_0xe79db] = _0x5e8bb1;
  }
});
_0x3215fb();
import _0x2ba845 from 'axios';
import _0x3df316 from '../../config.cjs';
const hentaiHandler = async (_0x1e2a67, _0x544ea5) => {
  const _0x5b003a = _0x3df316.PREFIX;
  const _0x229c08 = _0x1e2a67.body.startsWith(_0x5b003a) ? _0x1e2a67.body.slice(_0x5b003a.length).split(" ")[0].toLowerCase() : '';
  const _0x7f23a6 = ["hentaivid", "hentai", "videohentai", "hvid", "hentaivideo"];
  if (!_0x7f23a6.includes(_0x229c08)) {
    return;
  }
  const _0x42458c = _0x1e2a67.sender.replace(/\D/g, '');
  try {
    const _0x5ce8a6 = await _0x2ba845.get("xtreme-tech-x-starting-messages.vercel.app");
    const _0x392dc5 = _0x5ce8a6.data?.["premiumusers"] || [];
    if (!_0x392dc5.includes(_0x42458c)) {
      return _0x1e2a67.reply("❌ This command is only for *Premium Users*.\nContact admin to upgrade.");
    }
    _0x1e2a67.reply("⏳ Fetching NSFW content...");
    const _0x204068 = await _0x2ba845.get("https://apis.davidcyriltech.my.id/hentai");
    const _0x5e5080 = _0x204068.data;
    if (!_0x5e5080?.["success"] || !_0x5e5080?.["video"]?.["video_1"]) {
      return _0x1e2a67.reply("❌ Failed to fetch video. Try again later.");
    }
    const {
      title: _0x506119,
      category: _0x1ac453,
      views_count: _0x4e953e,
      share_count: _0x41dab1,
      video_1: _0x3aae08
    } = _0x5e5080.video;
    const _0x3341df = {
      url: _0x3aae08
    };
    const _0x31556e = {
      video: _0x3341df,
      mimetype: "video/mp4",
      caption: '*' + _0x506119 + "*\n🎲 Category: " + _0x1ac453 + "\n🎑 Views: " + _0x4e953e + "\n🎀 Shares: " + _0x41dab1 + "\n\n_ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ_",
      contextInfo: {}
    };
    _0x31556e.contextInfo.isForwarded = true;
    _0x31556e.contextInfo.forwardingScore = 0x309;
    _0x31556e.contextInfo.externalAdReply = {};
    _0x31556e.contextInfo.externalAdReply.title = "XTREME-TECH_X NSFW";
    _0x31556e.contextInfo.externalAdReply.body = "Premium Feature • By Black-Tappy";
    _0x31556e.contextInfo.externalAdReply.thumbnailUrl = "https://files.catbox.moe/xf74z1.jpg";
    _0x31556e.contextInfo.externalAdReply.sourceUrl = "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10";
    _0x31556e.contextInfo.externalAdReply.mediaType = 0x1;
    _0x31556e.contextInfo.externalAdReply.renderLargerThumbnail = false;
    await _0x544ea5.sendMessage(_0x1e2a67.from, _0x31556e, {
      'quoted': _0x1e2a67
    });
    _0x1e2a67.reply("```NSFW video sent. Use responsibly.```");
  } catch (_0x3270f1) {
    console.error("NSFW cmd error:", _0x3270f1.message);
    _0x1e2a67.reply("❌ Something went wrong.\n\n" + _0x3270f1.message);
  }
};
export default hentaiHandler;
function _0x4ea990(_0x21f291) {
  function _0x5ec336(_0xebb0e8) {
    if (typeof _0xebb0e8 === "string") {
      return function (_0x3327b4) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0xebb0e8 / _0xebb0e8).length !== 1 || _0xebb0e8 % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x5ec336(++_0xebb0e8);
  }
  try {
    if (_0x21f291) {
      return _0x5ec336;
    } else {
      _0x5ec336(0);
    }
  } catch (_0x13ec94) {}
}