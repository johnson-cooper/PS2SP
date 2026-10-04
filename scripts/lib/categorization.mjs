/**
 * Comprehensive categorization and filtering engine for PS2SP software projects.
 */

export const KNOWN_UPSTREAM_CATEGORIES = {
  // Themes & Covers
  "xlenore/ps2-covers": ["themes"],
  "CosmicScale/psbbn-art-database": ["themes", "dashboards"],
  "CosmicScale/HDD-OSD-Icon-Database": ["themes", "dashboards"],
  "IcySon55/OPL-Theme-Editor": ["host-tools", "themes"],
  "PixeliGer/OPL-Theme-Pixel-Prime": ["themes"],

  // Emulators
  "PCSX2/pcsx2": ["emulators"],
  "PeterDelta/PCSX2": ["emulators"],
  "ps2homebrew/pcsx2": ["emulators"],
  "allkern/iris": ["emulators"],
  "sashkinbro/EmuCoreX": ["emulators"],
  "ARMSX2/ARMSX2": ["emulators"],
  "izzy2lost/PSX2": ["emulators"],
  "obiot/NeoCD-PS2": ["emulators"],
  "Gageformer/Open-Source-Pops": ["emulators"],
  "SumavisionQ5/NJEMU-PS2": ["emulators"],
  "Rinnegatamante/melonDS-Vita": ["emulators"],
  "sobecapaklebs-dev/project-titan-magenta-edition": ["emulators"],
  "libretro/ps2": ["emulators", "ports"],

  // Libraries & Networking
  "sahlberg/libsmb2": ["libraries", "networking"],
  "ps2dev/lwip": ["libraries", "networking"],
  "ps2dev/ps2eth": ["drivers", "networking"],
  "ps2dev/newlib": ["libraries", "development"],
  "ps2dev/ps2stuff": ["development", "libraries"],
  "ps2dev/pthread-embedded": ["libraries", "development"],
  "ps2dev/libtap": ["libraries", "development"],
  "ps2homebrew/dreamgl": ["libraries", "development"],
  "ps2homebrew/isjpcm": ["libraries"],

  // Networking & Host tools
  "retronas/retronas": ["networking", "host-tools"],
  "NathanNeurotic/retronas": ["networking", "host-tools"],
  "toolboc/psx-pi-smbshare": ["networking", "host-tools"],
  "elmariolo/OPL-Server": ["networking", "host-tools"],
  "GorGylka/Server2PS2": ["networking", "host-tools"],

  // Boot tools & Exploits
  "CTurt/FreeDVDBoot": ["boot-tools"],
  "TnA-Plastic/FreeMcBoot": ["boot-tools"],
  "israpps/Funtuna-Fork": ["boot-tools"],
  "PunishedSnake/fhdb-bootstrap-manager": ["boot-tools", "utilities"],
  "pcm720/protopwn": ["boot-tools"],
  "ps2homebrew/opentuna-payload": ["boot-tools"],
  "ps2homebrew/opentuna-RLE": ["boot-tools"],

  // Dashboards & Launchers
  "CosmicScale/PSBBN-Definitive-Project": ["dashboards", "installers"],
  "HiroTex/OSD-XMB": ["dashboards"],
  "pcm720/OSDMenu": ["dashboards", "launchers"],
  "aap/osdbits": ["dashboards", "development"],
  "DanielFergisz/RepairBox-PSX-XMB-Apps-Installer": ["installers", "dashboards"],
  "pcm720/nhddl": ["launchers", "loaders"],
  "ps2homebrew/OPL-Launcher": ["launchers", "loaders"],
  "Irfanlesnar/PS2-Launcher": ["launchers"],
  "Spaghetticode-Boon-Tobias/RETROLauncher": ["launchers"],
  "sync-on-luma/xebplus-neutrino-loader-plugin": ["launchers", "loaders"],

  // Preservation & Decompilations
  "TheOnlyZac/sly1": ["preservation", "development"],
  "crowded-street/3s-decomp": ["preservation", "development"],
  "mateuszklysz/Lombyte": ["preservation", "development"],
  "vetusmagnus/ratchet-uya-decomp": ["preservation", "development"],
  "Megami-Decomps/dds-decomp": ["preservation", "development"],
  "Raikaru/Persona4-Decompilation": ["preservation", "development"],
  "VetriTheRetri/ssb-decomp-re": ["preservation", "development"],
  "hkmodd/ps2-recomp-Agent-SKILL": ["development", "preservation"],
  "ps2wiki/sas-apps-archive": ["preservation", "utilities"],
  "ninjadynamics/PS2Docs": ["development", "preservation"],

  // Cheats & Patches
  "PCSX2/pcsx2_patches": ["cheat-tools"],
  "PS2-Widescreen/OPL-Widescreen-Cheats": ["cheat-tools"],
  "israpps/CheatDevicePS2": ["cheat-tools"],

  // Loaders
  "grimdoomer/Open-PS2-Loader": ["loaders"],
  "RoloDeOvo/Open-PS2-Loader": ["loaders"],
  "israpps/Open-PS2-Loader": ["loaders"],
  "SvenGDK/Open-PS2-Loader": ["loaders"],
  "tihmstar/Open-PS2-Loader": ["loaders"],
  "NathanNeurotic/POPSLoader": ["loaders", "emulators"],
  "ps2homebrew/LbFn": ["loaders", "utilities"],
  "binkynz/ps2-usbhdl": ["installers", "loaders"],

  // SDKs & Toolchains
  "ps2dev/ps2toolchain-ee": ["sdks", "development"],
  "ps2dev/ps2toolchain-dvp": ["sdks", "development"],
  "ps2dev/ps2toolchain-iop": ["sdks", "development"],
  "ps2dev/binutils-gdb": ["sdks", "development"],
  "ps2dev/gcc": ["sdks", "development"],
  "rickgaiser/ps2toolchain": ["sdks", "development"],
  "Ravenslofty/ps2-clang-patches": ["development", "sdks"],

  // Drivers
  "DKWDRV/DKWDRV": ["drivers"],
  "wisi-w/DKWDRV": ["drivers"],
  "fjtrujy/ps2_drivers": ["drivers"],
  "israpps/BDMAssault": ["drivers", "utilities"],
  "saildot4k/ATA-Assault": ["drivers", "utilities"],

  // Save tools
  "bucanero/apollo-ps2": ["save-tools"],
  "K3zter/mcp2-save-splitter": ["save-tools"],
  "bucanero/psv-save-converter": ["save-tools", "utilities"],
  "PCSX2/myMCpp": ["save-tools", "host-tools"],
  "PSRewired/Memdusa": ["save-tools"],
  "BAD-AL/mymc_web": ["save-tools", "host-tools"],
  "caol64/ps2mc-browser": ["save-tools", "host-tools"],
  "GDX-X/sd2psx-save-converter": ["save-tools"],
  "bucanero/ps2vmc-tool": ["save-tools", "utilities"],
  "gamebitfunx/PSxMemCardGen2": ["save-tools", "hardware"],

  // Hardware
  "sd2psXtd/sd2psXtd.github.io": ["hardware"],
  "pcm720/fc1307-tools": ["hardware", "utilities"],
  "bbsan2k/sd2psx_firmware": ["hardware"],
  "saildot4k/R3CONFIGURATOR": ["hardware", "utilities"],
  "ps2-mmce/mmceman": ["hardware", "utilities"],

  // Games & Ports
  "anthoo582/mario-kart-64-ps2": ["games", "ports"],
  "OptiJuegos/OptiCraftHeritageEdition": ["games", "ports"],
  "TheBrokenWaLL/Minecraft-PlayStation-2-Edition": ["games", "ports"],
  "7dog123/prboom-plus": ["games", "ports"],
  "johnson-cooper/2004sp-ps2port": ["ports", "games"],

  // Engines & Runtimes
  "DanielSant0s/Enceladus": ["engines", "runtimes", "development"],
  "ps2dev/lua": ["runtimes", "development"],

  // Host Tools & Utilities
  "GDX-X/PFS-BatchKit-Manager": ["host-tools", "utilities"],
  "Luden02/OrbitPS2-Manager": ["host-tools", "utilities"],
  "chewi/apascan": ["host-tools", "utilities"],
  "israpps/BinMerger": ["host-tools", "utilities"],
  "israpps/cue2pops": ["host-tools", "utilities"],
  "M5Devs/OpenROM": ["host-tools", "utilities"],
  "pcm720/nhddl-psu": ["utilities"],
  "hitchhikr/nrlpack": ["utilities", "development"],
  "israpps/opl-Title.cfg-maker": ["host-tools", "utilities"],
  "coffeedevsolutions/OPLattice": ["utilities"],
  "ps2homebrew/ps2-unpacker": ["utilities", "development"],
  "ps2homebrew/PS1VModeNeg": ["utilities"],
  "Zeroable/GTA-PS2-Modern-Controls": ["utilities"],
  "VTSTech/PS2-OPL-CFG": ["loaders", "utilities"],
  "ps2homebrew/Open-PS2-Loader-Compatibility-list": ["utilities", "preservation"],
  "ps2homebrew/Open-PS2-Loader-lang": ["loaders", "utilities"],
  "ps2homebrew/Double-Unofficial-Open-PS2-Loader-lang": ["loaders", "utilities"],
  "israpps/KELFBinder": ["boot-tools", "utilities"],
  "ps2homebrew/kelftool": ["development", "utilities"],
  "ps2homebrew/PMAP": ["development", "utilities"],

  // Media
  "TheMrIron2/Simple-Media-System": ["media"],

  // Development
  "ps2dev/ps2dev-docker": ["development", "host-tools"],
  "ps2dev/masp": ["development"],
  "islandcontroller/ps2ded-vscode": ["development"],
  "ps2homebrew/ps2Perf": ["utilities", "development"],
  "ps2homebrew/ps2dev_forwarder": ["development"],
  "ps2homebrew/ps2homebrew": ["development"],
  "ps2dev/ps2dev.github.io": ["development"],
  "ps2homebrew/OSD-Initialization-Libraries": ["libraries", "dashboards"],
  "DanielAbrante/codeeasy-ps2": ["development"],
  "sammwyy/ps2-homebrew-sample": ["development"],
  "rrtry/CrystalClock": ["demos"],
  "terremoth/awesome-ps2": ["preservation", "utilities"]
};

