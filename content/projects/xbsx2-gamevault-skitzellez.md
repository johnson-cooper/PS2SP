---
name: XBSX2-GameVault
slug: xbsx2-gamevault-skitzellez
summary: >-
  XBSX2 (PlayStation 2) built for Game Vault: plays from any USB drive and keeps
  saves on it. Xbox Dev Mode.
categories:
  - emulators
tags:
  - auto-discovered
  - fork
features: []
authors: []
license: GPL-3.0
homepage: 'https://wiki.sternserv.xyz/docs/emulation/xbsx2-guide'
source:
  provider: github
  repository: skitzellez/XBSX2-GameVault
  repositoryId: '1419907859'
repository:
  archived: false
  defaultBranch: gamevault
  stars: 0
  forks: 1
  lastCommit: '2026-10-22T22:45:36Z'
latestRelease:
  tag: gv-2.0.9.17
  name: XBSX2 for Game Vault 2.0.9.17
  publishedAt: '2026-10-22T22:46:16Z'
  url: 'https://github.com/skitzellez/XBSX2-GameVault/releases/tag/gv-2.0.9.17'
activity:
  lastSynchronized: '2026-10-24T18:11:26.698Z'
automation:
  sync: true
  github:
    repoEtag: W/"149c6e035043c81e7587e7189f320e31d7637869d9416a1480bda287d0e33e10"
    releasesEtag: W/"96274fc5fb6454754b8f05020db5d4e632f57b61f53cf38c4f0cc4d32777a4fb"
discovery:
  method: 'incremental:"PlayStation 2" in:name,description,readme'
  confidence: 100
  evidence:
    - repository description explicitly identifies PS2
    - README explicitly mentions PlayStation 2
    - published GitHub release present
    - GitHub fork of another repository
    - 'fork lineage traces to indexed PS2 project: PCSX2/pcsx2'
  maturity: prerelease-only
verified: false
featured: false
hidden: false
relationships:
  forkOf: XboxEmulationHub/XBSX2
  source: PCSX2/pcsx2
---
Automatically discovered by PS2SP. Relevance evidence is recorded in frontmatter; human curation can expand this entry without disabling automated repository metadata synchronization.
