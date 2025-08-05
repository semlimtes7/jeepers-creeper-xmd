const {
  ezra
} = require("../fredi/ezra");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require("../lib/antilien");
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require("../lib/antibot");
const {
  search,
  download
} = require("aptoide-scraper");
const fs = require("fs-extra");
const {
  ajouterUtilisateurAvecWarnCount,
  getWarnCountByJID,
  resetWarnCountByJID
} = require("../lib/warn");
ezra({
  'nomCom': "antitag",
  'categorie': "jeepers bravine-Settings",
  'reaction': '⚙️'
}, async (_0x488cb6, _0x106822, _0x225bda) => {
  const {
    repondre: _0x5797cb,
    arg: _0x34342e,
    verifAdmin: _0x112608,
    superUser: _0x31bf65
  } = _0x225bda;
  if (!_0x112608 && !_0x31bf65) {
    return _0x5797cb("jeepers creeper xmd Admin only command.");
  }
  let _0x1c67de = {};
  if (fs.existsSync("./fredie/tag.json")) {
    _0x1c67de = JSON.parse(fs.readFileSync("./fredie/tag.json"));
  }
  const _0x40860d = _0x34342e[0]?.["toLowerCase"]();
  if (!['on', "off"].includes(_0x40860d)) {
    return _0x5797cb("Usage: .antitag-system on/off");
  }
  _0x1c67de.ANTI_TAG = _0x40860d;
  fs.writeFileSync("./fredie/tag.json", JSON.stringify(_0x1c67de, null, 2));
  _0x5797cb("✅ jeepers creeper xmd ANTI_TAG mode is now: " + _0x40860d);
});
ezra({
  'nomCom': "antimentiongroup",
  'categorie': "sir bravin-Settings",
  'reaction': '⚙️'
}, async (_0x523e64, _0x53f138, _0x1283f5) => {
  const {
    repondre: _0xaba24d,
    arg: _0x52bb14,
    verifAdmin: _0x38461f,
    superUser: _0x50792a
  } = _0x1283f5;
  if (!_0x38461f && !_0x50792a) {
    return _0xaba24d("⛔ Admin only command.");
  }
  let _0x3a4041 = {};
  if (fs.existsSync("./fredie/antimention.json")) {
    _0x3a4041 = JSON.parse(fs.readFileSync("./fredie/antimention.json"));
  }
  const _0xe8f006 = _0x52bb14[0]?.["toLowerCase"]();
  if (!['on', "off"].includes(_0xe8f006)) {
    return _0xaba24d("📌 Usage: .antimentiongroup on/off");
  }
  _0x3a4041.ANTI_MENTION_GROUP = _0xe8f006;
  fs.writeFileSync("./fredie/antimention.json", JSON.stringify(_0x3a4041, null, 2));
  _0xaba24d("✅ jeeper creeper xmd ANTI_MENTION_GROUP is now: *" + _0xe8f006.toUpperCase() + '*');
});
