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
  forks: 0
  lastCommit: '2026-10-17T22:35:17Z'
latestRelease:
  tag: gv-2.0.9.8
  name: XBSX2 for Game Vault 2.0.9.8
  publishedAt: '2026-10-17T22:35:23Z'
  url: 'https://github.com/skitzellez/XBSX2-GameVault/releases/tag/gv-2.0.9.8'
activity:
  lastSynchronized: '2026-10-18T18:07:06.084Z'
automation:
  sync: true
  github:
    repoEtag: W/"c3582e3140a7321cbc32f0541f9ea1b5043db7f9fb09b7df79b70ebe9327d6b9"
    releasesEtag: W/"94a39b806f2f6773cb35db2962d9ecd722852b3e70c0d5c61f0b1f44576c0bc1"
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
