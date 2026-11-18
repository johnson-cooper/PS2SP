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
  lastCommit: '2026-11-17T01:13:35Z'
latestRelease:
  tag: continuous
  name: Continuous Build
  publishedAt: '2026-11-17T01:13:36Z'
  url: 'https://github.com/Stayhye/SNESticleAurora/releases/tag/continuous'
activity:
  lastSynchronized: '2026-11-18T14:01:42.044Z'
automation:
  sync: true
  github:
    repoEtag: W/"ca09fa0856f06fa852525b5b9d091be8ad178be72f1a6e0a2224fc1d7d23d29b"
    releasesEtag: W/"5d9cb2a8c8dff3e22919492bb0a3f1c6c1282f289736d74f97838d4915c0b71b"
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
