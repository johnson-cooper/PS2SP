---
name: SNESticleAurora
slug: snesticleaurora-stayhye
summary: >-
  SNES emulator for PS2, with additional NES support via QuickNES, Sega Mega
  Drive/Genesis, Master System, Game Gear support via PicoDrive, Game Boy Color
  support via Gambatte, Game Boy Advance support via gpSP, and NEC PC Engine
  support via BeetlePCE. Based on SNESticle Revive by @ReyFxck. Contact me on
  Discord! @itsveenee
categories:
  - emulators
tags:
  - snes
  - nes
  - emulator
  - ps2sdk
  - fork
  - auto-discovered
features:
  - usb
authors: []
license: null
homepage: null
source:
  provider: github
  repository: Stayhye/SNESticleAurora
  repositoryId: '1372989630'
repository:
  archived: false
  defaultBranch: main
  stars: 0
  forks: 0
  lastCommit: '2026-10-07T04:38:39Z'
latestRelease:
  tag: continuous
  name: Continuous Build
  publishedAt: '2026-10-07T04:38:39Z'
  url: 'https://github.com/Stayhye/SNESticleAurora/releases/tag/continuous'
activity:
  lastSynchronized: '2026-10-26T13:09:48.075Z'
automation:
  sync: true
  github:
    repoEtag: W/"70d43b6673e167d1df4a52643f36eaa25e0171672e6fa4483ca561c9a60fc9cf"
    releasesEtag: W/"5a599765dcb91aac4d1d8a7f95726b6bc1e177c636e90c5f3073a1c853643d84"
discovery:
  method: 'fork-network:itsveenee/SNESticleAurora'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - release contains a PS2-style ELF asset
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: ReyFxck/SNESticleRevive'
  maturity: prerelease-only
verified: false
featured: false
relationships:
  forkOf: itsveenee/SNESticleAurora
  source: ReyFxck/SNESticleRevive
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
