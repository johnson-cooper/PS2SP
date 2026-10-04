/**
 * Comprehensive categorization and filtering engine for PS2SP software projects.
 */

export const KNOWN_UPSTREAM_CATEGORIES = {
  // Themes & Covers
  "xlenore/ps2-covers": ["themes"],
  "CosmicScale/psbbn-art-database": ["themes", "dashboards"],
  "CosmicScale/HDD-OSD-Icon-Database": ["themes", "dashboards"],
  "PixeliGer/OPL-Theme-Pixel-Prime": ["themes"],
  "PixeliGer/OPL-Theme-DeckyOS": ["themes"],
  "telephoneboxbrouhaha811/OPL-Theme-DeckyOS": ["themes"],
  "Jay-Jay-OPL/OPL-Theme-Editor": ["host-tools", "themes"],
  "IcySon55/OPL-Theme-Editor": ["host-tools", "themes"],
  "PixeliGer/OPL-Theme-Ominence": ["themes"],
  "NathanNeurotic/OPL-Theme-Ominence": ["themes"],
  "PixeliGer/OPL-Theme-OPLAdvance": ["themes"],
  "PixeliGer/OPL-Theme-PadOS": ["themes"],
  "Andiweli/OPL-Theme-PS2pops": ["themes"],
  "NathanNeurotic/PS2-Save-Icon-Swap-Stamp-Rotate-Texture-Workflow-of-Chaos": ["themes", "save-tools"],
  "Yuramash/thm_Coverflow_RiptOpl_": ["themes"],
  "akilluminati47/RIPPS2": ["themes", "loaders"],
  "israpps/Icon-pack-for-HDL-Batch-installer": ["themes", "host-tools"],
  "Badzolini/opl-artwork-processor": ["host-tools", "themes"],
  "CosmicScale/TM2Toolkit": ["host-tools", "themes"],
  "mcoirault/PS2-SAS-icon-guide": ["preservation", "themes"],
  "NathanNeurotic/PS2-SAS-icon-guide": ["preservation", "themes"],
  "DISC-Manchester/PS2-ICON-PARSER": ["host-tools", "themes"],

  // Loaders
  "ps2homebrew/Open-PS2-Loader": ["loaders"],
  "grimdoomer/Open-PS2-Loader": ["loaders"],
  "israpps/Open-PS2-Loader": ["loaders"],
  "SvenGDK/Open-PS2-Loader": ["loaders"],
  "tihmstar/Open-PS2-Loader": ["loaders"],
  "RoloDeOvo/Open-PS2-Loader": ["loaders"],
  "NathanNeurotic/Open-PS2-Loader": ["loaders"],
  "Docmine17/Open-PS2-Loader-HTTP": ["loaders"],
  "NathanNeurotic/Open-PS2-Loader-HTTP": ["loaders"],
  "L10N37/Open-PS2-Loader-Extended-APA": ["loaders"],
  "NathanNeurotic/Open-PS2-Loader-Extended-APA": ["loaders"],
  "AppCakeLtd/Open-PS2-Loader": ["loaders"],
  "mystyq/Stable-Open-PS2-Loader": ["loaders"],
  "koraxial/Open-PS2-Loader": ["loaders"],
  "Wolf3s/Open-PS2-Loader": ["loaders"],
  "xorjustice/Open-PS2-Loader": ["loaders"],
  "danielnuld/Open-PS2-Loader": ["loaders"],
  "exaconn/Open-PS2-Loader": ["loaders"],
  "sholjun/Open-PS2-Loader-Custom": ["loaders"],
  "citronalco/OPL-Daily-Builds": ["loaders"],
  "PsihoRetrik/Open-PS2-Loader": ["loaders"],
  "ps2homebrew/Open-PS2-Loader-User-Guide": ["loaders", "preservation"],
  "ps2homebrew/Open-PS2-Loader-Compatibility-list": ["preservation", "utilities"],
  "ps2homebrew/Open-PS2-Loader-lang": ["loaders", "utilities"],
  "NathanNeurotic/Open-PS2-Loader-lang": ["loaders", "utilities"],
  "ps2homebrew/Double-Unofficial-Open-PS2-Loader-lang": ["loaders", "utilities"],
  "VTSTech/PS2-OPL-CFG": ["loaders", "utilities"],
  "ps2homebrew/wOPL": ["loaders"],
  "NathanNeurotic/wOPL": ["loaders"],
  "Wolf3s/wOPL": ["loaders"],
  "coffeedevsolutions/OPLattice": ["loaders"],
  "NathanNeurotic/OPLattice": ["loaders"],
  "officialjuicedesigns/OPL-Evolution": ["loaders"],
  "NathanNeurotic/OPL-Evolution": ["loaders"],
  "brunlx/OPL-Future---BETA": ["loaders"],
  "NathanNeurotic/OPL-PSX-DVR": ["loaders"],
  "NathanNeurotic/rod-oplfork": ["loaders"],
  "jusefn/opl-mmce": ["loaders"],
  "Rian6/caduceus": ["loaders", "networking"],
  "ps2max32/neutrino": ["loaders"],
  "NathanNeurotic/neutrino": ["loaders"],
  "dnunezx/neutrino-luna": ["loaders"],
  "dnunezx/LUNA": ["loaders"],
  "NathanNeurotic/LUNA-for-PR": ["loaders"],
  "pcm720/nhddl": ["launchers", "loaders"],
  "NathanNeurotic/nhddl": ["launchers", "loaders"],
  "dnunezx/nhddl-luna": ["launchers", "loaders"],
  "Gageformer/Ember": ["loaders", "emulators"],
  "NathanNeurotic/POPSLoader": ["loaders", "emulators"],
  "saildot4k/POPSLoader": ["loaders", "emulators"],
  "xcapitann/POPSLoader": ["loaders", "emulators"],
  "ps2homebrew/LbFn": ["loaders", "utilities"],
  "AdityaKumar7209/Modulo-R1-Beta-Preview---PS2": ["loaders"],
  "NathanNeurotic/Modulo-R1-Beta-Preview---PS2": ["loaders"],
  "Nanobass/ps2dsoloader": ["loaders", "development"],

  // Launchers
  "Irfanlesnar/PS2-Launcher": ["launchers"],
  "NathanNeurotic/PS2-Launcher": ["launchers"],
  "Irfanlesnar/PS2-Launcher-Manager": ["host-tools", "launchers"],
  "ps2homebrew/OPL-Launcher": ["launchers", "loaders"],
  "israpps/OPL-Launcher": ["launchers", "loaders"],
  "Spaghetticode-Boon-Tobias/RETROLauncher": ["launchers"],
  "NathanNeurotic/RETROLauncher": ["launchers"],
  "sync-on-luma/xebplus-neutrino-loader-plugin": ["launchers", "loaders"],
  "israpps/OSDSYS-Launcher": ["launchers", "dashboards"],
  "ps2homebrew/ps2menu": ["launchers", "file-managers"],
  "NathanNeurotic/launcHER": ["launchers", "boot-tools"],

  // Boot tools & Exploits
  "CTurt/FreeDVDBoot": ["boot-tools"],
  "ps2homebrew/FreeDVDBoot": ["boot-tools"],
  "TnA-Plastic/FreeMcBoot": ["boot-tools"],
  "israpps/FreeMcBoot-Installer": ["boot-tools", "installers"],
  "NathanNeurotic/FMCB-Installer-Via-Any-Device": ["boot-tools", "installers"],
  "NathanNeurotic/FreeMcBoot-Installer-UMCS": ["boot-tools", "installers"],
  "NathanNeurotic/FreeMcTuna": ["boot-tools", "installers"],
  "slimpuggamer/FreeMcTuna": ["boot-tools", "installers"],
  "israpps/Funtuna-Fork": ["boot-tools"],
  "NathanNeurotic/Funtuna-Fork-Remapped": ["boot-tools"],
  "ps2homebrew/opentuna-installer": ["boot-tools", "installers"],
  "ps2homebrew/opentuna-payload": ["boot-tools"],
  "NathanNeurotic/opentuna-payload-remapped": ["boot-tools"],
  "ps2homebrew/opentuna-RLE": ["boot-tools"],
  "grimdoomer/TonyHawksProStrcpy": ["boot-tools"],
  "alex-free/tonyhax": ["boot-tools", "loaders"],
  "NathanNeurotic/tonyhax": ["boot-tools", "loaders"],
  "pcm720/protopwn": ["boot-tools"],
  "AKuHAK/YADE": ["boot-tools"],
  "MFDGaming/YADE": ["boot-tools"],
  "NathanNeurotic/YADE": ["boot-tools"],
  "CTurt/PS2-Yabasic-Exploit": ["boot-tools", "demos"],
  "PS2Homebrew-arcade/proverb": ["boot-tools"],
  "israpps/PlayStation2-Basic-BootLoader": ["boot-tools", "launchers"],
  "pcm720/PlayStation2-Basic-BootLoader": ["boot-tools", "launchers"],
  "saildot4k/PlayStation2-Basic-BootLoader-Extended": ["boot-tools", "launchers"],
  "NathanNeurotic/PlayStation2-Basic-BootLoader-Extended": ["boot-tools", "launchers"],
  "PunishedSnake/fhdb-bootstrap-manager": ["boot-tools", "utilities"],
  "israpps/KELFBinder": ["boot-tools", "utilities"],
  "NathanNeurotic/KELFbinder-UMCS": ["boot-tools", "utilities"],
  "israpps/kelftool": ["boot-tools", "development", "host-tools"],
  "ps2homebrew/kelftool": ["boot-tools", "development", "host-tools"],
  "israpps/KelfTwinSigner": ["boot-tools", "utilities"],
  "ps2dbg/romflash": ["boot-tools", "hardware"],
  "ps2dbg/RDB": ["boot-tools", "development", "hardware"],
  "alex-free/psx80mp": ["boot-tools", "utilities"],

  // File Managers
  "ps2homebrew/wLaunchELF": ["file-managers", "launchers"],
  "israpps/wLaunchELF_ISR": ["file-managers", "launchers"],
  "saildot4k/wLaunchELF_R3Z": ["file-managers", "launchers"],
  "NathanNeurotic/wLaunchELF_kHn": ["file-managers", "launchers"],
  "sahlberg/wLaunchELF": ["file-managers", "launchers"],
  "israpps/wLaunchELF_ISR_HDD": ["file-managers", "launchers"],
  "oMrRexD/wLaunchELF_R3Z_FTP": ["file-managers", "launchers"],
  "NathanNeurotic/wLaunchELF_R3Z": ["file-managers", "launchers"],

  // Dashboards
  "CosmicScale/PSBBN-Definitive-Project": ["dashboards", "installers"],
  "NathanNeurotic/PSBBN-Definitive-Project": ["dashboards", "installers"],
  "Emertels/PSBBN-Translator": ["dashboards", "host-tools"],
  "HiroTex/OSD-XMB": ["dashboards"],
  "nuno6573/OSD-XMB-Plugins": ["dashboards"],
  "pcm720/OSDMenu": ["dashboards", "launchers"],
  "dnunezx/ROCKET": ["dashboards", "launchers"],
  "aap/osdbits": ["dashboards", "development"],
  "NathanNeurotic/osdbits": ["dashboards", "development"],
  "ps2repack/scosdsys": ["dashboards"],
  "MegaBitmap/UDPBD-for-XEBP": ["dashboards", "networking"],
  "davifernandobastosdeassiss-coder/DaviDevPS": ["dashboards", "networking"],
  "ps2homebrew/myPS2": ["dashboards", "media"],

  // Media
  "ps2homebrew/SMS": ["media"],
  "NathanNeurotic/Simple-Media-System": ["media"],
  "NathanNeurotic/OG-Simple-Media-System": ["media"],
  "TheMrIron2/Simple-Media-System": ["media"],
  "israpps/SMS": ["media"],
  "NathanNeurotic/SMS": ["media"],
  "sammwyy/jellyfish": ["media", "networking"],
  "TheMorc/MilkyTrackerPS2": ["media", "ports"],
  "ravenDS/singstar-toolbox": ["media", "host-tools"],
  "4574130823/PS2-Audio-Extractor": ["media", "host-tools"],

  // Save Tools
  "bucanero/apollo-ps2": ["save-tools"],
  "israpps/apollo-ps2": ["save-tools"],
  "ps2dev/mymc": ["save-tools", "host-tools"],
  "PCSX2/myMCpp": ["save-tools", "host-tools"],
  "NathanNeurotic/myMCpp": ["save-tools", "host-tools"],
  "israpps/mymcplusplus": ["save-tools", "host-tools"],
  "BAD-AL/mymc_web": ["save-tools", "host-tools"],
  "caol64/ps2mc-browser": ["save-tools", "host-tools"],
  "K3zter/mcp2-save-splitter": ["save-tools", "host-tools"],
  "NathanNeurotic/mcp2-save-splitter": ["save-tools", "host-tools"],
  "bucanero/psv-save-converter": ["save-tools", "host-tools"],
  "bucanero/ps2vmc-tool": ["save-tools", "utilities"],
  "israpps/ps2vmc-tool": ["save-tools", "utilities"],
  "zyzalfors/GT3SaveEditor": ["save-tools", "host-tools"],
  "alexkimbrell31/NCAA-PS2-Dynasty-Save-Editor": ["save-tools", "host-tools"],
  "mininxd/SAVESX2": ["save-tools", "host-tools"],
  "ffgriever-pl/PS2-ECC-Memory-Card-Converter": ["save-tools", "host-tools"],
  "NathanNeurotic/PS2-icon.sys-titler-and-title.cfg-writer": ["save-tools", "host-tools"],
  "NathanNeurotic/PS2-icon-sys-to-txt": ["save-tools", "host-tools"],
  "MarkusMaal/ps2_history_viewer": ["save-tools", "utilities"],
  "Zero1UP/PS2-Memory-Card-Formatter": ["save-tools", "utilities"],
  "FranciscoDA/ps2mcfs": ["save-tools", "drivers", "host-tools"],
  "GDX-X/sd2psx-save-converter": ["save-tools", "hardware"],
  "gamebitfunx/PSxMemCardGen2": ["save-tools", "hardware"],
  "Issung/PS2IODB": ["save-tools", "preservation"],
  "pcm720/psu-go": ["save-tools", "libraries", "development"],
  "israpps/bootcard_igr": ["save-tools", "loaders"],
  "JonathanDotCel/bootcard_igr": ["save-tools", "loaders"],
  "pepasjc/GameSync": ["save-tools", "networking"],

  // Host Tools
  "ps2homebrew/pfsshell": ["host-tools", "file-managers"],
  "AKuHAK/pfsshell": ["host-tools", "file-managers"],
  "israpps/pfsshell": ["host-tools", "file-managers"],
  "NathanNeurotic/pfsshell": ["host-tools", "file-managers"],
  "chaoticgd/wrench": ["host-tools", "development"],
  "igorseabra4/IndustrialPark": ["host-tools", "development"],
  "GDX-X/PFS-BatchKit-Manager": ["host-tools", "utilities"],
  "NathanNeurotic/PFS-BatchKit-Manager": ["host-tools", "utilities"],
  "Luden02/OrbitPS2-Manager": ["host-tools", "utilities"],
  "NathanNeurotic/OrbitPS2-Manager-for-PR": ["host-tools", "utilities"],
  "dnunezx/OrbitPS2-Manager-LUNA-edition": ["host-tools", "utilities"],
  "lucasonline0/opl-linux-toolbox": ["host-tools", "utilities"],
  "gecm0/POUM": ["host-tools", "utilities"],
  "ps2homebrew/hdl-dump": ["host-tools", "loaders"],
  "AKuHAK/hdl-dump": ["host-tools", "loaders"],
  "israpps/hdl-dump": ["host-tools", "loaders"],
  "NathanNeurotic/hdl-dump": ["host-tools", "loaders"],
  "israpps/HDL-Batch-installer": ["host-tools", "installers", "loaders"],
  "N0N0/USBInsanity": ["host-tools", "loaders"],
  "PowerBeef/discpress": ["host-tools", "utilities"],
  "Suicideboyy/DiscForge-CHD": ["host-tools", "utilities"],
  "wako69420/iso-compressor": ["host-tools", "utilities"],
  "N4gtan/mkps2iso": ["host-tools", "utilities"],
  "jonnypaes/ps2cd": ["host-tools", "utilities"],
  "shaanhomebrew-cloud/OPL-PS1-AIO-Converter-GUI": ["host-tools", "utilities"],
  "israpps/BinMerger": ["host-tools", "utilities"],
  "israpps/cue2pops": ["host-tools", "utilities"],
  "israpps/opl-Title.cfg-maker": ["host-tools", "utilities"],
  "israpps/PAKerUtility": ["host-tools", "utilities"],
  "chewi/apascan": ["host-tools", "utilities"],
  "M5Devs/OpenROM": ["host-tools", "utilities"],
  "BRAGme/TomClancyModStudio": ["host-tools", "utilities"],
  "PhayMo/rb2dx-disc-builder": ["host-tools", "utilities"],
  "Melodieshusband/gta-sa-ps2-mod-converter": ["host-tools", "utilities"],
  "GDX-X/Universal-PS-X-Serial-ID": ["host-tools", "utilities"],
  "GDX-X/Title-Database-Scrapper": ["host-tools", "preservation"],
  "FrankoU28/ColdWinterPS2_Model_Viewer": ["host-tools", "preservation"],
  "Astolfothetrapgod/DDS1-Randomizer": ["host-tools", "utilities"],
  "hitchhikr/salvadorPS2": ["host-tools", "development"],
  "hitchhikr/nrlpack": ["host-tools", "development"],
  "C0mposer/C-Game-Modding-Utility": ["host-tools", "development"],
  "OGmidway/Mortal-Kombat-Shaolin-Monks-Modding-Tool": ["host-tools", "development"],
  "PS2HomeDeveloper/ps2-tim2-tool": ["host-tools", "development"],
  "ps2homebrew/sioshell": ["host-tools", "development"],
  "gdomingues/ps2-klient": ["host-tools", "networking"],
  "himi9046-hub/smb1-bridge": ["host-tools", "networking"],
  "adlerosn/ps2joysrv": ["host-tools", "hardware"],
  "Tatsh/pppps2pc": ["host-tools", "hardware"],
  "lupyariestaa/ps2-stick-mouse": ["host-tools", "hardware"],
  "ps2dev/ps2client": ["host-tools", "development", "networking"],
  "israpps/ps2client": ["host-tools", "development", "networking"],
  "ps2dev/ps2dev-docker": ["host-tools", "development"],
  "RompEmu/RomP": ["host-tools"],
  "MajestyJackdawShift/ps2-emulator-config-editor": ["host-tools", "emulators"],
  "ir47/ps2-to-ps4": ["host-tools", "utilities"],
  "pcm720/nhddl-psu": ["host-tools", "utilities"],
  "azagramac/ps2-bios-extract-modules": ["host-tools", "preservation"],

  // Cheat Tools
  "PCSX2/pcsx2_patches": ["cheat-tools"],
  "PS2-Widescreen/OPL-Widescreen-Cheats": ["cheat-tools"],
  "NathanNeurotic/OPL-Widescreen-Cheats": ["cheat-tools"],
  "sync-on-luma/PS2-widescreen-cheats": ["cheat-tools"],
  "israpps/CheatDevicePS2": ["cheat-tools"],
  "TheWalkAlone/Army-Men-RTS_PS2_Advanced-Cheat_Pack_Final": ["cheat-tools"],
  "GDX-X/Rockstar-Games-Uncensored-PS2": ["cheat-tools"],
  "Saupernova13/pcsx2-bt3-60fps": ["cheat-tools", "emulators"],
  "PeterDelta/PCSX2": ["cheat-tools", "emulators"],
  "TheRealNextria/PS2RD-CHT-Manager": ["cheat-tools", "host-tools"],
  "mlafeldt/ps2rd": ["cheat-tools", "development"],
  "NiV-L-A/CLPS2C-Compiler": ["cheat-tools", "development"],
  "israpps/FreeMastercodeFinder": ["cheat-tools", "utilities"],
  "Zeroable/GTA-PS2-Modern-Controls": ["cheat-tools", "utilities"],

  // Games & Ports
  "mszula/wacki": ["games", "ports"],
  "anthoo582/mario-kart-64-ps2": ["games", "ports"],
  "OptiJuegos/OptiCraftHeritageEdition": ["games", "ports"],
  "TheBrokenWaLL/Minecraft-PlayStation-2-Edition": ["games", "ports"],
  "xeodeo/OptiCraft-Heritage-XBOX-CLASSIC-Edition": ["games", "ports"],
  "Matisiowy/MikosCraft": ["games"],
  "Wellinator/tyracraft": ["games"],
  "Wellinator/vampire-survivors-like-ps2": ["games"],
  "obiot/Pang-ps2": ["games"],
  "DevECoisas/PS2_Dungeon": ["games"],
  "WR699/PS2-BlockBattle": ["games"],
  "Dr1mS/PS2-Doom": ["games"],
  "7dog123/prboom-plus": ["games", "ports"],
  "ps2homebrew/quake1_ps2": ["games", "ports"],
  "glampert/quake2-ps2": ["games", "ports"],
  "jmgk77/BARULANDIA.PS2": ["games", "ports"],
  "d3vsaurio/DDLC-PS2-Source": ["games", "ports"],
  "Snake-2006/DDLC-PS2": ["games", "ports"],
  "Renan2010p/fnwf": ["games"],
  "AndreicoderHacks/liero-ps2": ["games", "ports"],
  "AndreicoderHacks/minictaft-ps2": ["games", "ports"],
  "DKR-PS2/DKR-PS2": ["games", "ports"],
  "thieffran88/mmzero_ps2_port": ["games", "ports"],
  "freshollie/mk64-ps2": ["games", "ports", "preservation"],
  "dnllnoe/pokeemerald-ps2": ["games", "ports"],
  "orlandodavidnina/sf64-ps2-port": ["games", "ports"],
  "johnson-cooper/2004sp-ps2port": ["ports", "games"],
  "johnson-cooper/vril-engine": ["ports", "games"],
  "DanielLMcGuire/chrome-dino-cpp": ["ports", "games"],
  "vs-sr-dev/pc-extermination": ["ports", "preservation"],
  "open-goal/jak-project": ["ports", "preservation", "development"],
  "VetriTheRetri/ssb-decomp-re": ["ports", "preservation"],
  "johnson-cooper/project-goat": ["ports", "games"],
  "Phenra/RoadTripAdventure-AP": ["utilities", "games"],
  "aap/ICOview": ["utilities"],

  // Emulators
  "PCSX2/pcsx2": ["emulators"],
  "ps2homebrew/pcsx2": ["emulators"],
  "israpps/pcsx2": ["emulators"],
  "HertzPerfumer/PCSX2-Emulator-PS2": ["emulators"],
  "ToolAssisted-run/chimera-core-pcsx2": ["emulators"],
  "allkern/iris": ["emulators"],
  "sashkinbro/EmuCoreX": ["emulators"],
  "ARMSX2/ARMSX2": ["emulators"],
  "SgtBilko76/ARMSX2-3D": ["emulators"],
  "Thesoim/ARMSX2-Gold": ["emulators"],
  "izzy2lost/PSX2": ["emulators"],
  "shoui520/vitasx2": ["emulators"],
  "Rickow/lecteur-ps2": ["emulators"],
  "libretro/ps2": ["emulators", "ports"],
  "ps2homebrew/Fceumm-PS2": ["emulators"],
  "L10N37/Fceumm-PS2-SMB": ["emulators"],
  "ReyFxck/SNESticleRevive": ["emulators"],
  "itsveenee/SNESticleAurora": ["emulators"],
  "NathanNeurotic/SNESticleAurora": ["emulators"],
  "1247847495/gba-anyi": ["emulators"],
  "ps2homebrew/pgen": ["emulators"],
  "frangarcj/superpsx": ["emulators"],
  "NathanNeurotic/superpsx": ["emulators"],
  "Gageformer/Open-Source-Pops": ["emulators"],
  "NathanNeurotic/Open-Source-Pops": ["emulators"],
  "obiot/NeoCD-PS2": ["emulators"],
  "ps2homebrew/neocdps2": ["emulators"],
  "SumavisionQ5/NJEMU-PS2": ["emulators"],
  "Rinnegatamante/melonDS-Vita": ["emulators", "ports"],
  "karasq/PS2InfoGB": ["emulators", "ports"],
  "DevNoib/daedalusnoib-PS2": ["emulators", "ports"],
  "Lekativi/pokegb-ps2-port": ["emulators", "ports"],
  "koraxial/Xbox-2-PlayStation-Emulator-AlFa": ["emulators"],
  "Trixarian/NetherSX2-patch": ["emulators", "utilities"],
  "Arntzen-Software/parallel-gs": ["emulators", "development"],

  // Engines & Runtimes
  "h4570/tyra": ["engines", "development"],
  "doctorspider42/tyraX": ["engines", "development"],
  "DanielSant0s/Enceladus": ["engines", "runtimes", "development"],
  "helworks/helengine-ps2": ["engines", "development"],
  "ps2homebrew/TGE": ["engines", "development"],
  "Rider-UwU-Black/R2Engine": ["engines", "development"],
  "jackwthake/ps2": ["engines", "development"],
  "DanielSant0s/AthenaEnv": ["runtimes", "development"],
  "ButterscotchRunner/Butterscotch": ["runtimes", "engines"],
  "ps2dev/lua": ["runtimes", "development"],
  "ps2homebrew/LuaPlayer": ["runtimes", "development"],
  "NathanNeurotic/PS2ME": ["runtimes", "development"],
  "Wellinator/PS2ME": ["runtimes", "development"],
  "luarpri/ScratchEverywhere-ps2": ["runtimes", "development"],
  "Wolf3s/ScratchEverywhere-ps2": ["runtimes", "development"],
  "wakhidnh/PS2LLM": ["runtimes", "engines"],
  "NathanNeurotic/OPHTML": ["runtimes", "development"],
  "coffeedevsolutions/OPHTML": ["runtimes", "development"],
  "NathanNeurotic/easyrpg-ps2": ["runtimes", "ports", "games"],
  "sobecapaklebs-dev/project-titan-magenta-edition": ["runtimes", "sdks", "development"],
  "NathanNeurotic/project-titan-magenta-edition": ["runtimes", "sdks", "development"],

  // Preservation & Decompilations
  "TheOnlyZac/sly1": ["preservation", "development"],
  "crowded-street/3s-decomp": ["preservation", "development"],
  "ran-j/PS2Recomp": ["preservation", "development"],
  "mateuszklysz/Lombyte": ["preservation", "development"],
  "vetusmagnus/ratchet-uya-decomp": ["preservation", "development"],
  "Megami-Decomps/dds-decomp": ["preservation", "development"],
  "Raikaru/Persona4-Decompilation": ["preservation", "development"],
  "aaaaaaaaaway/chulip-decomp": ["preservation", "development"],
  "Adubbz/DCDecomp": ["preservation", "development"],
  "Gui-Tora/dmc-recomp": ["preservation", "development"],
  "Harskov/fate-unlimited-codes-jp": ["preservation", "development"],
  "nathanialf/ico": ["preservation", "development"],
  "g-guthrie/mvc2-ps2-decomp": ["preservation", "development"],
  "Harskov/stretch-panic-usa": ["preservation", "development"],
  "OpokXeno/xsg-i-decomp": ["preservation", "development"],
  "mirou1611/AstraRecomp": ["preservation", "development"],
  "fenrircl/berserk-ps2-recomp": ["preservation", "development"],
  "Ziemas/IDAPy-PS2": ["preservation", "development"],
  "asmblur/ps2cdvd": ["preservation", "drivers", "development"],
  "Tatsh/resonance": ["preservation", "development"],
  "christianmateus/RE4_PS2_MOD_WORKSPACE": ["preservation", "development"],
  "hkmodd/ps2-recomp-Agent-SKILL": ["preservation", "development"],
  "basilrum/eva2_ps2_eng_translation": ["preservation"],
  "Jungsik-won/Poison-Pink-Korean-Translation": ["preservation"],
  "GDX-X/PS2-OPL-CFG-Compatibility-Database": ["preservation", "utilities"],
  "ps2wiki/sas-apps-archive": ["preservation"],
  "NathanNeurotic/sas-apps-archive": ["preservation"],
  "ps2wiki/ps2wiki.github.io": ["preservation", "development"],
  "terremoth/awesome-ps2": ["preservation"],
  "NathanNeurotic/awesome-ps2": ["preservation"],
  "ninjadynamics/PS2Docs": ["preservation", "development"],
  "NathanNeurotic/POPSTARTERINFO": ["preservation"],
  "NathanNeurotic/R4D-DOCS": ["preservation"],
  "NathanNeurotic/PS2Links": ["preservation"],
  "HowlingWolfHWC/ps2vault": ["preservation"],
  "johnson-cooper/PS2SP": ["preservation", "utilities"],
  "NathanNeurotic/PS2SP": ["preservation", "utilities"],
  "rflpazini/retroheat": ["preservation", "utilities"],
  "shmupX/shmupX.github.io": ["preservation"],

  // Hardware
  "ps2homebrew/PS2Ident": ["hardware", "utilities"],
  "ps2-mmce/mmceman": ["hardware", "drivers"],
  "NathanNeurotic/mmceman": ["hardware", "drivers"],
  "sd2psXtd/sd2psXtd.github.io": ["hardware"],
  "NathanNeurotic/sd2psXtd.github.io": ["hardware"],
  "bbsan2k/sd2psx_firmware": ["hardware"],
  "LinkRetro/SD2PSXTD-Hardware": ["hardware"],
  "pcm720/fc1307-tools": ["hardware", "utilities"],
  "NathanNeurotic/fc1307-tools": ["hardware", "utilities"],
  "saildot4k/R3CONFIGURATOR": ["hardware", "utilities"],
  "NathanNeurotic/R3CONFIGURATOR": ["hardware", "utilities"],
  "NathanNeurotic/PMAP": ["hardware", "utilities"],
  "ps2homebrew/PMAP": ["hardware", "utilities"],
  "spc970-dumper-union/spc970-dumper": ["hardware", "utilities"],
  "Libbers/SPC970-MechaLIBerator": ["hardware", "utilities"],
  "slimpuggamer/ROMVersionChecker": ["hardware", "utilities"],
  "NathanNeurotic/BlueRetro": ["hardware"],
  "PS2Homebrew-arcade/Dongle-Rebinder": ["hardware", "boot-tools"],
  "PS2Homebrew-arcade/acata-alternative": ["hardware", "drivers"],
  "israpps/acflash-dumper": ["hardware", "utilities"],
  "FatBaldDad/PS2-BlueZZZ": ["hardware"],
  "FatBaldDad/PS2-Chip-Slayer": ["hardware"],
  "FatBaldDad/PS2-EtherDrive": ["hardware", "networking"],
  "NathanNeurotic/ps2suitcase-mod": ["hardware"],
  "m4x10187/ps2-modchip-files": ["hardware"],
  "NathanNeurotic/ps2modchiptutorials": ["hardware"],
  "Dracnea/PS2-Xilinx-UltrascalePlus": ["hardware", "development"],
  "L10N37/PS2-HDD-Manager": ["hardware", "utilities"],
  "PunishedSnake/ps2-magicgate-inspector": ["hardware", "utilities"],

  // Networking
  "retronas/retronas": ["networking", "host-tools"],
  "NathanNeurotic/retronas": ["networking", "host-tools"],
  "toolboc/psx-pi-smbshare": ["networking", "host-tools"],
  "elmariolo/OPL-Server": ["networking", "host-tools"],
  "GorGylka/Server2PS2": ["networking", "host-tools"],
  "pcm720/udpfsd": ["networking"],
  "NathanNeurotic/udpfsd": ["networking"],
  "israpps/udpbd-server": ["networking", "host-tools"],
  "NathanNeurotic/udpbd-server": ["networking", "host-tools"],
  "4gordi/udpbd-server": ["networking", "host-tools"],
  "awaken1ng/udpbd-vexfat": ["networking"],
  "YouKnow-sys/udpfs-server": ["networking", "host-tools"],
  "ps2dev/ps2link": ["networking", "development"],
  "ps2homebrew/ps2ftpd": ["networking"],
  "ps2homebrew/ps2ftp": ["networking"],
  "ps2homebrew/tenftp": ["networking"],
  "ps2homebrew/tenftp_test": ["networking"],
  "ShyavanS/NTPS2": ["networking", "utilities"],
  "NathanNeurotic/PS2-Servers": ["networking", "host-tools"],
  "jeddyhhh/TW04OnlineServer": ["networking", "preservation"],
  "dev4546b/ps2-lan-tunnel": ["networking", "host-tools"],
  "PSRewired/Memdusa": ["networking", "boot-tools"],
  "NathanNeurotic/Memdusa": ["networking", "boot-tools"],
  "oMrRexD/xerabora-android": ["networking", "utilities"],
  "NathanNeurotic/xerabora": ["networking", "utilities"],
  "hacan359/xerabora": ["networking", "utilities"],
  "SlyCooperReloadCoded/esgc_ps2_hostfs_db": ["networking", "preservation"],

  // Drivers
  "DKWDRV/DKWDRV": ["drivers"],
  "wisi-w/DKWDRV": ["drivers"],
  "NathanNeurotic/DKWDRV": ["drivers"],
  "NathanNeurotic/DKWDRV-OLD": ["drivers"],
  "ps2dev/ps2eth": ["drivers", "networking"],
  "fjtrujy/ps2_drivers": ["drivers", "libraries"],
  "israpps/BDMAssault": ["drivers", "utilities"],
  "NathanNeurotic/BDMAssault": ["drivers", "utilities"],
  "saildot4k/ATA-Assault": ["drivers", "utilities"],
  "ps2homebrew/usbhdfsd": ["drivers"],
  "ps2homebrew/usb_mass": ["drivers"],
  "ps2homebrew/ps2vfs": ["drivers", "libraries"],
  "ps2homebrew/tentsr": ["drivers", "development"],
  "bmdhacks/armsx2-libmali": ["drivers", "emulators"],

  // SDKs & Toolchains
  "ps2dev/ps2sdk": ["sdks", "development"],
  "NathanNeurotic/ps2sdk": ["sdks", "development"],
  "ps2dev/ps2sdk-ports": ["sdks", "libraries", "development"],
  "ps2dev/ps2toolchain": ["sdks", "development"],
  "rickgaiser/ps2toolchain": ["sdks", "development"],
  "NathanNeurotic/ps2toolchain": ["sdks", "development"],
  "ps2dev/ps2toolchain-ee": ["sdks", "development"],
  "ps2dev/ps2toolchain-iop": ["sdks", "development"],
  "rickgaiser/ps2toolchain-iop": ["sdks", "development"],
  "ps2dev/ps2toolchain-dvp": ["sdks", "development"],
  "ps2dev/binutils-gdb": ["sdks", "development"],
  "ps2dev/gcc": ["sdks", "development"],
  "ps2dev/ps2dev": ["sdks", "development"],
  "aap/ee-gcc": ["sdks", "development"],
  "aap/iop-gcc": ["sdks", "development"],
  "aap/freesce": ["sdks", "development"],
  "blazium-games/blazium-toolchain": ["sdks", "development"],
  "MR-Rafael2005/ps2-DevKit": ["sdks", "development"],
  "Doreyresponsible758/ps2dev-installer-bundle": ["sdks", "installers", "development"],
  "NathanNeurotic/ps2dev-installer-bundle": ["sdks", "installers", "development"],
  "playstation2-development/ps2dev-world": ["sdks", "development"],

  // Libraries
  "sahlberg/libsmb2": ["libraries", "networking"],
  "ps2dev/ps2gl": ["libraries", "development"],
  "Wolf3s/ps2glx": ["libraries", "development"],
  "ps2dev/gsKit": ["libraries", "development"],
  "ps2dev/newlib": ["libraries", "development"],
  "ps2dev/pthread-embedded": ["libraries", "development"],
  "ps2dev/libtap": ["libraries", "development"],
  "ps2dev/lwip": ["libraries", "networking"],
  "ps2dev/libconfuse": ["libraries", "development"],
  "ps2dev/openvcl": ["libraries", "development"],
  "ps2dev/fluidsynth": ["libraries", "media"],
  "ps2homebrew/isjpcm": ["libraries", "media"],
  "ps2homebrew/dreamgl": ["libraries", "development"],
  "ps2homebrew/OSD-Initialization-Libraries": ["libraries", "dashboards"],
  "ps2homebrew/libito": ["libraries", "development"],
  "ps2homebrew/libjpg": ["libraries", "media"],
  "ps2homebrew/libmp3": ["libraries", "media"],
  "ps2homebrew/libtiff": ["libraries", "media"],
  "ps2homebrew/gslib": ["libraries", "development"],
  "aap/xtc": ["libraries", "development"],
  "aap/libgpu2": ["libraries", "development"],
  "aap/mdma": ["libraries", "development"],
  "ReyFxck/RFAuds2": ["libraries", "media"],
  "IlRand0m/ps2intrin": ["libraries", "development"],
  "7dog123/ps2-SDL": ["libraries", "development"],
  "NathanNeurotic/ps2-SDL": ["libraries", "development"],
  "raylib4Consoles/raylib4PlayStation2": ["libraries", "development"],

  // Installers
  "ps2homebrew/HDLGameInstaller": ["installers", "loaders"],
  "israpps/HDLGameInstaller": ["installers", "loaders"],
  "NathanNeurotic/HDLGameInstaller": ["installers", "loaders"],
  "binkynz/ps2-usbhdl": ["installers", "loaders"],
  "DanielFergisz/RepairBox-PSX-XMB-Apps-Installer": ["installers", "dashboards"],

  // Demos
  "rrtry/CrystalClock": ["demos"],
  "NathanNeurotic/CrystalClock": ["demos"],
  "helworks/helengine-demo-disc": ["demos"],
  "kauhat/bevy-playstation2": ["demos"],
  "glampert/ps2-homebrew": ["demos", "development"],
  "ps2homebrew/BPDemoHarness": ["demos", "development"],

  // Development
  "ps2dev/ps2gdb": ["development"],
  "ps2dev/ps2stuff": ["development", "libraries"],
  "ps2dev/masp": ["development"],
  "ps2dev/ps2dev.github.io": ["development", "preservation"],
  "ps2homebrew/ps2homebrew": ["development"],
  "ps2homebrew/ps2dev_forwarder": ["development"],
  "ps2homebrew/ps2debug": ["development"],
  "ps2homebrew/ps2Perf": ["development", "utilities"],
  "ps2homebrew/ps2-packer": ["development", "utilities"],
  "NathanNeurotic/ps2-packer": ["development", "utilities"],
  "rickgaiser/ps2-packer": ["development", "utilities"],
  "ps2homebrew/ps2-unpacker": ["development", "utilities"],
  "DanielAbrante/codeeasy-ps2": ["development"],
  "sammwyy/ps2-homebrew-sample": ["development"],
  "islandcontroller/ps2ded-vscode": ["development"],
  "Ravenslofty/ps2-clang-patches": ["development", "sdks"],
  "parrado/SoftDev2": ["development"],
  "techwritescode/ps2webtoolkit": ["development", "host-tools"],
  "techwritescode/code-pbat": ["development"],
  "uyjulian/helloWorldPS2": ["development"],

  // Utilities
  "ps2homebrew/HDDChecker": ["utilities"],
  "israpps/HDDChecker-1": ["utilities"],
  "ps2homebrew/PS2HDDTester": ["utilities"],
  "ps2homebrew/PS1VModeNeg": ["utilities"],
  "israpps/ROMIMG": ["utilities", "development"],
  "israpps/romman": ["utilities", "development"],
  "ps2homebrew/pksh": ["utilities"],
  "ps2homebrew/ps2img": ["utilities"],
  "ps2homebrew/altimit": ["utilities"],
  "ps2homebrew/ps2homebrew.github.io": ["preservation", "development"],
  "ps2homebrew/wxVU": ["development", "emulators"],
  "jimmyBizMobile/ps2-240ptestsuite-native": ["utilities", "ports"]
};

