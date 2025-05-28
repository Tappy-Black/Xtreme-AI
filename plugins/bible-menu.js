


const _0x1191eb = function () {
  const _0x48a5db = {
    iBcVs: function (_0x17d679, _0x347f7e) {
      return _0x17d679 === _0x347f7e;
    },
    TImSk: "YoRsi",
    DRrfp: "NPboa",
    QgaYI: "KaZOK",
    qsqBD: "vqwVd"
  };
  _0x48a5db.cWBWL = function (_0x5a3524, _0x41b021) {
    return _0x5a3524 !== _0x41b021;
  };
  _0x48a5db.XfSLM = "StebT";
  let _0x2e15a8 = true;
  return function (_0x30b288, _0x10686c) {
    if (_0x48a5db.cWBWL(_0x48a5db.XfSLM, _0x48a5db.XfSLM)) {
      const _0x498e98 = _0x3a0770.apply(_0xf4c6b6, arguments);
      _0x168644 = null;
      return _0x498e98;
    } else {
      const _0x1c90a1 = _0x2e15a8 ? function () {
        if (_0x10686c) {
          const _0x1d8f22 = _0x10686c.apply(_0x30b288, arguments);
          _0x10686c = null;
          return _0x1d8f22;
        }
      } : function () {};
      _0x2e15a8 = false;
      return _0x1c90a1;
    }
  };
}();
const _0x2266d7 = _0x1191eb(this, function () {
  return _0x2266d7.toString().search("(((.+)+)+)+$").toString().constructor(_0x2266d7).search("(((.+)+)+)+$");
});
_0x2266d7();
const _0x40c8cb = function () {
  let _0x1e158f = true;
  return function (_0x24eaad, _0x3d345c) {
    const _0x18ae05 = _0x1e158f ? function () {
      if (_0x3d345c) {
        const _0x6e6e29 = _0x3d345c.apply(_0x24eaad, arguments);
        _0x3d345c = null;
        return _0x6e6e29;
      }
    } : function () {};
    _0x1e158f = false;
    return _0x18ae05;
  };
}();
(function () {
  _0x40c8cb(this, function () {
    const _0x5e12af = new RegExp("function *\\( *\\)");
    const _0x1a8270 = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", 'i');
    const _0x5807af = _0x1ffdbc("init");
    if (!_0x5e12af.test(_0x5807af + "chain") || !_0x1a8270.test(_0x5807af + "input")) {
      _0x5807af('0');
    } else {
      _0x1ffdbc();
    }
  })();
})();
(function () {
  const _0x30a03b = function () {
    let _0x156d2d;
    try {
      _0x156d2d = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x5596a3) {
      _0x156d2d = window;
    }
    return _0x156d2d;
  };
  const _0x2eabac = _0x30a03b();
  _0x2eabac.setInterval(_0x1ffdbc, 4000);
})();
const _0x1494ac = function () {
  let _0x15f67f = true;
  return function (_0x51edcd, _0x528816) {
    const _0x4cc229 = _0x15f67f ? function () {
      if (_0x528816) {
        const _0x452a49 = _0x528816.apply(_0x51edcd, arguments);
        _0x528816 = null;
        return _0x452a49;
      }
    } : function () {};
    _0x15f67f = false;
    return _0x4cc229;
  };
}();
const _0x344b63 = _0x1494ac(this, function () {
  const _0x301771 = function () {
    let _0x4735b1;
    try {
      _0x4735b1 = Function("return (function() {}.constructor(\"return this\")( ));")();
    } catch (_0x39ddd6) {
      _0x4735b1 = window;
    }
    return _0x4735b1;
  };
  const _0xd61406 = _0x301771();
  const _0x26cc33 = _0xd61406.console = _0xd61406.console || {};
  const _0x14e861 = ["log", "warn", "info", "error", "exception", "table", "trace"];
  for (let _0x3aded5 = 0; _0x3aded5 < _0x14e861.length; _0x3aded5++) {
    const _0x15de39 = _0x1494ac.constructor.prototype.bind(_0x1494ac);
    const _0x2abc99 = _0x14e861[_0x3aded5];
    const _0x2a41ba = _0x26cc33[_0x2abc99] || _0x15de39;
    _0x15de39.__proto__ = _0x1494ac.bind(_0x1494ac);
    _0x15de39.toString = _0x2a41ba.toString.bind(_0x2a41ba);
    _0x26cc33[_0x2abc99] = _0x15de39;
  }
});
_0x344b63();
import _0x539745 from 'moment-timezone';
import 'fs';
import 'os';
import _0x580423 from '@whiskeysockets/baileys';
const {
  generateWAMessageFromContent,
  proto
} = _0x580423;
import _0x58677e from '../../config.cjs';
const alive = async (_0x94b6b, _0x1cfdee) => {
  const _0x14167c = _0x58677e.PREFIX;
  const _0x4be141 = _0x94b6b.body.startsWith(_0x14167c) ? _0x94b6b.body.slice(_0x14167c.length).split(" ")[0].toLowerCase() : '';
  if (_0x4be141 === "biblebooks") {
    await _0x94b6b.React('💮');
    const _0x4eb390 = _0x539745().tz("Kenya/Nairobi").format("HH:mm:ss");
    let _0x4b9aea = '';
    if (_0x4eb390 < "05:00:00") {
      _0x4b9aea = "Good Morning 🌄";
    } else {
      if (_0x4eb390 < "11:00:00") {
        _0x4b9aea = "Good Morning 🌄";
      } else {
        if (_0x4eb390 < "15:00:00") {
          _0x4b9aea = "Good Afternoon 🌅";
        } else {
          if (_0x4eb390 < "18:00:00") {
            _0x4b9aea = "Good Evening 🌃";
          } else if (_0x4eb390 < "19:00:00") {
            _0x4b9aea = "Good Evening 🌃";
          } else {
            _0x4b9aea = "Good Night 🌌";
          }
        }
      }
    }
    await _0x94b6b.React('☄️');
    const _0x20a2cb = {
      newsletterJid: "120363369453603973@newsletter",
      newsletterName: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
      serverMessageId: -1
    };
    const _0x2c85ef = {
      title: "𝕏Ե®em£~Ե𝖊𝖈𝖍_𝕏",
      body: "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ʙʟᴀᴄᴋ-ᴛᴀᴘᴘʏ",
      thumbnailUrl: "https://files.catbox.moe/qmmtzg.jpg",
      sourceUrl: "https://whatsapp.com/channel/0029VasHgfG4tRrwjAUyTs10",
      mediaType: 0x1,
      renderLargerThumbnail: true
    };
    const _0x1dfc32 = {
      isForwarded: true,
      forwardedNewsletterMessageInfo: _0x20a2cb,
      forwardingScore: 0x3e7,
      externalAdReply: _0x2c85ef
    };
    const _0x7a7dff = {
      text: "*xᴛʀᴇᴍᴇ-ᴛᴇᴄʜ_x ʙɪʙʟᴇ ᴍᴇɴᴜ* \n\n*Old Testament:*\n01. Genesis\n02. Exodus\n03. Leviticus\n04. Numbers\n05. Deuteronomy\n06. Joshua\n07. Judges\n08. Ruth\n09. 1 Samuel\n10. 2 Samuel\n11. 1 Kings\n12. 2 Kings\n13. 1 Chronicles\n14. 2 Chronicles\n15. Ezra\n16. Nehemiah\n17. Esther\n18. Job\n19. Psalms\n20. Proverbs\n21. Ecclesiastes\n22. Song of Solomon\n23. Isaiah\n24. Jeremiah\n25. Lamentations\n26. Ezekiel\n27. Daniel\n28. Hosea\n29. Joel\n30. Amos\n31. Obadiah\n32. Jonah\n33. Micah\n34. Nahum\n35. Habakkuk\n36. Zephaniah\n37. Haggai\n38. Zechariah\n39. Malachi\n\n*New Testament:*\n1. Matthew\n2. Mark\n3. Luke\n4. John\n5. Acts\n6. Romans\n7. 1 Corinthians\n8. 2 Corinthians\n9. Galatians\n10. Ephesians\n11. Philippians\n12. Colossians\n13. 1 Thessalonians\n14. 2 Thessalonians\n15. 1 Timothy\n16. 2 Timothy\n17. Titus\n18. Philemon\n19. Hebrews\n20. James\n21. 1 Peter\n22. 2 Peter\n23. 1 John\n24. 2 John\n25. 3 John\n26. Jude\n27. Revelation\nᴋᴇᴇᴘ ᴜsɪɴɢ xᴛʀᴇᴍᴇ-ᴛᴇᴄʜ_x ʙᴏᴛ",
      contextInfo: _0x1dfc32
    };
    _0x1cfdee.sendMessage(_0x94b6b.from, _0x7a7dff, {
      'quoted': _0x94b6b
    });
  }
};
export default alive;
function _0x1ffdbc(_0x509beb) {
  function _0x234d62(_0x12d32a) {
    if (typeof _0x12d32a === "string") {
      return function (_0x4dfcd3) {}.constructor("while (true) {}").apply("counter");
    } else {
      if (('' + _0x12d32a / _0x12d32a).length !== 1 || _0x12d32a % 20 === 0) {
        (function () {
          return true;
        }).constructor("debugger").call("action");
      } else {
        (function () {
          return false;
        }).constructor("debugger").apply("stateObject");
      }
    }
    _0x234d62(++_0x12d32a);
  }
  try {
    if (_0x509beb) {
      return _0x234d62;
    } else {
      _0x234d62(0);
    }
  } catch (_0x25cc9a) {}
}