export function shouldHideProject({ slug = "", name = "", summary = "", repository = "" }) {
  const repo = String(repository || "").trim();
  const s = String(slug || "").toLowerCase();
  // IBM PC PS/2 keyboard/mouse hardware keylogger
  if (repo === "therealdreg/okhi" || s === "okhi" || s.startsWith("okhi-")) return true;
  // Org profile / meta repos
  if (repo === "ps2homebrew/.github" || repo === "ps2dev/.github" || s === "github" || s === "github-ps2homebrew") return true;
  return false;
}

export function inferCategories({ slug = "", name = "", summary = "", tags = [], repository = "", forkOf = null }) {
  const repo = String(repository || "").trim();
  const parent = forkOf ? String(forkOf).trim() : null;
  const s = String(slug || "").toLowerCase();
  const n = String(name || "").toLowerCase();
  const desc = String(summary || "").toLowerCase();
  const tagList = Array.isArray(tags) ? tags.map(t => String(t).toLowerCase()) : [];
  const text = `${s} ${n} ${desc} ${tagList.join(" ")} ${repo}`.toLowerCase();

  // 1. Direct parent repo match
  if (repo && KNOWN_UPSTREAM_CATEGORIES[repo]) return [...KNOWN_UPSTREAM_CATEGORIES[repo]];
  if (parent && KNOWN_UPSTREAM_CATEGORIES[parent]) return [...KNOWN_UPSTREAM_CATEGORIES[parent]];

  // 2. Slug-based prefixes for major ecosystems
  if (/^open-ps2-loader|^opl-|^riptopl|^mopl/.test(s)) {
    if (/theme/.test(s) || /theme/.test(desc)) return ["themes"];
    if (/server/.test(s)) return ["networking", "host-tools"];
    if (/manager|batch|toolbox|desktop/.test(s) || /manager|toolbox/.test(desc)) return ["host-tools", "utilities"];
    if (/cheat/.test(s) || /cheat/.test(desc)) return ["cheat-tools"];
    return ["loaders"];
  }

  if (/^pcsx2|^aethersx2|^nethersx2|^armsx2|^vitasx2/.test(s)) {
    if (/patch/.test(s) || /patch/.test(desc)) return ["emulators", "utilities"];
    if (/cheat/.test(s) || /cheat/.test(desc)) return ["cheat-tools"];
    if (/mali|vulkan.*driver/.test(desc)) return ["drivers", "emulators"];
    return ["emulators"];
  }

  if (/^apollo-ps2|^mymc|^ps2mc|^memcard|^save-editor|^savegame/.test(s)) {
    return ["save-tools"];
  }

  if (/^retronas/.test(s)) {
    return ["networking", "host-tools"];
  }

  if (/^ps2toolchain|^binutils|^gcc-|^ee-gcc|^iop-gcc|^dvp-gcc/.test(s)) {
    return ["sdks", "development"];
  }

  if (/^freemcboot|^freehdboot|^freedvdboot|^funtuna|^opentuna|^mechapwn|^yade/.test(s)) {
    return ["boot-tools"];
  }

  if (/^psbbn/.test(s)) {
    if (/art|icon/.test(s) || /art|icon/.test(desc)) return ["themes", "dashboards"];
    return ["dashboards", "installers"];
  }

  if (/^wlaunchelf|^ulaunchelf|^launchelf/.test(s)) {
    return ["file-managers", "launchers"];
  }

  if (/^neutrino/.test(s)) {
    return ["loaders"];
  }

  if (/^nhddl/.test(s)) {
    return ["launchers", "loaders"];
  }

  if (/decomp|recomp/.test(s)) {
    return ["preservation", "development"];
  }

  // 3. Multi-tag semantic rules
  const matched = new Set();

  // Emulators
  if (/\b(?:pcsx2|aethersx2|nethersx2|vitasx2|rompemu|play!|purei\/play|dobiestation|redump-ps2|fpc-ps2|retroarch|libretro)\b/.test(text) ||
      /\b(?:emulator|emulation|emulating|emulated|snes9x|picodrive|fceumm|mednafen|gnuboy|fba|mame|dosbox|scummvm|uae4all|daedalusx64|mgba|neocd|snesticle)\b/.test(text)) {
    matched.add("emulators");
  }

  // Preservation & Decompilations
  if (/\b(?:decomp|decompilation|recomp|recompilation|reverse[- ]engineer(?:ing)?|disassembly|disassembled|ghidra|ida pro|symbol map|game reverse engineering)\b/.test(text)) {
    matched.add("preservation");
    matched.add("development");
  }

  // Games
  if (/\b(?:homebrew game|fangame|platformer|shmup|roguelike|rpg|fps|puzzle game|arcade game|racing game|clone of|visual novel)\b/.test(text) ||
      /\b(?:flappy|tetris|pong|snake|pacman|space invaders|sokoban|doom|quake|wolfenstein|wolf3d|duke nukem|mario kart|minecraft|runescape|chulip|barulandia|doki doki|five nights|wacki)\b/.test(text) ||
      /\b(?:game for (?:the )?(?:sony )?playstation 2|ps2 game|game port)\b/.test(text)) {
    matched.add("games");
  }

  // Ports
  if (/\b(?:port|ported|porting|source port|re-implementation|reimplementation)\b/.test(text)) {
    matched.add("ports");
    if (/\b(?:game|mario|sonic|zelda|doom|quake|wolf3d|duke|minecraft|runescape|tetris|pong|arcade|barulandia|dino|ddlc|opticraft|tyracraft|pang|fnwf|wacki|extermination)\b/.test(text)) {
      matched.add("games");
    }
  }

  // Boot tools & exploits
  if (/\b(?:freemcboot|freehdboot|fmcb|fhdb|fortuna|opentuna|funky|freedvdboot|mechapwn|exploit|entrypoint|vulnerability|bootloader|softmod|kexploit|yade|ps2bbl|bootldr)\b/.test(text)) {
    matched.add("boot-tools");
  }

  // Loaders
  if (/\b(?:open[- ]ps2[- ]loader|\bopl\b|hdloader|\bhdl\b|neutrino|esr|loadcore|cdvdman|popsloader|popstarter|smb loader|usb loader|game loader|app loader)\b/.test(text)) {
    matched.add("loaders");
  }

  // Launchers
  if (/\b(?:launchelf|ulaunchelf|wlaunchelf|launcher|menu|app launcher|elf launcher|osdmenu)\b/.test(text)) {
    matched.add("launchers");
  }

  // Dashboards
  if (/\b(?:dashboard|dash|osdsys|xmb|psx-desr|desk|replacement dashboard|custom osd|psbbn)\b/.test(text)) {
    matched.add("dashboards");
  }

  // File managers
  if (/\b(?:file[- ]?manager|file[- ]?explorer|file browser|mass storage manager|ps2mc-browser)\b/.test(text)) {
    matched.add("file-managers");
  }

  // Save tools
  if (/\b(?:save[- ]?tool|save[- ]?editor|save[- ]?manager|savegame|psv save|apollo|mymc|mcman|memory card|memcard|ps2save|ps2mc|psu save|\bvmc\b)\b/.test(text)) {
    matched.add("save-tools");
  }

  // Cheat tools
  if (/\b(?:cheat|cheats|codebreaker|gameshark|action replay|artemis|cheat device|pnach|cheat engine|widescreen codes|widescreen cheats|mastercode)\b/.test(text)) {
    matched.add("cheat-tools");
  }

  // Media
  if (/\b(?:media player|audio player|music player|video player|mp3|sound library|tracker|movie player|avi|divx|sms player|audioplayer|singstar)\b/.test(text)) {
    matched.add("media");
  }

  // Networking
  if (/\b(?:networking|network|ethernet|smb|cifs|samba|udpfs|udpbd|tcp\/ip|lwip|dns|dnas|hostfs|ps2link|ps2net|ps2eth|netman|packet|retronas|ftp)\b/.test(text)) {
    matched.add("networking");
  }

  // Hardware
  if (/\b(?:hardware|modchip|modbo|matrix infinity|crystal chip|picoboot|openps2mod|sd2ps2|sd2psx|mx4sio|arduino|raspberry pi|esp32|pico|schematic|pcb|soldering|pinout|blueretro|mechacon|spc970)\b/.test(text)) {
    matched.add("hardware");
  }

  // Host tools
  if (/\b(?:host tool|pc tool|desktop application|windows tool|linux tool|macos tool|cli tool|gui for|converter|iso tool|iso creator|usbutil|hdl-dump|hdl-batch|oplmanager|pfs-batchkit|batch installer|chdman|discforge|discpress)\b/.test(text) ||
      /\b(?:tool for (?:pc|windows|linux|mac)|running on (?:pc|windows|linux|mac)|cross-platform tool|desktop manager)\b/.test(text)) {
    matched.add("host-tools");
  }

  // SDKs
  if (/\b(?:ps2sdk|toolchain|ps2dev|sdk|mips-gcc|ee-gcc|iop-gcc|dvp-gcc|mips toolchain|compiler toolchain|devkit)\b/.test(text)) {
    matched.add("sdks");
    matched.add("development");
  }

  // Libraries
  if (/\b(?:library|libraries|gskit|ps2gl|ps2stuff|tamtypes|kernel|libcdvd|libpad|libmc|libjpg|libpng|zlib|freetype|raylib|dma packet library)\b/.test(text) ||
      /\blib[a-z0-9_-]+\b/.test(s)) {
    matched.add("libraries");
    matched.add("development");
  }

  // Engines
  if (/\b(?:game engine|tyra|godot|unity|raylib|love2d|solaris|render engine|graphics engine|r2engine)\b/.test(text)) {
    matched.add("engines");
    matched.add("development");
  }

  // Runtimes
  if (/\b(?:runtime|virtual machine|interpreter|lua player|luaplayer|quickjs|micropython|cpython|python runtime|java me|j2me|wasm|scratch runtime|llm inference)\b/.test(text)) {
    matched.add("runtimes");
    matched.add("development");
  }

  // Drivers
  if (/\b(?:driver|drivers|irx|kernel module|bdm|block device module|usbd|usbhdfsd|iLink|firewire|cdvdman|atad|dev9|ps1drv)\b/.test(text)) {
    matched.add("drivers");
  }

  // Themes
  if (/\b(?:theme|themes|skin|skins|opl theme|launchelf theme|cover collection|icon pack)\b/.test(text)) {
    matched.add("themes");
  }

  // Demos
  if (/\b(?:demo|demoscene|tech demo|pouet|intro|effect demo|shader demo)\b/.test(text)) {
    matched.add("demos");
  }

  // Installers
  if (/\b(?:installer|installing|installation|setup tool|hdlgameinstaller|batch installer)\b/.test(text)) {
    matched.add("installers");
  }

  // Development
  if (/\b(?:development|debugger|debugging|disassembler|profiler|decompiler|generator|build system|compiler|assembler|ide|vscode extension)\b/.test(text)) {
    matched.add("development");
  }

  // Utilities fallback
  if (matched.size === 0 || /\b(?:utility|utilities|helper|dumper|scanner|validator|tester|benchmark|diagnostic|patcher|viewer|editor)\b/.test(text)) {
    if (matched.size === 0) matched.add("utilities");
  }

  return [...matched];
}
