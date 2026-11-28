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
  stars: 2
  forks: 1
  lastCommit: '2026-11-27T21:24:30Z'
latestRelease:
  tag: gv-top-2.0.9.33
  name: XBSX2 for Game Vault 2.0.9.33 (self-update)
  publishedAt: '2026-11-25T05:46:42Z'
  url: 'https://github.com/skitzellez/XBSX2-GameVault/releases/tag/gv-top-2.0.9.33'
activity:
  lastSynchronized: '2026-11-28T19:00:19.273Z'
automation:
  sync: true
  github:
    repoEtag: W/"c15c4c9ac40bd4a49ce9ded027aa3e63d35e93c35ba577b3b01fa6f1b909f33c"
    releasesEtag: W/"4efd811800684815a079819e8d9c7233b3aa583200a1cf3ae7bd52d0fc95693c"
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