export function shouldHideProject({ slug = "", name = "", summary = "", repository = "" }) {
  const repo = String(repository || "").trim();
  const s = String(slug || "").toLowerCase();
  // IBM PC PS/2 keyboard/mouse hardware keylogger
  if (repo === "therealdreg/okhi" || s === "okhi" || s.startsWith("okhi-")) return true;
  // Org profile / meta repos
  if (repo === "ps2homebrew/.github" || repo === "ps2dev/.github" || s === "github" || s === "github-ps2homebrew") return true;
  // Nintendo Switch theme (not PS2 software)
  if (repo === "Chardelyce/PS2-Switch-theme" || s === "ps2-switch-theme") return true;
  return false;
}

export function inferCategories({ slug = "", name = "", summary = "", tags = [], repository = "", forkOf = null }) {
  const repo = String(repository || "").trim();
  const rawParent = forkOf ? String(forkOf).trim() : null;
  const parent = rawParent && rawParent !== "null" ? rawParent : null;
  const s = String(slug || "").toLowerCase();
  const n = String(name || "").toLowerCase();
  const desc = String(summary || "").toLowerCase();
  const tagList = Array.isArray(tags) ? tags.map(t => String(t).toLowerCase()) : [];
  const text = `${s} ${n} ${desc} ${tagList.join(" ")} ${repo}`.toLowerCase();

  // 1. Direct parent repo match
  if (repo && KNOWN_UPSTREAM_CATEGORIES[repo]) return [...KNOWN_UPSTREAM_CATEGORIES[repo]];
  if (parent && KNOWN_UPSTREAM_CATEGORIES[parent]) return [...KNOWN_UPSTREAM_CATEGORIES[parent]];

  // 2. Slug-based prefixes for major ecosystems
  if (/^ps2-covers/.test(s)) {
    return ["themes"];
  }

  if (/^simple-media-system|^ps2-sms|^sms/.test(s)) {
    return ["media"];
  }

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
    if (/manager|browser|web|tool|editor|splitter/.test(s)) return ["save-tools", "host-tools"];
    return ["save-tools"];
  }

  if (/^pfsshell/.test(s)) {
    return ["host-tools", "file-managers"];
  }

  if (/^wrench|^industrialpark/.test(s)) {
    return ["host-tools", "development"];
  }

  if (/^retronas/.test(s)) {
    return ["networking", "host-tools"];
  }

  if (/^ps2toolchain|^binutils|^gcc-|^ee-gcc|^iop-gcc|^dvp-gcc/.test(s)) {
    return ["sdks", "development"];
  }

  if (/^ps2-packer|^ps2packer/.test(s)) {
    return ["development", "utilities"];
  }

  if (/^freemcboot|^freehdboot|^freedvdboot|^funtuna|^opentuna|^mechapwn|^yade|^tonyhax/.test(s)) {
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

  // Media
  if (/\b(?:media player|audio player|music player|video player|sound player|multimedia|mp3|sound library|tracker|movie player|sms player|audioplayer|singstar)\b/.test(text)) {
    matched.add("media");
  }

  // Save tools
  if (/\b(?:save[- ]?tool|save[- ]?editor|save[- ]?manager|save[- ]?converter|savegame|psv save|apollo|mymc|mcman|memory card|memcard|ps2save|ps2mc|psu save|\bvmc\b)\b/.test(text)) {
    matched.add("save-tools");
  }

  // Cheat tools
  if (/\b(?:cheat|cheats|codebreaker|gameshark|action replay|artemis|cheat device|pnach|cheat engine|widescreen codes|widescreen cheats|mastercode|60fps patch|widescreen patch)\b/.test(text)) {
    matched.add("cheat-tools");
  }

  // Host tools
  if (/\b(?:host tool|pc tool|desktop application|windows tool|linux tool|macos tool|cli tool|gui for|converter|iso tool|iso creator|usbutil|hdl-dump|hdl-batch|oplmanager|pfs-batchkit|batch installer|chdman|discforge|discpress|batch converter)\b/.test(text) ||
      /\b(?:tool for (?:pc|windows|linux|mac)|running on (?:pc|windows|linux|mac)|cross-platform tool|desktop manager)\b/.test(text)) {
    matched.add("host-tools");
  }

  // Boot tools & exploits
  if (/\b(?:freemcboot|freehdboot|fmcb|fhdb|fortuna|opentuna|funky|freedvdboot|mechapwn|exploit|entrypoint|vulnerability|bootloader|softmod|kexploit|yade|ps2bbl|bootldr|tonyhax)\b/.test(text)) {
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

  // Emulators
  if (/\b(?:pcsx2|aethersx2|nethersx2|vitasx2|rompemu|play!|purei\/play|dobiestation|redump-ps2|fpc-ps2|retroarch|libretro)\b/.test(text) ||
      /\b(?:emulator|emulation|emulating|emulated|snes9x|picodrive|fceumm|mednafen|gnuboy|fba|mame|dosbox|scummvm|uae4all|daedalusx64|mgba|neocd|snesticle)\b/.test(text)) {
    if (!text.includes("device emulator")) {
      matched.add("emulators");
    }
  }

  // Preservation & Decompilations
  if (/\b(?:decomp|decompilation|recomp|recompilation|reverse[- ]engineer(?:ing)?|disassembly|disassembled|ghidra|ida pro|symbol map|game reverse engineering|korean translation|english translation|translation)\b/.test(text)) {
    matched.add("preservation");
    matched.add("development");
  }

  // Games
  if (/\b(?:homebrew game|fangame|platformer|shmup|roguelike|rpg|fps|puzzle game|arcade game|racing game|clone of|visual novel)\b/.test(text) ||
      /\b(?:flappy|tetris|pong|snake|pacman|space invaders|sokoban|doom|quake|wolfenstein|wolf3d|duke nukem|mario kart|minecraft|runescape|chulip|barulandia|doki doki|five nights|wacki|liero|minicraft|pang|mikoscraft|tyracraft)\b/.test(text) ||
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

  // Networking
  if (/\b(?:networking|network|ethernet|smb|cifs|samba|udpfs|udpbd|tcp\/ip|lwip|dns|dnas|hostfs|ps2link|ps2net|ps2eth|netman|packet|retronas|ftp)\b/.test(text)) {
    matched.add("networking");
  }

  // Hardware
  if (/\b(?:modchip|modbo|matrix infinity|crystal chip|picoboot|openps2mod|sd2ps2|sd2psx|mx4sio|arduino|raspberry pi|esp32|pico|schematic|pcb|soldering|pinout|blueretro|mechacon|spc970|fc1307|mmce)\b/.test(text)) {
    matched.add("hardware");
  }

  // SDKs
  if (/\b(?:ps2sdk|ps2toolchain|mips-gcc|ee-gcc|iop-gcc|dvp-gcc|mips toolchain|compiler toolchain|devkit)\b/.test(text)) {
    matched.add("sdks");
    matched.add("development");
  }

  // Libraries
  if (/\b(?:library|libraries|gskit|ps2gl|ps2stuff|tamtypes|libcdvd|libpad|libmc|libjpg|libpng|zlib|freetype|raylib)\b/.test(text) ||
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
  if (/\b(?:driver|drivers|irx|kernel module|bdm|block device module|usbd|usbhdfsd|iLink|firewire|cdvdman|atad|dev9|ps1drv|smap)\b/.test(text)) {
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

  // Clean up contradictory overlaps if games or ports were detected
  if (matched.has("games") && matched.size > 2) {
    matched.delete("emulators");
    matched.delete("hardware");
    matched.delete("sdks");
  }

  // Utilities fallback
  if (matched.size === 0 || /\b(?:utility|utilities|helper|dumper|scanner|validator|tester|benchmark|diagnostic|patcher|viewer|editor)\b/.test(text)) {
    if (matched.size === 0) matched.add("utilities");
  }

  return [...matched];
}
